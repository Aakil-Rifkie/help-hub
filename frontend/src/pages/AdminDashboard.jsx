import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import DashboardHeader from "../components/DashboardHeader";
import ActionsSection from "../components/ActionSection";
import ProjectCard from "../components/DashboardProjectCard";
import ProjectFormModal from "./ProjectFormModal";
import TaskFormModal from "./TaskFormModal";
import AssignTaskModal from "./AssignTaskModal"; 

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [taskFormProjectId, setTaskFormProjectId] = useState(null);
  const [assignProject, setAssignProject] = useState(null); 
  const [showAssignModal, setShowAssignModal] = useState(false);

  const token = localStorage.getItem("token");

  const reloadProjects = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  }, [token]);

  useEffect(() => {
    reloadProjects();
  }, [reloadProjects]);

  const handleCreateTask = (projectId) => {
    setTaskFormProjectId(projectId);
    setShowTaskForm(true);
  };

  const handleOpenAssignModal = async (projectId) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setAssignProject(data);
      setShowAssignModal(true);
    } catch (err) {
      console.error("Failed to load project details for assigning:", err);
      alert("Failed to load project details. Try again.");
    }
  };

  const handleAfterAssign = async () => {
    await reloadProjects();
    setShowAssignModal(false);
    setAssignProject(null);
  };

  const handleTaskCreated = async (newTask) => {
    await reloadProjects();
    setShowTaskForm(false);
    setTaskFormProjectId(null);
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
                onCreateTask={() => handleCreateTask(project._id)}
                onAssign={() => handleOpenAssignModal(project._id)} 
              />
            ))}
          </div>
        </div>
      </div>

      <ProjectFormModal
        isOpen={showProjectForm}
        onClose={() => setShowProjectForm(false)}
        onProjectCreated={async (newProject) => {
          await reloadProjects();
          setShowProjectForm(false);
        }}
      />

      <TaskFormModal
        isOpen={showTaskForm}
        onClose={() => {
          setShowTaskForm(false);
          setTaskFormProjectId(null);
        }}
        projectId={taskFormProjectId}
        onTaskCreated={handleTaskCreated}
      />

      {showAssignModal && assignProject && (
        <AssignTaskModal
          project={assignProject}
          onClose={() => {
            setShowAssignModal(false);
            setAssignProject(null);
          }}
          onAssigned={handleAfterAssign}
        />
      )}
    </div>
  );
}
