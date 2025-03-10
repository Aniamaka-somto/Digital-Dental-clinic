// import React from "react";
import Nav from "./components/Nav";
import { Hero } from "./components/Hero";
import Appointmen from "./components/Appointmen";
import Services from "./components/Services";
import ChooseUS from "./components/ChooseUS";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowButton(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Nav />
      <Hero className="hero-section" />
      <Services />
      <Appointmen />
      <ChooseUS />
      <Footer />
      <div className="rounded-full h-10 w-10 fixed bottom-5 right-3 bg-emerald-600 animate-bounce">
        <button onClick={scrollToTop}></button>
      </div>
    </>
  );
};

export default App;
