import React from "react";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/inc/Slider1";
import "./App.css";
import Footer from "./components/inc/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element= {<Services/>}/>
        </Routes>

        <Footer/>
      </div>
    </Router>
  );
}

export default App;
