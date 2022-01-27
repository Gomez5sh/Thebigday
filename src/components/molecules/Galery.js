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
      title="THE BIG DAY"
      subtitle="Owr big moments in photos"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore."
      children={
        <div className="flex flex-col justify-center columns-auto p-24 items-center w-auto max-h-screen overflow-y-scroll snap snap-mandatory object-top">
          {images.data.map((image, index) => {
            const date = moment(image.date._d).format("MMMM Do YYYY");
            return (
              <>
                <div class="p-4">
                  <div className="snap-center w-full transition rounded overflow-hidden h-full">
                    <div class=" w-full lg:max-w-full lg:flex h-full p-2">
                      <img
                        id={image.id}
                        src={image.file}
                        alt={image.message}
                        className="aspect-video object-cover h-50 lg:h-auto lg:w-1/5 w-auto p-2 shadow-xl border border-gray-100"
                      />
                      <div class="bg-white lg:rounded-r p-4 flex flex-wrap flex-col justify-between leading-normal">
                        <div class="mb-8">
                          <p class="text-sm text-gray-600 flex items-center">
                            {date}
                          </p>
                          <div class="text-gray-900 font-bold text-xl mb-2">
                            {image.title}
                          </div>
                          <p class="text-gray-700 text-base">{image.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      }
    />
  );
};

export default Galery;
