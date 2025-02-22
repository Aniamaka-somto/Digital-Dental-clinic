// import React from 'react'

import ServicesCard from "./ServicesCard";
import { FaTeeth } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      desc1: "dental exams and cleaning",
      desc2: "filling for cavities",
      desc3: "Root canal",
      icons: <FaTooth />,
    },
    {
      title: "Cosmetic Dentistry",
      desc1: "Teeth whitening",
      desc2: "Veneers",
      desc3: "Dental bonding",
      icons: <FaTeeth />,
    },
    {
      title: "Restorative Dentistry",
      desc1: "Braces (metal, ceramic, or clear aligners)",
      desc2: "Retainer",
      icons: <FaUserDoctor />,
    },
  ];
  return (
    <div className="flex flex-col w-full ">
      <div className="py-3 text-2xl font-bold text-center">Our Services</div>
      <div className="flex justify-between">
        <div className="grid gap-x-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-10 justify-center items-center w-full ">
          {services.map(({ title, desc1, desc2, desc3, icons }, key) => {
            return (
              <ServicesCard
                title={title}
                key={key}
                desc1={desc1}
                desc2={desc2}
                desc3={desc3}
                icons={icons}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
