import React from "react";
import Navbar from "../../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer";

const HomeLayout = () => {
  return (
    <main className="font-metropolis overflow-x-hidden">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
