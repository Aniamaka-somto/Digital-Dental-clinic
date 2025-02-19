// import React from "react";

const Nav = () => {
  return (
    <div className="px-0.5 shadow-xs py-4 ">
      <div className="flex justify-evenly items-center">
        <h1 className="rounded-lg text-emerald-600 font-extrabold ">
          Digital Dental Clinic
        </h1>
        <ul className="flex md:gap-10 gap-5">
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
        <button className="bg-emerald-600 rounded-3xl px-7 py-2.5 text-white font-semibold cursor-pointer hover:bg-emerald-500">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Nav;
