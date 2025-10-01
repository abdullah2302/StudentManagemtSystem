import React from "react";
import StudentCard from "../components/Student/StudentCard";

const Students = () => {
  // Dummy student data (you can fetch from API later)
  const students = [
    { name: "Ali Khan", rollNumber: "101", course: "BSCS", department: "Computer Science" },
    { name: "Sara Ahmed", rollNumber: "102", course: "BBA", department: "Business" },
    { name: "Hamza Iqbal", rollNumber: "103", course: "MBBS", department: "Medical" },
    { name: "Ayesha Noor", rollNumber: "104", course: "BSSE", department: "Software Engineering" },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-center text-blue-700 mb-10">
        Our Students
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            rollNumber={student.rollNumber}
            course={student.course}
            department={student.department}
          />
        ))}
      </div>
      
    </div>
  );
};

export default Students;
