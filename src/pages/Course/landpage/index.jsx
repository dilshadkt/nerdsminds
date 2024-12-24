import aboutLeft from "../../../assets/images/aboutleft.png";
import CoursImage from "../image";
const CourseLandpage = () => {
  return (
    <div>
      <section className=" h-fit lg:h-[93vh] bg-[#0276CB]  ">
        <div className="w-full h-full  grid grid-cols-1 lg:grid-cols-5  relative">
          <div
            className="col-span-3 order-2 pb-20 lg:pb-0 lg:order-1 flex flex-col 
           lg:pl-16  justify-center text-white"
          >
            <h2 className="font-bold text-4xl hidden lg:block">Our Courses</h2>
            <p className="font-light px-5 lg:px-0 lg:text-[20px] leading-9 lg:leading-10 my-8">
              Scanntek NerdzMinds is committed to bridging the gap between
              education and real-world application. While we are new, we partner
              with a sister concern renowned for its 23 years of experience in
              software development. Our unique approach combines this legacy
              with current industry practices by collaborating with top
              technology companies to deliver hands-on, real- world training.
              Our mission is to prepare you for success in the tech industry by
              providing practical experience and expert guidance.
            </p>
          </div>
          <CoursImage />
          <img
            src={aboutLeft}
            alt="about us"
            width={70}
            height={80}
            className="absolute opacity-30 lg:opacity-100  left-0 bottom-0"
          />
        </div>
      </section>
      {/* <FeaturedCourses /> */}
      {/* <Banner/> */}
      {/* <OurCourses /> */}
      {/* <CourseSlider /> */}
      {/* <StickyIcon /> */}
    </div>
  );
};

export default CourseLandpage;
