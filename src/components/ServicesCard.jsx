// import React from 'react'

const ServicesCard = ({ title, desc1, desc2, desc3 }) => {
  return (
    <div className="h-32 w-72 shadow-lg p-4 rounded-2xl flex flex-col justify-center ">
      <h1 className="text-xl font-bold">{title}</h1>
      <ul className="">
        <li>{desc1}</li>
        <li>{desc2}</li>
        <li>{desc3}</li>
      </ul>
    </div>
  );
};

export default ServicesCard;
