import React from "react";

const StudentInfo = ({ name, rollNumber, course, department }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-extrabold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold text-blue-600">Roll No:</span> {rollNumber}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold text-blue-600">Course:</span> {course}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold text-blue-600">Department:</span> {department}
      </p>
    </div>
  );
};

export default StudentInfo;
