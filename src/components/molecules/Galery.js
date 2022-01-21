import React from "react";
import Footer from "./Footer";
import axios from "axios";

const Galery = ({ isOpen, setIsOpen }) => {
  const url = process.env.REACT_APP_BACKEND

  const [images, setImages] = React.useState([]);

  const getImages = async () => {
    const result = await axios(url + "/api/v1/singleImage", { method: "GET", headers: { "Content-Type": "application/json" } });
    setImages(result.data.results);
  };

  React.useEffect(() => {
    try {
      getImages();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="flex justify-between items-center h-screen max-h-full w-full">
        <div className="w-full max-w-md bg-[#9F7A6E] h-full">
          <div className="w-full bg-[#e2d7d3] p-1">
            <p className="font-sans not-italic font-bold text-2xl mx-5 leading-8">
              THE BIG DAY
            </p>
          </div>
          <div className="p-20 m-5">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="text-white font-sans font-normal not-italic text-xl leading-normal m-2 p-4 cursor-pointer hover:bg-opacity-10 transition-colors"
            >
              Go Back
            </p>
            <p className="text-white font-light  font-sans not-italic leading-10 text-5xl m-2 p-4 ">
              Owr big moments in photos
            </p>
            <p className="text-white font-sans font-normal not-italic text-xl leading-normal m-2 p-4">
              Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="h-full overflow-scroll">
          <h1>Galery</h1>
          <div className="container w-100 lg:w-4/5 mx-auto flex flex-col">
            {images.map((image) => {
              return (
                <div key={image.id} className="flex flex-col md:flex-row overflow-hidden bg-white mt-4 w-100 mx-2">
                  <div className="h-64 w-auto md:w-1/2">
                    <img src={image.file} alt={image.title} className="inset-0 h-300 w-300 object-cover object-center" />
                  </div>
                  <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                    <h3 className="font-semibold text-lg leading-tight truncate">{ image.title }</h3>
                    <p className="mt-2">
                      {image.message}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="text-black">
        <Footer />
      </footer>
    </>
  );
};

export default Galery;
