import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, title, image, desc, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow hover:scale-95 duration-150"
    >
      <img src={image} alt="" className="w-full h-[23vh] object-vover" />
      <h1 className="mt-2 px-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {desc.slice(0, 100)}... <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
