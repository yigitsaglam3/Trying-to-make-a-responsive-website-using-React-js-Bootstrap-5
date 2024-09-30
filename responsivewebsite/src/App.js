import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/inc/Slider1";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Slider/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
