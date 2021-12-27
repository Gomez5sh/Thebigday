import "./App.css";
import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/molecules/form";

function App() {
  return (
    <div className="App">
      <div className="bg-grey-600  min-h-screen grid content-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
