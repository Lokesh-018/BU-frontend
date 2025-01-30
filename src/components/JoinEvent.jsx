import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const JoinEvent = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rollNo: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/event-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          eventId: parseInt(eventId)
        }),
      });
  
      if (response.ok) {
        alert('Registration successful!');
        navigate('/events');
      } else {
        const data = await response.json();
        alert(`Registration failed: ${data.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center">Join Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            required
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone</label>
          <input
            type="tel"
            required
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Roll No</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border rounded-lg"
            value={formData.rollNo}
            onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JoinEvent;