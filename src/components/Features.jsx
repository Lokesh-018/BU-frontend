import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/Features/homePage';
const Features = () => {
  return (
    <div className="container mx-auto text-center px-4 mt-11">
      <h2 className="text-3xl text-blue-900 font-bold mb-8">Our Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-blue-900 border rounded-lg shadow hover:shadow-lg transition duration-300 w-72 h-80 mx-auto flex justify-center items-center flex-col  hover:scale-110">
          <h3 className="text-xl font-semibold mb-4 text-white">Alumni Directory</h3>
          <img src={assets.alumni} alt="Alumni Directory" className="w-32   h-28 object-fit mb-4 rounded"  />
          <p className="text-white font-bold mb-4">Find and connect with alumni from BU-CS.</p>
          <Link to="/alumni-directory" className=" text-black bg-blue-100 p-2 rounded-md shadow-md mt- hover:underline font-semibold">
            Explore
          </Link>
        </div>
        <div className="p-6 bg-blue-900 border rounded-lg shadow hover:shadow-lg transition duration-300 w-72 h-80 mx-auto flex justify-center items-center flex-col hover:scale-110">
          <h3 className="text-xl font-semibold mb-4 text-white">Events</h3>
          <img src={assets.alumni} alt="Events" className="w-32   h-28 object-fit mb-4 rounded" />
          <p className="text-white font-bold mb-4">Stay updated with upcoming events and reunions.</p>
          <Link to="/events" className=" text-black bg-blue-100 p-2 rounded-md shadow-md mt- hover:underline font-semibold">
            View Events
          </Link>
        </div>
        <div className="p-6 bg-blue-900 border rounded-lg shadow hover:shadow-lg transition duration-300 w-72 h-80 mx-auto flex justify-center items-center flex-col hover:scale-110s">
          <h3 className="text-xl font-semibold mb-4 text-white">Blog</h3>
          <img src={assets.profile} alt="Blog" className="w-32   h-28 object-fit mb-4 rounded"  />
          <p className="text-white font-bold mb-4">Read and share stories and experiences.</p>
          <Link to="/blog" className=" text-black bg-blue-100 p-2 rounded-md shadow-md mt- hover:underline font-semibold">
            Read Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;