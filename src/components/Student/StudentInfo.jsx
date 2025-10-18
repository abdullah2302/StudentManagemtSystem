import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faBookOpen,
  faBuilding,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const StudentInfo = ({ name, rollNumber, course, department,contact }) => {
  return (
    <div className="text-center">
      {/* Student Name */}
      <h2 className="text-2xl font-extrabold text-gray-800 mb-3 tracking-wide">
        {name}
      </h2>

      {/* Roll Number */}
      <p className="text-gray-600 mb-2 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faIdBadge} className="text-blue-500" />
        <span className="font-medium">
          <span className="text-blue-600 font-semibold">Roll No:</span> {rollNumber}
        </span>
      </p>

      {/* Course */}
      <p className="text-gray-600 mb-2 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faBookOpen} className="text-green-500" />
        <span className="font-medium">
          <span className="text-blue-600 font-semibold">Course:</span> {course}
        </span>
      </p>

      {/* Department */}
      <p className="text-gray-600 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faBuilding} className="text-purple-500" />
        <span className="font-medium">
          <span className="text-blue-600 font-semibold">Department:</span> {department}
        </span>
      </p>
       {/* contact */}
       <p className="text-gray-600 flex items-center justify-center gap-2">
        <FontAwesomeIcon icon={faPhone} className="text-purple-500" />
        <span className="font-medium">
          <span className="text-blue-600 font-semibold">Contact:</span> {contact}
        </span>
      </p>
    </div>
  );
};

export default StudentInfo;
