// models/Student.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Student = sequelize.define('Student', {
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
    enrollment_number: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true
    },
    date_of_birth: {
        type: DataTypes.DATE,
        allowNull: true
    },
    grade_level: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Student;
