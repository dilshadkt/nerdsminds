import React from "react";
import approchbg from "../../../assets/images/approchbg.png";
import approch from "../../../assets/images/approch.png";
const OurApproaches = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="p-5 lg:pt-20  md:px-10 py-20  max-w-screen-2xl mx-auto  xl:px-12  2xl:px-16 font-metropolis">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col  justify-center   gap-5 ">
            <h1 className="font-bold text-2xl lg:text-5xl text-[#0276CB]">
              Our Approaches
            </h1>
            <p className="xl:w-4/5 font-light md:text-[20px] leading-loose">
              At Scanntek NerdzMinds, we believe in practical, real- world
              training. Our courses are designed to provide hands-on experience
              with the guidance of industry experts. By working directly with
              leading technology companies, we ensure that our students gain the
              skills and insights necessary to excel in today’s tech landscape.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={approchbg}
              alt="approachimg"
              height={1000}
              width={1000}
              className="h-full relative z-30 lg:translate-x-14 w-[90%] lg:w-full object-cover"
            />
            <img
              src={approch}
              alt="approachimg"
              height={1000}
              width={1000}
              className=" h-[600px] lg:h-[900px] opacity-20 lg:opacity-100 z-20 absolute right-0
                top-0 w-[200px] lg:w-[300px] bottom-0 m-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproaches;
