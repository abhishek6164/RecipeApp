import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import SingleRecipe from "../pages/SingleRecipe"; // Import the SingleRecipe component
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav"; // Import the Fav component
const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/details/:id" element={<SingleRecipe />} /> {/* Dynamic route for recipe details */}
      <Route path="/about" element={<About />} /> 
      <Route path="/create-recipe" element={<Create />} />
      <Route path="/fav" element={<Fav/>} />
      <Route path="*" element={<PageNotFound />} />

    </Routes>
  );
};

export default Mainroutes;
