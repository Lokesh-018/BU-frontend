import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const { userData, setUserData, token, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    email: '',
    password: '',
    mobile: '',
    dob: '',
    registrationNo: '',
    rollNo: '',
    course: '',
    year: '',
    department: '',
    passedOutYear: '',
    jobLocation: '',
    github: '',
    linkedin: '',
    jobRole: '',
    profilePic: null
  });

  useEffect(() => {
    if (userData) {
      setFormData({
        fullName: userData.fullName || '',
        gender: userData.gender || '',
        email: userData.email || '',
        password: '', // Do not pre-fill password
        mobile: userData.mobile || '',
        dob: userData.dob || '',
        registrationNo: userData.registrationNo || '',
        rollNo: userData.rollNo || '',
        course: userData.course || '',
        year: userData.year || '',
        department: userData.department || '',
        passedOutYear: userData.passedOutYear || '',
        jobLocation: userData.jobLocation || '',
        github: userData.github || '',
        linkedin: userData.linkedin || '',
        jobRole: userData.jobRole || '',
        profilePic: userData.profilePic || null
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleEdit = (e) => {
    e.preventDefault(); // Prevent form submission
    setIsEdit(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await axios.put(
        `${backendUrl}/api/user/update-profile`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      if (response.data.success) {
        setUserData(response.data.user);
        toast.success('Profile updated successfully');
        setIsEdit(false);
      }
    } catch (error) {
      console.error('Update failed:', error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
    }
  };

  return (
    userData && (
      <form onSubmit={handleSubmit} className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col gap-4">
            {/* Profile Image Section */}
            <div className="flex justify-center">
              {isEdit ? (
                <label htmlFor="image" className="cursor-pointer">
                  <div className="relative">
                    <img
                      className="w-36 h-36 rounded-full object-cover opacity-75"
                      src={formData.profilePic ? URL.createObjectURL(formData.profilePic) : userData.profilePic}
                      alt="Profile"
                    />
                  </div>
                  <input
                    onChange={handleChange}
                    type="file"
                    name="profilePic"
                    id="image"
                    hidden
                  />
                </label>
              ) : (
                <img 
                  className="w-36 h-36 rounded-full object-cover" 
                  src={userData.profilePic} 
                  alt="Profile" 
                />
              )}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="registrationNo"
                value={formData.registrationNo}
                onChange={handleChange}
                placeholder="Registration No"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Roll No"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Course"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Year"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="number"
                name="passedOutYear"
                value={formData.passedOutYear}
                onChange={handleChange}
                placeholder="Passed Out Year"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="jobProfile"
                value={formData.jobLocation}
                onChange={handleChange}
                placeholder="Job Location"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="GitHub"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
                 <input
                type="text"
                name="jobRole"
                value={formData.jobRole}
                onChange={handleChange}
                placeholder="Job Role"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn"
                className="border p-2 rounded"
                disabled={!isEdit}
              />
           
            </div>

            {/* Edit/Save Button */}
            <div className="mt-6 flex justify-center">
              <button
                type={isEdit ? 'submit' : 'button'}
                onClick={isEdit ? undefined : handleEdit}
                className="bg-blue-600 text-white px-8 py-2 rounded-full hover:bg-blue-700"
              >
                {isEdit ? 'Save Changes' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  );
};

export default Profile;