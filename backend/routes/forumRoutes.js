import express from 'express';
import { getLeaderboard } from '../controllers/forumController.js';

const router = express.Router();

router.get('/', getLeaderboard);

export default router;
