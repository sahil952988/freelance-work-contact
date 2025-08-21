"use client";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="max-w-[1536px] mx-auto">
        <div className="flex items-center justify-between mx-[10px] sm:mx-[50px] lg:mx-[150px] xl:mx-[250px] px-4 md:px-0 py-4">
          {/* Logo */}
          <div className="w-[123px] h-[36px]">
            <Image
              src="/greenweblogo-green.svg"
              alt="color"
              width={123}
              height={36}
              className="object-cover"
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <h1>Home</h1>
            <h1>Features</h1>
            <h1>Blog</h1>
            <h1 className="font-bold">Contact Us</h1>
          </nav>

          {/* Login Button (always visible on md+, optional on mobile) */}
          <div className="hidden md:block">
            <button className="border border-[#1B9876] rounded-[80px] px-[35px] py-[6px] font-semibold">
              Login
            </button>
          </div>

          {/* Hamburger (below md) */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 border rounded"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {/* Simple hamburger / close icon */}
            <span className="text-xl leading-none">{open ? "✖" : "☰"}</span>
          </button>
        </div>

        {/* Mobile Nav (below md) */}
        {open && (
          <nav className="md:hidden px-4 pb-4 md:mx-[50px] lg:mx-[150px] xl:mx-[250px] bg-emerald-500 ">
            <div className="flex flex-col space-y-3">
              <h1>Home</h1>
              <h1>Features</h1>
              <h1>Blog</h1>
              <h1 className="font-bold">Contact Us</h1>
              <button className="self-start border border-[#1B9876] rounded-[80px] px-6 py-1.5 font-semibold">
                Login
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;