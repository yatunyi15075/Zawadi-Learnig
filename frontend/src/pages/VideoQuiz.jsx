import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoChapter from '../components/VideoChapter';
import QuizSection from '../components/QuizSection';

const VideoQuiz = () => {

  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <VideoChapter />
        <QuizSection />
      </div>
    </div>
  );
};

export default VideoQuiz;
