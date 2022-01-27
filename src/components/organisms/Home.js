import React from "react";
import CountDown from "../molecules/CountDown";
import sectionOneImage from "../../assets/section-one-home.png";
import sectionTwoBg from "../../assets/sectioTwobg.png";
import secrtionThreeBg from "../../assets/sectionThreebg.png";
import sectionTwoImage from "../../assets/camera.png";
import sectionThreeImage from "../../assets/song.png";
import SliderHome from "../molecules/SliderHome";

const Home = ({ stataSongs, setStataSongs, isOpen, setIsOpen }) => {
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
      <section
        style={{ backgroundImage: `url('${sectionTwoBg}')` }}
        className="flex justify-between w-full h-full items-center p-2 bg-[#9F7A6E] bg-no-repeat bg-center bg-cover bg-fixed lg:bg-left"
      >
        <div className="container max-w-5xl mx-auto m-8">
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="mb-3 text-white not-italic font-sans text-justify font-light w-full m-2 p-2 text-5xl leading-10">
                Owr big moments
              </h3>
              <h3 className="mb-3 text-white bg-black w-full lg:w-1/2 text-bold not-italic font-sans text-center font-light m-2 p-2 text-5xl leading-10">
                in photos
              </h3>
              <p className="mb-8 text-white not-italic font-sans m-2 p-2 text-justify font-normal w-full text-xl leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white rounded-md p-1 w-full lg:w-1/2 hover:text-black hover:bg-white/50 transition-colors border-2 border-white"
              >
                See more
              </button>
            </div>
            <div className="w-1/2 lg:w-1/3 p-6 flex justify-center items-center mx-10 ">
              <img
                src={sectionTwoImage}
                alt="The big day of david peralta is yet to come"
                className="w-full sm:h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center w-full items-center border-b py-8 bg-[#e2d7d3]">
        <SliderHome />
      </section>
      <section
        style={{ backgroundImage: `url('${secrtionThreeBg}')` }}
        className="flex justify-between w-full  items-center p-2 bg-[#9F7A6E] bg-no-repeat bg-center bg-cover bg-fixed lg:bg-left"
      >
        <div className="container max-w-5xl mx-auto m-8">
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-1/2 lg:w-1/3 p-6 flex justify-center items-center mx-10  ">
              <img
                src={sectionThreeImage}
                alt="The big day of david peralta is yet to come"
                className="w-full sm:h-auto"
              />
            </div>
            <div className="w-5/6 lg:w-1/2 p-6">
              <h3 className="mb-3 text-white not-italic font-sans text-justify font-light w-full m-2 p-2 text-5xl leading-10">
                Owr big moments
              </h3>
              <h3 className="mb-3 text-white bg-black w-full lg:w-1/2 text-bold not-italic font-sans text-center font-light m-2 p-2 text-5xl leading-10">
                in songs
              </h3>
              <p className="mb-8 text-white not-italic font-sans m-2 p-2 text-justify font-normal w-full text-xl leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                onClick={() => setStataSongs(!stataSongs)}
                className="text-white rounded-md p-1 w-full lg:w-1/2 hover:text-black hover:bg-white/50 transition-colors border-2 border-white"
              >
                See more
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
