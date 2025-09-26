import { useState } from "react";
import NavBar from "../components/NavBar";
import PageHeader from "../components/PageHeader";
import ProjectForm from "../components/ProjectForm";

export default function CreateProjectPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: ''
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async () => {
  let errors = {};
  if (!formData.title) errors.title = "Project title is required.";
  if (!formData.description) errors.description = "Description is required.";
  if (!formData.dueDate) errors.dueDate = "Due date is required.";

  setFieldErrors(errors);

  if (Object.keys(errors).length === 0) {
    try {
      const token = localStorage.getItem("token"); 

      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          endDate: formData.dueDate, 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create project");
      }

      const data = await response.json();
      console.log("Project created:", data);

      alert("Project created successfully!");
      setFormData({ title: "", description: "", dueDate: "" });
    } catch (err) {
      console.error(err.message);
      alert("Error" + err.message);
    }
  }
};

  const handleBackToDashboard = () => { 
    console.log('Navigating back to dashboard');
  };

  return (    
    <div className="min-h-screen bg-gray-50">
      <NavBar onBackToDashboard={handleBackToDashboard} />
      <div className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <PageHeader />
          <ProjectForm
            formData={formData}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
            fieldErrors={fieldErrors}
          />
        </div>
      </div>
    </div>
  );
}
