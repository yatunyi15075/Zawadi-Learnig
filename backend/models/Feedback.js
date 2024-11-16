// models/Feedback.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Student from './Student.js';
import Teacher from './Teacher.js';

const Feedback = sequelize.define('Feedback', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

Feedback.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Feedback.belongsTo(Teacher, { foreignKey: 'teacher_id', onDelete: 'CASCADE' });

export default Feedback;
