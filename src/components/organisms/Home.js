import React from "react";
import CountDown from "../molecules/CountDown";
import sectionOneImage from "../../assets/section-one-home.png";
import axios from "axios";

const Home = () => {
  const url = process.env.REACT_APP_BACKEND;
  const bakendExample = () => {
    axios(url, {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(bakendExample());

  return (
    <div className="min-h-full">
      <section className="flex justify-between w-full items-center p-10">
        <div className="flex justify-centerbetwee norigin-bottom-left w-1/3 m-2 mx-12 flex-col items-center">
          <h1 className="text-black not-italic font-sans text-justify font-light w-full m-2 p-2 text-5xl leading-10">
            The big day is yet to come
          </h1>
          <p className="text-black not-italic font-sans m-2 p-2 text-justify font-normal w-full text-xl leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <CountDown />
        </div>
        <div className="flex origin-bottom-right mt-2 flex-col mx-24 flex-wrap w-1/2">
          <img
            src={sectionOneImage}
            alt="The big day of david peralta is yet to come"
            className="h-auto w-full"
          />
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
