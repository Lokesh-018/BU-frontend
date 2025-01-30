import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Submit button clicked'); // Debug log

    try {
      const token = localStorage.getItem('token');
      console.log('Token:', token); // Debug token

      if (!token) {
        toast.error('No token found, please log in');
        return;
      }

      if (!feedback.trim()) {
        toast.error('Please enter feedback');
        return;
      }

      console.log('Submitting feedback:', feedback);
      
      const response = await axios.post(
        'http://localhost:5000/api/feedback/submit',
        { feedback },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );

      console.log('Response:', response.data);

      if (response.data.success) {
        toast.success('Feedback submitted successfully');
        setFeedback('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting feedback');
    }
  };

  return (
    <div>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Feedback</h2>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full h-24 border border-gray-300 p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              placeholder="Type here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
            <button
              type="submit"
              className="mt-4 bg-blue-900 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Feedback;