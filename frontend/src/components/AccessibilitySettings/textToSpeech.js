// textToSpeech.js
export const enableTextToSpeech = () => {
    document.addEventListener('mouseup', handleTextSelection);
  };
  
  export const disableTextToSpeech = () => {
    document.removeEventListener('mouseup', handleTextSelection);
  };
  
  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      speechSynthesis.speak(utterance);
    }
  };
  