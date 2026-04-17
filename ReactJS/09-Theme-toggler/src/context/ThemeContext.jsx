import React from "react";
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContextData = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContextData.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContextData.Provider>
  );
};

export default ThemeContext;
