import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentCard from "../components/StudentCard";

const Student = () => {
  const student = {
    name: "John Doe",
    rollNumber: "2025-001",
    course: "Computer Science",
    department: "Engineering",
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">
        <StudentCard
          name={student.name}
          rollNumber={student.rollNumber}
          course={student.course}
          department={student.department}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Student;
