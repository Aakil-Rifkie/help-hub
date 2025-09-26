import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <button
        onClick={() => navigate("/create-project")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
      >
        Create New Project
      </button>


      <button
        onClick={() => navigate("/projects/68d2b4a6afa2c0c0c5771a5c/tasks/new")} //I NEED TO REPLACE THIS with dynamic projectID
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg"
      >
        Create New Task
      </button>
    </div>
  );
}


