import React from 'react';
import { FaBook, FaCheckSquare } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    icon: <FaBook className="text-black" />,
    message: 'Your lesson with Brian at 2pm',
    time: '1 day',
  },
  {
    id: 2,
    icon: <FaCheckSquare className="text-black" />,
    message: 'You have math assignment due',
    time: '2 day',
  },
  {
    id: 3,
    icon: <FaBook className="text-black" />,
    message: 'You have earned bronze model',
    time: '2 day',
  },
  {
    id: 4,
    icon: <FaCheckSquare className="text-black" />,
    message: 'You have unlocked new game',
    time: '6 day',
  },
];

const Notifications = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Notifications</h2>
        <ul className="space-y-4">
          {notifications.map((notification) => (
            <li key={notification.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{notification.icon}</div>
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
