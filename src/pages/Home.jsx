import React from 'react';
import axios from 'axios';

const Home = () => {
  

  return (
   <div className="text-center mt-10">
      <p className="text-white text-2xl mb-3">
        Kya tumhare paas koi recipe hai jo sabke saath share karni hai?
      </p>
      <a
        href="/create-recipe"
        className="text-yellow-600 underline font-semibold hover:text-yellow-800"
      >
        Submit your recipe here!
      </a>
    </div>
  );
};

export default Home;