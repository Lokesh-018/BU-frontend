import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from '../assets/AboutPage/aboutPage.js'

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-3xl text-blue-900 font-bold mb-8 text-center md:text-left">About Us</h2>
            <p className="text-lg text-gray-700 mb-4 text-center md:text-left">
              BU-CS Connect is a platform that connects alumni and students of BU-CS. Our mission is to foster a strong community where members can share experiences, network, and support each other.
            </p>
            <p className="text-lg text-gray-700 mb-4 text-center md:text-left">
              Whether you are a recent graduate or a seasoned professional, BU-CS Nexus provides the resources and connections you need to succeed. Join us today and be a part of our growing community.
            </p>
            <div className="text-center md:text-left">
              <Link to="/about" className="bg-blue-900 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                View More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img src={assets.dept_front} alt="About Us" className="w-[100vh] pl-20 h-auto rounded shadow " />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
