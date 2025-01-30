import React from 'react'
import { Link } from 'react-router-dom';
import map from "../assets/map.png"


const Footer = () => {
  const contributors = [
    { role: 'Design', name: 'Binayak Sethy , Priyadarshiani Panda , Loknath Sahu , Bidmayee Jena ', linkedin: 'https://www.linkedin.com/in/alicejohnson' },
    { role: 'Frontend', name: 'Binayak Sethy , Loknath Sahu', linkedin: 'https://www.linkedin.com/in/bobsmith' },
    { role: 'Backend', name: 'Binayak Sethy , Loknath Sahu', linkedin: 'https://www.linkedin.com/in/charliebrown' },
    { role: 'Support', name: 'Department Of Computer Science', linkedin: 'https://www.linkedin.com/in/dianaprince' },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-left p-10">
          <ul>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
          
        </div>
        <div className="text-center p-10">
          <h3 className="text-lg font-bold mb-4">Contributors</h3>
          <div className="flex flex-col items-start">
          <div className="flex mt-4">
            <h3 className="text-lg font-bold mb-2 mr-2">Tech Lead:</h3>
            <p className="font-semibold">BINAYAK SETHY</p>
          </div>
            {contributors.map((contributor, index) => (
              <div key={index} className="flex mb-2">
                <p className="font-semibold mr-2">{contributor.role}:</p>
                <a
                  href={contributor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {contributor.name}
                </a>
              </div>
            ))}
          </div>
        
        </div>
        <div className="text-right p-10">
          <a
            href="https://www.google.com/maps/place/Berhampur+University/@19.3016953,84.8804445,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3d59ddebcbc259:0x6af8cd6267c5cc11!8m2!3d19.3016903!4d84.8830194!16s%2Fm%2F0271g5x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={map}
              alt="Map Location"
              className="w-96 h-48 object-cover rounded"
            />
          </a>
        </div>
      </div>
      
      <div className="text-center mt-4 text-sm">
      < p className='bg-red-700'>UNDER DEVELOPMENT</p>
        © 2025 Alumni Connect Portal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;