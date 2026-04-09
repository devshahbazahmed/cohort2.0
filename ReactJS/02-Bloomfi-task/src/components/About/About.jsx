import React from "react";
import "./About.css";
import gameMode from "../../assets/about_1.png";
import lessons from "../../assets/about_2.png";
import coaches from "../../assets/about_3.png";

const About = () => {
  return (
    <section id="about-section">
      <div id="about-title">
        <div id="title">About Horizon</div>
        <div id="about-content">
          <p>
            At Horizon, we don't just play tennis -- we live it. Since 2021, our
            club has been a home for players of all levels, from eager beginners
            to seasoned pros.
          </p>
        </div>
      </div>
      <div id="about-images">
        <img src={gameMode} alt="game-mode" />
        <img src={lessons} alt="game-mode" />
        <img src={coaches} alt="game-mode" />
      </div>
      <div id="about-facts">
        <h3 id="about-facts-title">A few more facts about us in numbers</h3>
        <div id="about-facts-content">
          <div className="facts">
            <p className="facts-title">12 000+</p>
            <p className="facts-content">Hours of play anually</p>
          </div>
          <div className="facts">
            <p className="facts-title">89%</p>
            <p className="facts-content">Player Retention Rate</p>
          </div>
          <div className="facts">
            <p className="facts-title">1,200+</p>
            <p className="facts-content">Active Members</p>
          </div>
          <div className="facts">
            <p className="facts-title">125+</p>
            <p className="facts-content">Annual Tournaments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
