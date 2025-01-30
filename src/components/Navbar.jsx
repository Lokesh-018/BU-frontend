import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo .png";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData, setUserData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    setUserData(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white flex flex-col md:flex-row justify-between items-center p-2 md:pl-10">
        <div className="flex items-center gap-4  ">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
          <span className="whitespace-nowrap">BU-CS | Connect, BERHAMPUR UNIVERSITY <br /> Connecting Minds, Building Futures
          </span>
        </div>
        
        <div className="flex gap-4 mt-2 md:mt-0  ml-96">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="cursor-pointer hover:text-blue-400" size={20} />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="cursor-pointer hover:text-blue-400" size={20} />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="cursor-pointer hover:text-red-400" size={20} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="cursor-pointer hover:text-pink-400" size={20} />
          </a>

       
        </div>
        {/* Sign Up/Login */}
        {token && userData ? (
          <div className="flex gap-2 mt-2 md:mt-0">
            <button onClick={() => navigate("/profile")} className="bg-blue-800 ml-4 px-4 py-2 text-sm rounded hover:bg-blue-700">
              Profile
            </button>
            <button onClick={logout} className="bg-blue-800 px-4 py-2 text-sm rounded hover:bg-blue-700">
              Logout
            </button>
          </div>
        ) : (
          <button onClick={() => navigate("/login-signup")} className="bg-blue-800 px-4 py-2 text-sm rounded hover:bg-blue-700 pr-12 mt-2 md:mt-0">
            Sign Up/Login
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="bg-[#003366]">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap gap-4 md:gap-10 py-4 text-lg text-white justify-center">
            <li className="hover:text-blue-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-300">
              <Link to="/about">About</Link>
            </li>
            <Link to="/resources" className="hover:text-blue-600">Resources</Link> {/* Add this line */}
            <li className="hover:text-blue-300">
              <Link to="/alumni-directory">Alumni Directory</Link>
            </li>
            <li className="hover:text-blue-300">
              <Link to="/memories">Memories</Link>
            </li>
            <li className="hover:text-blue-300">
              <Link to="/events">Events</Link>
            </li>
            <li className="hover:text-blue-300">
              <Link to="/blog">Blog</Link>
            </li>
            {/* <li className="hover:text-blue-300">
              <Link to="/alumni-stories">Alumni Stories</Link>
            </li> */}
            <li className="hover:text-blue-300">
              <Link to="/submitted-projects">Submitted Projects</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;