import Image from "next/image";

const SocialLinks = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <div className="flex items-center  mt-5">

        {/* Email Section */}
        <div className="flex items-center">
          <Image
            src="/mail.svg"
            alt="Email"
            width={24.82}
            height={22.75}
            className="object-contain"
          />
          <div className="ml-3">
            <p className="font-semibold">EMAIL</p>
            <h1 className="text-emerald-400">info@marcc.com.au</h1>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6 ml-[80px]">
          <Image src="/fb.svg" alt="Facebook" width={26} height={26} />
          <Image src="/twitter.svg" alt="Twitter" width={23} height={19} />
          <Image src="/insta.svg" alt="Instagram" width={20} height={20} />
          <Image src="/youtube.svg" alt="YouTube" width={24} height={17} />
        </div>

      </div>
    </div>
  );
};

export default SocialLinks;
