// TeachableMLEmotionDetection.jsx
import React, { useEffect } from 'react';

const TeachableMLEmotionDetection = ({ isActive }) => {
  useEffect(() => {
    let model, webcam, labelContainer, maxPredictions;

    const URL = "https://teachablemachine.withgoogle.com/models/qJe477U3a/";

    const init = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      model = await window.tmImage.load(modelURL, metadataURL);
      maxPredictions = model.getTotalClasses();

      const flip = true; // Whether to flip the webcam
      webcam = new window.tmImage.Webcam(200, 200, flip); // Width, height, flip
      await webcam.setup(); // Request access to the webcam
      await webcam.play();
      window.requestAnimationFrame(loop);

      // Append elements to the DOM
      document.getElementById("webcam-container").appendChild(webcam.canvas);
      labelContainer = document.getElementById("label-container");
      for (let i = 0; i < maxPredictions; i++) { // and class labels
        labelContainer.appendChild(document.createElement("div"));
      }
    };

    const loop = async () => {
      webcam.update(); // Update the webcam frame
      await predict();
      window.requestAnimationFrame(loop);
    };

    const predict = async () => {
      const prediction = await model.predict(webcam.canvas);
      for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = 
          prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
      }
    };

    if (isActive) {
      init();
    }

    return () => {
      if (webcam) {
        webcam.stop(); // Stop the webcam when component unmounts
      }
    };
  }, [isActive]);

  return (
    <div>
      <div id="webcam-container"></div>
      <div id="label-container" style={{ marginTop: '10px' }}></div>
    </div>
  );
};

export default TeachableMLEmotionDetection;
