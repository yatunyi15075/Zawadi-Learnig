import React from 'react';
import VideoChapter from '../components/VideoChapter';
import QuizSection from '../components/QuizSection';

const VideoQuiz = () => {
  return (
    <div className="flex flex-row items-start bg-gray-100 p-6">
      {/* Left side: Video and Quiz */}
      <div className="w-full lg:w-full flex flex-col">
        <VideoChapter />
        <QuizSection />
      </div>

    </div>
  );
};

export default VideoQuiz;
