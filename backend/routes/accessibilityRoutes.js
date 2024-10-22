import express from 'express';
import multer from 'multer';
import axios from 'axios';
import FormData from 'form-data';

const router = express.Router();

// Configure Multer to handle file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Route to handle sound-to-text request
router.post('/sound-to-text', upload.single('file'), async (req, res) => {
  try {
    const audioFile = req.file; // Get audio file from request

    if (!audioFile) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Prepare audio file for sending to Python service
    const formData = new FormData();
    formData.append('file', audioFile.buffer, 'audio.wav');

    // Send the request to Python service
    const response = await axios.post('http://localhost:5001/api/sound-to-text', formData, {
      headers: formData.getHeaders(), // Ensure proper headers are sent
    });

    // Send the response back to the frontend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error in sound-to-text:', error.message);
    res.status(500).json({ error: 'Sound-to-text failed' });
  }
});

export default router;
