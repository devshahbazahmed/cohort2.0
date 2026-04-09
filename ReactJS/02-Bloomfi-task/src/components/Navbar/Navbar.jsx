import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar">
      <div id="logo">Horizon Courts</div>
      <ul id="links">
        <li>About Us</li>
        <li>Services</li>
        <li>Coaches</li>
        <li>Events</li>
        <li>Contacts</li>
      </ul>
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
    </nav>
  );
};

export default Navbar;
