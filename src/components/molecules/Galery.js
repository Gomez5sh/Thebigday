import React from "react";
import Drawer from "../organisms/Drawer";
import useGetAxios from "../hooks/useGetAxios";
import moment from "moment";

const Galery = ({ close, isOpen, setIsOpen }) => {
  const images = useGetAxios({ endpoint: "singleImage" });
  console.log("soy images", images);
  return (
    <Drawer
      close={close}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="THE BIG DAY"
      subtitle="Owr big moments in photos"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore."
      children={
        <div className="flex flex-col gap-6 justify-center items-center p-20 w-auto max-h-screen overflow-y-scroll snap snap-mandatory">
          {images.data.map((image, index) => {
            const date = moment(image.date._d).format("MMMM Do YYYY");
            console.log("soy date", date);
            return (
              <div className="flex w-full h-auto mb-24" key={index}>
                <div className="snap-center shrink-0 w-full lg:w-1/5 p-2 rounded overflow-hidden shadow-lg h-full">
                  <div className="h-full w-full">
                    <div>
                      <img
                        id={image.id}
                        src={image.file}
                        alt={image.message}
                        className="aspect-video object-cover h-full w-full"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <p>{date}</p>
                  <h2 className="text-2xl font-bold">{image.title}</h2>
                  <p>{image.message}</p>
                </div>
              </div>
            );
          })}
        </div>
      }
    />
  );
};

export default Galery;
