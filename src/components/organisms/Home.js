import React from "react";
import sectionOneImage from "../../assets/section-one-home.jpg";

const Home = () => {
  return (
    <div>
      <section className="flex p-1 justify-between w-full p-10 items-center ">
        <div className="flex mb-12 origin-bottom-left w-1/3 m-2 mt-2 mx-12 flex-col">
          <h1 className="text-black not-italic font-sans text-justify font-light m-2 p-2 text-5xl leading-10">
            The big day is yet to come
          </h1>
          <p className="text-black not-italic font-sans m-2 p-2 text-justify font-normal text-xl leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex mb-12 origin-bottom-right mt-2 flex-col mx-24 flex-wrap w-1/2">
          <img
            src={sectionOneImage}
            alt="The big day of david peralta is yet to come"
            className="h-full w-full shadow-xl"
          />
        </div>
      </section>
      <section className="text-center">
        <h1>Soy una seccion</h1>
      </section>
      <section className="text-center">
        <h1>Soy una seccion</h1>
      </section>
      <section className="text-center">
        <h1>Soy una seccion</h1>
      </section>
    </div>
  );
};

export default Home;
