// Camera.jsx
import React, { useRef, useEffect, useState } from 'react';
import * as tmImage from '@teachablemachine/image';

const Camera = () => {
  const videoRef = useRef(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const [cameraActive, setCameraActive] = useState(false);
  const modelURL = 'https://teachablemachine.withgoogle.com/models/7GjTAaWjZ/model.json'; // Replace with your model URL
  const metadataURL = 'https://teachablemachine.withgoogle.com/models/7GjTAaWjZ/metadata.json'; // Replace with your metadata URL

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await tmImage.load(modelURL, metadataURL);
      setModel(loadedModel);
    };
    loadModel();
  }, []);

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

    if (cameraActive) {
      startVideo();

      const predictionInterval = setInterval(async () => {
        if (model && videoRef.current) {
          const prediction = await model.predict(videoRef.current);
          setPredictions(prediction);
        }
      }, 1000);

      return () => clearInterval(predictionInterval);
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [cameraActive, model]);

  const getHighestEmotion = () => {
    if (predictions.length === 0) return null;
    const highestPrediction = predictions.reduce((prev, current) =>
      prev.probability > current.probability ? prev : current
    );
    return highestPrediction.className;
  };

  return (
    <div style={styles.container}>
      <button
        onClick={() => setCameraActive(true)}
        style={styles.button}
      >
        Open Camera
      </button>

      {cameraActive && (
        <div style={styles.contentContainer}>
          <video ref={videoRef} autoPlay muted width="720" height="560" style={styles.video} />

          <div style={styles.predictionsContainer}>
            <h2 style={styles.title}>Emotion Detected:</h2>
            <p style={styles.emotionText}>{getHighestEmotion() || 'Detecting...'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f4f8',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '20px',
  },
  video: {
    borderRadius: '8px',
    border: '2px solid #4a90e2',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '60%',
  },
  predictionsContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    color: '#333',
    marginBottom: '10px',
  },
  emotionText: {
    fontSize: '24px',
    color: '#4a90e2',
    fontWeight: 'bold',
  },
};

export default Camera;
