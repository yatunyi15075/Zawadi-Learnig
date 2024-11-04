// EmotionDetection.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';

const EmotionDetection = ({ isActive }) => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const modelURL = 'https://teachablemachine.withgoogle.com/models/qJe477U3a/model.json'; // Replace with your model URL
  const metadataURL = 'https://teachablemachine.withgoogle.com/models/qJe477U3a/metadata.json'; // Replace with your metadata URL

  // Load the Teachable Machine model on component mount
  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  // Start the video stream
  useEffect(() => {
    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error('Error accessing the camera: ', err);
        });
    };

    if (isActive) {
      startVideo();
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isActive]);

  // Function to capture the current frame and make predictions
  const detectEmotions = async () => {
    if (model && videoRef.current) {
      const prediction = await model.predict(videoRef.current);
      setPredictions(prediction);
    }
  };

  // Detect emotions at regular intervals when the camera is active
  useEffect(() => {
    if (isActive) {
      const intervalId = setInterval(() => {
        detectEmotions();
      }, 1000); // Update every second

      return () => clearInterval(intervalId);
    }
  }, [isActive, model]);

  return (
    <div className="relative">
      <video ref={videoRef} autoPlay muted width="720" height="560" />

      {/* Display Predictions */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Emotion Predictions:</h2>
        {predictions.length > 0 && (
          <ul>
            {predictions.map((prediction, index) => (
              <li key={index}>
                <strong>{prediction.className}</strong>: {(prediction.probability * 100).toFixed(2)}%
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmotionDetection;
