import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoChapter = () => {
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const handleCompleteClick = () => {
    setIsComplete(true);

    // After 5 seconds, redirect to the complete page
    setTimeout(() => {
      navigate('/dashboard/complete');
    }, 5000);
  };

  return (
    <div className="flex justify-center items-start bg-gray-100 p-6 h-screen">
      {/* Video Section */}
      <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-lg p-6 mr-6">
        <div className="relative w-full h-96 lg:h-142 bg-gray-200 rounded-lg flex items-center justify-center">
          <button className="bg-black p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-6.428-4.007a1 1 0 00-1.6.802v8.036a1 1 0 001.6.802l6.428-4.007a1 1 0 000-1.604z" />
            </svg>
          </button>
          <p className="absolute bottom-2 right-2 text-white">Solar...</p>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Chapter 1: Introduction</h2>
          <p>Welcome to the first chapter...</p>
        </div>

        {/* Completion Button */}
        <div className="mt-6 flex justify-center">
          {!isComplete ? (
            <button
              onClick={handleCompleteClick}
              className="w-32 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center"
            >
              Complete
            </button>
          ) : (
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              {/* Tick Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      </div>

      {/* Chapter Section */}
      <div className="w-1/4 bg-white rounded-lg shadow-lg p-4">
        <h3 className="font-semibold text-lg mb-2">Chapters</h3>
        <ul className="space-y-2">
          <li className="flex items-center">
            <input type="radio" id="chapter1" name="chapter" className="mr-2" />
            <label htmlFor="chapter1">Intro</label>
          </li>
          <li className="flex items-center">
            <input type="radio" id="chapter2" name="chapter" className="mr-2" />
            <label htmlFor="chapter2">Quiz</label>
          </li>
          <li className="flex items-center">
            <input type="radio" id="chapter3" name="chapter" className="mr-2" />
            <label htmlFor="chapter3">Conclusion</label>
          </li>
          <li className="flex items-center">
            <input type="radio" id="chapter4" name="chapter" className="mr-2" />
            <label htmlFor="chapter4">Test</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default VideoChapter;
