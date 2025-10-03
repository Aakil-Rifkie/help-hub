import { Heart, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SignOutButton from './SignOutButton';

const NavBar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const handleBackToDashboard = () => {
    navigate('/view-user-dashboard')
  }

  const handleBrowseProjects = () => {
    navigate('/view-projects')
  }

  return (
    <nav className="bg-white shadow-sm border-b px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">HelpHub</span>
        </div>

        <div className="flex items-center space-x-4">
          {role !== "admin" && (
            <button
            onClick={handleBrowseProjects}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-all"
          >
            <span>Browse Projects</span>
          </button>
          )}
          

          <button
            onClick={handleBackToDashboard}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Dashboard</span>
          </button>

          <SignOutButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;