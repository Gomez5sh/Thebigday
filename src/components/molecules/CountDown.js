import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const CountDown = () => {
  const [timeState, setTime] = useState({
    D: 0,
    H: 0,
    M: 0,
    S: 0,
  });

  useEffect(() => {
    setInterval(() => {
      const count = new Date("March 12, 2022  14:30:00").getTime();
      const now = new Date().getTime();
      const time = count - now;
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);
      setTime({
        D: days,
        H: hours,
        M: minutes,
        S: seconds,
      });
    }, 1000);
  }, []);
  
  return (
    <div className="flex justify-evenly text-center p-6">
      <div>
        <div className="flex justify-center text-center">
          <h3 className="bg-[#ece4e2] shadow-xl font-sans not-italic font-medium text-4xl p-5 w-20 leading-10">
            {timeState.D}
          </h3>
        </div>
        <h3 className="font-sans not-italic font-medium text-4xl m-2 leading-10">
          D
        </h3>
      </div>
      <p className="font-sans not-italic font-medium text-4xl p-5 leading-10">
        :
      </p>
      <div>
        <div className="flex text-center">
          <h3 className="bg-[#ece4e2] shadow-xl font-sans not-italic font-medium text-4xl p-5 w-20 leading-10">
            {timeState.H}
          </h3>
        </div>
        <h3 className="font-sans not-italic font-medium text-4xl m-2 leading-10">
          H
        </h3>
      </div>
      <p className="font-sans not-italic font-medium text-4xl p-5 leading-10">
        :
      </p>
      <div>
        <div className="flex text-center">
          <h3 className="bg-[#ece4e2] shadow-xl font-sans not-italic font-medium text-4xl p-5 w-20 leading-10">
            {timeState.M}
          </h3>
        </div>
        <h3 className="font-sans not-italic font-medium text-4xl m-2 leading-10">
          M
        </h3>
      </div>
      <p className="font-sans not-italic font-medium text-4xl p-5 leading-10">
        :
      </p>
      <div>
        <div className="flex text-center">
          <h3 className="bg-[#ece4e2] shadow-xl font-sans not-italic font-medium text-4xl p-5 w-20 leading-10">
            {timeState.S}
          </h3>
        </div>
        <h3 className="font-sans not-italic font-medium text-4xl m-2 leading-10">
          S
        </h3>
      </div>
    </div>
  );
};

export default CountDown;
