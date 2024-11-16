// models/Teacher.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Teacher = sequelize.define('Teacher', {
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    employee_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hire_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Teacher;
