import React from "react";
import StudentAvatar from "./StudentAvatar";
import StudentActions from "./StudentActions";
import StudentInfo from "./StudentInfo";

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-xs mx-auto transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200">
      {/* Avatar */}
      <div className="flex justify-center mb-4">
        <StudentAvatar name={student.name} />
      </div>

     
      <StudentInfo
        name={student.name}
        rollNumber={student.rollNumber}
        course={student.course}
        department={student.department}
      />

      {/* Actions */}
      <StudentActions student={student} onDelete={onDelete} />
    </div>
  );
};

export default StudentCard;
