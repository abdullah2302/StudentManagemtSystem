import React from "react";
import StudentAvatar from "./StudentAvatar";
import StudentInfo from "./StudentInfo";
import StudentActions from "./StudentActions";

const StudentCard = ({ name, rollNumber, course, department }) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transform transition duration-300">
      <StudentAvatar name={name} />
      <StudentInfo name={name} rollNumber={rollNumber} course={course} department={department} />
      <StudentActions />
    </div>
  );
};

export default StudentCard;
