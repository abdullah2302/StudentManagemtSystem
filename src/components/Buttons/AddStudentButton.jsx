import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AddStudentButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/add-student")}
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-blue-600 text-white 
                 px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 
                 transition-all duration-300 font-semibold"
    >
      <FontAwesomeIcon icon={faPlus} />
      Add Student
    </button>
  );
};

export default AddStudentButton;
