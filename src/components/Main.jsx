import React from "react";
import hero from "../assets/hero.jpg";

const Main = () => {
  return (
    <div className="container my-4">
      <div className="card border-0 shadow">
        <img src={hero} className="card-img" alt="hero" />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="text-white">
            <h1 className="display-4 fw-bold">New Arrivals</h1>
            <p className="lead">Best products at best price</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;