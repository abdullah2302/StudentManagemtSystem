import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AddStudent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    course: "",
    department: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];

    // Prevent duplicate roll numbers
    const alreadyExists = savedStudents.some(
      (student) => student.rollNumber === formData.rollNumber
    );

    if (alreadyExists) {
      alert("⚠️ A student with this roll number already exists!");
      return;
    }

    // Save new student
    const updatedStudents = [...savedStudents, formData];
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    alert("✅ Student added successfully!");
    navigate("/students");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-10">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-10">
          Add New Student
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 max-w-md mx-auto space-y-5 border border-gray-200"
        >
          {["name", "rollNumber", "course", "department"].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={
                field === "name"
                  ? "Full Name"
                  : field === "rollNumber"
                  ? "Roll Number"
                  : field === "course"
                  ? "Course"
                  : "Department"
              }
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}

          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Add Student
            </button>

            <button
              type="button"
              onClick={() => navigate("/students")}
              className="flex-1 bg-gray-300 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default AddStudent;
