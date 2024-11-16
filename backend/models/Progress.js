// models/Progress.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Progress = sequelize.define('Progress', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completionPercentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teacherFeedback: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  badges: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
}, {
  timestamps: true,
});

export default Progress;
