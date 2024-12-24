import React from "react";
import Navbar from "../../components/navbar";
import Landing from "./landpage";
import WeProvide from "./learnFrom";
import FeaturedCourses from "./featuredCourse";
import ApplyForm from "./applyForm";
import Footer from "../../components/footer";

const Home = () => {
  return (
    <>
      <Landing />
      <WeProvide />
      <FeaturedCourses />
      <ApplyForm />
    </>
  );
};

export default Home;
