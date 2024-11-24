import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Register from './auth/register';
import Login from './auth/login';
import Layout from './components/Layout';
import CoursesPage from './components/Courses';
import AccessibilitySettings from './components/AccessibilitySettings/AccessibilitySettings';
import Notifications from './components/Notifications';
import Progress from './components/Progress';
import TeacherComments from './components/TeacherComments';
import CongratulationsPage from './components/CongratulationsPage';
import LiveClasses from './components/LiveClasses';
import Camera from './components/Camera';
import HelpSupport from './pages/Support';
import Logout from './pages/LogOut';
import Forum from './pages/Forum';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import VideoQuiz from './components/VideoSection/VideoQuiz';

// New feature components
import VisualSchedule from './components/VisualSchedule';
import SensoryMode from './components/SensoryMode';
import SocialSkills from './components/SocialSkills';
import CalmCorner from './components/CalmCorner';
import CommunicationTools from './components/CommunicationTools';
import Collaboration from './components/Collaboration';
import LearningGames from './components/LearningGames';
import OfflineMaterials from './components/OfflineMaterials';

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
          <Route path="video-quiz/:videoId" element={<VideoQuiz />} /> {/* Update this route */}
          <Route path="courses" element={<CoursesPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="teacher-comments" element={<TeacherComments />} />
          <Route path="child-progress" element={<Progress />} />
          <Route path="forum" element={<Forum />} />
          <Route path="settings" element={<AccessibilitySettings />} />
          <Route path="support" element={<HelpSupport />} />
          <Route path="logout" element={<Logout />} />
          <Route path="complete" element={<CongratulationsPage />} />
          <Route path="live-classes" element={<LiveClasses />} />
          <Route path="camera" element={<Camera />} />

          {/* New Feature Routes */}
          <Route path="schedule" element={<VisualSchedule />} />
          <Route path="sensory-mode" element={<SensoryMode />} />
          <Route path="social-skills" element={<SocialSkills />} />
          <Route path="calm-corner" element={<CalmCorner />} />
          <Route path="communication-tools" element={<CommunicationTools />} />
          <Route path="collaboration" element={<Collaboration />} />
          <Route path="games" element={<LearningGames />} />
          <Route path="offline-materials" element={<OfflineMaterials />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
