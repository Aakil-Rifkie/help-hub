import React, { useEffect, useState } from "react";
import { User, X } from "lucide-react";
import axios from "axios";

export default function AssignTaskModal({ project, onClose, onAssigned }) {
  const [selectedTaskId, setSelectedTaskId] = useState("");
  const [selectedVolunteers, setSelectedVolunteers] = useState([]);
  const [assignedVolunteers, setAssignedVolunteers] = useState([]); 
  const [loadingAssign, setLoadingAssign] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setSelectedTaskId("");
    setSelectedVolunteers([]);
    setAssignedVolunteers([]);
  }, [project]);

  useEffect(() => {
    
    const fetchAssigned = async () => {
      if (!selectedTaskId || !project?._id) return;
      try {
        const res = await axios.get(
          `http://localhost:5000/api/projects/${project._id}/tasks/${selectedTaskId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        const assigned = res.data.assignedVolunteers?.map((v) => v._id) || [];
        setAssignedVolunteers(assigned);
        
        setSelectedVolunteers((prev) => prev.filter((id) => !assigned.includes(id)));
      } catch (err) {
        console.error("Failed to fetch task details:", err);
        setAssignedVolunteers([]);
      }
    };
    fetchAssigned();
    
  }, [selectedTaskId, project]);

  if (!project) return null;

  const handleToggle = (volId) => {
    if (selectedVolunteers.includes(volId)) {
      setSelectedVolunteers((prev) => prev.filter((id) => id !== volId));
    } else {
      setSelectedVolunteers((prev) => [...prev, volId]);
    }
  };

  const handleConfirm = async () => {
    if (!selectedTaskId || selectedVolunteers.length === 0) return;
    setLoadingAssign(true);
    try {
      await axios.post(
        `http://localhost:5000/api/projects/${project._id}/tasks/${selectedTaskId}/assign`,
        { volunteerIds: selectedVolunteers },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      
      if (typeof onAssigned === "function") await onAssigned();

      onClose();
    } catch (err) {
      console.error("Failed to assign volunteers:", err);
      alert(err?.response?.data?.message || "Failed to assign volunteers");
    } finally {
      setLoadingAssign(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-5 overflow-y-auto max-h-[90vh]">
      
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Assign Volunteers</h2>
            <p className="text-sm text-gray-600">
              Project: <span className="font-medium text-blue-600">{project.title}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-500 hover:text-gray-800"
            aria-label="close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select task</label>
          <select
            value={selectedTaskId}
            onChange={(e) => setSelectedTaskId(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">— choose a task —</option>
            {(project.tasks || []).map((t) => (
              <option key={t._id} value={t._id}>
                {t.title}
              </option>
            ))}
          </select>
        </div>

        
        {selectedTaskId ? (
          <div className="mb-4 overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs text-gray-600">Select</th>
                  <th className="px-3 py-2 text-left text-xs text-gray-600">Volunteer</th>
                  <th className="px-3 py-2 text-left text-xs text-gray-600">Email</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(project.volunteers || []).map((vol) => {
                  const isAssigned = assignedVolunteers.includes(vol._id);
                  return (
                    <tr key={vol._id} className="hover:bg-gray-50">
                      <td className="px-3 py-2">
                        <input
                          type="checkbox"
                          disabled={isAssigned}
                          checked={selectedVolunteers.includes(vol._id)}
                          onChange={() => handleToggle(vol._id)}
                          className={`h-4 w-4 text-blue-600 rounded ${
                            isAssigned ? "opacity-60 cursor-not-allowed" : ""
                          }`}
                        />
                      </td>
                      <td className="px-3 py-2 flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <User className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="text-sm font-medium text-gray-900">{vol.fullname || vol.name || vol.fullName || vol.email}</div>
                      </td>
                      <td className="px-3 py-2 text-sm text-gray-600">{vol.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {(!project.volunteers || project.volunteers.length === 0) && (
              <p className="py-6 text-center text-gray-500">No volunteers registered for this project.</p>
            )}
          </div>
        ) : (
          <p className="py-6 text-center text-gray-500">Select a task to show volunteers</p>
        )}

        
        <div>
          <button
            onClick={handleConfirm}
            disabled={!selectedTaskId || selectedVolunteers.length === 0 || loadingAssign}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              !selectedTaskId || selectedVolunteers.length === 0 || loadingAssign
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {loadingAssign ? "Assigning..." : `Assign ${selectedVolunteers.length || ""}`}
          </button>
        </div>
      </div>
    </div>
  );
}
