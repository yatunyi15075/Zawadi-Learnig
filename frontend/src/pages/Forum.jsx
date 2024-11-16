import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Forum = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/forum');
        setLeaderboard(response.data);
      } catch (error) {
        console.error("Error fetching leaderboard data:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#FFFAE3] to-[#FFDD67]">
      <h1 className="text-4xl font-extrabold text-[#6A1B9A] mt-10 mb-6">Leaderboard</h1>

      <div className="flex justify-center space-x-8 mb-10">
        {leaderboard.slice(0, 3).map((player, index) => (
          <div key={player.id} className="flex flex-col items-center">
            <div className={`w-${index === 0 ? '28' : '24'} h-${index === 0 ? '28' : '24'} rounded-full border-8 ${index === 0 ? 'border-[#FFD700]' : index === 1 ? 'border-[#B87333]' : 'border-[#C0C0C0]'} bg-white p-1 shadow-lg`}>
              <img
                src={player.profileImageUrl}
                alt={player.name}
                className="w-full h-full rounded-full"
              />
            </div>
            <p className="text-lg font-semibold text-[#6A1B9A] mt-2">{player.name}</p>
            <p className={`${index === 0 ? 'text-[#FFD700] text-2xl' : 'text-[#FFC107] text-lg'}`}>{index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'} {player.score.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl bg-white text-black rounded-lg p-6 shadow-xl">
        {leaderboard.slice(3).map((player) => (
          <div key={player.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img
                src={player.profileImageUrl}
                alt={player.name}
                className="w-12 h-12 rounded-full border-4 border-[#6A1B9A]"
              />
              <p className="ml-4 font-semibold text-[#6A1B9A]">{player.name}</p>
            </div>
            <p className="text-[#FFC107] text-lg">⭐ {player.score.toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-around mt-10 w-full max-w-xl">
        <div className="text-center text-[#6A1B9A] font-semibold">
          <p>Keep Climbing!</p>
          <p>Reach the top for rewards!</p>
        </div>
        <div className="text-center">
          <img src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="Star Icon" className="w-12 h-12 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Forum;
