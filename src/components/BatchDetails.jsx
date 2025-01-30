import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import alumniData from "../assets/AlumniData";
import { assets } from "../assets/mca/profileimg";
const BatchDetails = () => {
  const { programName, year } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const program = alumniData.find((p) => p.program === programName);
  const batch = program?.batches.find((b) => b.year === year);

  if (!batch) {
    return <p className="text-center text-gray-600">No data found for this batch.</p>;
  }

  const filteredStudents = batch.students.filter((student) => {
    const searchLower = searchQuery.toLowerCase();
    const nameMatch = student.name.toLowerCase().includes(searchLower);
    const skillsMatch = student.expertise?.some(skill => 
      skill.toLowerCase().includes(searchLower)
    );
    return nameMatch || skillsMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {programName} - Class of {year}
          </h1>
          
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name .."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStudents.map((student, index) => (
            <Link
              key={index}
              to={`/profile/${student.name.replace(/\s+/g, '-').toLowerCase()}`}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 duration-300 text-center"
            >
              <img
                src={assets.profilePic}
                alt={student.name}
                className="w-20 h-20 mx-auto rounded-full mb-3"
              />
              <h3 className="font-medium text-gray-700">{student.name}</h3>
            </Link>
          ))}
        </div>
        
        {filteredStudents.length === 0 && (
          <p className="text-center text-gray-600 mt-6">
            No students found matching your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default BatchDetails;
