import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import DashboardHeader from "../components/DashboardHeader";
import ActionsSection from "../components/ActionSection";
import ProjectCard from "../components/DashboardProjectCard";
import ProjectFormModal from "./ProjectFormModal"
import TaskFormModal from "./TaskFormModal";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("http://localhost:5000/api/projects", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  const handleCreateTask = (projectId) => {
    setSelectedProject(projectId);
    setShowTaskForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar onBackToDashboard={() => console.log("Back to dashboard")} />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <DashboardHeader />
        <ActionsSection onCreateProject={() => setShowProjectForm(true)} />

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Projects</h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onCreateTask={handleCreateTask}
                onViewMore={(id) => console.log("View project:", id)}
              />
            ))}
          </div>
        </div>
      </div>

      
      <ProjectFormModal
        isOpen={showProjectForm}
        onClose={() => setShowProjectForm(false)}
        onProjectCreated={(newProject) => setProjects([...projects, newProject])}
      />

      <TaskFormModal
        isOpen={showTaskForm}
        onClose={() => setShowTaskForm(false)}
        projectId={selectedProject}
        onTaskCreated={(newTask) => {
          setProjects((prev) =>
            prev.map((p) =>
              p._id === selectedProject ? { ...p, tasks: [...p.tasks, newTask] } : p
            )
          );
        }}
      />
    </div>
  );
}
