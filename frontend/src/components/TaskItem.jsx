const TaskItem = ({ task }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 ml-8">
    <h5 className="font-medium text-gray-900 mb-1">{task.title}</h5>
    <p className="text-sm text-gray-600 mb-2">{task.description}</p>
    <p className="text-xs text-gray-500">Due: {task.deadline || "No deadline"}</p>
  </div>
);

export default TaskItem;
