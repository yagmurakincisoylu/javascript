import React from "react";
import heroImg from "../icons/photo-grid.png"

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <img src={heroImg} className="hero-img" />
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  );
}

export default Hero;