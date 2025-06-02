import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-6">
      <h1 className="text-9xl font-extrabold text-yellow-500 mb-6 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md text-center">
        This page seems to have vanished, like a path lost in a dream.
        But no worries, let’s head back safely home.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded shadow-lg transition"
      >
        🏠 Go Back Home
      </button>
    </div>
  );
};

export default PageNotFound;
