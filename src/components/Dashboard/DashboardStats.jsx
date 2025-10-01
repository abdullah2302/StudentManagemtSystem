import React from "react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
        <p className="text-3xl font-bold text-blue-600 mt-2">120</p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold text-gray-700">Courses</h2>
        <p className="text-3xl font-bold text-green-600 mt-2">15</p>
      </div>
      <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
        <h2 className="text-xl font-semibold text-gray-700">Departments</h2>
        <p className="text-3xl font-bold text-purple-600 mt-2">5</p>
      </div>
    </div>
  );
};

export default DashboardStats;
