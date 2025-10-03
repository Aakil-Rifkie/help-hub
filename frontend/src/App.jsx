import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import ProjectsListPage from "./pages/ProjectsListPage";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/projects/:projectId/tasks/new" element={<CreateTaskPage />} />
        <Route path="/view-projects" element={<ProjectsListPage />} />
        <Route path="/view-user-dashboard" element={<UserDashboard />} />
        <Route path="/view-admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );

  
}
