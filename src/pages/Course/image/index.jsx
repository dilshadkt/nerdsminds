import { motion } from "framer-motion";
import courseImage from "../../../assets/images/our course 1.png";
import React from "react";
const CoursImage = () => {
  const textMotion = {
    hidden: { x: -100, opacity: 0 }, // Start off-screen to the left
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }, // Smooth transition
    },
  };

  const imageMotion = {
    hidden: { x: 100, opacity: 0 }, // Start off-screen to the right
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 }, // Delay for staggered effect
    },
  };
  return (
    <div
      className="col-span-2 min-h-[400px] order-1 lg:order-2  relative flex 
items-center justify-end overflow-hidden"
    >
      <motion.h3
        variants={textMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className=" lg:hidden  absolute left-6 top-0 bottom-0 my-auto font-extrabold text-6xl
drop-shadow-2xl h-fit text-transparent
leading-[69px] bg-gradient-to-r from-blue-500 via-gray-50 to-purple-500 bg-clip-text"
      >
        OUR COURSES
      </motion.h3>
      <img
        src={courseImage}
        alt="about"
        width={600}
        height={814}
        className=" h-[450px] w-[350px] lg:w-[600px]
     lg:h-full hidden lg:block lg:object-cover -top-8 absolute right-0  2xl:-right-4 "
      />
      <motion.div
        variants={imageMotion}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute right-0 lg:hidden"
      >
        <img
          src={courseImage}
          alt="about"
          width={600}
          height={814}
          className="h-[450px] w-[390px] lg:w-[600px] lg:h-full lg:object-cover -top-8"
        />
      </motion.div>
    </div>
  );
};

export default CoursImage;
