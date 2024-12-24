import { FaYoutube } from "react-icons/fa";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Nerdz Minds_Logo_Scanntek_Color 1.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className="grid grid-cols-1 lg:grid-cols-5 font-sora ">
        <div className="col-span-3 bg-[#0276CB] flex justify-between items-center px-5 lg:px-20 py-4 lg:py-8 text-white">
          <h1>Stay Connected</h1>
          <div className="flex items-center text-3xl gap-x-10">
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=61567126711787"
            >
              <IoLogoFacebook
                className="hover:text-gray-300 cursor-pointer
              hover:-translate-y-1 transition-all duration-300"
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/scanntek_nerdz_minds/profilecard/?igsh=MWEzOXR4Njl3cDR6Zw=="
            >
              <RiInstagramFill
                className="hover:text-gray-300 cursor-pointer
              hover:-translate-y-1 transition-all duration-300"
              />
            </Link>
            <Link
              target="_blank"
              to="https://www.youtube.com/@scannteknerdzminds-c9x"
            >
              <FaYoutube
                className="hover:text-gray-300 cursor-pointer
              hover:-translate-y-1 transition-all duration-300"
              />
            </Link>
          </div>
        </div>
        <div
          className="col-span-2  bg-[#1BC9FE] flex justify-center items-center gap-3
          px-2 lg:px-20 py-4 lg:py-8"
        >
          <div className="text-white p-2 border border-white rounded-full">
            <HiChatBubbleLeftRight size={25} className=" " />
          </div>
          <div>
            <Link
              to={"/contact"}
              className="font-semibold text-white font-sora text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div
        className="grid lg:grid-cols-2 gap-y-10 lg:gap-y-0 gap-x-14 
      2xl:gap-x-20 py-8 md:py-14 px-5 md:px-10 xl:px-12 2xl:px-16"
      >
        <div className=" md:order-2 lg:order-1 gap-y-6 md:gap-y-0 grid md:grid-cols-2">
          <div className="">
            <img
              src={logo}
              alt="Nerdz Minds_Logo_Scanntek_Color 1"
              width={250}
              height={160}
              className=" w-1/3 md:w-[85%] 2xl:w-[250px]"
            />
          </div>
          <div className="flex text-sm text-[#4F4F4F] flex-col gap-y-1 md:gap-y-3">
            <p className="leading-7">
              KINFRA Techno Industrial Park, Kakkanchery, Malappuram - 673535
            </p>
            <div className=" h-[144px] w-full  relative  mt-5">
              <iframe
                className="left-0 top-0 border-0 h-full  w-full  absolute"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.472666676391!2d75.88980567402231!3d11.152596852144622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6502f41ef4e8b%3A0xf4c653a7548cccd!2sKinfra%20Techno%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1726890564288!5m2!1sen!2sin"
                title="Google Map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className=" md:order-1 lg:order-2 grid gap-y-10 md:grid-cols-3">
          <div className="hidden md:block"></div>
          <div className="flex flex-col">
            <h5>Quick Links</h5>
            <ul className="flex flex-col gap-y-4 text-sm text-[#4F4F4F] mt-7">
              <li className="hover:text-[#0276cb] hover:translate-x-1 transition-all duration-300">
                <Link
                  to="/
                "
                >
                  Home
                </Link>
              </li>
              <li className="hover:text-[#0276cb] hover:translate-x-1 transition-all duration-300">
                <Link
                  to="/aboutus
                "
                >
                  About
                </Link>
              </li>
              <li className="hover:text-[#0276cb] hover:translate-x-1 transition-all duration-300">
                <Link
                  to="/course
                "
                >
                  Courses
                </Link>
              </li>

              <li className="hover:text-[#0276cb] hover:translate-x-1 transition-all duration-300">
                <Link
                  to="/contact
                "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col">
            <h5>Cources</h5>
            <ul className="flex flex-col gap-y-4 text-sm text-[#4F4F4F] mt-7">
              <li>MERN Full Stack</li>
              <li>Flutter</li>
              <li>.NET API’s</li>
              <li>Artificial Intelligents</li>
              <li>Software testing</li>
            </ul>
          </div> */}
          <div className="flex flex-col">
            <h5>Contact Us</h5>
            <ul className="flex flex-col gap-y-4 text-sm text-[#4F4F4F] mt-7">
              <li className="hover:text-[#0276cb]">Scanntek.acadamic.com</li>
              <li className="hover:text-[#0276cb]">+91 7698543298</li>
              <li className="hover:text-[#0276cb]">+91 7698544325</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
