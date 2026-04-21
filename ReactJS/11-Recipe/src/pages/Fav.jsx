import { RecipeDataContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("favourite") || []);

  const renderRecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap">
      {favourite.length > 0 ? renderRecipes : "No favourite found!"}
    </div>
  );
};

export default Fav;
