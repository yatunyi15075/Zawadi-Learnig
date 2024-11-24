import React, { useState } from "react";

const LearningGames = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const games = [
    { id: 1, title: "Word Search", description: "Find hidden words in the grid." },
    { id: 2, title: "Math Quiz", description: "Solve fun math problems." },
    { id: 3, title: "Memory Match", description: "Match pairs of cards." },
    { id: 4, title: "Puzzle Solver", description: "Arrange pieces to complete the picture." },
  ];

  const handlePlay = (game) => {
    setSelectedGame(game);
    alert(`Launching ${game.title}...`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Learning Games</h1>
      <ul className="space-y-3">
        {games.map((game) => (
          <li
            key={game.id}
            className="flex flex-col bg-gray-100 p-4 rounded-lg shadow"
          >
            <span className="font-semibold text-lg">{game.title}</span>
            <p className="text-sm text-gray-600 mb-2">{game.description}</p>
            <button
              onClick={() => handlePlay(game)}
              className="self-start px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Play
            </button>
          </li>
        ))}
      </ul>
      {selectedGame && (
        <div className="mt-6 p-4 bg-blue-100 rounded">
          <h2 className="text-xl font-bold">Selected Game: {selectedGame.title}</h2>
          <p>{selectedGame.description}</p>
          <p className="text-sm text-gray-600">Prepare to have fun and learn!</p>
        </div>
      )}
    </div>
  );
};

export default LearningGames;
