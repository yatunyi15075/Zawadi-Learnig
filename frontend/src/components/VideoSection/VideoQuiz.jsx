// VideoQuiz.js
import React from 'react';
import VideoChapter from './VideoChapter';
import QuizSection from './QuizSection';
import AutoQuiz from './AutoQuiz'; // Import the AutoQuiz component

const VideoQuiz = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-50 p-8 rounded-lg shadow-md">
      {/* Video and Quiz Section */}
      <div className="w-full lg:w-2/3 space-y-8">
        <VideoChapter />
        <QuizSection />
        <AutoQuiz /> {/* Add AutoQuiz below QuizSection */}
      </div>
    </div>
  );
};

export default VideoQuiz;
