import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Leaderboard = sequelize.define('Leaderboard', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profileImageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

export default Leaderboard;
