import React from "react";
// import RegForm from "./RegForm";
import formbg from "../../../assets/images/formbg.jpeg";
import RegForm from "./regForm";

const ApplyForm = () => {
  return (
    <div className="relative w-full bg-[#0276CB]  ">
      <img
        src={formbg}
        alt="Background"
        fill={true}
        style={{ objectFit: "cover" }}
        className=" opacity-20 w-full h-full object-cover absolute left-0 right-0 bottom-0 top-0"
      />
      <div className="grid grid-cols-1 xl:grid-cols-2 w-full h-full max-w-screen-2xl mx-auto">
        <div className="lg:relative z-10 md:w-2/3  mx-auto flex flex-col justify-center items-center  py-10  p-2">
          <RegForm />
        </div>
        <div
          className="lg:relative z-10  flex  flex-col justify-end items-center md:px-10 lg:px-0 lg:py-10 font-metropolis
        "
        >
          <h1 className="text-white leading-loose lg:w-4/5 font-light backdrop-blur-sm p-2">
            Experience real-world tech environments through our exclusive
            internship programs. Designed for those who have completed our
            foundational courses, our internships provide you with the
            opportunity to work directly with leading technology companies as
            junior trainees, gaining invaluable industry experience and
            networking opportunities.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
