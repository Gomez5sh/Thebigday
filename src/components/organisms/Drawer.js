import React from "react";
//import Footer from "../molecules/Footer";
import Arrow from "../../assets/iconmonstr-arrow-left-thin.png";
import flowers from "../../assets/flowers.svg";

const Drawer = ({
  children,
  isOpen,
  setIsOpen,
  title,
  subtitle,
  description,
  close,
}) => {
  return (
    <main
      className={
        "fixed overflow-hidden z-40 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "right-0 w-screen bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="flex flex-col h-full w-full">
          <div className="bg-[#9F7A6E] h-auto lg:h-full w-screen lg:w-96 lg:fixed">
            <div className="w-full bg-[#e2d7d3] gap-1">
              <p className="font-sans not-italic font-bold text-md lg:text-2xl mx-5 leading-3 py-4 px-1 lg:leading-8">
                {title}
              </p>
            </div>
            <div className="gap-20 m-1 lg:m-5 p-1 lg:p-5 px-5">
              <p
                onClick={() => close()}
                className="text-white font-sans font-normal not-italic text-md lg:text-xl leading-normal lg:m-2 lg:p-4 p-2 md:py-4 cursor-pointer hover:bg-opacity-10 transition-colors flex items-center"
              >
                <img src={Arrow} alt="back arrow" className="mx-1 text-white" />
                &nbsp;Volver
              </p>
              <p className="text-left text-white font-light font-sans not-italic leading-tight lg:leading-10 text-xl lg:text-5xl m-1 lg:m-2 mr-8 px-2 py-4 lg:p-4 ">
                {subtitle}
              </p>
              <p className="text-left text-white font-sans font-normal not-italic text-md lg:text-xl leading-normal m-1 lg:m-2 px-2 py-4 lg:p-4">
                {description}
              </p>
              <img
                src={flowers}
                alt="flowers"
                className="w-1/0 lg:w-full mx-auto py-3"
              />
            </div>
          </div>
          <main className="h-full overflow-y-auto transition lg:pl-96">
            <div className="container min-w-screen min-h-screen grid px-6 mx-auto flex-grow flex-row overflow-hidden justify-center">
              {children}
            </div>
          </main>
        </div>
        {/*<footer className="bg-white relative w-screen mt-24">
            <Footer />
      </footer>*/}
      </section>
      <section
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
