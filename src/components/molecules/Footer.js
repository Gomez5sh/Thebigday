import "tailwindcss/tailwind.css";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  //create a footer component
  return (
    <div className="flex p-1 justify-between w-full items-center ">
      <div className="flex mb-12 origin-bottom-left ml-24 mt-2 flex-col">
        <p className="text-black not-italic font-bold leading-8 font-sans text-2xl">
          THE BIG DAY
        </p>
        <p className="text-black not-italic font-normal leading-5 font-sans text-sm">
          &copy; {date}
        </p>
        <p className="text-black not-italic font-normal leading-5 font-sans text-sm">
          Privacy terms
        </p>
      </div>
      <div className="flex mb-12 origin-bottom-right mt-2 flex-col mx-24 flex-wrap">
        <p className="font-sans not-italic font-normal text-2xl leading-8">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.”
        </p>
        <p className="text-black not-italic font-normal leading-5 font-sans text-sm">
          1 Cor. 13:4, 15:12-19
        </p>
      </div>
    </div>
  );
};

export default Footer;
