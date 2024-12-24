import React from "react";
import { whyjoin } from "../../../constants";
import todo from "../../../assets/svg/todo.svg";
import what from "../../../assets/images/what1.png";
const Outcome = ({ currentCourse }) => {
  return (
    <section className=" px-5 lg:px-10 xl:px-12 2xl:px-16 flex flex-col py-14 md:py-16">
      <h3 className=" text-2xl md:text-4xl font-semibold ">Cource Outcome</h3>
      <p className="md:text-[18px] leading-9 mt-3 md:mt-7 font-light">
        {currentCourse?.outcomes.desc}
      </p>
      <div className="grid lg:grid-cols-2 gap-y-7 lg:gap-y-0 gap-x-40 mt-10 md:mt-20">
        <div className="flex flex-col gap-y-7 lg:gap-y-14">
          {currentCourse?.outcomes.points.slice(0, 2).map((point, index) => (
            <div
              key={index}
              className="flex flex-col  border-l-[7px] lg:border-l-[14px] pl-4 border-[#0276CB]"
            >
              <h5 className=" text-lg md:text-xl font-medium">{point.title}</h5>
              <p className="md:text-lg leading-7 text-black/60 font-light mt-2 md:mt-4">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-y-7  lg:gap-y-14">
          {currentCourse?.outcomes.points.slice(2, 4).map((point, index) => (
            <div
              key={index}
              className="flex flex-col  border-l-[7px] lg:border-l-[14px] pl-4 border-[#0276CB]"
            >
              <h5 className=" text-lg md:text-xl font-medium">{point.title}</h5>
              <p className="md:text-lg leading-7 text-black/60 font-light mt-2 md:mt-4">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* what we learn  */}
      <div className="flex flex-col mt-16 md:mt-28">
        <h3 className=" text-2xl md:text-4xl font-semibold ">
          What will you learn?
        </h3>
        {new Array(Math.ceil(currentCourse?.learn?.length / 5))
          .fill(" ")
          .map((item, rowIndex) => {
            const start = rowIndex * 5;
            const end = start + 5;
            const itemsToShow = currentCourse?.learn?.slice(start, end);

            return (
              <div key={rowIndex} className="grid md:grid-cols-2 my-7 md:my-0">
                <div
                  className={`${
                    rowIndex % 2 === 0 ? `md:order-1` : `md:order-2`
                  } flex items-center justify-center`}
                >
                  <img
                    src={what}
                    alt="learn"
                    width={540}
                    height={540}
                    className="w-[240px] md:w-[540px]"
                  />
                </div>
                <div
                  className={`${
                    rowIndex % 2 === 0
                      ? `md:order-2 md:justify-end`
                      : `md:order-1 md:justify-start`
                  } flex items-center`}
                >
                  <ul
                    className={`flex flex-col gap-y-8 leading-7 md:gap-y-10 
                      text-sm md:text-base w-full p-5 md:p-16 shadow-md rounded-lg`}
                  >
                    {itemsToShow?.map((item, index) => (
                      <li key={index} className="flex items-center gap-x-3">
                        <img
                          src={todo}
                          alt="todo"
                          width={16}
                          height={16}
                          className=""
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
      {/* join this course  */}
      <div className=" flex flex-col mt-6">
        <h3 className=" text-2xl md:text-4xl font-semibold ">
          Who can Join This Course
        </h3>
        <p className="md:text-[18px] leading-9 mt-4 md:mt-7 font-light">
          At Scanntek NerdzMinds, we believe in practical, real-world training.
          Our courses are designed to provide hands-on experience with the
          guidance of industry experts. By working directly with leading
          technology companies, we ensure that our students gain the skills and
          insights necessary to excel in today’s tech landscape.
        </p>
        <div className="grid md:grid-cols-3 gap-y-6 gap-x-20 my-20">
          {whyjoin.map((item, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={item.icon}
                alt="aspiring creatives"
                width={60}
                height={60}
                className=" w-[45px] md:w-[60px]"
              />
              <h4 className=" text-lg md:text-xl font-semibold mt-2 md:mt-4">
                {item.title}
              </h4>
              <p className="text-black/60 leading-8 text-sm md:text-[16px] mt-3 md:mt-5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcome;
