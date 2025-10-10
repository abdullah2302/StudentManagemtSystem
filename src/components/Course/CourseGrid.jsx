import React from "react";
import CourseCard from "./CourseCard";

const CourseGrid = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
