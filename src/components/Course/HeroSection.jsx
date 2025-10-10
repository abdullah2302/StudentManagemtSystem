import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto text-center px-5">
        <h1 className="text-5xl font-extrabold mb-4">
          Explore Our <span className="text-yellow-300">Courses</span>
        </h1>
        <p className="text-lg mb-6">
          Learn from the best instructors and boost your skills in tech, design, and marketing.
        </p>
        <button className="bg-yellow-300 text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition">
          Browse Courses
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
