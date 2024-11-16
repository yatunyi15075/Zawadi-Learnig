import React from 'react';
import { FaBell, FaCog, FaMedal, FaGamepad } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="min-h-screen flex bg-light-purple">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-purple-700 text-white p-6 space-y-8">
        <div className="flex items-center space-x-4">
          <img src="/path-to-logo" alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">ZAWADI</h1>
        </div>
        <nav className="flex flex-col space-y-4">
          <a href="#" className="text-white hover:bg-purple-600 p-2 rounded">Home</a>
          <a href="#" className="text-white hover:bg-purple-600 p-2 rounded">Courses</a>
          <a href="#" className="text-white hover:bg-purple-600 p-2 rounded">Live Classes</a>
          <a href="#" className="text-white hover:bg-purple-600 p-2 rounded">Teacher Feedback</a>
          <a href="#" className="text-white hover:bg-purple-600 p-2 rounded">Progress</a>
        </nav>
      </aside> */}

      {/* Main Content */}
      <main className="flex-grow bg-light-yellow p-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-dark-purple">Hi, Alex!</h1>
            <p className="text-gray-700">Welcome Back!</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaBell size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <FaCog size={20} />
            </button>
          </div>
        </header>

        {/* Announcements & Achievements */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-yellow-400 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Announcements</h3>
            <div className="mt-4 space-y-2">
              <div className="bg-yellow-300 p-3 rounded-lg flex justify-between items-center">
                <p>Last day to submit Math Quiz</p>
                <button className="bg-white text-yellow-600 px-2 py-1 rounded-md">Do now</button>
              </div>
              <div className="bg-yellow-300 p-3 rounded-lg flex justify-between items-center">
                <p>You have a new assignment</p>
                <button className="bg-white text-yellow-600 px-2 py-1 rounded-md">View</button>
              </div>
            </div>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Your Prizes</h3>
            <div className="flex justify-center mt-4 space-x-3">
              <FaMedal size={40} className="text-yellow-300" />
              <FaMedal size={40} className="text-yellow-300" />
              <FaMedal size={40} className="text-gray-400" />
              <FaMedal size={40} className="text-gray-400" />
            </div>
          </div>
        </section>

        {/* Top Games */}
        <section className="mt-8">
          <h3 className="text-xl font-bold text-dark-purple mb-4">Your Top Games</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-300 p-4 rounded-lg text-center text-white shadow-md">
              <FaGamepad size={30} />
              <p className="mt-2">Sign Search</p>
            </div>
            <div className="bg-orange-300 p-4 rounded-lg text-center text-white shadow-md">
              <FaGamepad size={30} />
              <p className="mt-2">Spelling Bee</p>
            </div>
            <div className="bg-green-300 p-4 rounded-lg text-center text-white shadow-md">
              <FaGamepad size={30} />
              <p className="mt-2">Match the Numbers</p>
            </div>
            <div className="bg-red-300 p-4 rounded-lg text-center text-white shadow-md">
              <FaGamepad size={30} />
              <p className="mt-2">Animal Kingdom</p>
            </div>
          </div>
        </section>

        {/* Upcoming Lessons & Progress Summary */}
        <section className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-dark-purple mb-4">Upcoming Lessons</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <p>Understanding the problem</p>
                  <p className="text-gray-400 text-sm">Starts in 2 days</p>
                </div>
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">Start Lesson</button>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>Understanding the problem</p>
                  <p className="text-gray-400 text-sm">Starts in 1 day</p>
                </div>
                <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">Start Lesson</button>
              </div>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-md w-full mt-4">Continue Learning</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-dark-purple mb-4">Progress Summary</h3>
            <p className="text-4xl font-bold text-purple-600">30</p>
            <p className="text-sm text-gray-400 mb-4">Past Month +20</p>
            <img src="/path-to-progress-chart" alt="Progress Chart" className="w-full" />
          </div>
        </section>

        {/* Teacher's Feedback */}
        <section className="mt-8">
          <h3 className="text-lg font-bold text-dark-purple">Recent Teacher's Feedback</h3>
          <table className="min-w-full bg-white rounded-lg shadow-md mt-4">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4">Teacher</th>
                <th className="py-2 px-4">Feedback</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Mr. Nganga</td>
                <td className="py-2 px-4">Finish up your assignment</td>
              </tr>
              <tr>
                <td className="py-2 px-4">Mrs. Wamalwa</td>
                <td className="py-2 px-4">Work harder on Algebra</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
