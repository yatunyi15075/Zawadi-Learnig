import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const [transcribedText, setTranscribedText] = useState(''); // To display the converted text
  const [showText, setShowText] = useState(false); // To control when to display text

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));

    if (setting === 'soundToText') {
      handleSoundToText();
    }
  };

  // Function to capture audio and send it for conversion
  const handleSoundToText = () => {
    if (!settings.soundToText) return;

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false; // We only want final results, not partial ones
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = async (event) => {
      const audioText = event.results[0][0].transcript;
      console.log('Captured Text:', audioText);

      // Show the transcribed text for 3 seconds
      setTranscribedText(audioText);
      setShowText(true);

      // After 3 seconds, hide the text
      setTimeout(() => {
        setShowText(false);
        setTranscribedText('');
      }, 3000);

      try {
        // Optionally send the text to the backend for further processing
        const response = await axios.post('http://localhost:5001/api/sound-to-text', { text: audioText });
        console.log('Backend response:', response.data);
      } catch (error) {
        console.error('Error sending text to backend:', error.message);
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = () => {
      console.log('Speech recognition ended');
    };
  };

  return (
    <div className="flex-1 p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">AI Accessibility Features & Settings</h1>
        <div className="flex items-center">
          <span className="material-icons mr-2">notifications</span>
          <span className="material-icons">settings</span>
        </div>
      </header>

      <div className="bg-white rounded-lg shadow p-6">
        {Object.keys(settings).map((key, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
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

        {/* Display transcribed text */}
        {showText && (
          <div className="mt-4 p-4 bg-gray-200 rounded-md">
            <p className="text-xl">{transcribedText}</p>
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full">Done</button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilitySettings;
