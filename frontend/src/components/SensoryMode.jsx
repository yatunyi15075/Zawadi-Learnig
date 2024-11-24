import React, { useState } from "react";

const SensoryMode = () => {
  // Hard-coded settings and options for Sensory Mode
  const [isEnabled, setIsEnabled] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [background, setBackground] = useState("white");
  const [lineSpacing, setLineSpacing] = useState("normal");

  const toggleSensoryMode = () => setIsEnabled(!isEnabled);

  return (
    <div className={`p-6 ${isEnabled ? "bg-gray-100" : "bg-gray-200"} text-gray-800`}>
      <h1 className="text-2xl font-bold mb-4">Sensory-Friendly Mode</h1>
      <p className="mb-4">
        This is a distraction-free environment tailored for better focus. Adjust settings below to enhance your experience.
      </p>

      {/* Toggle Sensory Mode */}
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={toggleSensoryMode}
            className="mr-2"
          />
          Enable Sensory-Friendly Mode
        </label>
      </div>

      {/* Font Size Options */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Font Size</h2>
        <select
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full mt-2"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>

      {/* Background Color Options */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Background Color</h2>
        <select
          value={background}
          onChange={(e) => setBackground(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full mt-2"
        >
          <option value="white">White</option>
          <option value="light-gray">Light Gray</option>
          <option value="beige">Beige</option>
        </select>
      </div>

      {/* Line Spacing Options */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Line Spacing</h2>
        <select
          value={lineSpacing}
          onChange={(e) => setLineSpacing(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full mt-2"
        >
          <option value="normal">Normal</option>
          <option value="wide">Wide</option>
          <option value="extra-wide">Extra Wide</option>
        </select>
      </div>

      {/* Preview Section */}
      <div
        className={`p-4 mt-6 border border-gray-300 rounded ${
          background === "light-gray" ? "bg-gray-300" : background === "beige" ? "bg-yellow-50" : "bg-white"
        }`}
        style={{
          fontSize: fontSize === "small" ? "14px" : fontSize === "medium" ? "16px" : "18px",
          lineHeight: lineSpacing === "normal" ? "1.5" : lineSpacing === "wide" ? "1.75" : "2",
        }}
      >
        <h3 className="text-lg font-semibold mb-2">Preview:</h3>
        <p>
          This is a preview of the sensory-friendly mode. Adjust the settings above to see changes reflected here.
        </p>
      </div>
    </div>
  );
};

export default SensoryMode;
