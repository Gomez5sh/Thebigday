import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import img from "../../assets/image-01.svg";

const Form = () => {
  const [fomrState, setFormState] = useState({
    name: "",
    email: "",
    age: "",
  });

  const onFinis = (event) => {
    event.preventDefault();
    console.log(fomrState);
  };
  return (
    <div className="flex max-w-4xl my-0 mx-auto p-6 rounded-lg bg-white shadow-xl items-center">
      <div className="flex flex-col left-0">
        <img src={img} alt="logo" className="w-full px-6" />
      </div>
      <div className="flex flex-col right-0">
        <form action="form" onSubmit={onFinis}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-full-name"
              >
                Nombre completo
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
                type="text"
                placeholder="Nombre"
                onChange={(event) => {
                  setFormState({
                    ...fomrState,
                    name: event.target.value,
                  });
                }}
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                Correo
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setFormState({
                    ...fomrState,
                    email: event.target.value,
                  });
                }}
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-age"
              >
                Edad
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-age"
                type="number"
                placeholder="Edad"
                onChange={(event) => {
                  setFormState({
                    ...fomrState,
                    age: event.target.value,
                  });
                }}
              />
            </div>
            <div className="w-full px-3 m-1 max-w-lg">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 w-full px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
