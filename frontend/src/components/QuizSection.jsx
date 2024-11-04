import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizSection = () => {
  const [quizQuestion, setQuizQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuiz = async (retries = 5) => {
    setLoading(true); // Start loading state
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: 'Generate a single quiz question about the importance of video chapters in educational videos, with multiple choice answers.',
            },
          ],
          max_tokens: 200,
        },
        {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const questions = response.data.choices[0].message.content;
      const parsedQuestions = parseQuizQuestions(questions);
      setQuizQuestion(parsedQuestions[0]); // Store only the first question
    } catch (error) {
      if (error.response && error.response.status === 429 && retries > 0) {
        const waitTime = Math.pow(2, 5 - retries) * 1000; // Exponential backoff
        console.log(`Rate limit exceeded. Waiting for ${waitTime} ms before retrying...`);
        await new Promise(res => setTimeout(res, waitTime)); // Wait before retrying
        await fetchQuiz(retries - 1); // Retry the request
      } else {
        setError(error); // Set error if retries exhausted or different error
      }
    } finally {
      setLoading(false); // End loading state
    }
  };

  useEffect(() => {
    fetchQuiz(); // Fetch quiz on mount
  }, []);

  const parseQuizQuestions = (questionsText) => {
    const lines = questionsText.split('\n').filter(line => line); // Remove empty lines
    const [questionLine, ...optionsLines] = lines;
    return [{
      question: questionLine.trim(),
      options: optionsLines.map(option => option.replace(/^[A-D]\.\s*/, '').trim()) // Remove letter prefixes (A., B., etc.)
    }];
  };

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      alert("Please select an answer.");
    } else {
      // Submit answer logic
      console.log(`Selected Answer: ${selectedAnswer}`);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } 

  if (error) {
    return <div>Error loading quizzes: {error.message}</div>;
  }

  if (!quizQuestion) {
    return <div>No quiz available at the moment.</div>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">Quiz Section</h2>
      <div className="mb-4">
        <p className="font-semibold">{quizQuestion.question}</p>
        <ul>
          {quizQuestion.options.map((option, idx) => (
            <li key={idx} className="ml-4">
              <input
                type="radio"
                name="quiz-question"
                id={`option-${idx}`}
                value={option}
                onChange={handleAnswerChange}
                checked={selectedAnswer === option}
              />
              <label htmlFor={`option-${idx}`}>{option}</label>
            </li>
          ))}
        </ul>
        <button onClick={handleSubmit} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit Answer
        </button>
      </div>
    </div>
  );
};

export default QuizSection;

