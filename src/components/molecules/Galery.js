import React, { useEffect, useState } from "react";
import DrawerLayout from "./DrawerLayout";
import axios from "axios";

const Galery = ({ close, isOpen, setIsOpen }) => {
  const url = process.env.REACT_APP_BACKEND;

  const [images, setImages] = useState([]);

  useEffect(() => {
    try {
      axios(url + "/api/v1/singleImage", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          setImages(response.data?.results);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <DrawerLayout
      close={close}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="THE BIG DAY"
      subtitle="Owr big moments in photos"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore."
      Children={
        <div className="bg-red-200">
          {images.map((image) => {
            return (
              <>
                <h1> hola</h1>
              </>
            );
          })}
        </div>
      }
    />
  );
};

export default Galery;
