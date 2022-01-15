import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <div className="max-w-auto h-16 left-0 top-0 bg-white backdrop-blur-lg">
      <div className="p-2 flex justify-between items-center">
        <div className="static left-2 -right-1/3 top-1/4 bottom-1/4">
          <h1 className="font-sans font-family:Roboto font-bold text-black p-1 leading-8 text-2xl not-italic static left: 2.78%;">
            THE BIG DAY
          </h1>
        </div>
        <div className="flex justify-around items-center">
          <ul className="flex justify-around p-2 m-2">
            <li>
              <NavLink
                to="/"
                className="font-sans font-family-Roboto not-italic text-xl p-1 text-black leading-5 flex items-center line-height text-right hover:text-[#9F7A6E] transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/galery"
                className="font-sans font-family-Roboto not-italic text-xl p-1 text-black flex items-center leading-5 line-height text-right hover:text-[#9F7A6E] transition-colors"
              >
                Galery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#PlayList"
                className="font-sans font-family-Roboto not-italic text-xl p-1 text-black flex items-center leading-5 text-right line-height hover:text-[#9F7A6E] transition-colors"
              >
                Play List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className="font-sans font-family-Roboto not-italic text-xl py-1 px-6 text-black flex line-heigh leading-5 titems-center text-right border-solid rounded-md border-black border 
                hover:bg-[#9F7A6E] hover:text-white hover:border-black/10 transition-colors shadow-xl shadow-[#9F7A6E]/20 hover:shadow-[#9F7A6E]/80"
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
