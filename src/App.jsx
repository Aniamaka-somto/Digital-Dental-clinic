// import React from "react";
import Nav from "./components/Nav";
import { Hero } from "./components/Hero";
import Appointmen from "./components/Appointmen";
import Services from "./components/Services";
import ChooseUS from "./components/ChooseUS";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Appointmen />
      <ChooseUS />
      <Footer />
      <div className="rounded-full h-10 w-10 fixed bottom-5 right-3 bg-emerald-600 animate-bounce"></div>
    </>
  );
};

export default App;
