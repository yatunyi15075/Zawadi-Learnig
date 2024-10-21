import React from "react";

const Progress = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full p-6">
      {/* Overall Progress Section */}
      <div className="flex-1 mb-6 lg:mb-0">
        <h2 className="text-xl font-semibold mb-4">Overall progress</h2>
        <div className="flex items-center justify-between mb-2">
          <p className="text-2xl font-bold">50%</p>
          <p className="text-sm text-gray-500">Past month +20</p>
        </div>

        <div className="flex items-end justify-between h-32 mt-4">
          <div className="w-1/3 h-16 bg-gray-300"></div>
          <div className="w-1/3 h-32 bg-black"></div>
          <div className="w-1/3 h-24 bg-gray-500"></div>
        </div>

        {/* Course Progress */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Course Progress</h3>
          <div className="mb-4">
            <div className="flex justify-between">
              <p>Calculus</p>
              <p>30% Completed</p>
            </div>
            <div className="w-full h-2 bg-gray-300">
              <div className="h-2 bg-gray-500" style={{ width: "30%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p>Physics</p>
              <p>70% Completed</p>
            </div>
            <div className="w-full h-2 bg-gray-300">
              <div className="h-2 bg-gray-700" style={{ width: "70%" }}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between">
              <p>French</p>
              <p>90% Completed</p>
            </div>
            <div className="w-full h-2 bg-gray-300">
              <div className="h-2 bg-black" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher's Feedback Section */}
      <div className="flex-1 lg:ml-12">
        <h2 className="text-xl font-semibold mb-4">Teacher's Feedback</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0 mr-4"></div>
            <div>
              <p className="font-semibold">Miss Morgan</p>
              <p className="text-sm text-gray-500">Your doing great! Keep up the great work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
