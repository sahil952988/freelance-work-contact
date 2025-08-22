import SocialLinks from "./SocialLinks"

const Form = () => {
  return (
    <>

      <div className="relative max-w-[1536px] mx-auto">

        <div className="lg:mx-[119px] sm:mx-[50px] mx-[10px]">

          <div className="map hidden lg:block absolute 2xl:right-[330px] lg:right-[200px]  mt-[78px]">
            <iframe
              className="xl:w-[397px] lg:w-[297px] ] h-[510px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28250.63159397516!2d85.34315915164419!3d27.737998208780265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be5bea00987%3A0x70cf02a942554e97!2sKapan%2C%2044600!5e0!3m2!1sen!2snp!4v1755792334150!5m2!1sen!2snp"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="parent bg-white rounded-[40px] w-full h-[738px] lg:flex lg:justify-between  ">

            <div className="left_side lg:pl-[111px] lg:px-0 px-[50px]">
              <h1 className="text-[45px] font-bold pt-[78px]">Lets Talk</h1>
              <p className="lg:w-[397px]  pt-[15px]">
                Have some big idea or brand to develop and need help? Then reach out. We'd love to hear about your project and provide help.
              </p>

              <form className="mt-8 space-y-4 flex flex-col">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full lg:w-[300px] xl:w-[330px] 2xl:w-[563px]   rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-0 h-[49px]"
                  aria-label="Name"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="2xl:w-[563px] xl:w-[330px] lg:w-[300px] w-full rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-0 h-[49px]"
                  aria-label="Email"
                />
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="2xl:w-[563px] xl:w-[330px] lg:w-[300px] w-full resize-none rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-800 outline-0 h-[126px]"
                  aria-label="Message"
                />
                <button
                  type="submit"
                  className="2xl:w-[563px] xl:w-[330px] lg:w-[300px] w-full rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition outline-0 h-[49px]"
                >
                  Send Message
                </button>
              </form>

              <SocialLinks />
            </div>

            <div className="right_side hidden lg:block">
              <div className="box w-[341px] h-[738px] bg-emerald-500 rounded-tr-[40px] rounded-br-[40px]" />
            </div>
          </div>
        </div>

        <div className="map lg:hidden lg:mx-[119px] sm:mx-[50px] mx-[10px]   mt-[78px]">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28250.63159397516!2d85.34315915164419!3d27.737998208780265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be5bea00987%3A0x70cf02a942554e97!2sKapan%2C%2044600!5e0!3m2!1sen!2snp!4v1755792334150!5m2!1sen!2snp"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </>
  )
}

export default Form
