import React from "react";
import Footer from "./Footer";

const Galery = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="flex justify-between items-center h-screen max-h-full w-full">
        <div className="w-full max-w-md bg-[#9F7A6E] h-full">
          <div className="w-full bg-[#e2d7d3] p-1">
            <p className="font-sans not-italic font-bold text-2xl mx-5 leading-8">
              THE BIG DAY
            </p>
          </div>
          <div className="p-20 m-5">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-sans font-normal not-italic text-xl leading-normal m-2 p-4 cursor-pointer hover:bg-opacity-10 transition-colors"
            >
              Go Back
            </p>
            <p className="text-white font-light  font-sans not-italic leading-10 text-5xl m-2 p-4 ">
              Owr big moments in photos
            </p>
            <p className="text-white font-sans font-normal not-italic text-xl leading-normal m-2 p-4">
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="h-full">
          <h1>Galery</h1>
        </div>
      </div>
      <footer className="text-black">
        <Footer />
      </footer>
    </>
  );
};

export default Galery;
