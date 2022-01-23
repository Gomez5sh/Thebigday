import React from "react";
import CountDown from "../molecules/CountDown";
import sectionOneImage from "../../assets/section-one-home.png";

const Home = () => {
  return (
    <div className="min-w-screen">
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="mb-3  text-black not-italic font-sans text-justify font-light w-full m-2 p-2 text-5xl leading-10">
                The big day is yet to come
              </h3>
              <p className="mb-8 text-black not-italic font-sans m-2 p-2 text-justify font-normal w-full text-xl leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
              <CountDown />
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                src={sectionOneImage}
                alt="The big day of david peralta is yet to come"
                className="w-full sm:h-auto mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

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
