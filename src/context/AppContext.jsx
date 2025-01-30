import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [userData, setUserData] = useState(null);
  const backendUrl = "http://localhost:5000"; // Ensure this is correct for your backend

  // Save token to localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Function to load user profile data
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message || "Failed to load user profile.");
        handleLogout();
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      if (error.response && error.response.status === 401) {
        // Token invalid or expired
        toast.error("Session expired. Please log in again.");
        handleLogout();
      } else {
        toast.error(error.message || "An error occurred while fetching profile.");
      }
    }
  };

  // Handle logout (clear token and user data)
  const handleLogout = () => {
    setToken("");
    setUserData(null);
    localStorage.removeItem("token");
    toast.info("You have been logged out.");
  };

  // Load user profile on app initialization if token exists
  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  // Context value to be provided to components
  const value = {
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfileData,
    handleLogout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext };
export default AppContextProvider;
