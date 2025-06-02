import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext.jsx";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard.jsx";

const Recipes = () => {
  const { data } = useContext(recipecontext);
  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? (
        renderrecipes
      ) : (
        <p className="text-center text-gray-400 col-span-full italic tracking-wide">
          No recipes added yet! 👨‍🍳 Start cooking something delicious!
        </p>
      )}
    </div>
  );
};

export default Recipes;
