import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <div className="lg:hidden" onClick={toggleMenu}>
        {openMenu ? (
          <IoMdClose className="text-2xl text-white transform transition-transform duration-1000 ease-in-out" />
        ) : (
          <FiMenu className="text-2xl text-white transform transition-transform duration-1000 ease-in-out" />
        )}
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#033f7b] shadow-lg transform transition-transform duration-1000 ease-in-out z-50 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          <div className="flex justify-end">
            <IoMdClose
              className="text-2xl cursor-pointer text-white"
              onClick={toggleMenu}
            />
          </div>
          <nav className="mt-8">
            <ul className="space-y-4 font-manrope">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-4 text-white border-b border-gray-500"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block py-2 px-4 text-white border-b border-gray-500"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="block py-2 px-4 text-white border-b border-gray-500"
                  onClick={toggleMenu}
                >
                  Course
                </Link>
              </li>
              {/* <li>
                <Link
                  to="#student-slider"
                  className="block py-2 px-4 text-white border-b border-gray-500"
                  onClick={toggleMenu}
                >
                  Testimonials
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-white border-b border-gray-500"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
