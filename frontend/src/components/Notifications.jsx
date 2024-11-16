import React, { useEffect, useState } from 'react';
import { FaBook, FaCheckSquare } from 'react-icons/fa';
import axios from 'axios';

const iconMap = {
  lesson: <FaBook className="text-black" />,
  assignment: <FaCheckSquare className="text-black" />,
};

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">
                  {iconMap[notification.type] || <FaBook className="text-black" />}
                </div>
                <div>
                  <p className="text-lg">{notification.message}</p>
                  <p className="text-gray-500 text-sm">({notification.time})</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Notifications;
