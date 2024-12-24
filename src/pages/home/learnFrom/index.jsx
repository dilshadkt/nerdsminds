import { motion } from "framer-motion";
import aboutIllustrationLeft from "../../../assets/images/leftLogo.png";
import aboutIllustrationRight from "../../../assets/images/rightLogo.png";
import aboutusBg from "../../../assets/images/aboutbg.png";
const ImageMOtionLeft = {
  initial: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const ImageMOtionRight = {
  initial: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const WeProvide = () => {
  return (
    <section className="relative ">
      <div
        className="w-full h-full relative z-30  max-w-screen-2xl  mx-auto px-5
     md:px-12 2xl:px-16   py-16 md:py-20 gap-y-7  grid grid-cols-1 md:grid-cols-5"
      >
        <div className=" col-span-1 order-2 md:order-1 md:col-span-3 flex flex-col mr-5 2xl:mr-16 ">
          <h3
            className="text-[#0276CB] font-semibold text-2xl 
        md:text-[1.75rem] md:leading-[2.6rem]"
          >
            Learn from the best and gain the real-world experience needed to
            excel in the tech industry.
          </h3>
          <p className="md:text-lg leading-8 md:leading-10 font-light mt-6 md:mr-3">
            Welcome to Scanntek NerdzMinds, where we bridge the gap between
            theoretical knowledge and real-world application. While Scanntek
            itself is new, we leverage our partnership with a sister concern
            that boasts 23 years of experience in software development. Our
            training programs are designed to provide hands-on experience and
            practical skills through collaborations with leading industry
            experts companies. Learn from the best and gain the real-world
            experience needed to excel in the tech industry.
          </p>
        </div>
        <div className="flex order-1 md:order-2 flex-col col-span-1 md:col-span-2 justify-end">
          <img
            src={aboutusBg}
            alt="about"
            width={500}
            height={396}
            className="w-full object-contain"
          />
        </div>
      </div>
      <motion.div
        variants={ImageMOtionRight}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 50, // Customize stiffness for smoothness
          damping: 25, // Customize damping to prevent overshooting
          duration: 1, // Customize the duration for smoothness
        }}
        className="absolute z-20 left-0 bottom-0"
      >
        <img
          src={aboutIllustrationLeft}
          alt="logo"
          width={85}
          height={85}
          className=" w-[75px]  md:w-[85px]  "
        />
      </motion.div>
      <motion.div
        variants={ImageMOtionLeft}
        initial="initial"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 50, // Customize stiffness for smoothness
          damping: 25, // Customize damping to prevent overshooting
          duration: 1, // Customize the duration for smoothness
        }}
        className=" absolute z-20 right-0 top-0"
      >
        <img
          src={aboutIllustrationRight}
          alt="logo"
          width={130}
          height={130}
          className=" w-[90px] md:w-[130px]"
        />
      </motion.div>
    </section>
  );
};

export default WeProvide;
