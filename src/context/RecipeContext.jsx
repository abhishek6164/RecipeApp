import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const recipecontext = createContext(null);

const RecipeContext = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipe")) || [])
    ;
  } , []);

  console.log("RecipeContext", data);

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
