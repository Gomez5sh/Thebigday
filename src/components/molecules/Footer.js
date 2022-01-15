import "tailwindcss/tailwind.css";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  //create a footer component
  return (
    <div className="flex p-1 justify-between w-full items-center ">
      <div className="flex mb-12 origin-bottom-left ml-24 mt-2 flex-col">
        <p className="text-black not-italic font-bold leading-8 font-family:Roboto text-2xl">
          THE BIG DAY
        </p>
        <p className="text-black not-italic font-normal leading-5 font-family:Roboto text-sm">
          &copy; {date}
        </p>
        <p className="text-black not-italic font-normal leading-5 font-family:Roboto text-sm">
          Privacy terms
        </p>
      </div>
      <div className="flex mb-12 origin-bottom-right ml-24 mt-2 flex-col ">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.”{" "}
        </p>
        <p className="text-black not-italic font-normal leading-5 font-family:Roboto text-sm">
          Privacy terms
        </p>
      </div>
    </div>
  );
};

export default Footer;
