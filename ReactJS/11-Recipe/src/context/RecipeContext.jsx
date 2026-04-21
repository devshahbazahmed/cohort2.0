import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const RecipeDataContext = createContext();

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      desc: "Roll out the pizza dough and spread tomato sauce evenly. Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
      ingr: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste",
      ],
      inst: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot.",
      ],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      category: "dinner",
      chef: "Sanjeev Kapoor",
    },
  ]);
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
