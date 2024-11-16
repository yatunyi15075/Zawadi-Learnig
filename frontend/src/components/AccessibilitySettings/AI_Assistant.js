import React, { useEffect } from 'react';

const AI_Assistant = () => {
  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log('User said:', transcript);
      
      // Check for the wake word "Zawadi"
      if (transcript.includes('zaawaadi')) {
        respondToUser();
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    recognition.start();

    return () => {
      recognition.stop();
    };
  }, []);

  const respondToUser = () => {
    const responses = [
      "Hello! How can I assist you today?",
      "Hi there! What's on your mind?",
      "Greetings! What would you like to talk about?",
    ];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    // Here you can use text-to-speech or just log the response
    console.log(randomResponse);
    // Implement text-to-speech response if needed
    const utterance = new SpeechSynthesisUtterance(randomResponse);
    window.speechSynthesis.speak(utterance);
  };

  return null; // This component doesn't render anything
};

export default AI_Assistant;
