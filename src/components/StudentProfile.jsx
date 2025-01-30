import React from "react";
import { useParams } from "react-router-dom";
import alumniData from "../assets/AlumniData";
import { assets } from '../assets/mca/profileimg';
const StudentProfile = () => {
  const { studentName } = useParams();

  // Find the student based on the name parameter
  let student;
  alumniData.forEach((program) =>
    program.batches.forEach((batch) =>
      batch.students.forEach((s) => {
        if (s.name.replace(/\s+/g, '-').toLowerCase() === studentName) {
          student = s;
        }
      })
    )
  );

  // If student not found
  if (!student) {
    return (
      <p className="text-center text-gray-600 mt-20">
        Student profile not found.
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-4xl overflow-hidden">
        {/* Profile Header */}
        <div className="
        bg-blue-100 p-6 text-center text-black">
          <img
            src={assets.profilePic}
            alt={student.name}
            className="w-32 h-32 mx-auto rounded-full border-4 border-white mb-4"
          />
          <h1 className="text-3xl font-bold">{student.name}</h1>
          <p className="text-lg">{student.jobRole}</p>
          <p className="text-sm">{student.currentLocation}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Contact Info</h2>
              <p className="text-gray-600"><strong>Mobile:</strong> {student.mobile}</p>
              <p className="text-gray-600"><strong>Date of Birth:</strong> {student.dob}</p>
              <p className="text-gray-600 whitespace-pre-wrap">
                <strong>Address:</strong> {student.address}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-700">Professional Info</h2>
              <p className="text-gray-600"><strong>Job Role:</strong> {student.jobRole}</p>
              <p className="text-gray-600"><strong>Expertise:</strong> {student.expertise.join(", ")}</p>
              <p className="text-gray-600">
                <strong>Job Location:</strong> {student.jobLocation}
              </p>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Bio</h2>
            <p className="text-gray-600">{student.bio}</p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Social Profiles</h2>
            <div className="flex space-x-4">
              <a
                href={student.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                LinkedIn
              </a>
              {/* Add other social sites here */}
              <a
                href={student.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-black transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
