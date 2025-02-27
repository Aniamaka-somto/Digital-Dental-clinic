import React from "react";

const ChooseUsCard = ({ img, content }) => {
  return (
    <div className="ring-1 ring-emerald-200 h-72 p-10 rounded-2xl shadow-md max-w-2xl">
      <img src={img} alt="" className="h-12" />
      {content}
    </div>
  );
};

export default ChooseUsCard;
