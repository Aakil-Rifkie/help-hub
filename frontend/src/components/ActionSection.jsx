import { Plus } from "lucide-react";

const ActionsSection = ({ onCreateProject }) => (
  <div className="mb-8 flex justify-center">
    <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-2xl">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">Actions</h2>
      <div className="flex justify-center">
        <button
          onClick={onCreateProject}
          className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <Plus className="h-5 w-5" />
          <span>Create Project</span>
        </button>
      </div>
    </div>
  </div>
);

export default ActionsSection;
