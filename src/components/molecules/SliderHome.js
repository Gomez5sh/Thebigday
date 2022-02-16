import React from "react";
import avatar from "../../assets/avatar.svg";
import useGetAxios from "../hooks/useGetAxios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const SliderHome = () => {
  const messages = useGetAxios({ endpoint: "donation/message" });
  return (
    <div className="mb-4 w-screen flex snap-x overflow-hidden">
      <Splide
        options={{
          rewind: true,
          type: "loop",
          width: "100%",
          pagination: false,
          easing: "ease",
          perPage: 1,
          start: 0,
          focus: "center",
          arrows: false,
          autoScroll: {
            speed: 4,
          },
          autoplay: {
            delay: 3000,
          },
          lazyLoad: true,
          destroy: true,
          center: true,
          drag: "free",
        }}
      >
        {messages && messages.data ? (
          messages.data.map((items, index) => {
            return (
              <SplideSlide key={items.id}>
                <div key={index} className="w-full shrink-0 snap-center">
                  <p
                    key={"message" + index}
                    className="mb-3 text-black not-italic font-sans text-center font-light mx-auto w-96 m-2 p-2 text-2xl leading-10 truncate"
                  >
                    {items.message}
                  </p>
                  <img
                    key={"avatar" + index}
                    src={avatar}
                    alt="Nuestro gran día está por llegar"
                    className="w-20 lg:h-auto mx-auto"
                  />
                  <p
                    key={"fill_name" + index}
                    className="mb-3 text-black my-10 not-italic font-sans text-center font-light w-full text-md leading-5"
                  >
                    {`${items.full_name}, ${items.relationship}`}
                  </p>
                </div>
              </SplideSlide>
            );
          })
        ) : (
          <>
            <p
              key={"empty" + 1}
              className="mb-3 text-black not-italic font-sans text-center font-light w-full m-2 p-2 text-2xl leading-10"
            >
              Los amamos y les deseamos lo mejor
            </p>
            <img
              key={"avatar" + 1}
              src={avatar}
              alt="Nuestro gran día está por llegar"
              className="w-20 lg:h-auto mx-auto"
            />
            <p
              key={"name" + 1}
              className="mb-3 text-black my-10 not-italic font-sans text-center font-light w-full text-md leading-5"
            >
              Amigos y familia
            </p>
          </>
        )}
      </Splide>
    </div>
  );
};

export default SliderHome;
