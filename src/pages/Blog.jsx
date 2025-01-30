import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`  // Add auth token
  }
});

const AlumniBlogPage = () => {
  const navigate = useNavigate();
  const [blogContent, setBlogContent] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [replyContents, setReplyContents] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('Please log in to access this page');
      navigate('/login');
    } else {
      fetchBlogs();
    }
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const response = await api.get('/blogs');
      setBlogs(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error('Fetch blogs error:', error);
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleBlogUpload = async (e) => {
    e.preventDefault();
    if (!blogContent.trim()) {
      toast.error('Blog content cannot be empty');
      return;
    }

    setLoading(true);
    try {
      const response = await api.post('/blogs', { content: blogContent });
      setBlogs([response.data, ...blogs]); // Add new blog at the top
      setBlogContent('');
      toast.success('Blog posted successfully!');
    } catch (error) {
      console.error('Blog upload error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to post blog');
    } finally {
      setLoading(false);
    }
  };

  const handleReply = async (blogId) => {
    const replyContent = replyContents[blogId];
    if (!replyContent?.trim()) {
      toast.error('Reply cannot be empty');
      return;
    }

    try {
      const response = await api.post(`/blogs/${blogId}/reply`, {
        content: replyContent
      });
      setBlogs(blogs.map(blog => 
        blog._id === blogId ? response.data : blog
      ));
      setReplyContents({ ...replyContents, [blogId]: '' });
      toast.success('Reply added successfully!');
    } catch (error) {
      toast.error('Failed to add reply');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <section className="mb-8">
      <textarea
  value={blogContent}
  onChange={(e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).length;
    if (wordCount <= 100) {
      setBlogContent(value);
    } else {
      toast.error('Blog content cannot exceed 100 words');
    }
  }}
  placeholder="Write your blog here..."
  className="w-full h-40 p-4 border border-gray-300 rounded-md"
/>
        <button
          onClick={handleBlogUpload}
          disabled={loading}
          className={`mt-4 bg-blue-600 text-white py-2 px-4 rounded ${
            loading ? 'opacity-50' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Posting...' : 'Post Blog'}
        </button>
      </section>

      {blogs.map((blog) => (
        <div key={blog._id} className="bg-white p-6 rounded shadow mb-4">
          <div className="mb-4">
            <h3 className="font-bold">{blog.authorId.fullName}</h3>
            <p className="text-sm text-gray-500">Course: {blog.authorId.course}</p>
            <p className="text-sm text-gray-500">Year: {blog.authorId.year}</p>
            <p className="text-sm text-gray-500">Date: {new Date(blog.createdAt).toLocaleDateString()}</p>
            <p className="mt-2">{blog.content}</p>
          </div>
          
          <div className="mt-4 bg-gray-50 p-4 rounded">
            <h4 className="font-semibold mb-2">Anonymous Replies</h4>
            {blog.replies.map((reply, index) => (
              <p key={index} className="mb-2 text-gray-700">{reply.content}</p>
            ))}
            
            <textarea
              value={replyContents[blog._id] || ''}
              onChange={(e) => setReplyContents({
                ...replyContents,
                [blog._id]: e.target.value
              })}
              placeholder="Write an anonymous reply..."
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={() => handleReply(blog._id)}
              className="mt-2 bg-gray-600 text-white py-1 px-3 rounded hover:bg-gray-700"
            >
              Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlumniBlogPage;