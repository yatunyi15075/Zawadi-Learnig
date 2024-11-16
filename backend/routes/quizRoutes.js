import express from 'express';
import axios from 'axios';

const router = express.Router();

// Function to fetch questions by difficulty
const fetchQuestions = async (difficulty) => {
  const { data } = await axios.get(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}`);
  return data.results.map((question, index) => ({
    id: index + 1,
    question: question.question,
    options: [...question.incorrect_answers, question.correct_answer].sort(() => 0.5 - Math.random()),
    correctAnswer: question.correct_answer,
  }));
};

// Route to fetch questions based on difficulty
router.get('/questions/:difficulty', async (req, res) => {
  const { difficulty } = req.params;
  try {
    const questions = await fetchQuestions(difficulty);
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
});

export default router;
