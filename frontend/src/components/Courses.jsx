import React from 'react';
import { FaSearch, FaBell, FaCog, FaPlayCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CoursesPage = () => {
  const navigate = useNavigate();  // Hook to navigate programmatically

  const courses = [
    { id: 1, name: 'Science & Technology', grade: 'Grade 4', teacher: 'Mr. Kamau', image: 'path_to_image' },
    { id: 2, name: 'Kiswahili', grade: 'Grade 4', teacher: 'Mr. Kamau', image: 'path_to_image' },
    { id: 3, name: 'English Languages', grade: 'Grade 4', teacher: 'Mr. Kamau', image: 'path_to_image' },
    { id: 4, name: 'Social Studies', grade: 'Grade 4', teacher: 'Mr. Kamau', image: 'path_to_image' },
    { id: 5, name: 'C.R.E', grade: 'Grade 4', teacher: 'Mr. Kamau', image: 'path_to_image' },
    { id: 6, name: 'Mathematics', grade: 'Grade 4', teacher: 'Mr. Kamau', image: 'path_to_image' },
  ];

  // Function to navigate to video quiz page
  const handlePlayClick = () => {
    navigate('/dashboard/video-quiz');  // Navigate to the "/video-quiz" page
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Courses</h1>

          {/* Search Bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-200 text-gray-700 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:bg-gray-300"
            />
            <FaSearch className="absolute left-3 text-gray-500" />
          </div>

          {/* Notification and Settings Icons */}
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            <FaCog className="text-gray-600 hover:text-gray-800 cursor-pointer" />
          </div>
        </header>

        {/* Filters */}
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">
            All
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            PP1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            PP2
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            Grade 1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
            Grade 2
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-40 mb-4">
                <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                <button
                  onClick={handlePlayClick}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg"
                >
                  <FaPlayCircle size={40} />
                </button>
              </div>
              <div className="px-4 py-2">
                <h2 className="text-lg font-semibold">{course.name}</h2>
                <p className="text-sm text-gray-500">{course.grade}</p>
                <p className="text-sm text-gray-500">Teacher: {course.teacher}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CoursesPage;
