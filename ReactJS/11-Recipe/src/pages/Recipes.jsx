import { useContext } from "react";
import { RecipeDataContext } from "../context/RecipeContext.jsx";
import RecipeCard from "../components/RecipeCard.jsx";

const Recipes = () => {
  const { data } = useContext(RecipeDataContext);

  const renderRecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderRecipes : "No recipes found!"}
    </div>
  );
};

export default Recipes;
