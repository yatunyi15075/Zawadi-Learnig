// routes/teacherRoutes.js
import express from 'express';
import {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacher,
  deleteTeacher
} from '../controllers/teacherController.js';

const router = express.Router();

router.get('/', getAllTeachers);
router.get('/:id', getTeacherById);
router.post('/', createTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;

// {
//     "teacher": "Mr. Smith",
//     "subject": "Math",
//     "quiz": "Algebra Test",
//     "date": "2023-10-15",
//     "content": "Great job on the quiz! Your understanding of algebra is improving."
//   }
  