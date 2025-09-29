import { Calendar, CheckCircle, XCircle } from "lucide-react";

const TaskCard = ({ task }) => {
  const deadline = task.deadline
    ? new Date(task.deadline).toLocaleDateString()
    : "No deadline";

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <div className="flex-1">
        
        <span
          className={`inline-flex items-center text-xs font-medium px-2 py-1 mb-2 rounded-full ${
            task.isCompleted
              ? "bg-green-50 text-green-700"
              : "bg-gray-50 text-gray-600"
          }`}
        >
          {task.isCompleted ? (
            <>
              <CheckCircle className="h-3 w-3 mr-1" />
              Completed
            </>
          ) : (
            <>
              <XCircle className="h-3 w-3 mr-1" />
              Not Completed
            </>
          )}
        </span>

        
        <h4 className="font-medium text-gray-900">{task.title}</h4>
        <p className="text-sm text-gray-600 mb-2">{task.description}</p>

        
        <div className="flex items-center text-xs text-gray-500">
          <Calendar className="h-3 w-3 mr-1" />
          Due: {deadline}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
