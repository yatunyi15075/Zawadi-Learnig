// src/components/Layout.jsx (Containds the sidebar)

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaTachometerAlt, FaBook, FaTasks, FaComments, FaChartBar, FaUsers, FaCog, FaLifeRing, FaBell, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Added icons
import vid2 from '../assets/vid2.png';
import logo from '../assets/logo.png';

function Layout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col">
        <div className="flex items-center justify-center h-16 bg-gray-800">
          <img src={logo} alt="Zawadii" className="w-10 h-10" />
        </div>
        <div className="flex flex-col items-center py-4">
          <img
            src={vid2}
            alt="profile"
            className="rounded-full w-16 h-16"
          />
          <h3 className="mt-2">Hi, Alex</h3>
        </div>
        <nav className="flex-grow">
          <ul>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaTachometerAlt className="mr-2" />
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaBook className="mr-2" />
              <Link to="/dashboard/courses">Courses</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaTasks className="mr-2" />
              <Link to="/dashboard/assignments">Assignments</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaComments className="mr-2" />
              <Link to="/dashboard/teacher-comments">Teacher Comments</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaChartBar className="mr-2" />
              <Link to="/dashboard/child-progress">Progress</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaUsers className="mr-2" />
              <Link to="/dashboard/forum">Forum</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaCog className="mr-2" />
              <Link to="/dashboard/settings">Settings</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaLifeRing className="mr-2" />
              <Link to="/dashboard/support">Support</Link>
            </li>
            {/* New items */}
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaBell className="mr-2" />
              <Link to="/dashboard/notifications">Notifications</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
              <FaUserCircle className="mr-2" />
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 flex items-center">
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
