import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="--tw-bg-opacity min-h-screm mx-auto max-w-8xl p-2 m-2">
        <div className="flex justify-between items-center">
          <div className="flex left-2">
            <h1 className="font-family-Roboto-Slab font-bold text-black text-2xl not-italic static left: 2.78%;">
              THE BIG DAY
            </h1>
          </div>
          <div className="flex items-center space-x-3">
            <ul className="flex justify-between p-6">
              <li>
                <NavLink
                  to="/"
                  className="font-family-Roboto p-4 text-black text-lg"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/galery"
                  className="font-family-Roboto p-4 text-black text-lg"
                >
                  Galery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#PlayList"
                  className="font-family-Roboto p-4 text-black text-lg"
                >
                  Play List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/donations"
                  className="font-family-Roboto p-4 text-black text-lg border-2 border-black rounded"
                >
                  Donation
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
