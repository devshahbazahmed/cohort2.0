import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeDataContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const { data, setData } = useContext(RecipeDataContext);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    // console.log(recipe);
    // const copyData = [...data];
    // copyData.push(recipe);
    // setData(copyData);
    setData([...data, recipe]);
    toast.success("New recipe created");
    reset();
    navigate("/recipes");
  };

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
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

      <button className="block mt-5 bg-gray-900 px-4 py-2 rounded cursor-pointer">
        Save Recipe
      </button>
    </form>
  );
};

export default CreateRecipe;
