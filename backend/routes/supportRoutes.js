import express from 'express';
import { createSupportMessage } from '../controllers/supportController.js';

const router = express.Router();

router.post('/', createSupportMessage);

export default router;
