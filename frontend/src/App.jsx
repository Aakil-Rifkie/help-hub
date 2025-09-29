import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import Home from "./components/Home";
import CreateProjectPage from "./pages/CreateProjectPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import ProjectsListPage from "./pages/ProjectsListPage";
import UserDashboard from "./pages/UserDashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-project" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId/tasks/new" element={<CreateTaskPage />} />
        <Route path="/view-projects" element={<ProjectsListPage />} />
        <Route path="/view-user-dashboard" element={<UserDashboard />} />
      </Routes>
    </Router>
  );

  
}
