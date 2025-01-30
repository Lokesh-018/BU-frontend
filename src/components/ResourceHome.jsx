import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/HomePage/homePage.js';

const ResourcesHome = () => {
  return (
    <div className="relative w-full h-[500px] my-8">
      <img 
        src={assets.mern}
        alt="Resources"
        className="w-full h-full object-fit"
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-white">
        <h2 className="text-5xl font-bold mb-4 text-shadow-lg drop-shadow-2xl">
          Our Resources
        </h2>
        <p className="text-2xl mb-6 text-shadow-md max-w-2xl text-center">
          Discover opportunities, connect with mentors, and grow your career
        </p>
        <Link 
  to="/resources"  // Matches navbar Resources link path
  className="bg-blue-900 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
>
  Explore Resources
</Link>
      </div>
    </div>
  );
};

export default ResourcesHome;