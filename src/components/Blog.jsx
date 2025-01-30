import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`  // Add auth token
  }
});

const Blog = () => {

  const navigate = useNavigate();

  const handleReadMore = (blogId) => {
    navigate('/blog'); // Matches navbar blog link path
  };

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await api.get('/blogs');
      setBlogs(Array.isArray(response.data) ? response.data.slice(0, 3) : []); // Get only the first 3 blogs
    } catch (error) {
      console.error('Fetch blogs error:', error);
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };



  return (
    <div>
      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl text-blue-900 font-bold mb-8">Latest Blogs</h2>
          <div className="grid md:grid-cols-3 gap-8 ml-14 ">
            {blogs.map((blog) => (
              <div key={blog._id} className="p-6 shadow rounded-lg hover:shadow-lg transition duration-300 bg-blue-200 " style={{ width: '300px', height: '300px', flexShrink: 0 }}>
                <div className="h-40 overflow-hidden mb-4">
                  <p className="text-black mt-2 text-left overflow-hidden overflow-ellipsis  " style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
                    {blog.content}
                  </p>
                  <button
      onClick={() => handleReadMore(blog._id)}
      className="text-blue-900 py-2 px-4 rounded hover:text-blue-700"
      style={{ backgroundColor: 'transparent' }}
    >
      Read More
    </button>
                </div>
              
                <div className=" mt-4">
                 
                </div>
                <div className="flex justify-between items-center  mt-4">
                  <h6 className="text-sm  text-black">{new Date(blog.createdAt).toLocaleDateString()}</h6>
                  <h6 className="text-sm  text-black">{blog.authorId.fullName}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;