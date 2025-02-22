// import React from 'react'

const ServicesCard = ({ title, desc1, desc2, desc3, icons }) => {
  return (
    <div className="h-40 max-w-full shadow-lg p-4 rounded-lg flex flex-col">
      <div className="text-3xl text-emerald-600">{icons}</div>
      <h1 className="text-xl font-bold pb-1.5">{title}</h1>
      <ul className="l">
        <li>{desc1}</li>
        <li>{desc2}</li>
        {desc3 && <li>{desc3}</li>}
      </ul>
    </div>
  );
};

export default ServicesCard;
