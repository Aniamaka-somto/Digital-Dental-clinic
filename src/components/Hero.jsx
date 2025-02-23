// import React from "react";
import clinicImage from "../assets/clinic.jpg";

export const Hero = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-b to-70% from-emerald-50 to-white flex justify-center items-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center ">
          <h1 className="max-w-[30ch] font-bold text-2xl pb-2.5 md:text-4xl">
            Giving confidence to your smile
          </h1>
          <p className="max-w-[57ch] pb-2.5">
            Experience world-class dental care with our team of experienced
            professionals. We provide comprehensive dental services with a
            gentle touch
          </p>
          <div className="flex w-full justify-start">
            <button className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-500 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300 active:bg-emerald-700 active:scale-95 shadow-sm hover:shadow-md mr-2.5">
              Book Now
            </button>
            <button
              className="px-6 py-3 text-emerald-600 rounded-full 
        ring-1 ring-emerald-600 
        hover:bg-emerald-100 hover:scale-105 
        transition-all duration-200 
        focus:outline-none focus:ring-4 focus:ring-emerald-300 
        active:bg-emerald-200 active:scale-95 
        shadow-sm hover:shadow-md"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={clinicImage} alt="clinic" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
