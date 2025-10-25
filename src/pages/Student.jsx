import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import StudentGrid from "../components/Student/StudentGrid";
import AddStudentButton from "../components/Buttons/AddStudentButton";
import { getStudents } from "../api/studentApi"; 
import { toast } from "react-hot-toast";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();
        setStudents(data);
      } catch (error) {
        console.error("Error fetching students:", error);
        toast.error("❌ Failed to fetch students from server!");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  
  const filteredStudents = students.filter((student) =>
    [student.name, student.rollNumber].some((field) =>
      field?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-5 py-10 relative">
        <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-8">
          Our Students
        </h1>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <input
            type="text"
            placeholder="Search by name or roll number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          />
        </div>

        {/* Student Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading students...</p>
        ) : filteredStudents.length > 0 ? (
          <StudentGrid students={filteredStudents} setStudents={setStudents} />
        ) : (
          <p className="text-center text-gray-500">
            No students found. Try adjusting your search or add one!
          </p>
        )}

        {/* Floating Add Button */}
        <AddStudentButton />
      </main>

      <Footer />
    </div>
  );
};

export default Students;
