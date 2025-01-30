import React from "react";
import { Link } from "react-router-dom";
import { assets } from '../assets/HomePage/homePage.js';
import  {resimages} from '../assets/resources/images/assets.js'


const opportunities = [
  { 
    name: "Job Board", 
    imgSrc: resimages.img1,
    path: "/job-board" 
  },
  { 
    name: "Internship", 
    imgSrc: resimages.img3,
    path: "/internships" 
  },
  { 
    name: "Alumni Collaboration Project", 
    imgSrc: resimages.alumnicolab,
    path: "/alumni-collab" 
  },
  { 
    name: "Mentor Program", 
    imgSrc: resimages.mentor,
    path: "/mentor-program" 
  }
];

export default function AlumniPortal() {
  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="relative w-full h-[450px]">
        <img 
          src={assets.hello_world}
          alt="Resources Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl font-bold mb-6 text-shadow-lg">
              Connect, collaborate, and grow with our alumni
            </h1>
            <Link 
              to="/login"
              className="inline-block bg-blue-900 text-white py-3 px-8 rounded-xl hover:bg-blue-900 transition duration-300 shadow-lg"
            >
              Join Us
            </Link>
          </div>
        </div>
      </header>

      {/* Available Opportunities Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold mb-12">Available Opportunities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 md:px-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 bg-white shadow rounded-xl hover:shadow-lg"
            >
              <img
                src={opportunity.imgSrc}
                alt={opportunity.name}
                className="h-20 w-20 object-contain mb-4"
              />
              <h3 className="text-base font-medium mb-4">{opportunity.name}</h3>
              <Link 
                to={opportunity.path}
                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Alumni Collaboration Projects Section */}
   {/* Alumni Collaboration Projects Section */}
<section className="py-16">
  <h2 className="text-center text-3xl font-bold mb-12">Alumni Collaboration Projects</h2>
  <Link 
    to="/alumni-collab" 
    className="text-center block hover:opacity-90 transition-opacity relative max-w-5xl mx-auto"
  >
    <div className="relative">
      <img
        src={resimages.alumnicolab}
        alt="Alumni Collaboration"
        className="w-full h-[400px] object-fit rounded-xl shadow-lg filter blur-[1px]"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center rounded-xl">
        <h2 className="text-4xl font-bold text-white text-center px-4">
          Collaborate with Alumni on Exciting Projects
        </h2>
      </div>
    </div>
  </Link>
</section>

{/* Be a Mentor Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-md mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-8">Be a Mentor</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Name</label>
        <input 
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input 
          type="email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <button 
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Join as Mentor
      </button>
    </form>
  </div>
</section>
    </div>
  );
}