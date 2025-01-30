import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/HomePage/homePage.js';

const Memories = () => {
  return (
    <div className="relative w-full h-[400px] my-8">
      <img 
        src={assets.coverimage6}
        alt="College Memories"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
        <h2 className="text-5xl font-bold mb-4 text-shadow-lg drop-shadow-2xl">
          Our Memories
        </h2>
        <p className="text-2xl mb-6 text-shadow-md max-w-2xl text-center">
          Relive the beautiful moments of our college days
        </p>
        <Link 
          to="/memories" 
          className="bg-blue-900 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View Memories
        </Link>
      </div>
    </div>
  );
};

export default Memories;