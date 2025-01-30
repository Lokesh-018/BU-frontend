import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Simulating sending a password reset request
    console.log("Password reset link sent to:", email);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Reset Password
        </h2>

        {submitted ? (
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              A password reset link has been sent to your email.
            </p>
            <Link to="/" className="text-blue-500 hover:underline text-sm">
              Return to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Enter your registered email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
            >
              Send Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
