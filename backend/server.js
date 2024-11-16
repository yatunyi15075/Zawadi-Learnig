// app.js
import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/db.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import teacherCommentRoutes from './routes/teacherCommentRoutes.js';
import roomRoutes from './routes/roomRoutes.js';
import teacherRoutes from './routes/teacherRoutes.js';
import quizRoutes from './routes/quizRoutes.js';


dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/assignments', assignmentRoutes);
app.use('/api/comments', teacherCommentRoutes);
app.use('/api/rooms', roomRoutes);
app.use('/api/comments', teacherCommentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((error) => console.log('Error connecting to the database:', error));
