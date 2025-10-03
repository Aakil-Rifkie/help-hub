import React from 'react';
import { Users, Calendar, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import HomeNavBar from '../components/HomeNavBar';

export default function LandingPage() {
  return (
    <div>
      <HomeNavBar />
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Connecting Volunteers with Meaningful Projects
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Help Hub makes it easy for nonprofits to manage volunteer projects and for volunteers 
              to find opportunities that match their skills and passion. Join our community today.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, powerful tools designed specifically for nonprofit organizations and their volunteers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Project Management</h3>
              <p className="text-gray-600">Create and manage volunteer projects with clear timelines, tasks, and goals. Keep everything organized in one place.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer Coordination</h3>
              <p className="text-gray-600">Easily assign tasks to volunteers and track their progress. Build stronger teams through better coordination.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Communication</h3>
              <p className="text-gray-600">Stay connected with task-specific chat rooms. Collaborate effectively with your team members in real-time.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor project completion and task status at a glance. Make informed decisions with clear visibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-xl text-blue-100">Free to Use</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-xl text-blue-100">Access Anytime</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Real-Time</div>
              <div className="text-xl text-blue-100">Communication</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join Help Hub today and start connecting with projects that matter. 
            Whether you're a volunteer looking to give back or an organization seeking support, we're here to help.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Sign Up as Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
