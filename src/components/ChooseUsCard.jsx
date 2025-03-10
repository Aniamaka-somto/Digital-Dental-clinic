import React from "react";

const ChooseUsCard = ({ img, content }) => {
  return (
    <div className="ring-1 ring-emerald-200 lg:h-72 h-96  p-5 rounded-2xl shadow-md max-w-2xl grid grid-cols-1 lg:grid-cols-2 gap-2.5 items-center hover:scale-95 transition-transform">
      <div className="w-full lg:h-full h-52 rounded-lg ring-1 ring-emerald-200 overflow-hidden shadow-sm ">
        <img src={img} alt="" className=" aspect-auto w-full h-full" />
      </div>
      {content}
    </div>
  );
};

export default ChooseUsCard;
