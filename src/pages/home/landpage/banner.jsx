"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import logo from "../../../assets/images/logo.png";
import person from "../../../assets/images/person.png";
const LandpageBanner = () => {
  const personRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  const personInView = useInView(personRef, { once: true });
  const logoInView = useInView(logoRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  return (
    <div
      className="min-h-80 md:min-h-80 w-full bg-gradient-to-t
      from-white/85 to-white/15 rounded-[22px] shadow-sm relative"
    >
      {/* Text Content */}
      <motion.div
        initial={{ y: -50, opacity: 0 }} // Start state
        animate={{ y: 0, opacity: 1 }} // End state
        transition={{
          duration: 1,
          ease: "easeOut",
        }} // Smooth easing
        className="hidden md:flex flex-col tracking-wider drop-shadow-md font-metropolis text-white
        absolute -top-20 md:top-0 bottom-0 my-auto left-8 md:left-16 h-fit"
      >
        <h1 className="text-[2rem] font-semibold m-0">Transforming</h1>
        <h2 className="text-[2rem] -translate-y-2 font-semibold m-0">
          Aspiring Developers into
        </h2>
        <h1 className="font-semibold text-[#0276CB] text-5xl m-0 -translate-y-1">
          Industry Experts
        </h1>
      </motion.div>

      {/* Mobile Text Content */}
      <motion.div
        ref={textRef}
        initial={{ y: 50, opacity: 0 }}
        animate={textInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          delay: 0.7,
          duration: 0.8,
          ease: "easeOut",
        }}
        className="w-full sm:w-fit drop-shadow-md flex z-30 md:hidden  flex-col
         tracking-wider font-metropolis text-white
        absolute -top-40 md:top-0 bottom-0 items-center sm:items-start my-auto left-0 sm:left-5 md:left-16 h-fit"
      >
        <h1 className="text-[2rem] sm:text-[2.3rem] font-semibold m-0">
          Crafting Future
        </h1>
        <h2
          className="text-[1.8rem] sm:text-[2rem] text-[#0276CB] md:text-[2rem] -translate-y-2 text-center 
        sm:text-start font-semibold m-0"
        >
          Tech Experts
        </h2>
      </motion.div>

      {/* Person Image with Motion */}
      <motion.div
        ref={personRef}
        initial={{ y: 50, opacity: 0 }}
        animate={personInView ? { y: 0, opacity: 1 } : {}}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="absolute z-40 bottom-0 right-0"
      >
        <img
          src={person}
          alt="person"
          width={610}
          height={421}
          className="w-[360px] md:w-[610px]"
        />
      </motion.div>

      {/* Logo Image */}
      <div className="absolute rounded-r-[22px] z-10 right-0 overflow-hidden bottom-0 top-0 m-auto">
        <motion.div
          ref={logoRef}
          initial={{ x: 40, opacity: 0 }}
          animate={logoInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className=" "
        >
          <img
            src={logo}
            alt="logo"
            width={300}
            height={300}
            className="h-full w-fit object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LandpageBanner;
