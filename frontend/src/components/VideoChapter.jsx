import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const VideoChapter = () => {
  const { videoId } = useParams();
  const videoRef = useRef(null);
  const [isComplete, setIsComplete] = useState(false);
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

  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg p-6">
      {/* Video Player and Complete Button */}
      <div className="relative w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
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
      <div className="mt-4">
        <h2 className="text-lg font-bold">Chapter 1: Video Playback</h2>
        <p>Watch this chapter and complete it to proceed.</p>
      </div>
      <div className="mt-6 flex justify-center">
        {!isComplete ? (
          <button
            onClick={handleCompleteClick}
            className="w-32 h-10 bg-blue-500 rounded-full text-white flex items-center justify-center"
          >
            Complete
          </button>
        ) : (
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>

      {/* Video Chapters Section */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Chapters</h2>
        <ul className="mt-2">
          {chapters.map((chapter, index) => (
            <li
              key={index}
              onClick={() => handleChapterClick(chapter.timestamp)}
              className="cursor-pointer text-blue-500 hover:underline mb-2"
            >
              {chapter.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoChapter;
