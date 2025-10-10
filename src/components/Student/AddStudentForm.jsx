import React, { useState } from "react";

const  AddStudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    course: "",
    department: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.rollNumber || !formData.course || !formData.department) {
      alert("Please fill all fields!");
      return;
    }

    onAddStudent(formData);
    setFormData({ name: "", rollNumber: "", course: "", department: "" });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 mb-12 border border-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        Add a New Student
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Roll Number Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="Enter roll number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Course Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Department Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Enter department name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg 
                       hover:from-blue-700 hover:to-indigo-800 hover:scale-[1.02] transition-transform duration-300"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentForm;
