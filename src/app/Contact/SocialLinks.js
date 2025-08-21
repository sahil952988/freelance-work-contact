import Image from "next/image"

const SocialLinks = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <div className="social_icons flex mt-5">

          <div className="email flex ">
            <div className="image">
              <Image
                src="/mail.svg"
                alt="color"
                width={24.82}
                height={22.75}
                className="object-cover mt-2 "
              />
            </div>
            <div className="info ml-[15px] ">
              <p className="font-semibold">EMAIL</p>
              <h1 className="text-emerald-400">info@marcc.com.au</h1>
            </div>
          </div>

          <div className="social_links flex space-[16px]  pl-[100px]">
            <div className="facebook w-[40px] h-[40px] ">
              <Image
                src="/fb.svg"
                alt="color"
                width={24}
                height={24}
                className="items-center object-contain "
              />
            </div>
            <div className="twitter w-[40px] h-[40px]">
              <Image
                src="/twitter.svg"
                alt="color"
                width={23}
                height={19}
                className="items-center object-contain "
              />
            </div>
            <div className="insta w-[40px] h-[40px]">
              <Image
                src="/insta.svg"
                alt="color"
                width={19.9}
                height={20}
                className="items-center object-contain "
              />
            </div>

            <div className="youtube w-[40px] h-[40px]">
              <Image
                src="/youtube.svg"
                alt="color"
                width={24}
                height={16.8}
                className="items-center object-contain "
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default SocialLinks