import React from "react";
import LandpageBanner from "./banner";
import landpageBg from "../../../assets/images/landpage.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section
      className="h-screen md:h-fit py-32 px-5 md:px-12 2xl:px-16 relative   
 "
    >
      <img
        src={landpageBg}
        alt="landpage"
        className="absolute left-0 right-0 top-0 bottom-0 object-cover  w-full h-full"
      />
      <div className="flex flex-col mx-auto  max-w-screen-2xl relative z-30 w-full ">
        <LandpageBanner />
        <div className="flex flex-col w-full items-start  mt-5">
          <p className="text-[#E7E7E7] font-light md:text-xl">
            Real-world training and mentorship from industry veterans.
          </p>
          <Link to={"/course"}>
            <button
              className="border hover:border-2 hover:scale-95
            transition-all duration-300 text-sm md:text-base rounded-lg text-white  py-2 px-7 mt-4"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
