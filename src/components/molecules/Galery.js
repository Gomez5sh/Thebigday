import React, { useCallback, useState, useEffect } from "react";
import Drawer from "../organisms/Drawer";
import useGetAxios from "../hooks/useGetAxios";
import moment from "moment";
import ImageViewer from "react-simple-image-viewer";

const Galery = ({ close, isOpen, setIsOpen }) => {
  const images = useGetAxios({ endpoint: "singleImage" });
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);
  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  const imageArray = [];
  //make a copy of imageArray and push the image to it and then push the imageArray to the imageArray
  imageArray.push(images.data.map((image) => image.file));
  console.log(imageArray);
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
        <div
          key="galery"
          className="flex flex-col justify-center columns-auto p-24 items-center w-auto max-h-screen overflow-y-scroll snap snap-mandatory object-top"
        >
          {images &&
            images.data &&
            images.data.map((image, index) => {
              const date = moment(image.date._d).format("MMMM Do YYYY");
              return (
                <>
                  <div key={index + "galery" + image.id} className="p-4">
                    {" "}
                    <div
                      key={image.id + index + "galery"}
                      className="snap-center w-full transition rounded overflow-hidden h-full"
                    >
                      <div
                        key={image.id + index}
                        className=" w-full lg:max-w-full lg:flex h-full p-1 gap-1"
                      >
                        <img
                          id={image.id}
                          src={image.file}
                          alt={image.message}
                          key={index}
                          onClick={() => openImageViewer(index)}
                          className="aspect-video object-cover h-50 lg:h-auto lg:w-1/5 w-auto p-2 shadow-xl border border-gray-100 cursor-pointer hover:shadow-2xl  "
                        />
                        {isViewerOpen && (
                          <ImageViewer
                            src={imageArray}
                            currentIndex={currentImage}
                            disableScroll={false}
                            closeOnClickOutside={true}
                            onClose={closeImageViewer}
                          />
                        )}
                        <div
                          key={image.id + index + "mesage"}
                          className="bg-white lg:rounded-r p-4 flex flex-wrap flex-col justify-between leading-normal"
                        >
                          <div className="mb-8">
                            <p className="text-sm text-gray-600 flex items-center">
                              {date}
                            </p>
                            <div className="text-gray-900 font-bold text-xl mb-2">
                              {image.title}
                            </div>
                            <p className="text-gray-700 text-base">
                              {image.message}
                            </p>
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
