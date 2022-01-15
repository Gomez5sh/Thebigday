import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/molecules/form";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="bg-white">
        <section>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="galery" element={<h1>Galery</h1>} />
            <Route path="signs" element={<h1>Sings</h1>} />
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
        </section>
        <section>
          <h1>prueba</h1>
        </section>
        {/* FOOTER */}
        <footer className="bg-red-200 text-black pt-20 pb-5">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
