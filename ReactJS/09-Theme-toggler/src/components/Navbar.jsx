import React from "react";
import { useContext } from "react";
import { ThemeContextData } from "../context/ThemeContext";

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContextData);
  return (
    <div id="navbar">
      <h1>Navbar</h1>
      <p>{theme}</p>
      <button
        className="themeBtn"
        onClick={() => {
          setTheme("dark");
        }}
      >
        Change theme
      </button>
    </div>
  );
};

export default Navbar;
