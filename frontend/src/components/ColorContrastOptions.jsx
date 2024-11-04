// ColorContrastOptions.jsx
import React from 'react';

const ColorContrastOptions = ({ onSelectColorScheme }) => {
  const colorSchemes = [
    { name: 'Default', colors: { background: 'white', text: 'black' } },
    { name: 'High Contrast', colors: { background: 'black', text: 'white' } },
    { name: 'Blue Light', colors: { background: '#f0f8ff', text: '#00008b' } },
    { name: 'Dark Mode', colors: { background: '#121212', text: '#e0e0e0' } },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Color Contrast Options</h2>
      <div className="flex flex-col space-y-2">
        {colorSchemes.map((scheme, index) => (
          <button
            key={index}
            onClick={() => onSelectColorScheme(scheme.colors)}
            className="p-2 rounded-md shadow hover:opacity-80"
            style={{
              backgroundColor: scheme.colors.background,
              color: scheme.colors.text,
            }}
          >
            {scheme.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorContrastOptions;
