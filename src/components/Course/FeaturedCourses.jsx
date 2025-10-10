import React from "react";
import CourseCard from "./CourseCard";

const FeaturedCourses = ({ courses }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
