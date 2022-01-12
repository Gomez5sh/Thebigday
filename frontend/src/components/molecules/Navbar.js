import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <div className="max-w-auto h-16 left-0 top-0 bg-white backdrop-blur-lg">
      <div className="p-2 flex justify-between items-center">
        <div className="static left-2 -right-1/3 top-1/4 bottom-1/4">
          <h1 className="font-sans font-family:Roboto font-bold text-black p-2 text-2xl not-italic static left: 2.78%;">
            THE BIG DAY
          </h1>
        </div>
        <div className="p-2 flex justify-between items-center">
          <ul className="flex justify-between p-2">
            <li>
              <NavLink
                to="/"
                className="font-sans font-family-Roboto not-italic text-xl p-2 text-black flex items-center text-right"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/galery"
                className="font-sans font-family-Roboto not-italic text-xl p-2 text-black flex items-center text-right"
              >
                Galery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#PlayList"
                className="font-sans font-family-Roboto not-italic text-xl p-2 text-black flex items-center text-right"
              >
                Play List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donations"
                className="font-sans font-family-Roboto not-italic text-xl p-2 text-black flex items-center text-right border-solid rounded-md border-black border-2"
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
