import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-[1536px] mx-auto">
      <footer className=" text-gray-700 py-10 px-6 mt-10">

        {/* Top Section */}
        <div className="px-[230px] grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Logo and Description */}
          <div>
            <Image
              src="/greenweblogo-green.svg"
              alt="color"
              width={123}
              height={36}
              className="object-cover"
            />
            <p className="w-[402px] pt-[18px]">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>

          {/* Solutions + Company + Community */}
          <div className="grid grid-cols-3 gap-10">
            {/* Solutions */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600">Web Tool</a></li>
                <li><a href="#" className="hover:text-green-600">Consulting</a></li>
                <li><a href="#" className="hover:text-green-600">Research</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600">About</a></li>
                <li><a href="#" className="hover:text-green-600">Methodology</a></li>
                <li><a href="#" className="hover:text-green-600">Partners</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-600">Blog</a></li>
                <li><a href="#" className="hover:text-green-600">Events</a></li>
                <li><a href="#" className="hover:text-green-600">Open-Source Data</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className=" border-gray-300 border-[1.5px] mx-[230px] my-[50px]" />

        {/* Bottom Section */}
        <div className=" px-[230px] flex justify-between text-[#595959] ">
          <p>Copyright © 2025 everythinggreen. All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-green-600"><FaTwitter /></a>
            <a href="#" className="hover:text-green-600"><FaInstagram /></a>
            <a href="#" className="hover:text-green-600"><FaYoutube /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
