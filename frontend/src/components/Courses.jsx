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

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Courses</h1>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-200 text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-300"
            />
            <FaSearch className="absolute left-3 text-gray-500" />
          </div>
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaCog className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </div>
        </header>
        
        {/* Grade Filters */}
        <div className="flex space-x-4 mb-6">
          {['All', 'Nursery', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'].map(grade => (
            <button
              key={grade}
              onClick={() => handleGradeClick(grade)}
              className={`px-4 py-2 ${selectedGrade === grade ? 'bg-purple-500 text-white' : 'bg-gray-200'} rounded-full hover:bg-purple-600 transition-colors`}
            >
              {grade}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id.videoId} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-40 mb-4">
                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-full object-cover" />
                <button
                  onClick={() => handlePlayClick(video.id.videoId)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg"
                >
                  <FaPlayCircle size={40} />
                </button>
              </div>
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">{video.snippet.title}</h2>
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
