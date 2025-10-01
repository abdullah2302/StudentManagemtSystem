import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardActions = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Manage Students</h2>
        <p className="text-gray-600 mb-4">Add, edit, or view student details.</p>
        <button
          onClick={() => navigate("/students")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          See Students
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
        <h2 className="text-lg font-bold text-gray-800 mb-3">Manage Courses</h2>
        <p className="text-gray-600 mb-4">Create or update course information.</p>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Go
        </button>
      </div>
    </div>
  );
};

export default DashboardActions;
