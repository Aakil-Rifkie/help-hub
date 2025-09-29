import { Calendar, MapPin } from "lucide-react";
import axios from "axios";

const ProjectCard = ({ project, setProjects }) => {
  const handleJoin = async () => {
    try {
      await axios.post(`http://localhost:5000/api/projects/${project._id}/join`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
      });

      setProjects(prev =>
        prev.map(p => p._id === project._id ? { ...p, joined: true } : p)
      );
    } catch (err) {
      console.error("Error joining project:", err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:scale-105">
      <div className="relative p-6 pb-4">

        <div className="flex items-center justify-end mb-3 text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          {project.endDate ? new Date(project.endDate).toLocaleDateString() : "No deadline"}
        </div>


        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
      </div>

      <div className="px-6 pb-6">

        <button
          onClick={handleJoin}
          disabled={project.joined}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 
            ${project.joined
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"}`}
        >
          {project.joined ? "Joined" : "Join Project"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
