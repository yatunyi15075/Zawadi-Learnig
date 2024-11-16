import React from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const CongratulationsPage = () => {
  const { width, height } = useWindowSize(); // For responsive confetti sizing

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-200 to-purple-300">
      {/* Confetti effect */}
      <Confetti width={width} height={height} />
      
      <div className="text-center p-10 rounded-3xl shadow-xl bg-white border-4 border-yellow-400 relative z-10">
        <img
          src="/path/to/trophy.png" // Trophy image or icon
          alt="Trophy"
          className="mx-auto mb-4 h-28 w-28"
        />
        <h2 className="text-3xl font-extrabold text-purple-700 mb-2">
          Congratulations, Alex!
        </h2>
        <p className="text-lg font-semibold text-blue-600 mb-4">
          You have finished Science & Technology!
        </p>

        {/* Prize Badges Section */}
        <div className="flex justify-center mb-4">
          <div className="bg-yellow-300 rounded-full p-4 mx-2 shadow-md">
            🏅
          </div>
          <div className="bg-silver-200 rounded-full p-4 mx-2 shadow-md">
            🥈
          </div>
          <div className="bg-bronze-300 rounded-full p-4 mx-2 shadow-md">
            🥉
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          {/* Share button */}
          <button className="bg-pink-500 text-white font-medium py-2 px-6 rounded-full hover:bg-pink-600 shadow-lg transition-all">
            Share
          </button>
          {/* Download button */}
          <button className="bg-green-500 text-white font-medium py-2 px-6 rounded-full hover:bg-green-600 shadow-lg transition-all">
            Download
          </button>
        </div>

        <button className="bg-blue-500 text-white mt-4 py-2 px-6 rounded-full hover:bg-blue-600 shadow-lg transition-all">
          View Progress
        </button>
      </div>
    </div>
  );
};

export default CongratulationsPage;
