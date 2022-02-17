/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Drawer from "../organisms/Drawer";
import SliderHome from "./SliderHome";
import axios from "axios";
import Modal from "./Modal";
import { RadioGroup } from "@headlessui/react";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const Donations = ({ stataDonatios, setStataDonatios, closeDonations }) => {
  const url = process.env.REACT_APP_BACKEND;
  const [fomrState, setFormState] = useState({
    full_name: "",
    relationship: "",
    message: "",
    urlRadio: "",
  });
  let [isOpen, setIsOpen] = useState(false);
  const plans = [
    {
      name: "Nequi",
      phone: "517 265 5676",
      url: "https://recarga.nequi.com.co/bdigitalpsl/#!/",
    },
    {
      name: "Daviplata",
      phone: "517 265 5676",
      url: "https://recarga-daviplata.epayco.co/meter-plata",
    },
  ];
  const [selected, setSelected] = useState(plans[0]);

  useEffect(() => {
    if (stataDonatios === false) setSelected(plans[0]);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onChangeF = (event) => {
    setSelected(event);
    setFormState({
      ...fomrState,
      urlRadio: event,
    });
  };

  const { urlRadio } = fomrState;

  const onFinis = (event) => {
    event.preventDefault();
    if (urlRadio !== "") {
      window.open(urlRadio, "", "_blank");
    }
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
          setSelected(plans[0]);
          openModal();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Drawer
        close={closeDonations}
        isOpen={stataDonatios}
        setIsOpen={setStataDonatios}
        title="NUESTRO GRAN DÍA"
        subtitle="Donaciones"
        description="Den, y recibirán. Lo que den a otros les será devuelto por completo: apretado, sacudido para que haya lugar para más, desbordante y derramado sobre el regazo. La cantidad que den determinará la cantidad que recibirán a cambio. - Lucas 6:38"
        children={
          <div className="flex flex-col h-full overflow-y-scroll snap snap-mandatory">
            <div className="contents w-full justify-center my-0 mx-auto p-6 bg-white items-center">
              <div className="flex p-6 w-full justify-center items-center ">
                <form action="form">
                  <div className="flex flex-wrap -mx-3 form-group mb-6">
                    <h1 className="font-sans text-3xl font-normal not-italic leading-10">
                      Realiza una donación
                    </h1>
                    <div className="w-full p-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-full-name"
                      >
                        Deja un mensaje
                      </label>
                      <input
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                    focus:text-gray-700 focus:bg-white focus:border-[#9f7a6e] focus:outline-none"
                        id="grid-first-name"
                        type="text"
                        placeholder="Nombre"
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
                        <option key="1" value="Selecciona una opción">
                          Selecciona una opción
                        </option>
                        <option key="2" value="Amigos de David">
                          Amigos de David
                        </option>
                        <option key="3" value="Amigos de Vivi">
                          Amigos de Vivi
                        </option>
                        <option key="4" value="Familiar de David">
                          Familiar de David
                        </option>
                        <option key="5" value="Familiar de Vivi">
                          Familiar de Vivi
                        </option>
                        <option key="6" value="Amigos en común">
                          Amigos en común
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
                        placeholder="Tu mensaje"
                        onChange={(event) => {
                          setFormState({
                            ...fomrState,
                            message: event.target.value,
                          });
                        }}
                      />
                    </div>
                    <div className="w-full px-3 m-1">
                      <div className="w-full form-group mb-6 m-1">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-full-name"
                        >
                          Método de donación
                        </label>

                        <div className="flex flex-wrap -mx-3">
                          <div className="w-full max-w-full mx-auto mb-3">
                            <RadioGroup value={selected} onChange={onChangeF}>
                              <RadioGroup.Label className="sr-only">
                                Server size
                              </RadioGroup.Label>
                              <div className="space-y-2">
                                {plans.map((plan) => (
                                  <RadioGroup.Option
                                    key={plan.name}
                                    value={plan.url}
                                    className={({ active, checked }) =>
                                      `${
                                        active
                                          ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                          : ""
                                      }
                  ${
                    checked
                      ? "bg-blue-900 bg-opacity-75 text-white"
                      : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <div className="flex items-center justify-between w-full">
                                          <div className="flex items-center">
                                            <div className="text-sm">
                                              <RadioGroup.Label
                                                as="p"
                                                className={`font-medium  ${
                                                  checked
                                                    ? "text-white"
                                                    : "text-gray-900"
                                                }`}
                                              >
                                                {plan.name}
                                              </RadioGroup.Label>
                                              <RadioGroup.Description
                                                as="span"
                                                className={`inline ${
                                                  checked
                                                    ? "text-sky-100"
                                                    : "text-gray-500"
                                                }`}
                                              >
                                                <span>{plan.phone}</span>
                                              </RadioGroup.Description>
                                            </div>
                                          </div>
                                          {checked && (
                                            <div className="flex-shrink-0 text-white">
                                              <CheckIcon className="w-6 h-6" />
                                            </div>
                                          )}
                                        </div>
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                          <button
                            className="bg-[#9f7a6e]/80 hover:bg-[#9f7a6e] text-white font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline mb-15"
                            onClick={onFinis}
                          >
                            Ir a donar
                          </button>
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
      <Modal
        closeModal={closeModal}
        openModal={openModal}
        isOpen={isOpen}
        title="Gracias por tu donación"
        content="Deseamos que tu generosidad te bendiga a ti también."
      />
    </>
  );
};

export default Donations;
