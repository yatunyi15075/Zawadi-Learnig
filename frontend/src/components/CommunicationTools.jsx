import React, { useState } from "react";

const CommunicationTools = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  // Hardcoded phrases for AAC-like grid
  const communicationPhrases = [
    "I need help",
    "I am hungry",
    "I am thirsty",
    "I need a break",
    "I am tired",
    "Let's play",
    "Thank you",
    "I don't like this",
  ];

  // Emotions for the emotion picker
  const emotions = [
    { label: "Happy", color: "bg-yellow-400" },
    { label: "Angry", color: "bg-red-400" },
    { label: "Sad", color: "bg-blue-400" },
    { label: "Excited", color: "bg-green-400" },
    { label: "Calm", color: "bg-purple-400" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <h1 className="text-2xl font-bold">Communication Tools</h1>
      
      {/* Emotion Selector */}
      <div>
        <h2 className="text-lg font-semibold mb-2">How are you feeling today?</h2>
        <div className="flex space-x-2">
          {emotions.map((emotion) => (
            <button
              key={emotion.label}
              className={`p-2 rounded ${emotion.color} text-white`}
              onClick={() => setSelectedEmotion(emotion.label)}
            >
              {emotion.label}
            </button>
          ))}
        </div>
        {selectedEmotion && (
          <p className="mt-4 text-lg font-medium">
            You selected: <span className="font-bold">{selectedEmotion}</span>
          </p>
        )}
      </div>

      {/* Communication Phrases */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Quick Communication Phrases</h2>
        <div className="grid grid-cols-2 gap-4">
          {communicationPhrases.map((phrase, index) => (
            <button
              key={index}
              className="p-3 bg-gray-200 rounded shadow hover:bg-gray-300 transition duration-200"
            >
              {phrase}
            </button>
          ))}
        </div>
      </div>

      {/* Calm Down Tools */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Calm Down Tools</h2>
        <p className="mb-2">Select a tool to feel better:</p>
        <div className="space-x-4">
          <button className="p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
            Breathing Exercise
          </button>
          <button className="p-2 bg-green-500 text-white rounded shadow hover:bg-green-600">
            Listen to Music
          </button>
          <button className="p-2 bg-purple-500 text-white rounded shadow hover:bg-purple-600">
            Guided Meditation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunicationTools;
