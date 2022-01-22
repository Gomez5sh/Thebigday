import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/molecules/form";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Home from "./components/organisms/Home";
import Galery from "./components/molecules/Galery";
// import Songs from "./components/molecules/Songs";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const actions = {
    close: () => {
      setIsOpen(!isOpen);
    },
  };
  return (
    <Router>
      <header className={"bg-white fixed w-full z-30 top-0 shadow-lg p-3"}>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
      <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
      <div className="pt-24">
        <div className="min-w-screen">
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
          <footer className="text-black p-2 gap-5">
            <Footer />
          </footer>
        </div>
      </div>
      <Galery {...actions} isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* <Songs {...actions} isOpen={isOpen} setIsOpen={setIsOpen} /> */}
    </Router>
  );
}

export default App;
