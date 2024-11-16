// colorContrastManager.js

const colorContrasts = {
    default: {
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    highContrast: {
      backgroundColor: '#000000',
      textColor: '#ffffff',
    },
    softContrast: {
      backgroundColor: '#f0f0f0',
      textColor: '#333333',
    },
    // You can add more contrast settings as needed
  };
  
  export const applyColorContrast = (setting) => {
    const body = document.body;
  
    if (colorContrasts[setting]) {
      const { backgroundColor, textColor } = colorContrasts[setting];
      body.style.backgroundColor = backgroundColor;
      body.style.color = textColor;
    } else {
      // Reset to default if the setting is not found
      body.style.backgroundColor = colorContrasts.default.backgroundColor;
      body.style.color = colorContrasts.default.textColor;
    }
  };
  