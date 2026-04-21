import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RecipeDataContext = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);
  return (
    <div>
      <RecipeDataContext.Provider value={{ data, setData }}>
        {children}
      </RecipeDataContext.Provider>
    </div>
  );
};

export default RecipeContext;
