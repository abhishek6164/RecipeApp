import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { recipecontext } from "../context/RecipeContext.jsx";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const STORAGE_KEY = "recipesData";
const FAV_KEY = "fav";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const [favData, setFavData] = useState(() => {
    const stored = localStorage.getItem(FAV_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const recipe = data.find((recipe) => recipe.id.toString() === params.id);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (recipe) {
      setValue("title", recipe.title || "");
      setValue("url", recipe.url || "");
      setValue("description", recipe.description || "");
      setValue("ingredients", recipe.ingredients || "");
      setValue("instructions", recipe.instructions || "");
      setValue("category", recipe.category || "");
    }
  }, [recipe, setValue]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem(FAV_KEY, JSON.stringify(favData));
  }, [favData]);

  const isFav = favData.some((f) => f.id.toString() === recipe?.id?.toString());

  const UpdateHandler = (updatedRecipe) => {
    const index = data.findIndex((item) => item.id.toString() === params.id);
    const updatedData = [...data];
    updatedData[index] = { ...updatedData[index], ...updatedRecipe };
    setData(updatedData);

    toast.success("Recipe Updated Successfully! 🍽️");
    navigate("/recipes");
  };

  const DeleteHandler = () => {
    const filteredData = data.filter(
      (item) => item.id.toString() !== params.id
    );
    const updatedFav = favData.filter((f) => f.id.toString() !== params.id);
    setData(filteredData);
    setFavData(updatedFav);
    toast.success("Recipe Deleted Successfully! 🗑️");
    navigate("/recipes");
  };

  const FavHandler = () => {
    if (!isFav && recipe) {
      const newFav = [...favData, recipe];
      setFavData(newFav);
      toast.success("Added to Favourites ❤️");
    }
  };

  const UnFavHandler = () => {
    const updatedFav = favData.filter(
      (f) => f.id.toString() !== recipe?.id?.toString()
    );
    setFavData(updatedFav);
    toast.info("Removed from Favourites 💔");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 min-h-screen">
      {/* Left Section: Recipe Card */}
      <div className="w-full lg:w-1/2 flex justify-center">
        {recipe && (
          <div className="relative bg-white/30 backdrop-blur-md border border-yellow-100 rounded-3xl overflow-hidden shadow-xl transition-all hover:scale-[1.01] duration-300 max-h-[600px] w-full sm:w-[90%] lg:w-full flex flex-col">
            {/* Fav Button */}
            <div className="absolute top-4 right-6 z-10 text-xl">
              {isFav ? (
                <button
                  onClick={UnFavHandler}
                  aria-label="Remove from favorites"
                >
                  ❤️
                </button>
              ) : (
                <button onClick={FavHandler} aria-label="Add to favorites">
                  🤍
                </button>
              )}
            </div>

            {recipe.url && (
              <img
                src={recipe.url}
                alt={recipe.title}
                className="w-full h-60 object-cover object-center rounded-t-3xl flex-shrink-0"
              />
            )}

            <div className="p-6 space-y-2 text-gray-700 overflow-y-auto flex-grow max-h-[460px]">
              <h1 className="text-2xl font-bold">{recipe.title}</h1>

              <h2 className="text-lg font-semibold mt-4">📖 Description:</h2>
              <p>{recipe.description}</p>

              <h2 className="text-lg font-semibold mt-4">🥬 Ingredients:</h2>
              <p>{recipe.ingredients}</p>

              <h2 className="text-lg font-semibold mt-4">👨‍🍳 Instructions:</h2>
              <p>{recipe.instructions}</p>

              <p className="pt-2">
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow">
                  {recipe.category}
                </span>
              </p>

              <button
                onClick={DeleteHandler}
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition-all duration-200"
              >
                🗑️ Delete Recipe
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Section: Edit Form */}
      <div className="w-full lg:w-1/2 bg-white/30 backdrop-blur-md border border-yellow-100 rounded-3xl p-6 shadow-lg max-h-[600px] overflow-y-auto">
        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">✏️ Edit Recipe</h2>

          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 text-black"
            placeholder="👑 Recipe Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}

          <input
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 text-black"
            placeholder="🖼️ Image URL"
            {...register("url")}
          />

          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 text-black resize-y min-h-[80px]"
            placeholder="📝 Description"
            {...register("description")}
          />

          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 text-black resize-y min-h-[80px]"
            placeholder="🧄 Ingredients"
            {...register("ingredients")}
          />

          <textarea
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 text-black resize-y min-h-[80px]"
            placeholder="📋 Instructions"
            {...register("instructions")}
          />

          <select
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 text-black"
            {...register("category")}
          >
            <option value="">🍴 Select Category</option>
            <option value="north-indian">North Indian</option>
            <option value="south-indian">South Indian</option>
            <option value="chinese">Chinese</option>
            <option value="italian">Italian</option>
          </select>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg transition-all duration-200"
          >
            ✅ Update Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleRecipe;
