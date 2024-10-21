// src/components/AssignmentPage.jsx
import React from 'react';
import { FaBook, FaPaperclip, FaBell, FaCog } from 'react-icons/fa';

const AssignmentPage = () => {
  const assignment = {
    title: 'Math 6',
    dueDate: 'Jan 9, 2023',
    description: "Complete the activity in your workbook and upload it here when you're done.",
  };

  // Function to handle file input
  const handleFileInput = () => {
    document.getElementById('file-input').click();
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">{assignment.title}</h1>
        <div className="flex items-center text-gray-600">
          <FaBell className="mr-4 text-xl cursor-pointer hover:text-gray-800 transition" />
          <FaCog className="text-xl cursor-pointer hover:text-gray-800 transition" />
        </div>
      </header>

      {/* Assignment details */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <FaBook className="text-4xl text-purple-500 mr-3" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{assignment.title}</h2>
            <p className="text-gray-500">Due {assignment.dueDate}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-6">{assignment.description}</p>

        {/* Action buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
            Submit
          </button>
          <button className="bg-gray-300 text-gray-700 px-5 py-2 rounded-full hover:bg-gray-400 transition">
            View Assignment
          </button>
        </div>

        {/* File upload */}
        <div className="bg-gray-200 text-gray-700 px-4 py-3 rounded-lg flex items-center space-x-2 cursor-pointer" onClick={handleFileInput}>
          <FaPaperclip className="text-xl" />
          <span>Choose File</span>
          <input type="file" id="file-input" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default AssignmentPage;
