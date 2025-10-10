import React from "react";
import StudentCard from "./StudentCard";

const StudentList = ({ students }) => {
  if (students.length === 0) {
    return <p className="text-center text-gray-500">No students added yet.</p>;
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
        Student List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 auto-rows-fr justify-items-center">
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
    </>
  );
};

export default StudentList;
