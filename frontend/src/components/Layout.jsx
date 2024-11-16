// src/components/Layout.jsx
import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaTasks, FaComments, FaChartBar, FaUsers, FaCog, FaLifeRing, FaBell, FaUserCircle, FaSignOutAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import vid2 from '../assets/vid2.png';
import logo from '../assets/logo.png';

function Layout() {
  const [showClassroom, setShowClassroom] = useState(false);
  const [showPerformance, setShowPerformance] = useState(false);
  const [showSettingsSupport, setShowSettingsSupport] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white text-purple-700 p-6 space-y-8 flex flex-col sticky top-0 h-screen overflow-y-auto hover:overflow-y-scroll">
        <div className="flex items-center space-x-4 mb-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-2xl font-bold">ZAWADI</h1>
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={vid2} alt="profile" className="rounded-full w-16 h-16" />
          <h3 className="mt-2">Hi, Alex</h3> 
        </div>
        <nav className="flex-grow flex flex-col space-y-4">
          <ul>
            {/* Main */}
            <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
              <FaTachometerAlt className="mr-2" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
              <FaBook className="mr-2" />
              <Link to="/dashboard/courses">Courses</Link>
            </li>
            {/* Classroom Section */}
            <li 
              className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center justify-between cursor-pointer transition duration-200" 
              onClick={() => setShowClassroom(!showClassroom)}
            >
              <div className="flex items-center">
                <FaTasks className="mr-2" />
                <span>Classroom</span>
              </div>
              {showClassroom ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {showClassroom && (
              <ul className="pl-6 space-y-2">
                <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
                  <FaTasks className="mr-2" />
                  <Link to="/dashboard/live-classes">Live Classes</Link>
                </li>
                <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
                  <FaComments className="mr-2" />
                  <Link to="/dashboard/teacher-comments">Teacher Comments</Link>
                </li>
              </ul>
            )}

            {/* Performance Section */}
            <li 
              className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center justify-between cursor-pointer transition duration-200" 
              onClick={() => setShowPerformance(!showPerformance)}
            >
              <div className="flex items-center">
                <FaChartBar className="mr-2" />
                <span>Performance</span>
              </div>
              {showPerformance ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {showPerformance && (
              <ul className="pl-6 space-y-2">
                <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
                  <FaChartBar className="mr-2" />
                  <Link to="/dashboard/child-progress">Progress</Link>
                </li>
                <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
                  <FaUsers className="mr-2" />
                  <Link to="/dashboard/forum">Forum</Link>
                </li>
              </ul>
            )}

            {/* Settings and Support Section */}
            <li 
              className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center justify-between cursor-pointer transition duration-200" 
              onClick={() => setShowSettingsSupport(!showSettingsSupport)}
            >
              <div className="flex items-center">
                <FaCog className="mr-2" />
                <span>Settings & Support</span>
              </div>
              {showSettingsSupport ? <FaChevronUp /> : <FaChevronDown />}
            </li>
            {showSettingsSupport && (
              <ul className="pl-6 space-y-2">
                <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
                  <FaCog className="mr-2" />
                  <Link to="/dashboard/settings">Settings</Link>
                </li>
                <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
                  <FaLifeRing className="mr-2" />
                  <Link to="/dashboard/support">Support</Link>
                </li>
              </ul>
            )}

            {/* Profile and Notifications */}
            <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
              <FaBell className="mr-2" />
              <Link to="/dashboard/notifications">Notifications</Link>
            </li>
            <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
              <FaUserCircle className="mr-2" />
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li className="p-2 rounded hover:bg-purple-700 hover:text-white flex items-center transition duration-200">
              <FaSignOutAlt className="mr-2" />
              <Link to="/dashboard/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-grow bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
