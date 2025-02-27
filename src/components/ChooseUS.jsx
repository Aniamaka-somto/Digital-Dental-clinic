import React from "react";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUS = () => {
  const whyChooseUs = [
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit in optio recusandae architecto sapiente, distinctio aspernatur modi, similique at cumque, quam quas quae dolorem. Iure, vel voluptatum. Vel, suscipit?",
      img: "",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit in optio recusandae architecto sapiente, distinctio aspernatur modi, similique at cumque, quam quas quae dolorem. Iure, vel voluptatum. Vel, suscipit?",
      img: "",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit in optio recusandae architecto sapiente, distinctio aspernatur modi, similique at cumque, quam quas quae dolorem. Iure, vel voluptatum. Vel, suscipit?",
      img: "",
    },
    {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sit in optio recusandae architecto sapiente, distinctio aspernatur modi, similique at cumque, quam quas quae dolorem. Iure, vel voluptatum. Vel, suscipit?",
      img: "",
    },
  ];
  return (
    <div className="h-fit px-10 pt-10 flex items-center flex-col ">
      <h1 className="pb-10 text-2xl font-bold">Why Choose US</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
        {whyChooseUs.map(({ content, img }, key) => {
          return <ChooseUsCard content={content} img={img} key={key} />;
        })}
      </div>
    </div>
  );
};

export default ChooseUS;
