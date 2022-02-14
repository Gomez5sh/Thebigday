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
              <h3 className="mb-3  text-black not-italic font-sans text-left font-light w-full m-2 p-2 text-5xl leading-tight">
                El gran día está por llegar
              </h3>
              <p className="mb-8 text-black not-italic font-sans m-2 p-2 text-left font-normal w-full text-xl leading-7">
                ¡Alégrense, habitantes de Jerusalén!
                ¡Alégrense en el Señor su Dios!
                Pues la lluvia que él envía demuestra su fidelidad.
                Volverán las lluvias de otoño,
                así como las de primavera. - Joel 2:23
              </p>
              <CountDown />
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                src={sectionOneImage}
                alt="El gran día está por llegar"
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
              <h3 className="mb-3 text-white not-italic font-sans text-left font-light w-full m-2 p-2 text-5xl leading-10">
                Nuestros mejores momentos
              </h3>
              <h3 className="mb-3 text-white bg-black w-full lg:w-1/2 text-bold not-italic font-sans text-center font-light m-2 p-2 text-5xl leading-10">
                en fotos
              </h3>
              <p className="mb-8 text-white not-italic font-sans m-2 p-2 text-left font-normal w-full text-xl leading-7">
                Hoy puedo decir: ¡Hasta aquí nos ha ayudado el Señor! - 1 Samuel 7:12
              </p>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white rounded-md p-1 w-full lg:w-1/2 hover:text-black hover:bg-white/50 transition-colors border-2 border-white"
              >
                Ver más
              </button>
            </div>
            <div className="w-1/2 lg:w-1/3 p-6 flex justify-center items-center mx-10 ">
              <img
                src={sectionTwoImage}
                alt="Nuestro gran día está por llegar"
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
                alt="Nuestro gran día está por llegar"
                className="w-full sm:h-auto"
              />
            </div>
            <div className="w-5/6 lg:w-1/2 p-6">
              <h3 className="mb-3 text-white not-italic font-sans text-left font-light w-full m-2 p-2 text-5xl leading-10">
                Nuestro gran día
              </h3>
              <h3 className="mb-3 text-white bg-black w-full lg:w-1/2 text-bold not-italic font-sans text-center font-light m-2 p-2 text-4xl leading-10">
                en canciones
              </h3>
              <p className="mb-8 text-white not-italic font-sans m-2 p-2 text-left font-normal w-full text-xl leading-7">
                ¡Den gracias al Señor, porque él es bueno!
                Su fiel amor perdura para siempre. - 1 Crónicas 16:34
              </p>
              <button
                onClick={() => setStataSongs(!stataSongs)}
                className="text-white rounded-md p-1 w-full lg:w-1/2 hover:text-black hover:bg-white/50 transition-colors border-2 border-white"
              >
                Ver más
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
