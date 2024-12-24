import React from "react";
import { courses } from "../../../constants";
import { Link } from "react-router-dom";
import training from "../../../assets/svg/training.svg";
import internship from "../../../assets/svg/internship.svg";
const FeaturedCourses = () => {
  return (
    <section
      id="featured"
      className=" px-5 md:px-12 max-w-screen-2xl mx-auto 2xl:px-16 py-7 md:py-20 flex flex-col "
    >
      <div className=" grid md:flex items-start gap-x-20">
        <div
          className="font-bold items-center md:items-start text-4xl md:text-5xl
       text-gray-800 flex flex-col gap-y-5"
        >
          <h3>Featured </h3>
          <h3>Courses</h3>
        </div>
        <p className=" mt-5 md:mt-0 md:text-[20px] leading-9 font-light md:w-[67%]  ">
          Explore our cutting-edge tech training programs that are designed to
          equip you with the latest skills and industry knowledge. Our courses
          are delivered in collaboration with leading technology companies,
          offering you the chance to learn directly from experts and work on
          real- world projects.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 2xl:gap-x-7 mt-10">
        {courses.map((item) => (
          <div
            key={item.id}
            className="border-[#0276CB]/50  border flex flex-col rounded-2xl p-4"
          >
            <div className="bg-white border min-h-48 rounded-md overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-4">
              <div className="border cursor-pointer hover:bg-gray-100 p-2 flex items-center gap-x-2 border-black/20 rounded-md text-xs text-black/60 font-medium">
                <img src={training} alt="training" width={16} height={16} />
                <span>6 Months Training</span>
              </div>
              <div className="border cursor-pointer hover:bg-gray-100 p-2 flex items-center gap-x-2 border-black/20 rounded-md text-xs text-black/60 font-medium">
                <img src={internship} alt="training" width={16} height={16} />
                <span>1 Months Internship</span>
              </div>
            </div>
            <p className="my-4 text-sm text-gray-600">{item.caption}</p>
            <Link
              to={`/course/${item.path}`}
              className="bg-[#0276CB] hover:bg-[#0276CB]/70 text-white p-2
              flex items-center justify-center  rounded-md"
            >
              Learn More{" "}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;
