import React, { useState } from "react";

const VisualSchedule = () => {
  const [sensoryMode, setSensoryMode] = useState(false);

  const toggleSensoryMode = () => {
    setSensoryMode(!sensoryMode);
  };

  return (
    <div className={`p-6 ${sensoryMode ? "bg-gray-100" : "bg-white"}`}>
      <h1 className="text-2xl font-bold mb-4">Visual Schedule</h1>

      {/* Sensory-Friendly Mode Toggle */}
      <div className="mb-4">
        <button
          onClick={toggleSensoryMode}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-200"
        >
          {sensoryMode ? "Disable Sensory-Friendly Mode" : "Enable Sensory-Friendly Mode"}
        </button>
      </div>

      {/* Interactive Daily Schedule */}
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="w-32 font-semibold">8:00 AM</span> 
          <span className="flex-grow">Breakfast</span>
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700">
            Completed
          </button>
        </li>
        <li className="flex items-center">
          <span className="w-32 font-semibold">9:00 AM</span> 
          <span className="flex-grow">Math Class</span>
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700">
            Completed
          </button>
        </li>
        <li className="flex items-center">
          <span className="w-32 font-semibold">10:00 AM</span> 
          <span className="flex-grow">Reading</span>
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700">
            Completed
          </button>
        </li>
        <li className="flex items-center">
          <span className="w-32 font-semibold">11:00 AM</span> 
          <span className="flex-grow">Outdoor Play</span>
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700">
            Completed
          </button>
        </li>
        <li className="flex items-center">
          <span className="w-32 font-semibold">12:00 PM</span> 
          <span className="flex-grow">Lunch</span>
          <button className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-700">
            Completed
          </button>
        </li>
      </ul>

      {/* Progress Tracker */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Progress Tracker</h2>
        <p>
          Track your daily tasks and mark them as completed to visualize your progress.
        </p>
      </div>
    </div>
  );
};

export default VisualSchedule;
