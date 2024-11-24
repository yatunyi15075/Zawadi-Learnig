import React from "react";

const CalmCorner = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">Calm Corner</h1>
      <p className="mb-6 text-lg text-gray-700">
        Welcome to the Calm Corner! Use these tools to relax and unwind.
      </p>
      
      {/* Breathing Exercise */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Breathing Exercise</h2>
        <p className="mb-2 text-gray-600">Follow the guided breathing animation for 1 minute.</p>
        <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Start Breathing Exercise
        </button>
      </div>
      
      {/* Mindfulness Activity */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Mindfulness Exercise</h2>
        <p className="mb-2 text-gray-600">Close your eyes and listen to the sounds of nature.</p>
        <audio controls className="w-full">
          <source src="/audio/nature-sounds.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      
      {/* Emotion Tracker */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Emotion Tracker</h2>
        <p className="mb-2 text-gray-600">How are you feeling today?</p>
        <div className="flex space-x-4">
          <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            😊 Happy
          </button>
          <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            😢 Sad
          </button>
          <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            😌 Relaxed
          </button>
          <button className="p-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
            😡 Stressed
          </button>
        </div>
      </div>
      
      {/* Stretching Exercise */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Stretching Exercise</h2>
        <p className="mb-2 text-gray-600">Follow these simple stretches to release tension.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Neck stretches</li>
          <li>Shoulder rolls</li>
          <li>Toe touches</li>
        </ul>
      </div>
      
      {/* Inspirational Quotes */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Inspirational Quote</h2>
        <p className="italic text-gray-600">"You are braver than you believe, stronger than you seem, and smarter than you think." - A.A. Milne</p>
      </div>
    </div>
  );
};

export default CalmCorner;
