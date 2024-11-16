// room routes
import express from 'express';
import { createRoom } from '../controllers/roomController.js'

const router = express.Router();


router.put('/', createRoom);

export default router;

