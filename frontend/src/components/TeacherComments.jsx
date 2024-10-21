// src/components/TeacherComments.jsx
import React from 'react';
import { FaComments, FaUser } from 'react-icons/fa';

const TeacherComments = () => {
  // Sample comments data (this would typically come from an API)
  const comments = [
    {
      teacher: 'Mr. Smith',
      subject: 'Math',
      quiz: 'Algebra Test',
      date: '2023-10-15',
      content: 'Great job on the quiz! Your understanding of algebra is improving.',
    },
    {
      teacher: 'Mrs. Johnson',
      subject: 'Science',
      quiz: 'Biology Quiz',
      date: '2023-10-12',
      content: 'You need to pay more attention to the details in your answers.',
    },
    {
      teacher: 'Mr. Lee',
      subject: 'History',
      quiz: 'Civil War Quiz',
      date: '2023-10-10',
      content: 'Good effort! I appreciate your interest in the subject.',
    },
  ];

  return (
    <div className="flex-1 p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Teacher Comments</h1>
      </header>

      {/* Comments List */}
      <div className="bg-white rounded-lg shadow p-6">
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments available.</p>
        ) : (
          comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-300 pb-4 mb-4">
              <div className="flex items-center mb-2">
                <FaUser className="mr-2 text-xl" />
                <h2 className="text-xl font-semibold">{comment.teacher}</h2>
                <span className="text-gray-500 ml-2">({comment.subject} - {comment.quiz})</span>
                <span className="text-gray-400 text-sm ml-auto">{comment.date}</span>
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
