import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentGrid from "../components/Student/StudentGrid";
import AddStudentButton from "../components/Buttons/AddStudentButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(saved);
  }, []);

  // Filter students by name or roll number
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

        {/* 🔍 Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name or roll number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

       
        {filteredStudents.length > 0 ? (
          <StudentGrid students={filteredStudents} setStudents={setStudents} />
        ) : (
          <p className="text-center text-gray-500">
            No students found. Try adjusting your search or add one!
          </p>
        )}

        <AddStudentButton />
      </main>

      <Footer />
    </div>
  );
};

export default Students;
