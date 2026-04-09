import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Service from "./components/Service/Service.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <hr />
      <Service />
    </>
  );
};

export default App;
