// import React from "react";
import clinicImage from "../assets/clinic.jpg";

export const Hero = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-b to-70% from-emerald-50 to-white flex justify-center items-center px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="max-w-[30ch] font-bold text-2xl pb-2.5 md:text-4xl">
            Giving confidence to your smile
          </h1>
          <p className="max-w-[57ch]">
            Experience world-class dental care with our team of experienced
            professionals. We provide comprehensive dental services with a
            gentle touch
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <img src={clinicImage} alt="clinic" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};
