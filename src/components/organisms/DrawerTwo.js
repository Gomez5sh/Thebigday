import React from "react";
import Arrow from "../../assets/iconmonstr-arrow-left-thin.png";

export default function Drawer({ children, isOpen, setIsOpen, header, close }) {
  return (
    <div
      className={
        " fixed overflow-hidden z-9999999 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen  max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-2 font-bold bg-[#9F7A6E]">
            <div className="m-1 p-1">
              <p
                onClick={() => close()}
                className="text-white font-sans font-normal not-italic text-md lg:text-xl leading-normal cursor-pointer hover:bg-opacity-10 transition-colors flex items-center"
              >
                <img src={Arrow} alt="back arrow" className="text-white" />
                Volver
              </p>
            </div>
            {header}
          </header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
