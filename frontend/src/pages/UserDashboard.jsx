import NavBar from "../components/NavBar";
import DashboardHeader from "../components/DashboardHeader";
import ProjectSection from "../components/ProjectSection";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserDashboardPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/users/my-projects", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <DashboardHeader />
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectSection key={project._id} project={project} />
          ))
        ) : (
          <p className="text-gray-500 text-center">No projects assigned yet</p>
        )}

      </div>
    </div>
  );
}
