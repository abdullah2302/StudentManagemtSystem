import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg 
                   hover:bg-blue-700 hover:scale-105 transform transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomeButton;
