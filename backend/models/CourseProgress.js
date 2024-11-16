// models/CourseProgress.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import Student from './Student.js';

const CourseProgress = sequelize.define('CourseProgress', {
    course_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completion_percentage: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

CourseProgress.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });

export default CourseProgress;
