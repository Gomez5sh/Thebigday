import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <div className="max-w-auto h-16 left-0 top-0 bg-white backdrop-blur-lg">
      <div className="p-2 flex place-content-between self-baseline ">
        <div className="static left-2 -right-1/3 top-1/4 bottom-1/4">
          <h1 className="font-sans m-2 font-family:Roboto font-bold text-black p-1 leading-8 text-2xl not-italic static left: 2.78%;">
            THE BIG DAY
          </h1>
        </div>
        <div className="flex m-2 p-2 place-content-between">
          <ul className="flex">
            <li>
              <NavLink
                to="/"
                className="font-sans font-family-Roboto not-italic text-xl mx-6 p-1 text-black leading-5 flex items-center line-height text-right hover:text-[#9F7A6E] transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/galery"
                className="font-sans font-family-Roboto not-italic text-xl mx-6 p-1 text-black flex items-center leading-5 line-height text-right hover:text-[#9F7A6E] transition-colors"
              >
                Galery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/playList"
                className="font-sans font-family-Roboto not-italic text-xl mx-6 p-1 text-black flex items-center leading-5 text-right line-height hover:text-[#9F7A6E] transition-colors"
              >
                Play List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className="font-sans font-family-Roboto not-italic text-xl mx-6 py-1 px-6 text-black flex line-heigh leading-5 titems-center text-right border-solid rounded-md border-black border 
                hover:bg-[#9F7A6E] hover:text-white hover:border-black/10 transition-colors shadow-xl shadow-[#9F7A6E]/30 hover:shadow-[#9F7A6E]/60"
              >
                Donation
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
