import "tailwindcss/tailwind.css";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  //create a footer component
  return (
    <div className="flex justify-between w-full p-2 items-center ">
      <div className="flex left origin-bottom-left">
        <span>
          <p>The big day</p>
          <br />
          <p className="text-grey-dark">&copy; {date}</p>
          <br />
          <p>Privacy terms</p>
        </span>
      </div>
      <div className="right ">
        <p>
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.”{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
