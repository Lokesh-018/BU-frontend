import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo .png";
const LoginSignup = () => {
  const navigate = useNavigate();
  const { backendUrl, setToken, setUserData } = useContext(AppContext);
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    dob: "",
    registrationNo: "",
    rollNo: "",
    course: "",
    year: "",
    department: "",
    passedOutYear: "",
    github: "",
    linkedin: "",
    jobRole: "",
    jobLocation: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      const endpoint = state === "Login" ? "/api/user/login" : "/api/user/register";
      const response = await axios.post(`${backendUrl}${endpoint}`, formData);
      if (response.data.success) {
        toast.success(`${state} successful`);
        setToken(response.data.token);
        setUserData(response.data.user);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || `${state} failed`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-40 w-58  rounded-full" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">{state === "Login" ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          {state === "Sign Up" && (
            <>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Registration No</label>
                  <input
                    type="text"
                    name="registrationNo"
                    value={formData.registrationNo}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Roll No</label>
                  <input
                    type="text"
                    name="rollNo"
                    value={formData.rollNo}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Course</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Year</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Department</label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Passed Out Year</label>
                  <input
                    type="number"
                    name="passedOutYear"
                    value={formData.passedOutYear}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">GitHub</label>
                  <input
                    type="text"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">LinkedIn</label>
                  <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Job Role</label>
                  <input
                    type="text"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Job Location</label>
                  <input
                    type="text"
                    name="jobProfile"
                    value={formData.jobProfile}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <label className="block text-gray-700">Profile Picture</label>
                  <input
                    type="file"
                    name="profilePic"
                    onChange={(e) => setFormData({ ...formData, profilePic: e.target.files[0] })}
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>
            </>
          )}
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2 mb-4 md:mb-0">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-2 mb-4">
            <div className="w-full px-2 mb-4 md:mb-0">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            {state === "Sign Up" && (
              <div className="w-full px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            )}
          </div>
          <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700">
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>
          {state === "Sign Up" ? (
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <span onClick={() => setState("Login")} className="text-blue-900 cursor-pointer">
                Login here
              </span>
            </p>
          ) : (
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <span onClick={() => setState("Sign Up")} className="text-blue-900 cursor-pointer">
                Sign Up here
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;