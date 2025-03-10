import React from "react";
import ChooseUsCard from "./ChooseUsCard";

const ChooseUS = () => {
  const whyChooseUs = [
    {
      content:
        "Expert Care - Our experienced dentists use the latest techniques for comfortable, effective treatment.",
      img: "src/assets/img1.jpg",
    },
    {
      content:
        "State-of-the-Art Technology - We invest in modern equipment for precise diagnostics and efficient treatments.",
      img: "src/assets/img2.jpg",
    },
    {
      content:
        "Convenient Scheduling - We offer flexible appointment times including evenings and weekends to accommodate your busy lifestyle.",
      img: "src/assets/img3.jpg",
    },
    {
      content:
        "Personalized Treatment - We create customized care plans to address your unique dental needs.",
      img: "src/assets/img4.jpg",
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
