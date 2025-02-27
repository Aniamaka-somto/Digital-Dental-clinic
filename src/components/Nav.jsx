import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Services", href: "#" },
    { title: "About", href: "#" },
    { title: "Contact", href: "#" },
  ];

  return (
    <nav className="sticky ">
      <div className="px-5 shadow-sm py-4">
        <div className="flex md:justify-evenly items-center justify-between">
          {/* Logo */}
          <h1 className="rounded-lg text-emerald-600 font-extrabold text-lg">
            Digital Dental Clinic
          </h1>

          {/* Desktop Navigation */}
          <ul className="md:gap-10 gap-5 hidden md:flex">
            {navLinks.map(({ title, href }, key) => (
              <li key={key}>
                <a
                  href={href}
                  className="text-zinc-700 hover:text-emerald-600 transition-colors duration-200"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          {/* Book Appointment Button */}
          <button
            className="bg-emerald-600 rounded-full px-3 lg:px-7 py-2.5 text-white 
            font-semibold cursor-pointer hover:bg-emerald-500 hover:scale-105 
            transition-all duration-200 hidden md:block text-xs lg:text-sm 
            shadow-sm hover:shadow-md"
          >
            Book Appointment
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer text-zinc-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoCloseOutline /> : <CiMenuFries />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg 
        transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block px-5 py-2 text-zinc-700 hover:bg-emerald-50 
                hover:text-emerald-600 transition-colors duration-200 active:bg-amber-50 active:text-emerald-600"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className="px-5 pt-4">
            <button
              className="w-full bg-emerald-600 rounded-full px-3 py-2.5 
              text-white font-semibold cursor-pointer hover:bg-emerald-500 
              transition-all duration-200 text-sm"
            >
              Book Appointment
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
