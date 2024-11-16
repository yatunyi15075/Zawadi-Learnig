// CameraComponent.jsx
import React, { useState, useEffect } from 'react';

const CameraComponent = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [videoStream, setVideoStream] = useState(null);

  const handleCameraToggle = async () => {
    if (isCameraActive) {
      stopCamera();
    } else {
      await requestCameraPermission();
    }
  };

  const requestCameraPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setVideoStream(stream);
      setIsCameraActive(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const stopCamera = () => {
    if (videoStream) {
      videoStream.getTracks().forEach(track => track.stop());
      setVideoStream(null);
    }
    setIsCameraActive(false);
  };

  return (
    <div>
      {isCameraActive && (
        <div className="camera-card">
          <video autoPlay playsInline muted style={{ width: '100%', height: 'auto' }} ref={(video) => {
            if (video) {
              video.srcObject = videoStream;
            }
          }} />
          <button onClick={stopCamera} className="hide-camera-button">Hide Camera</button>
        </div>
      )}
      <button onClick={handleCameraToggle} className={`toggle-camera-button ${isCameraActive ? 'active' : ''}`}>
        {isCameraActive ? 'Turn Off Camera' : 'Turn On Camera'}
      </button>
    </div>
  );
};

export default CameraComponent;
