import React from "react";
import "tailwindcss/tailwind.css";
import Form from "./components/molecules/form";
import Navbar from "./components/molecules/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-white">
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;
