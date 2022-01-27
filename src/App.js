import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/molecules/Footer";
import Home from "./components/organisms/Home";
import Galery from "./components/molecules/Galery";
import Donations from "./components/molecules/Donations";
import Songs from "./components/molecules/Songs";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [stataDonatios, setStataDonatios] = useState(false);
  const [stataSongs, setStataSongs] = useState(false);
  const actions = {
    close: () => {
      setIsOpen(!isOpen);
    },
    closeDonations: () => {
      setStataDonatios(!stataDonatios);
    },
    closeSongs: () => {
      setStataSongs(!stataSongs);
    },
  };

  return (
    <Router>
      <header className={"bg-white fixed w-full z-30 top-0 shadow-lg p-3"}>
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          stataDonatios={stataDonatios}
          setStataDonatios={setStataDonatios}
          stataSongs={stataSongs}
          setStataSongs={setStataSongs}
        />
      </header>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      <div className="pt-15">
        <div className="min-w-screen">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  stataSongs={stataSongs}
                  setStataSongs={setStataSongs}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              }
            />
            {/*<Route path="/signs" element={<h1>Sings</h1>} />
            <Route path="/donations" element={<Donatios />} />
  <Route path="*" element={<h1>404</h1>} />*/}
          </Routes>
          <footer className="bg-white">
            <Footer />
          </footer>
        </div>
      </div>
      <Galery {...actions} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Donations
        {...actions}
        stataDonatios={stataDonatios}
        setStataDonatios={setStataDonatios}
      />
      <Songs
        {...actions}
        stataSongs={stataSongs}
        setStataSongs={setStataSongs}
      />
    </Router>
  );
}

export default App;
