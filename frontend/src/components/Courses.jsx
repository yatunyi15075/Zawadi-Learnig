// src/components/CoursesPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSearch, FaBell, FaCog, FaPlayCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('All');
  const navigate = useNavigate();
  const apiKey = 'AIzaSyAp96FMMEXcpsugR9fFtsR3JeZESybd3Vs';

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const gradeQuery = selectedGrade === 'All' ? '' : `${selectedGrade} educational videos for kids`;
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search`, {
            params: {
              key: apiKey,
              q: gradeQuery || 'educational videos for kids nursery to grade 6',
              part: 'snippet',
              type: 'video',
              maxResults: 12,
            }
          }
        );
        setVideos(response.data.items);
      } catch (error) {
        console.error("Error fetching videos from YouTube API", error);
      }
    };

    fetchVideos();
  }, [selectedGrade]);

  const handleGradeClick = (grade) => {
    setSelectedGrade(grade);
  };

  const handlePlayClick = (videoId) => {
    navigate(`/dashboard/video-quiz/${videoId}`);
  };

  // Filter videos based on the search term
  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200">
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-purple-700">Courses</h1>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none shadow-md"
            />
            <FaSearch className="absolute left-3 text-purple-500" />
          </div>
          <div className="flex items-center space-x-4">
            <FaBell className="text-purple-500 hover:text-purple-700 cursor-pointer" />
            <FaCog className="text-purple-500 hover:text-purple-700 cursor-pointer" />
          </div>
        </header>

        {/* Grade Filters */}
        <div className="flex space-x-4 mb-6 overflow-x-auto scrollbar-hide">
          {['All', 'Nursery', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'].map(grade => (
            <button
              key={grade}
              onClick={() => handleGradeClick(grade)}
              className={`px-4 py-2 text-sm font-semibold rounded-full transition-all ${
                selectedGrade === grade ? 'bg-yellow-400 text-white' : 'bg-white text-purple-700'
              } hover:bg-yellow-500`}
            >
              {grade}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id.videoId} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:scale-105">
              <div className="relative h-40 mb-4">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => handlePlayClick(video.id.videoId)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg"
                >
                  <FaPlayCircle size={40} className="text-yellow-400" />
                </button>
              </div>
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold text-purple-700">{video.snippet.title}</h2>
                <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
                <p className="text-sm text-gray-500">Grade: {selectedGrade}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
