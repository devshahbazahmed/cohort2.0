import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeDataContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(RecipeDataContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((elem) => params.id == elem.id);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: recipe.title,
      chef: recipe.chef,
      image: recipe.image,
      desc: recipe.desc,
      inst: recipe.inst,
      ingr: recipe.ingr,
      category: recipe.category,
    },
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((elem) => params.id == elem.id);
    const copyRecipe = [...data];
    copyRecipe[index] = { ...copyRecipe[index], ...recipe };
    setData(copyRecipe);
    toast.success("Recipe Updated");
  };

  const DeleteHandler = () => {
    const filterData = data.filter((recipe) => recipe.id != params.id);
    setData(filterData);
    toast.success("Recipe deleted");
    navigate("/recipes");
  };

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} className="h-[20vh]" />
      </div>

      <form className="w-1/2 p-2 right" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />
        <small className="text-red-400">This is how the error is shown</small>
        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="//start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="//write ingredients separated by comma"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="//write instructions separated by comma"
        ></textarea>

        <select
          className="block border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="block mt-5 bg-blue-900 px-4 py-2 rounded cursor-pointer">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="block mt-5 bg-red-900 px-4 py-2 rounded cursor-pointer"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
