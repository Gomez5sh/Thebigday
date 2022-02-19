import React from "react";
import Drawer from "../organisms/Drawer";
import useGetAxios from "../hooks/useGetAxios";
import moment from "moment";

const Galery = ({ close, isOpen, setIsOpen }) => {
  const images = useGetAxios({ endpoint: "singleImage" });
  return (
    <Drawer
      close={close}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="NUESTRO GRAN DÍA"
      subtitle="Nuestros mejores momentos en fotos"
      description="Hoy puedo decir: ¡Hasta aquí nos ha ayudado el Señor! - 1 Samuel 7:12"
      children={
        <article className="min-h-full w-full p-4 lg:pb-10 flex flex-col space-y-6 overflow-y-scroll">
          <header className="p-4 font-sans not-italic text-xl leading-6"></header>
          {images &&
            images.data &&
            images.data.map((image, index) => {
              const date = moment(image.date._d).format("MMMM Do YYYY");
              return (
                <div key={index + "galery" + image.id} className="lg:p-4">
                  {" "}
                  <div
                    key={image.id + index + "galery"}
                    className="snap-center w-full transition rounded overflow-hidden h-full"
                  >
                    <div
                      key={image.id + index}
                      className="w-full lg:max-w-full lg:flex h-full p-1 gap-1"
                    >
                      <img
                        id={image.id}
                        src={image.file}
                        alt={image.message}
                        key={index}
                        onClick={() => window.open(image.file, "", "_blank")}
                        className="aspect-video object-cover h-50 lg:h-auto lg:w-1/5 w-auto md:p-2 shadow-xl border border-gray-100 cursor-pointer hover:shadow-2xl  "
                      />
                      <div
                        key={image.id + index + "mesage"}
                        className="bg-white lg:rounded-r p-4 flex flex-wrap flex-col justify-between leading-normal"
                      >
                        <div key={index + "comment"} className="mb-8">
                          <p
                            key={index + "p"}
                            className="text-sm text-gray-600 flex items-center"
                          >
                            {date}
                          </p>
                          <div
                            key={index + "mesage" + image.id}
                            className="text-gray-900 font-bold text-xl mb-2"
                          >
                            {image.title}
                          </div>
                          <p
                            key={index + "mesage" + image.id + index}
                            className="text-gray-700 text-base"
                          >
                            {image.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </article>
      }
    />
  );
};

export default Galery;
