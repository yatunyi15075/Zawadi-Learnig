// LiveClasses.jsx
import React, { useState, useEffect } from 'react';
import { FaVideo, FaHandPaper, FaSmile, FaDownload, FaCamera } from 'react-icons/fa';
import DailyIframe from '@daily-co/daily-js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LiveClasses = () => {
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: 'Mathematics - Algebra Basics',
      teacher: 'Mr. John Doe',
      time: '10:00 AM',
      duration: '1 hour',
      isLive: false,
      attended: false,
      roomUrl: '', // This will be set dynamically
    },
    {
      id: 2,
      title: 'Biology - Cell Structure',
      teacher: 'Ms. Jane Smith',
      time: '12:00 PM',
      duration: '1 hour',
      isLive: true,
      attended: true,
      roomUrl: '', // This will be fetched
    },
  ]);

  const [callFrame, setCallFrame] = useState(null);
  const navigate = useNavigate();

  const handleJoinClass = async (classItem) => {
    try {
      const response = await axios.put('http://localhost:5000/api/rooms');
      const { url } = response.data;

      const frame = DailyIframe.createFrame({
        showLeaveButton: true,
        iframeStyle: {
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 9999,
        },
      });

      frame.join({ url })
        .then(() => setCallFrame(frame))
        .catch((error) => console.error("Failed to join call:", error));
    } catch (error) {
      console.error('Error joining class:', error);
      alert('Could not join the class.');
    }
  };

  const handleLeaveCall = () => {
    if (callFrame) {
      callFrame.leave();
      setCallFrame(null);
    }
  };

  const handleRaiseHand = () => {
    alert('You have raised your hand!');
  };

  const handleReact = (emoji) => {
    alert(`You reacted with ${emoji}`);
  };

  const handleDownloadResource = () => {
    alert('Downloading resource...');
  };

  const handleOpenCamera = () => {
    navigate('/dashboard/camera');
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl text-gray-800">Live Classes</h1>
      <div className="flex flex-col gap-4 mt-5">
        {classes.map((classItem) => (
          <div key={classItem.id} className="p-4 border border-gray-300 rounded-lg flex flex-col gap-3">
            <h2 className="text-xl text-gray-600">{classItem.title}</h2>
            <p className="text-sm text-gray-500">{classItem.teacher}</p>
            <p className="text-sm text-gray-400">
              {classItem.time} - {classItem.duration}
            </p>
            <div className="flex gap-2">
              {classItem.isLive ? (
                <button
                  onClick={() => handleJoinClass(classItem)}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-md cursor-pointer"
                >
                  <FaVideo /> Join Live
                </button>
              ) : (
                <button className="px-3 py-2 text-sm text-gray-600 bg-gray-200 rounded-md">Upcoming</button>
              )}
              <button
                onClick={handleOpenCamera}
                className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm rounded-md cursor-pointer"
              >
                <FaCamera /> Camera
              </button>
            </div>
            <span className={`text-sm ${classItem.attended ? 'text-green-500' : 'text-red-500'}`}>
              {classItem.attended ? 'Attended' : 'Not Attended'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveClasses;
