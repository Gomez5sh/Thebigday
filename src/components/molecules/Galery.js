import React, { useEffect, useState } from "react";
import DrawerLayout from "./DrawerLayout";
import axios from "axios";

const Galery = ({ close, isOpen, setIsOpen }) => {
  const url = process.env.REACT_APP_BACKEND;

  const [images, setImages] = useState([]);

  console.log(images)

  useEffect(() => {
    try {
      axios(url + "/singleImage/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response)
          setImages(response.data);
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
         
        </div>
      }
    />
  );
};

export default Galery;
