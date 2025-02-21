// import React from "react";
import Nav from "./components/Nav";
import { Hero } from "./components/Hero";
import Appointmen from "./components/Appointmen";
import Services from "./components/Services";
import ServicesCard from "./components/ServicesCard";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Appointmen />
      <ServicesCard />
    </>
  );
};

export default App;
