// VideoChapter.js
import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SignLanguageModel from './SignLanguageModel';

const VideoChapter = () => {
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
  const [isModelExpanded, setIsModelExpanded] = useState(true); // State for 3D model expansion
  const navigate = useNavigate();

  // Define the chapters with timestamps in seconds
  const chapters = [
    { title: 'Introduction', timestamp: 0 },
    { title: 'Topic 1', timestamp: 60 },
    { title: 'Topic 2', timestamp: 120 },
    { title: 'Conclusion', timestamp: 180 },
  ];

  const handleChapterClick = (timestamp) => {
    if (videoRef.current) {
      videoRef.current.contentWindow.postMessage(
        `{"event":"command","func":"seekTo","args":[${timestamp}, true]}`,
        '*'
      );
    }
  };

  const handleCompleteClick = () => {
    setIsComplete(true);
    setTimeout(() => {
      navigate('/dashboard/complete');
    }, 5000);
  };

  // Toggle function to expand or contract the 3D model section
  const toggleModelSection = () => {
    setIsModelExpanded(!isModelExpanded);
  };

  return (
    <div className="flex flex-col bg-pink-50 rounded-lg shadow-lg p-6 space-y-6">
      {/* Top Section: Video and 3D Model */}
      <div className="flex w-full space-x-4">
        {/* Video Player */}
        <div className={`${isModelExpanded ? 'w-2/3' : 'w-full'} h-[500px] bg-blue-100 rounded-lg flex items-center justify-center transition-all duration-300`}>
          <iframe
            ref={videoRef}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* 3D Model Section - Conditionally render based on isModelExpanded */}
        {isModelExpanded && (
          <div className="w-1/3 h-[500px] bg-white border border-blue-500 rounded-lg flex items-center justify-center transition-all duration-300">
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <SignLanguageModel gesture={null} /> {/* Add gesture if needed */}
            </Canvas>
          </div>
        )}
      </div>

      {/* Bottom Section: Button, Toggle, and Chapters */}
      <div className="flex flex-col items-center space-y-4">
        {/* Buttons Section */}
        <div className="flex items-center space-x-4">
          {/* Complete Button */}
          <div className="text-center">
            {!isComplete ? (
              <button
                onClick={handleCompleteClick}
                className="w-32 h-12 bg-yellow-500 rounded-full text-white font-bold hover:bg-yellow-400 transition-colors"
              >
                Complete
              </button>
            ) : (
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>

          {/* Toggle 3D Model Button */}
          <button
            onClick={toggleModelSection}
            className="w-32 h-12 bg-blue-500 rounded-full text-white font-bold hover:bg-blue-400 transition-colors"
          >
            {isModelExpanded ? 'Hide Model' : 'Show Model'}
          </button>
        </div>

        {/* Video Chapters Section */}
        <div className="w-full text-center">
          <h2 className="text-lg font-bold text-purple-600">Chapters</h2>
          <ul className="mt-2 space-y-2">
            {chapters.map((chapter, index) => (
              <li
                key={index}
                onClick={() => handleChapterClick(chapter.timestamp)}
                className="cursor-pointer text-blue-500 hover:text-blue-600"
              >
                {chapter.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoChapter;
