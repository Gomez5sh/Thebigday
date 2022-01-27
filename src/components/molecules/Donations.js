import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Drawer from "../organisms/Drawer";
import SliderHome from "./SliderHome";
import axios from "axios";

const Donations = ({ stataDonatios, setStataDonatios, closeDonations }) => {
  const url = process.env.REACT_APP_BACKEND;
  const [fomrState, setFormState] = useState({
    full_name: "",
    relationship: "",
    message: "",
    urlRadio: "",
  });
  const { urlRadio } = fomrState;
  const onFinis = (event) => {
    event.preventDefault();
    try {
      axios(url + "/donation/message/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: {
          full_name: fomrState.full_name,
          relationship: fomrState.relationship,
          message: fomrState.message,
        },
      })
        .then((response) => {
          setFormState({
            full_name: "",
            relationship: "",
            message: "",
          });
          closeDonations();
          window.open(urlRadio, "", "_blank");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Drawer
      close={closeDonations}
      isOpen={stataDonatios}
      setIsOpen={setStataDonatios}
      title="THE BIG DAY"
      subtitle="Donations"
      description="Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore."
      children={
        <div className="flex flex-col h-full overflow-y-scroll snap snap-mandatory">
          <div className="contents w-full justify-center my-0 mx-auto p-6 bg-white items-center">
            <div className="flex p-6 w-full justify-center items-center ">
              <form action="form" onSubmit={onFinis}>
                <div className="flex flex-wrap -mx-3 form-group mb-6">
                  <h1 className="font-sans text-3xl font-normal not-italic leading-10">
                    Make a donation
                  </h1>
                  <div className="w-full p-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-full-name"
                    >
                      Personalization
                    </label>
                    <input
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-[#9f7a6e] focus:outline-none"
                      id="grid-first-name"
                      type="text"
                      placeholder="Name"
                      required="required"
                      onChange={(event) => {
                        setFormState({
                          ...fomrState,
                          full_name: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="w-full p-3">
                    <select
                      className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid 
                    border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#9f7a6e] focus:outline-none"
                      aria-label="select"
                      required="required"
                      defaultValue="Open this select menu"
                      onChange={(event) => {
                        setFormState({
                          ...fomrState,
                          relationship: event.target.value,
                        });
                      }}
                    >
                      <option key="1" value="Open this select menu">
                        Open this select menu
                      </option>
                      <option key="2" value="David's Friend">
                        David's Friend
                      </option>
                      <option key="3" value="Vivi`s Friend">
                        Vivi`s Friend
                      </option>
                      <option key="4" value="David's Family">
                        David's Family
                      </option>
                      <option key="5" value="Vivi`s Family">
                        Vivi`s Family
                      </option>
                      <option key="6" value="friends of the couple">
                        friends of the couple
                      </option>
                    </select>
                  </div>
                  <div className="w-full p-3">
                    <textarea
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid 
                    border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#9f7a6e] focus:outline-none"
                      id="textArea"
                      rows="4"
                      required="required"
                      placeholder="Your message"
                      onChange={(event) => {
                        setFormState({
                          ...fomrState,
                          message: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="w-full px-3 m-1">
                    <button
                      className="bg-[#9f7a6e]/80 hover:bg-[#9f7a6e] text-white font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline mb-15"
                      type="submit"
                    >
                      Go to donate
                    </button>
                    <div className="w-full form-group mb-6 m-1">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-full-name"
                      >
                        Donation method
                      </label>
                      <div className="flex flex-wrap -mx-3">
                        <div className="flex p-5 w-full m-2 bg-white shadow-xl border border-solid border-gray-300 rounded">
                          <input
                            id="radio-nequi"
                            type="radio"
                            name="radio-nequi"
                            value="nequi"
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#9f7a6e] bg-white checked:bg-[#9f7a6e] checked:border-[#9f7a6e] 
                            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            onClick={() =>
                              setFormState({
                                ...fomrState,
                                urlRadio:
                                  "https://recarga.nequi.com.co/bdigitalpsl/#!/",
                              })
                            }
                          />
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mx-2"
                            htmlFor="grid-full-name"
                          >
                            <span className="text-black text-strong">
                              Nequi
                            </span>
                            <br />
                            <span className="text-gray-700">517 265 5679</span>
                          </label>
                        </div>
                        <div className="flex p-5 w-full m-2 bg-white shadow-xl border border-solid border-gray-300 rounded">
                          <input
                            id="radio-daviplata"
                            type="radio"
                            name="radio-daviplata"
                            value="daviplata"
                            className="form-check-input appearance-none rounded-full h-4 w-4 border border-[#9f7a6e] bg-white checked:bg-[#9f7a6e] checked:border-[#9f7a6e] 
                            focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            onClick={() =>
                              setFormState({
                                ...fomrState,
                                urlRadio:
                                  "https://recarga-daviplata.epayco.co/meter-plata",
                              })
                            }
                          />
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mx-2"
                            htmlFor="grid-full-name"
                          >
                            <span className="text-black text-strong">
                              Daviplata
                            </span>
                            <br />
                            <span className="text-gray-700">517 265 5679</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <section className="flex w-full mx-auto bg-white items-center lg:form-group lg:mb-6">
            <SliderHome />
          </section>
        </div>
      }
    />
  );
};

export default Donations;
