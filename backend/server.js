import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload'; // For handling file uploads

import accessibilityRoutes from './routes/accessibilityRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload()); // Add file upload middleware

const PORT = process.env.PORT || 3000;

// Use accessibility routes
app.use('/api/accessibility', accessibilityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
