import React from "react";
import "./Service.css";
import explore from "../../assets/explore.png";
import access from "../../assets/court.png";

const Service = () => {
  return (
    <section id="service-section">
      <div id="explore">
        <div id="explore-title">Services</div>
        <p id="explore-content">
          Explore our full range of coaching, training, and tennis experiences.
          From first serve to match point -- we've got the right program for
          you.
        </p>
        <button id="book-now">
          Book Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </button>
      </div>
      <div id="training">
        <img src={explore} alt="explore" />
      </div>
      <div id="access">
        <img src={access} alt="access" />
      </div>
    </section>
  );
};

export default Service;
