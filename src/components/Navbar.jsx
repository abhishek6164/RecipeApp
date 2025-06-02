import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 py-4 px-6 sticky top-0 z-50 shadow-xl">
      <div className="max-w-7xl text-white mx-auto flex flex-wrap items-center justify-center sm:justify-between">
        <h1 className="text-3xl font-extrabold tracking-wider mb-2 sm:mb-0 animate-pulse">
          🍲 RecipeWala
        </h1>

        <div className="flex items-center gap-x-6 text-base font-semibold">
          {['/', '/recipes', '/about', '/fav', '/create-recipe'].map((path, index) => {
            const names = ["Home", "Recipes", "About", "Favourite", "+ Add Recipe"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white border-b-2 border-white pb-1 scale-105"
                    : "hover:text-white/80 transition-all duration-200"
                }
              >
                {names[index]}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;