import React from "react";
import ChooseUsCard from "./ChooseUsCard";
import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";

const ChooseUS = () => {
  const whyChooseUs = [
    {
      Title: "Expert Care",
      content:
        "Our experienced dentists use the latest techniques for comfortable, effective treatment.",
      img: img1,
    },
    {
      Title: "State-of-the-Art Technology",
      content:
        "We invest in modern equipment for precise diagnostics and efficient treatments.",
      img: img2,
    },
    {
      Title: "Convenient Scheduling",
      content:
        "We offer flexible appointment times including evenings and weekends to accommodate your busy lifestyle.",
      img: img3,
    },
    {
      Title: "Personalized Treatment",
      content:
        "We create customized care plans to address your unique dental needs.",
      img: img4,
    },
  ];
  return (
    <div className="h-fit px-10 pt-10 flex items-center flex-col ">
      <h1 className="pb-10 text-2xl font-bold">Why Choose US</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
        {whyChooseUs.map(({ content, img, Title }, key) => {
          return (
            <ChooseUsCard content={content} img={img} key={key} Title={Title} />
          );
        })}
      </div>
    </div>
  );
};

export default ChooseUS;
