// routes/progressRoutes.js
import express from 'express';
import { getAllProgress, getProgressByUserId, createProgress, updateProgress, deleteProgress } from '../controllers/progressController.js';

const router = express.Router();

router.get('/', getAllProgress);
router.get('/:userId', getProgressByUserId);
router.post('/', createProgress);
router.put('/:id', updateProgress);
router.delete('/:id', deleteProgress);

export default router;


// {
//     "userId": 1,
//     "course": "Math",
//     "completionPercentage": 30,
//     "teacherFeedback": "Good start, keep going!",
//     "badges": ["Star", "Medal"]
//   }
  