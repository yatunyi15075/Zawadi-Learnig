// src/components/AccessibilitySettings.jsx
import React, { useState } from 'react';

const AccessibilitySettings = () => {
  const [settings, setSettings] = useState({
    soundToText: true,
    readTextAloud: true,
    adjustFontSize: false,
    colorContrast: true,
    soundToGesture: true,
    aiAssistant: false,
    cameraOnWhenStudying: true,
  });

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));
  };

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">AI Accessibility Features & Settings</h1>
        <div className="flex items-center">
          <span className="material-icons mr-2">notifications</span>
          <span className="material-icons">settings</span>
        </div>
      </header>

      {/* Settings list */}
      <div className="bg-white rounded-lg shadow p-6">
        {Object.keys(settings).map((key, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b last:border-b-0"
          >
            <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
            <div className="flex items-center">
              {key === 'adjustFontSize' && (
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded mr-4">T</span>
              )}
              <button
                onClick={() => handleToggle(key)}
                className={`w-12 h-6 flex items-center rounded-full p-1 ${
                  settings[key] ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`bg-white w-4 h-4 rounded-full transform transition-transform ${
                    settings[key] ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        ))}
        <div className="flex justify-center mt-6">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full">Done</button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
