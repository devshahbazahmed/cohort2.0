import { useContext } from "react";
import { RecipeDataContext } from "../context/RecipeContext.jsx";

const Recipes = () => {
  const { data } = useContext(RecipeDataContext);

  const renderRecipes = data.map((recipe) => {
    return (
      <div key={recipe.id}>
        <h1>{recipe.title}</h1>
      </div>
    );
  });
  return <div>{renderRecipes}</div>;
};

export default Recipes;
