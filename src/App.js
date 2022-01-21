import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/molecules/form";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Home from "./components/organisms/Home";
import Galery from "./components/molecules/Galery";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const actions = {
    close: () => {
      setIsOpen(!isOpen);
    },
  };
  return (
    <Router>
      <header className="bg-white border-collapse backdrop-blur-lg fixed divide-opacity-40 shadow-lg divide-dashed">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <div className="bg-white">
        <div className="min-h-screen min-w-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signs" element={<h1>Sings</h1>} />
            <Route path="/invitation/:id" element={<h1>Invitations</h1>} />
            <Route
              path="/form"
              element={
                <div className="App">
                  <div className="bg-grey-600  min-h-screen grid content-center">
                    <Form />
                  </div>
                </div>
              }
            />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
          <footer className="text-black p-2 mt-4">
            <Footer />
          </footer>
        </div>
      </div>
      <Galery {...actions} isOpen={isOpen} setIsOpen={setIsOpen} />
    </Router>
  );
}

export default App;
