import React from "react";

const Features = () => {
  return (
    <section className="py-12 md:py-16 px-6 bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-700 mb-10 md:mb-12">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Students
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Easily manage student records and details.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Courses
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Organize courses and track student progress.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Teachers
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Assign teachers and monitor performance.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-xl transition">
          <h3 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
            Reports
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Generate insightful academic and admin reports.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
