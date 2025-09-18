import React from "react";
import { Users, Calendar, Heart } from "lucide-react";

export default function AuthWelcome() {
  return (
    <div className="flex flex-col items-center justify-center text-center text-white px-6 py-12 w-full max-w-lg">
      <h1 className="text-3xl md:text-5xl font-bold mb-2">Welcome to</h1>
      <h2 className="text-2xl md:text-4xl font-bold text-blue-100 mb-4">Help Hub</h2>
      <p className="text-base md:text-lg text-blue-100 mb-8">
        Connect volunteers with meaningful projects and make a difference in your community
      </p>

      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
          <Users className="h-10 w-10 text-blue-200 mb-2" />
          <span className="text-sm text-blue-100">Connect</span>
        </div>
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
          <Calendar className="h-10 w-10 text-blue-200 mb-2" />
          <span className="text-sm text-blue-100">Organize</span>
        </div>
        <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 min-w-[100px]">
          <Heart className="h-10 w-10 text-blue-200 mb-2" />
          <span className="text-sm text-blue-100">Impact</span>
        </div>
      </div>

      
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 w-full space-y-3 text-left">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-blue-100 text-sm md:text-base">Manage volunteer projects</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span className="text-blue-100 text-sm md:text-base">Real-time collaboration</span>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
          <span className="text-blue-100 text-sm md:text-base">Track progress & impact</span>
        </div>
      </div>

      <p className="text-blue-100 text-sm md:text-base mt-6">
        Join thousands of volunteers making communities better, one project at a time
      </p>
    </div>
  );
}
