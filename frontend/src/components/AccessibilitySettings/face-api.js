// EmotionDetection.jsx
import React, { useRef, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const EmotionDetection = ({ isActive }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models'; // Adjust the path to your model files
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL)
      ]);
    };

    const startVideo = () => {
      navigator.mediaDevices.getUserMedia({ video: {} })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error('Error accessing the camera: ', err);
        });
    };

    const detectEmotions = async () => {
      if (isActive && videoRef.current) {
        const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(detections, {
          width: videoRef.current.width,
          height: videoRef.current.height
        });
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(videoRef.current);
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvasRef.current, resizedDetections);
      }
      requestAnimationFrame(detectEmotions);
    };

    loadModels().then(() => {
      startVideo();
      detectEmotions();
    });

    return () => {
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    };
  }, [isActive]);

  return (
    <div>
      <video ref={videoRef} autoPlay muted width="720" height="560" />
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />
    </div>
  );
};

export default EmotionDetection;
