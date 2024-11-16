// models/User.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile_picture: {
        type: DataTypes.STRING,
        allowNull: true
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
});

export default User;
