import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-x-10 text-sm mb-10">
      <NavLink to={"/"} className={(e) => (e.isActive ? "text-red-400" : "")}>
        Home
      </NavLink>
      <NavLink
        to={"/recipes"}
        className={(e) => (e.isActive ? "text-red-400" : "")}
      >
        Recipes
      </NavLink>
      <NavLink
        to={"/about"}
        className={(e) => (e.isActive ? "text-red-400" : "")}
      >
        About
      </NavLink>
      <NavLink
        to={"/create-recipe"}
        className={(e) => (e.isActive ? "text-red-400" : "")}
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
