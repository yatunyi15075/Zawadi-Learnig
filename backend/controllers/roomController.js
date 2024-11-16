// roomController.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

// Daily API endpoint and headers
const DAILY_API_URL = 'https://api.daily.co/v1/rooms';
const DAILY_API_KEY = process.env.DAILY_API_KEY;

// Function to create a new room
export const createRoom = async (req, res) => {
  try {
    const response = await axios.post(
      DAILY_API_URL,
      {
        properties: {
          enable_chat: true, // Enable chat in the room
          enable_dial_in: true, // Allow dial-in option
          enable_screenshare: true, // Enable screen sharing 
        },
      },
      {
        headers: {
          Authorization: `Bearer ${DAILY_API_KEY}`,
        },
      }
    );

    // Send the room URL to the frontend
    res.status(201).json({ url: response.data.url });
  } catch (error) {
    console.error('Error creating room:', error);
    res.status(500).json({ message: 'Failed to create room' });
  }
};
