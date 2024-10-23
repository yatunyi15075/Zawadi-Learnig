import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const CongratulationsPage = () => {
  const { width, height } = useWindowSize(); // For responsive confetti sizing

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Confetti effect */}
      <Confetti width={width} height={height} />
      
      <div className="text-center p-10 rounded-lg shadow-lg bg-gray-50 relative z-10">
        <img
          src="/path/to/trophy.png" // Trophy image or icon
          alt="Trophy"
          className="mx-auto mb-6 h-24 w-24"
        />
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Congratulations Alex
        </h2>
        <p className="text-xl font-semibold text-black mb-2">
          You have finished Science & Technology
        </p>

        <div className="flex justify-center mt-6 space-x-8">
          {/* Share button */}
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700">
            Share
          </button>
          {/* Download button */}
          <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700">
            Download
          </button>
        </div>

        <button className="bg-black text-white mt-6 py-2 px-4 rounded-full hover:bg-gray-800">
          View Progress
        </button>
      </div>
    </div>
  );
};

export default CongratulationsPage;
