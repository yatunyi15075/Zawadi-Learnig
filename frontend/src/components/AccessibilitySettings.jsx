import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { increaseFontSize, decreaseFontSize, resetFontSize } from './fontSizeManager';
import { enableTextToSpeech, disableTextToSpeech } from './textToSpeech';
import ColorContrastOptions from './ColorContrastOptions';
import AI_Assistant from './AI_Assistant';
import CameraComponent from './CameraComponent';
import EmotionDetection from './EmotionDetection'; // Import the Emotion Detection component

const AccessibilitySettings = () => {
  const [settings, setSettings] = useState({
    soundToText: true,
    readTextAloud: false,
    adjustFontSize: false,
    colorContrast: true,
    soundToGesture: true,
    aiAssistant: false,
    cameraOnWhenStudying: false,
  });

  const [transcribedText, setTranscribedText] = useState('');
  const [showText, setShowText] = useState(false);
  const [colorScheme, setColorScheme] = useState({
    background: 'white',
    text: 'black',
  });

  useEffect(() => {
    if (settings.readTextAloud) {
      enableTextToSpeech();
    } else {
      disableTextToSpeech();
    }

    return () => {
      disableTextToSpeech();
    };
  }, [settings.readTextAloud]);

  const handleToggle = (setting) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: !prevSettings[setting],
    }));

    if (setting === 'soundToText') {
      handleSoundToText();
    }
  };

  const handleSoundToText = () => {
    if (!settings.soundToText) return;

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = async (event) => {
      const audioText = event.results[0][0].transcript;
      setTranscribedText(audioText);
      setShowText(true);

      setTimeout(() => {
        setShowText(false);
        setTranscribedText('');
      }, 3000);

      try {
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

  const handleSelectColorScheme = (colors) => {
    setColorScheme(colors);
  };

  return (
    <div className="flex-1 p-6" style={{ backgroundColor: colorScheme.background, color: colorScheme.text }}>
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
              {key === 'adjustFontSize' && settings.adjustFontSize && (
                <div className="flex space-x-2 mr-4">
                  <button onClick={decreaseFontSize} className="bg-gray-200 px-2 py-1 rounded">A-</button>
                  <button onClick={increaseFontSize} className="bg-gray-200 px-2 py-1 rounded">A+</button>
                  <button onClick={resetFontSize} className="bg-gray-200 px-2 py-1 rounded">Reset</button>
                </div>
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

        {settings.colorContrast && (
          <ColorContrastOptions onSelectColorScheme={handleSelectColorScheme} />
        )}

        {showText && (
          <div className="mt-4 p-4 bg-gray-200 rounded-md">
            <p className="text-xl">{transcribedText}</p>
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button className="bg-purple-500 text-white px-6 py-2 rounded-full">Done</button>
        </div>
      </div>

      {settings.cameraOnWhenStudying && (
        <>
          <CameraComponent />
          <EmotionDetection isActive={settings.cameraOnWhenStudying} />
        </>
      )}
      
      <AI_Assistant />
    </div>
  );
};

export default AccessibilitySettings;
