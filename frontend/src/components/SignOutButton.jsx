import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
    >
      <LogOut className="h-5 w-5" />
      <span>Sign Out</span>
    </button>
  );
}
