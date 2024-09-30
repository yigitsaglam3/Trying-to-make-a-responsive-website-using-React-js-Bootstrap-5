import React from "react";
import { Link } from "react-router-dom";
import fmpp from "D:/responsivewebsite/responsivewebsite/src/components/images/fmpp.jpg"; // Doğru resim yolunu import ettik.

import "./Slider1.css";

function Slider1() {
  return (
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={fmpp} className="d-block w-100" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src={fmpp} className="d-block w-100" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src={fmpp} className="d-block w-100" alt="Third slide" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    
  );
}

export default Slider1;
