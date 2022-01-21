import React from "react";
import Footer from "./Footer";
import Drawer from "../organisms/Drawer";

const DrawerLayout = ({
  isOpen,
  setIsOpen,
  close,
  Children,
  title,
  description,
  subtitle,
}) => {
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex justify-between items-center h-screen max-h-full w-full">
        <div className="w-full max-w-md bg-[#9F7A6E] h-full">
          <div className="w-full bg-[#e2d7d3] p-1">
            <p className="font-sans not-italic font-bold text-2xl mx-5 leading-8">
              {title}
            </p>
          </div>
          <div className="p-20 m-5">
            <p
              onClick={() => close()}
              className="text-white font-sans font-normal not-italic text-xl leading-normal m-2 p-4 cursor-pointer hover:bg-opacity-10 transition-colors"
            >
              Go Back
            </p>
            <p className="text-white font-light  font-sans not-italic leading-10 text-5xl m-2 p-4 ">
              {subtitle}
            </p>
            <p className="text-white font-sans font-normal not-italic text-xl leading-normal m-2 p-4">
              {description}
            </p>
          </div>
        </div>
        <div className="">{Children}</div>
      </div>
      <footer className="text-black ">
        <Footer />
      </footer>
    </Drawer>
  );
};

export default DrawerLayout;
