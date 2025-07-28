import React from "react";
import Navbar from "../Componentes/Navbar/Navbar";
 
import Whoweare from "../Componentes/Whoweare/Whoweare";
import Footer from "../Componentes/Footer/Footer";
import OurMissionVision from "../Componentes/OurMissionVision/OurMissionVision";
import Achievements from "../Componentes/Achievements/Achievements";
// import WhyChooseUs from "../Componentes/WhyChooseUs/WhyChooseUs";
import Review from "../Componentes/Review/Review";
import Link from "next/link";
export default function page() {
  return (
    <>
      <Navbar />

      <div
        className="relative w-full h-[300px] flex flex-col justify-center pt-6 pl-6  text-white"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1491180232534-a1d8c1875a3a?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: "cover",
          backgroundPosition: " ",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <h1 className="relative text-4xl font-bold z-10 mt-8 ">About Us</h1>

        <div className="relative z-10 mt-4 px-6 py-2 rounded-full flex   space-x-2 text-sm text-white  ">
          <Link href="/">Home</Link>
          <span className="mx-1">➜</span>
          <span className="font-semibold">About Us</span>
        </div>
      </div>
      <Whoweare />
      <OurMissionVision />
      {/* <WhyChooseUs /> */}
      <Achievements />
      <Review />
      <Footer />
    </>
  );
}
