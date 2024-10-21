// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './auth/register';
import Login from './auth/login';
import Layout from './components/Layout';
import CoursesPage from './components/Courses';
import AssignmentPage from './components/Assignments';
import AccessibilitySettings from './components/AccessibilitySettings';
import Notifications from './components/Notifications';
import Progress from './components/Progress';
import TeacherComments from './components/TeacherComments';

import HelpSupport from './pages/Support';
import Logout from './pages/LogOut'
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without the sidebar */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Routes with the sidebar */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="assignments" element={<AssignmentPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="teacher-comments" element={<TeacherComments />} />
          <Route path="child-progress" element={<Progress />} />
          <Route path="forum" element={<Forum />} />
          <Route path="settings" element={<AccessibilitySettings />} />
          <Route path="support" element={<HelpSupport />} />
          <Route path="logout" element={<Logout />} /> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
