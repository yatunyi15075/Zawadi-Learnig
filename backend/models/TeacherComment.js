// models/TeacherComment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const TeacherComment = sequelize.define('TeacherComment', {
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quiz: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default TeacherComment;
