import RecipeCard from "./RecipeCard.jsx";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {favorite.length > 0 ? (
        favorite.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-center text-gray-400 italic tracking-wide">
          No recipes added yet! 👨‍🍳 Start cooking something delicious!
        </p>
      )}
    </div>
  );
};

export default Fav;
