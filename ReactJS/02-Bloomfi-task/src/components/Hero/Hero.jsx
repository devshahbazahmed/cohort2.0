import React from "react";
import heroImage from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <img src={heroImage} alt="hero-section" />
    </section>
  );
};

export default Hero;
