import React from "react";
import DrawerLayout from "./DrawerLayout";

const Galery = ({ close, isOpen, setIsOpen }) => {
  return (
    <DrawerLayout
      close={close}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title="THE BIG DAY"
      subtitle="Owr big moments in photos"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore."
      Children={<div className="bg-red-200"></div>}
    />
  );
};

export default Galery;
