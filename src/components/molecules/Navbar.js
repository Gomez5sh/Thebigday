import React from "react";
import { NavLink } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
          <h1 className="plane-take-off font-sans mr-3 font-family:Roboto font-bold text-black leading-8 text-2xl not-italic  no-underline hover:no-underline lg:text-4xl">
            THE BIG DAY
          </h1>
        </div>
        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center p-1 text-[#9F7A6E] border hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              class="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <li className="mr-6">
                <NavLink
                  to="/"
                  className="no-underline hover:text-underline py-2 px-4 font-sans font-family-Roboto not-italic text-xl text-black leading-5 flex items-center line-height text-right hover:text-[#9F7A6E] transition"
                >
                  Home
                </NavLink>
              </li>
            </li>
            <li class="mr-3">
              <li
                onClick={() => setIsOpen(!isOpen)}
                className="mr-6 no-underline hover:text-underline py-2 px-4 font-sans font-family-Roboto not-italic text-xl text-black leading-5 flex items-center line-height text-right hover:text-[#9F7A6E] transition cursor-pointer"
              >
                Galery
              </li>
            </li>
            <li class="mr-3">
              <NavLink
                to="/playList"
                className="font-sans font-family-Roboto not-italic text-xl text-black flex items-center leading-5 text-right line-height hover:text-[#9F7A6E] transition mx-4"
              >
                Play List
              </NavLink>
            </li>
          </ul>
          <button>
            <NavLink
              to="/donations"
              className="mr-auto lg:mx-0 bg-white 
                 mt-4 lg:mt-0 py-2 px-6 shadow-lg opacity-75 focus:outline-none focus:shadow transform transition hover:scale-105 duration-300 ease-in-out      
                 font-sans font-family-Roboto not-italic text-xl text-black flex leading-5 items-center text-right border-solid rounded-md border-black border 
                hover:bg-[#9F7A6E] hover:text-white hover:border-black/10  shadow-[#9F7A6E]/30 hover:shadow-[#9F7A6E]/80"
            >
              Donation
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
