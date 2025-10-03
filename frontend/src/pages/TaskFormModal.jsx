import { useState } from "react";
import TaskForm from "../components/TaskForm";

export default function TaskFormModal({ isOpen, onClose, projectId, onTaskCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: ""
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    let errors = {};
    if (!formData.title) errors.title = "Task title is required.";
    if (!formData.description) errors.description = "Description is required.";
    if (!formData.dueDate) errors.dueDate = "Due date is required.";

    setFieldErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`http://localhost:5000/api/projects/${projectId}/tasks`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            deadline: formData.dueDate,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Failed to create task");
        }

        const data = await response.json();
        console.log("Task created:", data);

        alert("Task created successfully!");
        setFormData({ title: "", description: "", dueDate: "" });

        if (onTaskCreated) onTaskCreated(data);
        onClose();
      } catch (err) {
        console.error(err.message);
        alert("Error: " + err.message);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-[90%] md:w-[70%] lg:w-[50%] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Create Task</h2>

        <TaskForm
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          fieldErrors={fieldErrors}
        />

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}