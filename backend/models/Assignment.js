// models/Assignment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Assignment = sequelize.define('Assignment', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Assignment;
