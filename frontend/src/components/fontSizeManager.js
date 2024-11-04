// fontSizeManager.js

let currentFontSize = 16; // Default font size in pixels

export const increaseFontSize = () => {
  currentFontSize += 2; // Increase font size by 2px
  applyFontSize();
};

export const decreaseFontSize = () => {
  currentFontSize = Math.max(12, currentFontSize - 2); // Decrease font size by 2px, minimum 12px
  applyFontSize();
};

export const resetFontSize = () => {
  currentFontSize = 16; // Reset to default size
  applyFontSize();
};

const applyFontSize = () => {
  document.body.style.fontSize = `${currentFontSize}px`;
};
