import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-16 md:py-20 px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to{" "}
        <span className="text-yellow-300">Student Management System</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
        Manage students, courses, teachers, and reports with ease in one place.
      </p>
      <button className="bg-yellow-400 text-blue-900 font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow hover:bg-yellow-300 transition text-sm sm:text-base">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
