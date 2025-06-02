import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext.jsx";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: nanoid(),
    };
    const copydata = [...data];
    copydata.push(newRecipe);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    setData(copydata);
    toast.success("New Recipe Added Successfully! 🍽️");
    navigate("/recipes");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitHandler)}
      className="max-w-2xl mx-auto bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 mt-10"
    >
      <h2 className="text-3xl font-black mb-6 text-gray-900 text-center">
        🍽️ Add New Recipe
      </h2>

      {["title", "url", "description", "ingredients", "instructions"].map((field, idx) => (
        <div key={field} className="mb-4">
          {field === "title" ? (
            <input
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-pink-500 text-black"
              placeholder={`👑 ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              {...register(field, { required: field === "title" && "Title is required" })}
            />
          ) : field === "url" ? (
            <input
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-yellow-500 text-black"
              placeholder={`🖼️ ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              {...register(field)}
            />
          ) : (
            <textarea
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-green-500 text-black"
              placeholder={`✍️ ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              {...register(field)}
            />
          )}
          {errors[field] && (
            <small className="text-red-600 mt-1 block">
              {errors[field].message}
            </small>
          )}
        </div>
      ))}

      <select
        className="w-full mb-5 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-500 text-black"
        {...register("category")}
      >
        <option value="">🍴 Select Category</option>
        {["north-indian", "south-indian", "chinese", "italian", "mexican", "continental", "thai", "japanese", "korean", "mughlai", "mediterranean"].map((cat) => (
          <option key={cat} value={cat}>{cat.replace(/-/g, " ").toUpperCase()}</option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
      >
        ✅ Save Recipe
      </button>
    </form>
  );
};

export default Create;