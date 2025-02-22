// import React from 'react'

const ServicesCard = ({ title, desc1, desc2, desc3 }) => {
  return (
    <div className="h-32 max-w-full shadow-lg p-4 rounded-lg flex flex-col  ">
      <h1 className="text-xl font-bold pb-1.5">{title}</h1>
      <ul className="">
        <li>{desc1}</li>
        <li>{desc2}</li>
        <li>{desc3}</li>
      </ul>
    </div>
  );
};

export default ServicesCard;
