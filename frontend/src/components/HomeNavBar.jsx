import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function HomeNavBar  () {
return (
    <header className="bg-white border-b border-gray-200">
    <nav className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Heart className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">HelpHub</span>
        </div>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
            Home
          </Link>

          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>

          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Register & Login
          </Link>
        </div>
      </div>
    </nav>
  </header>
 )
}

