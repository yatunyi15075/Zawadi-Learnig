import React from 'react';

const Forum = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-[#992F9B] text-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">Leaderboard</h1>

        <div className="flex justify-around items-center mb-8">
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Edward"
              className="w-16 h-16 rounded-full mx-auto"
            />
            <p className="font-semibold">Edward Ben</p>
            <p className="text-yellow-300">⭐ 820,000</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Alex"
              className="w-20 h-20 rounded-full border-4 border-yellow-500 mx-auto"
            />
            <p className="font-bold">Alex Huang</p>
            <p className="text-yellow-300">⭐ 10,000,000</p>
          </div>

          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Mark"
              className="w-16 h-16 rounded-full mx-auto"
            />
            <p className="font-semibold">Mark Philip</p>
            <p className="text-yellow-300">⭐ 750,000</p>
          </div>
        </div>

        <div className="bg-white text-black rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="You"
                className="w-10 h-10 rounded-full"
              />
              <p className="ml-3 font-semibold">You</p>
            </div>
            <p className="text-yellow-300">⭐ 520,000</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/47.jpg"
                alt="Greg Thomson"
                className="w-10 h-10 rounded-full"
              />
              <p className="ml-3 font-semibold">Greg Thomson</p>
            </div>
            <p className="text-yellow-300">⭐ 530,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;
