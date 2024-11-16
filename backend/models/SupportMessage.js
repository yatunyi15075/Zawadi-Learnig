import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const SupportMessage = sequelize.define('SupportMessage', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default SupportMessage;


// {
//     "name": "John Doe",
//     "email": "johndoe@example.com",
//     "message": "I am experiencing an issue with the platform. Can you help?"
//   }
  