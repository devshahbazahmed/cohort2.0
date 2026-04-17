import React from "react";
import { useContext } from "react";
import { ThemeContextData } from "../context/ThemeContext";

const Footer = () => {
  const data = useContext(ThemeContextData);
  return (
    <div id="footer">
      <h3>Footer</h3>
      <p>{data}</p>
    </div>
  );
};

export default Footer;
