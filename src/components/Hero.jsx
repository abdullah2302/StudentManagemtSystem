import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">
      <div className="text-center p-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 drop-shadow-md">
          Welcome to <span className="text-blue-600">Student Management System</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Manage students, courses, and performance easily with our powerful and user-friendly system.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg 
                       hover:bg-blue-700 hover:scale-105 transform transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
