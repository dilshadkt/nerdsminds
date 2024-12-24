import React from "react";
import modulesBg from "../../../assets/images/coursesbg.jpg";

const Modules = ({ currentCourse }) => {
  return (
    <section className="h-full  bg-black px-5 md:px-10 lg:px-12 2xl:px-16 py-14 relative">
      <img
        src={modulesBg}
        alt="courses"
        quality={100}
        className="w-full h-full left-0 right-0 bottom-0 top-0 m-auto absolute opacity-60 object-cover"
      />
      <div className="relative z-20 flex flex-col">
        <h3 className=" text-2xl md:text-4xl font-semibold text-white">
          Course Curriculum
        </h3>
        <div className="grid gap-y-5 md:gap-y-0 md:grid-cols-2 gap-x-36 mt-7 md:mt-12">
          <div className="flex flex-col gap-y-5">
            {currentCourse?.modules
              .slice(0, Math.ceil(currentCourse?.modules.length / 2)) // First half
              .map((course, index) => (
                <div
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-arrow border-base-300 bg-base-200 border"
                >
                  <div className="collapse-title md:text-lg font-medium">
                    Module {course.moduleNumber}
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-lg font-semibold">
                        {course.moduleTitle}
                      </h4>
                      <span className="text-sm text-gray-500 font-medium">
                        {course.duration}
                      </span>
                      <h5 className="font-semibold my-3">Topic :-</h5>
                      <ul className="flex flex-col gap-y-3 list-disc pl-5">
                        {course.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                      <h5 className="font-semibold my-3">Practical :-</h5>
                      <ul className="flex flex-col gap-y-3 list-disc pl-5">
                        {course.practicals?.map((practical, index) => (
                          <li key={index}>{practical}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="flex flex-col gap-y-5">
            {currentCourse?.modules
              .slice(Math.ceil(currentCourse?.modules.length / 2)) // Second half
              .map((course, index) => (
                <div
                  key={index}
                  tabIndex={0}
                  className="collapse collapse-arrow border-base-300 bg-base-200 border"
                >
                  <div className="collapse-title md:text-lg font-medium">
                    Module {course.moduleNumber}
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col">
                      <h4>{course.moduleTitle}</h4>
                      <span className="text-sm text-gray-500 font-medium">
                        {course.duration}
                      </span>
                      <h5>Topic :-</h5>
                      <ul className="flex flex-col list-disc pl-5">
                        {course.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                      <h5>Practical :-</h5>
                      <ul className="flex flex-col list-disc pl-5">
                        {course.practicals?.map((practical, index) => (
                          <li key={index}>{practical}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
