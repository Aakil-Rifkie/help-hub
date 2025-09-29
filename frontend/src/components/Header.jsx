import { Heart } from "lucide-react";

const Header = () => (
  <header className="bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="flex items-center space-x-4">
        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
          <Heart className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">HelpHub</h1>
          <p className="text-blue-100">Discover meaningful volunteer opportunities</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-5xl font-bold mb-4">Make a Difference Today</h2>
        <p className="text-xl text-blue-100 max-w-2xl">
          Join our community of volunteers and help create positive change in your area.
        </p>
      </div>
    </div>
  </header>
);

export default Header;
