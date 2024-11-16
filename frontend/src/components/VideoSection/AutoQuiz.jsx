import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaVolumeUp } from 'react-icons/fa'; // Import speaker icon

const AutoQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [difficulty, setDifficulty] = useState('easy');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Function to read text aloud
  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
  };

  // Read choices aloud
  const speakChoices = (choices) => {
    const instruction = "Here are the choices: ";
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(instruction));
    choices.forEach((choice, index) => {
      const choiceText = `${String.fromCharCode(65 + index)}: ${choice}`;
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(choiceText));
    });
  };

  // Fetch a question based on difficulty
  const fetchQuestion = (difficulty) => {
    axios.get(`http://localhost:5000/api/quiz/questions/${difficulty}`)
      .then(response => {
        if (response.data.length > 0) {
          setCurrentQuestion(response.data[0]);
          setFeedback('');
          speakText(response.data[0].question);  // Read the question aloud
          speakChoices(response.data[0].options); // Read choices aloud
        }
      })
      .catch(error => console.error(error));
  };

  useEffect(() => {
    fetchQuestion(difficulty);
  }, [difficulty]);

  // Voice recognition
  const startVoiceRecognition = () => {
    const recognition = new window.SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript.toLowerCase();
      console.log(`You said: ${spokenText}`);
      if (['a', 'b', 'c', 'd'].includes(spokenText)) {
        const index = ['a', 'b', 'c', 'd'].indexOf(spokenText);
        handleAnswer(currentQuestion.options[index]);
      } else {
        speakText("Sorry, I didn't understand that. Please say A, B, C, or D.");
      }
    };

    recognition.onerror = (event) => {
      console.log('Speech recognition error:', event.error);
    };
  };

  const handleAnswer = (answer) => {
    if (answer === currentQuestion.correctAnswer) {
      setFeedback('Great job! You got it right!');
      setScore(score + 1);
      speakText("Great job! You got it right!");
      if (difficulty === 'easy') setDifficulty('medium');
      else if (difficulty === 'medium') setDifficulty('hard');
    } else {
      setFeedback('Oops! That’s okay, let’s try again!');
      speakText("Oops! That’s okay, let’s try again!");
      if (difficulty === 'hard') setDifficulty('medium');
      else if (difficulty === 'medium') setDifficulty('easy');
    }
  };

  const handleNextQuestion = () => {
    fetchQuestion(difficulty);
  };

  const handleQuizCompletion = () => {
    setQuizComplete(true);
  };

  if (quizComplete) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your Score: {score}</p>
      </div>
    );
  }

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div style={{ fontSize: '20px', padding: '20px', backgroundColor: '#f1f1f1', borderRadius: '10px' }}>
      <h2 style={{ fontSize: '30px', color: '#4CAF50' }} dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h2>
      
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <FaVolumeUp 
          size={30} 
          style={{ cursor: 'pointer', color: '#4CAF50' }} 
          onClick={() => {
            speakText(currentQuestion.question);
            speakChoices(currentQuestion.options);
          }}
        />
      </div>
      
      <div style={{ marginTop: '20px' }}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            style={{
              fontSize: '18px', padding: '20px', margin: '15px', width: '100%',
              backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {option}
          </button>
        ))}
      </div>
      
      <p style={{ fontSize: '24px', color: feedback === 'Great job! You got it right!' ? '#4CAF50' : '#f44336' }}>
        {feedback}
      </p>
      
      {feedback && (
        <button
          onClick={handleNextQuestion}
          style={{
            fontSize: '20px', padding: '15px 30px', marginTop: '10px', backgroundColor: '#008CBA', color: '#fff',
            border: 'none', borderRadius: '5px', cursor: 'pointer'
          }}
        >
          {feedback === 'Great job! You got it right!' ? 'Next Question' : 'Try Again'}
        </button>
      )}
      
      <p style={{ fontSize: '22px', marginTop: '20px' }}>Score: {score}</p>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          onClick={startVoiceRecognition}
          style={{
            fontSize: '20px', padding: '15px 30px', backgroundColor: '#FF5722', color: '#fff',
            border: 'none', borderRadius: '5px', cursor: 'pointer'
          }}
        >
          Start Voice Recognition (Say A, B, C, or D)
        </button>
      </div>
    </div>
  );
};

export default AutoQuiz;
