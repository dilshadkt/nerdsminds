import React from "react";
import coursDeatilbanner from "../../../assets/images/react.png";
import calender from "../../../assets/svg/calender.svg";
import module from "../../../assets/svg/modules.svg";
import academic from "../../../assets/svg/academic.svg";
import support from "../../../assets/svg/support.svg";
import EnrollmentForm from "../form";
const Landpage = ({ currentCourse }) => {
  return (
    <section className="font-metropolis">
      <div className="relative">
        <img
          src={coursDeatilbanner}
          alt="react"
          width={1200}
          height={440}
          className="w-full h-full object-contain"
        />
        <h2
          className="absolute bottom-0
     bg-[#376588CC]/40 backdrop-blur-xl py-4 w-fit md:py-6 px-8 md:px-20
     left-5 md:left-10 lg:left-12 2xl:left-16 z-20 text-white font-bold
      text-xl md:text-2xl lg:text-4xl"
        >
          {currentCourse?.title}
        </h2>
      </div>
      <div className="px-5 lg:px-10 xl:px-12 2xl:px-16 py-10  md:py-20">
        <div className="grid md:grid-cols-2 gap-x-10">
          <div className="flex flex-col">
            <h4 className="text-[#0276CB] text-2xl md:text-4xl font-bold">
              Course Overview
            </h4>
            <p className=" my-4 md:my-12 md:text-lg leading-9 md:leading-10 font-light">
              {currentCourse?.overview}
            </p>
            <div className="grid md:grid-cols-2 gap-y-7 mt-4">
              <div className="flex flex-col gap-y-8">
                <div className="flex gap-x-3 items-center">
                  <img
                    src={calender}
                    alt="calender"
                    width={45}
                    height={45}
                    className=" w-[30px] md:w-[45px]"
                  />
                  <div className="flex  flex-col">
                    <span className=" text-xs md:text-sm text-black/60">
                      Course Duration
                    </span>
                    <span className="text-sm">6 Months + Internship</span>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img
                    src={support}
                    alt="calender"
                    width={45}
                    height={45}
                    className=" w-[30px] md:w-[45px]"
                  />
                  <div className="flex  flex-col">
                    <span className="text-xs md:text-sm text-black/60">
                      Support
                    </span>
                    <span className="text-sm">Placement Support</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col   gap-y-8">
                <div className="flex gap-x-3 items-center">
                  <img
                    src={module}
                    alt="calender"
                    width={45}
                    height={45}
                    className=" w-[30px] md:w-[45px]"
                  />
                  <div className="flex  flex-col">
                    <span className="text-xs md:text-sm text-black/60">
                      Modules
                    </span>
                    <span className="text-sm">
                      {currentCourse?.modules.length} Modules
                    </span>
                  </div>
                </div>
                <div className="flex gap-x-3 items-center">
                  <img
                    src={academic}
                    alt="calender"
                    width={45}
                    height={45}
                    className=" w-[30px] md:w-[45px]"
                  />
                  <div className="flex  flex-col">
                    <span className="text-xs md:text-sm text-black/60">
                      Academic
                    </span>
                    <span className="text-sm">Real Time Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EnrollmentForm course={currentCourse?.title} />
        </div>
      </div>
    </section>
  );
};

export default Landpage;
