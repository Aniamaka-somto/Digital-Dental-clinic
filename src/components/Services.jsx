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
      icons: { FaTeeth },
    },
    {
      title: "Cosmetic Dentistry",
      desc1: "Teeth whitening",
      desc2: "Veneers",
      desc3: "Dental bonding",
      icons: { FaTooth },
    },
    {
      title: "Restorative Dentistry",
      desc1: "Braces (metal, ceramic, or clear aligners)",
      desc2: "Retainer",
      icons: { FaUserDoctor },
    },
  ];
  return (
    <div className="flex justify-evenly ">
      <div className="grid gap-x-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 justify-center items-center ">
        {services.map(({ title, desc1, desc2, desc3 }, key) => {
          return (
            <ServicesCard
              title={title}
              key={key}
              desc1={desc1}
              desc2={desc2}
              desc3={desc3}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
