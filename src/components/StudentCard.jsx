import React from "react";

const StudentCard = ({ name, rollNumber, course, department }) => {
  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-white to-blue-50 border border-gray-200 rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:scale-105 transform transition duration-300">
      
      {/* Avatar */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold shadow-md">
        {name.charAt(0)}
      </div>

      {/* Info */}
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

      {/* Action */}
      <div className="mt-5">
        <button className="px-5 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
