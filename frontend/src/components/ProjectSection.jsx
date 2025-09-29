import { Calendar, MapPin } from "lucide-react";
import TaskCard from "./TaskCard";

const ProjectSection = ({ project }) => {
  const dueDate = project.endDate
    ? new Date(project.endDate).toLocaleDateString()
    : "No deadline";

  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6">
      
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-2">{project.description}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            {project.location || "No location"}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Due: {dueDate}
          </div>
        </div>
      </div>

     
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700">Your Tasks</h4>
        {project.tasks && project.tasks.length > 0 ? (
          project.tasks.map((task) => (
            <TaskCard key={task._id} task={task} />  
          ))
        ) : (
          <p className="text-sm text-gray-500">No tasks assigned yet</p>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;