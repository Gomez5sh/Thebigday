import React from "react";
import avatar from "../../assets/avatar.svg";
import useGetAxios from "../hooks/useGetAxios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const SliderHome = () => {
  const messages = useGetAxios({ endpoint: "donation/message" });

  console.log(messages);

  return (
    <div className="mb-4 w-screen flex snap-x overflow-hidden">
      <Splide
        options={{
          rewind: true,
          type: "loop",
          width: true,
          pagination: false,
          easing: "ease",
          perPage: 1,
          start: 0,
          focus: "center",
          arrows: false,
          autoScroll: {
            speed: 2,
          },
          lazyLoad: true,
          destroy: true,
          drag: "free",
        }}
      >
        {messages && messages.data ? (
          messages.data.map((items) => {
            return (
              <SplideSlide>
                <div className="w-full shrink-0 snap-center">
                  <p className="mb-3 text-black not-italic font-sans text-center font-light w-full m-2 p-2 text-2xl leading-10">
                    {items.message}
                  </p>
                  <img
                    src={avatar}
                    alt="The big day of david peralta is yet to come"
                    className="w-20 lg:h-auto mx-auto"
                  />
                  <p className="mb-3 text-black my-10 not-italic font-sans text-center font-light w-full text-md leading-5">
                    {`${items.full_name}, ${items.relationship}`}
                  </p>
                </div>
              </SplideSlide>
            );
          })
        ) : (
          <>
            <p className="mb-3 text-black not-italic font-sans text-center font-light w-full m-2 p-2 text-2xl leading-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <img
              src={avatar}
              alt="The big day of david peralta is yet to come"
              className="w-20 lg:h-auto mx-auto"
            />
            <p className="mb-3 text-black my-10 not-italic font-sans text-center font-light w-full text-md leading-5">
              Harry Potter
            </p>
          </>
        )}
      </Splide>
    </div>
  );
};

export default SliderHome;
