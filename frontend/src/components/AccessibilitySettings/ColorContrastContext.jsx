// src/ColorContrastContext.js
import React, { createContext, useContext, useState } from 'react';
import { colorContrasts } from './colorContrastManager.js';

const ColorContrastContext = createContext();

export const ColorContrastProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(colorContrasts.default);

  const toggleContrast = (contrast) => {
    setColorScheme(colorContrasts[contrast] || colorContrasts.default);
  };

  return (
    <ColorContrastContext.Provider value={{ colorScheme, toggleContrast }}>
      {children}
    </ColorContrastContext.Provider>
  );
};

export const useColorContrast = () => useContext(ColorContrastContext);
