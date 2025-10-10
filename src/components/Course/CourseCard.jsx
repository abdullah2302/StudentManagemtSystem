import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:scale-105 transition-all border border-gray-200 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h2>
        <p className="text-gray-500 mb-1">
          <span className="font-semibold text-blue-600">Instructor:</span> {course.instructor}
        </p>
        <p className="text-gray-500 mb-3">
          <span className="font-semibold text-blue-600">Duration:</span> {course.duration}
        </p>
        <p className="text-gray-600">{course.description}</p>
      </div>
      <button className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseCard;
