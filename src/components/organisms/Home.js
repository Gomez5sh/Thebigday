import React from "react";
import CountDown from "../molecules/CountDown";
import sectionOneImage from "../../assets/section-one-home.png";

const Home = () => {
  return (
    <div className="min-w-screen">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <section className="justify-between w-full items-center container ">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left  norigin-bottom-left">
            <h1 className="text-black not-italic font-sans text-justify font-light w-full m-2 p-2 text-5xl leading-10">
              The big day is yet to come
            </h1>
            <p className="text-black not-italic font-sans m-2 p-2 text-justify font-normal w-full text-xl leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <CountDown />
          </div>
          <div className="mx-auto w-2/4 overflow-hidden">
            <img
              src={sectionOneImage}
              alt="The big day of david peralta is yet to come"
              className="w-full object-cover object-center"
            />
          </div>
        </section>
      </div>
      <section className="flex justify-between w-full items-center p-2 bg-[#9F7A6E]">
        <h1>Soy una seccion</h1>
      </section>
      <section className="flex justify-between w-full items-center p-2 bg-[#e2d7d3]">
        <h1>Soy una seccion</h1>
      </section>
      <section className="flex justify-between w-full items-center p-2 bg-[#9F7A6E]">
        <h1>Soy una seccion</h1>
      </section>
    </div>
  );
};

export default Home;
