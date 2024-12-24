import React from "react";
import teams from "../../../assets/images/teams.png";
import perons1 from "../../../assets/images/person1.png";
import perons3 from "../../../assets/images/person2.png";
import perons2 from "../../../assets/images/person3.png";
const Teams = () => {
  return (
    <section
      className="px-5  max-w-screen-2xl mx-auto xl:px-12 2xl:px-16 grid grid-cols-1
   md:grid-cols-2 xl:grid-cols-7 gap-y-12 md:gap-y-0 md:gap-x-6 py-8 md:py-12 "
    >
      <div className="flex flex-col col-span-1 xl:col-span-3">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#0276CB]">
          Meet Our Team
        </h3>
        <p className=" lg:text-[20px] leading-9 lg:leading-10 font-light mt-4 md:mt-8">
          Meet the dedicated team behind Scanntek NerdzMinds. Our instructors
          are not only educators but also seasoned professionals from leading
          tech companies. They bring their extensive industry knowledge and
          hands-on experience to guide you through your learning journey.
        </p>
        <div
          className=" w-[85%] md:w-[80%] bg-[#0276CB] relative 
      h-[320px] md:h-[410px] mt-20 md:mt-72 rounded-xl"
        >
          <div className="flex flex-col p-5 text-white">
            <h5 className="font-semibold text-xl">Melvin Thomas</h5>
            <p className="font-light">CEO</p>
          </div>
          <img
            src={teams}
            alt="teams"
            width={70}
            height={70}
            className="absolute top-6 bottom-0 my-auto left-0"
          />
          <div
            className="absolute w-[380px] md:w-[512px] h-[370px] md:h-[560px]  bottom-0
        -right-28 md:-right-36"
          >
            <img
              src={perons1}
              alt="teams"
              width={600}
              height={700}
              quality={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end  col-span-1 xl:col-span-2 ">
        <div className="w-[85%] lg:w-full bg-[#0276CB] relative h-[320px] md:h-[300px]  rounded-xl">
          <div className="flex flex-col p-5 text-white">
            <h5 className="font-semibold text-xl">Melvin Thomas</h5>
            <p className="font-light">CEO</p>
          </div>
          <img
            src={teams}
            alt="teams"
            width={70}
            height={70}
            className="absolute top-6 bottom-0 my-auto left-0"
          />
          <div className="w-[251px] h-[251px] absolute bottom-0 -right-16">
            <img
              src={perons3}
              alt="teams"
              width={300}
              height={300}
              quality={100}
              className="absolute w-full max-w-[250px] z-30  bottom-0  right-0 2xl:right-5"
            />
          </div>
        </div>
        <div
          className="w-[85%] lg:w-full bg-[#0276CB] relative h-[320px]
       md:h-[420px] mt-20 rounded-xl"
        >
          <div className="flex flex-col p-5 text-white">
            <h5 className="font-semibold text-xl">Melvin Thomas</h5>
            <p className="font-light">CEO</p>
          </div>

          <div className="w-full max-w-[340px] h-[300px] absolute bottom-0 -right-16">
            <img
              src={perons2}
              alt="teams"
              width={300}
              height={300}
              quality={100}
              className="absolute w-full z-30  bottom-0  right-0 2xl:right-5"
            />
          </div>
          <img
            src={teams}
            alt="teams"
            width={70}
            height={70}
            className="absolute top-6 bottom-0 my-auto left-0"
          />
        </div>
      </div>
      <div
        className="flex md:grid  grid-cols-2 xl:flex flex-col
     justify-end col-span-1 md:col-span-2 xl:pl-12"
      >
        <div className=" w-[80%] xl:w-full bg-[#0276CB] relative h-[320px] md:h-[340px] mt-10 md:mt-20 rounded-xl">
          <div className="flex flex-col p-5 text-white">
            <h5 className="font-semibold text-xl">Melvin Thomas</h5>
            <p className="font-light">CEO</p>
          </div>

          <div className="w-full max-w-[300px] h-[300px] absolute bottom-0 -right-16">
            <img
              src={perons2}
              alt="teams"
              width={300}
              height={300}
              quality={100}
              className="absolute w-full z-30  bottom-0  right-0 2xl:right-5"
            />
          </div>
          <img
            src={teams}
            alt="teams"
            width={70}
            height={70}
            className="absolute top-6 bottom-0 my-auto left-0"
          />
        </div>
        <div
          className=" w-[80%]  xl:w-full bg-[#0276CB] relative h-[320px] md:h-[340px] 
      lg:h-[280px] mt-36 rounded-xl"
        >
          <div className="flex flex-col p-5 text-white">
            <h5 className="font-semibold text-xl">Melvin Thomas</h5>
            <p className="font-light">CEO</p>
          </div>

          <div className="w-full max-w-[340px] h-[300px] absolute bottom-0 -right-16">
            <img
              src={perons2}
              alt="teams"
              width={300}
              height={300}
              quality={100}
              className="absolute w-full z-30  bottom-0  right-0 2xl:right-5"
            />
          </div>
          <img
            src={teams}
            alt="teams"
            width={70}
            height={70}
            className="absolute top-6 bottom-0 my-auto left-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Teams;
