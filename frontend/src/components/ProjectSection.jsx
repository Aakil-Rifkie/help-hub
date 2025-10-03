import { Calendar, MapPin, ChevronDown, ChevronUp} from "lucide-react";
import { useState } from "react";
import TaskCard from "./TaskCard";

const ProjectSection = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const dueDate = project.endDate
    ? new Date(project.endDate).toLocaleDateString()
    : "No deadline";

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </button>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600">{project.description}</p>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              Due: {dueDate}
            </div>
          </div>
        </div>
      </div>

      
      {isExpanded && project.tasks && project.tasks.length > 0 && (
        <div className="mt-4 space-y-3 ml-8">
          <h4 className="text-sm font-medium text-gray-700">Your Tasks:</h4>
          {project.tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      )}

      {isExpanded && (!project.tasks || project.tasks.length === 0) && (
        <div className="mt-4 ml-8 text-sm text-gray-500 italic">
          No tasks assigned yet.
        </div>
      )}
    </div>
  );
};

export default ProjectSection;