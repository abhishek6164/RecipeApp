import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 text-white min-h-screen flex flex-col">
      
      {/* Navbar stays fixed at top with shadow */}
      <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-md">
        <Navbar />
      </header>

      {/* Main content is scrollable with custom scrollbar */}
      <main className="flex-grow px-[5%] py-12 overflow-y-auto scrollbar-thin scrollbar-thumb-pink-600 scrollbar-track-gray-800 transition-all duration-300">
        <Mainroutes />
      </main>

      {/* Fancy Footer with gradient text & hover effect */}
      <footer className="text-center text-sm py-5 bg-gray-950 text-zinc-400 select-none animate-pulse">
        <p className="inline-block bg-gradient-to-r from-pink-500 via-yellow-400 to-green-400 bg-clip-text text-transparent font-semibold cursor-default">
          © {new Date().getFullYear()} RecipeWala 🍲 | Made with ❤️ by Abhishek
        </p>
      </footer>
    </div>
  );
};

export default App;
