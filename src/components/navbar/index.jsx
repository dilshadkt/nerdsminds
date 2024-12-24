"use client";
import React from "react";
import { Link } from "react-router-dom";
import fullLogo from "../../assets/images/fullLogo.png";
import MenuBar from "../menubar";
import { courses } from "../../constants";

const Navbar = () => {
  return (
    <div
      className={`flex justify-between bg-[#0276CB] text-white/85 font-medium 
        
      }  py-3 
     px-5 lg:px-10  items-center fixed z-50 w-full mb-20 h-[80px]`}
    >
      <div className="">
        <Link to="/">
          <img
            src={fullLogo}
            alt="Logo"
            className=" w-[130px] md:w-[200px]" // Adjust size as needed
          />
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-x-16">
        <div className="hidden lg:flex font-inter gap-14">
          <Link
            to="/"
            className="hover:-translate-y-1 hover:text-white transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/aboutus"
            className="hover:-translate-y-1 hover:text-white transition-all duration-300"
          >
            About
          </Link>
          <div className="relative group">
            <Link
              to="/course"
              className="group-hover:-translate-y-1 group-hover:text-white transition-all duration-300"
            >
              Courses
            </Link>
            <ul
              className="absolute p-4 w-fit h-fit text-gray-800 text-base whitespace-nowrap 
      right-0 gap-y-5 py-5 border border-gray-700/30 shadow-md 
      bg-white backdrop-blur-md rounded-lg mt-3 
      opacity-0 invisible group-hover:opacity-100 group-hover:visible 
      transition-all duration-300 
      flex flex-col"
            >
              {courses.map((course) => (
                <Link to={`/course/${course.path}`}>
                  <li
                    key={course.id}
                    className="hover:text-blue-600 cursor-pointer transition-all duration-200"
                  >
                    {course.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Link
            to="/contact"
            className="hover:-translate-y-1 hover:text-white transition-all duration-300"
          >
            Contact
          </Link>
        </div>

        <Link to="/contact">
          <button
            className="border border-white/70  font-metropolis  p-3 py-2
          text-white hover:border-2 transition-all duration-300 hover:scale-95  rounded-md"
          >
            Get a callback
          </button>
        </Link>
      </div>
      <div className="xl:hidden">
        <MenuBar />
      </div>
    </div>
  );
};

export default Navbar;
