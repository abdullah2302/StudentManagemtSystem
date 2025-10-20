import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-hot-toast";
import { addStudent, getStudents } from "../api/studentApi"; 

const AddStudent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    course: "",
    department: "",
    contact: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      const existingStudents = await getStudents();
      const alreadyExists = existingStudents.some(
        (student) => student.rollNumber === formData.rollNumber
      );

      if (alreadyExists) {
        toast.error("⚠️ A student with this roll number already exists!");
        setLoading(false);
        return;
      }

   
      await addStudent(formData);

      toast.success("🎉 Student added successfully!", { duration: 2000 });
      navigate("/students");
    } catch (error) {
      console.error("Error adding student:", error);
      toast.error("❌ Failed to add student. Please try again!");
    } finally {
      setLoading(false);
    }
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
          {["name", "rollNumber", "course", "department", "contact"].map((field) => (
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
                  : field === "department"
                  ? "Department"
                  : "Contact Number"
              }
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          ))}

          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={loading}
              className={`flex-1 py-2 rounded-lg font-medium text-white transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {loading ? "Adding..." : "Add Student"}
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
