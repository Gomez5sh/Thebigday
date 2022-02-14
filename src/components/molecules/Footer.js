import "tailwindcss/tailwind.css";
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  //create a footer component
  return (
    <div className="container mx-auto px-8">
      <div className="w-full flex flex-col md:flex-row py-6">
        <div className="flex-auto mb-6 text-black">
          <p className="text-black not-italic font-bold leading-8 font-sans text-2xl">
            NUESTRO GRAN DÍA
          </p>
          <p className="text-black not-italic font-normal leading-5 font-sans text-sm">
            &copy; {date}
          </p>
          <p className="text-black not-italic font-normal leading-5 font-sans text-sm">
            David y Vivi
          </p>
        </div>
        <div className="flex-auto">
          <p className="font-sans not-italic font-normal text-2xl leading-8">
            “Una sola persona puede ser vencida, pero dos ya pueden defenderse; <br />
            y si tres unen sus fuerzas, ya no es fácil derrotarlas.”
          </p>
          <p className="text-black not-italic font-normal leading-5 font-sans text-sm pt-4">
            Eclesiastés 4:12
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
