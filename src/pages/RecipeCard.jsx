import React from "react";
import { Link } from "react-router-dom";

const getPreviewText = (text, wordLimit = 10) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null;

  return (
    <Link
      to={`/recipes/details/${recipe.id}`}
      className="
        w-[320px] bg-white/30 dark:bg-gray-900/70 
        backdrop-blur-lg border border-white/25 dark:border-gray-700
        shadow-lg hover:shadow-2xl transition-transform hover:scale-105 duration-300
        rounded-3xl overflow-hidden m-4 flex flex-col
        hover:ring-2 hover:ring-pink-500
      "
      aria-label={`View details for ${recipe.title}`}
    >
      {recipe.url && (
        <img
          src={recipe.url}
          alt={recipe.title}
          className="
            w-full h-56 object-cover
            transition-transform duration-500 ease-in-out
            hover:scale-110 hover:brightness-110
          "
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      )}

      <div className="p-6 flex flex-col flex-grow">
        <h1 className="text-2xl font-extrabold mb-3 text-gradient bg-clip-text text-transparent bg-pink-500 dark:bg-pink-400">
          {recipe.title}
        </h1>

        <p className="text-sm mb-2 leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-pink-600 dark:text-pink-400">📖 Description:</span>{" "}
          {getPreviewText(recipe.description)}
        </p>

        <p className="text-sm mb-2 leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">🥬 Ingredients:</span>{" "}
          {getPreviewText(recipe.ingredients)}
        </p>

        <p className="text-sm mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-green-600 dark:text-green-400">👨‍🍳 Instructions:</span>{" "}
          {getPreviewText(recipe.instructions)}
        </p>

        <div className="mt-auto flex justify-between items-center">
          <span className="
            bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500
            text-white text-xs font-semibold px-4 py-1 rounded-full
            uppercase tracking-wide shadow-lg
            hover:brightness-110 transition
          ">
            {recipe.category}
          </span>
          <span className="text-xs italic text-zinc-400 dark:text-zinc-500 select-none">#recipe</span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
