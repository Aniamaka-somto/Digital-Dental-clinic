// import React from 'react'

const ServicesCard = ({ title, desc1, desc2, desc3, icons }) => {
  return (
    <div className="h-40 max-w-full shadow-lg p-4 rounded-lg flex flex-col justify-start">
      <div className="text-2xl  text-emerald-600 lg:pb-2.5 pb-1.5 ">
        {icons}
      </div>
      <h1 className="lg:text-xl font-bold pb-1.5 text-sm">{title}</h1>
      <ul className="">
        <li>{desc1}</li>
        <li>{desc2}</li>
        {desc3 && <li>{desc3}</li>}
      </ul>
    </div>
  );
};

export default ServicesCard;
