import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`  // Add auth token
  }
});

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    try {
      const response = await api.get(`/blogs/${id}`);
      if (response.data) {
        setBlog(response.data);
      } else {
        setError('Blog not found');
      }
    } catch (error) {
      console.error('Fetch blog error:', error);
      setError('Failed to fetch blog');
      toast.error('Failed to fetch blog');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded shadow mb-4">
        <h3 className="font-bold text-2xl">{blog.authorId.fullName}</h3>
        <p className="text-sm text-gray-500">Course: {blog.authorId.course}</p>
        <p className="text-sm text-gray-500">Year: {blog.authorId.year}</p>
        <p className="text-sm text-gray-500">Date: {new Date(blog.createdAt).toLocaleDateString()}</p>
        <p className="mt-2">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;