import React from "react";
import StudentCard from "./StudentCard";

const StudentGrid = ({ students, setStudents }) => {
  const handleDelete = (rollNumber) => {
    const updated = students.filter((student) => student.rollNumber !== rollNumber);
    setStudents(updated);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
      {students.map((student, index) => (
        <StudentCard key={index} student={student} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default StudentGrid;
