import React from "react";
import { FaStar, FaMedal, FaSmile } from "react-icons/fa";

const Progress = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full p-6 bg-yellow-50 rounded-lg shadow-lg">
      {/* Overall Progress Section */}
      <div className="flex-1 mb-6 lg:mb-0 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Your Progress</h2>
        <div className="flex items-center justify-between mb-2">
          <p className="text-3xl font-extrabold text-pink-500">50%</p>
          <p className="text-sm text-gray-600">Past month +20</p>
        </div>

        <div className="flex items-end justify-between h-32 mt-4 space-x-2">
          <div className="w-1/3 h-16 bg-blue-300 rounded-lg"></div>
          <div className="w-1/3 h-32 bg-blue-500 rounded-lg"></div>
          <div className="w-1/3 h-24 bg-blue-400 rounded-lg"></div>
        </div>

        {/* Course Progress */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Courses</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium text-indigo-600">Math</p>
              <p className="text-gray-600">30% Completed</p>
            </div>
            <div className="w-full h-4 bg-purple-200 rounded-full">
              <div className="h-4 bg-purple-500 rounded-full transition-all" style={{ width: "30%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium text-indigo-600">Science</p>
              <p className="text-gray-600">70% Completed</p>
            </div>
            <div className="w-full h-4 bg-green-200 rounded-full">
              <div className="h-4 bg-green-500 rounded-full transition-all" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p className="font-medium text-indigo-600">French</p>
              <p className="text-gray-600">90% Completed</p>
            </div>
            <div className="w-full h-4 bg-yellow-200 rounded-full">
              <div className="h-4 bg-yellow-500 rounded-full transition-all" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher's Feedback Section */}
      <div className="flex-1 lg:ml-12 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-purple-600">Teacher's Feedback</h2>
        <div className="bg-blue-100 p-6 rounded-lg shadow-inner flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center">
            <FaSmile className="text-purple-600 text-2xl" />
          </div>
          <div>
            <p className="font-semibold text-lg text-gray-800">Miss Morgan</p>
            <p className="text-sm text-gray-600">"You're doing great! Keep up the good work!"</p>
          </div>
        </div>

        {/* Awards/Badges */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-purple-600">Your Badges</h3>
          <div className="flex space-x-4">
            <FaStar className="text-yellow-500 text-3xl" />
            <FaMedal className="text-red-400 text-3xl" />
            <FaStar className="text-blue-500 text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
