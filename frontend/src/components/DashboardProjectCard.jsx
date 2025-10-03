import { useState } from "react";
import { ChevronDown, ChevronUp, Eye, Plus } from "lucide-react";
import TaskItem from "./TaskItem";

const ProjectCard = ({ project, onCreateTask, onViewMore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
            <p className="text-sm text-gray-600">{project.description}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onCreateTask(project._id)}
            className="flex items-center space-x-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            <Plus className="h-4 w-4" />
            <span>Create Task</span>
          </button>
          <button
            onClick={() => onViewMore(project._id)}
            className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            <Eye className="h-4 w-4" />
            <span>View More</span>
          </button>
        </div>
      </div>

      {isExpanded && project.tasks && project.tasks.length > 0 && (
        <div className="mt-4 space-y-3">
          <h4 className="text-sm font-medium text-gray-700 ml-8">Tasks:</h4>
          {project.tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      )}

      {isExpanded && (!project.tasks || project.tasks.length === 0) && (
        <div className="mt-4 ml-8 text-sm text-gray-500 italic">
          No tasks created yet.
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
