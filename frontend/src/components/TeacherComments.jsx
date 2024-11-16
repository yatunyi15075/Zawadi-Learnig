// src/components/TeacherComments.jsx
import React, { useEffect, useState } from 'react';
import { FaComments, FaUser } from 'react-icons/fa';
import axios from 'axios';

const TeacherComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/comments');
        setComments(response.data);
        setLoading(false);
      } catch (err) {
        setError('Unable to fetch comments');
        setLoading(false);
      }
    };
    fetchComments();
  }, []);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="flex-1 p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Teacher Comments</h1>
      </header>

      <div className="bg-white rounded-lg shadow p-6">
        {comments.length === 0 ? (
          <div className="flex flex-col items-center">
            <FaComments className="text-5xl text-gray-400 mb-2" />
            <p className="text-gray-600">No comments available.</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-300 pb-4 mb-4">
              <div className="flex items-center mb-2">
                <FaUser className="mr-2 text-xl" />
                <h2 className="text-xl font-semibold">{comment.teacher}</h2>
                <span className="text-gray-500 ml-2">
                  ({comment.subject} - {comment.quiz})
                </span>
                <span className="text-gray-400 text-sm ml-auto">
                  {new Date(comment.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TeacherComments;
