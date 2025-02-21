// import React from "react";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  return (
    <div className="px-5 shadow-xs py-4 ">
      <div className="flex md:justify-evenly items-center justify-between ">
        <h1 className="rounded-lg text-emerald-600 font-extrabold ">
          Digital Dental Clinic
        </h1>
        <ul className=" md:gap-10 gap-5 hidden md:flex">
          <li>
            <a href="" className="text-zinc-700">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-zinc-700">
              Services
            </a>
          </li>
          <li>
            <a href="" className="text-zinc-700">
              About
            </a>
          </li>
          <li>
            <a href="" className="text-zinc-700">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-emerald-600 rounded-3xl px-3 lg:px-7 py-2.5 text-white font-semibold cursor-pointer hover:bg-emerald-500 hidden md:block text-xs lg:text-sm">
          Book Appointment
        </button>
        <button className="md:hidden">
          <CiMenuFries />
        </button>
      </div>
    </div>
  );
};

export default Nav;
