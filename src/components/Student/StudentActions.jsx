import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
const StudentActions = ({ student, onDelete }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${student.name}?`
    );
    if (!confirmDelete) return;

    // Get students from localStorage
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];

    // Filter out the deleted one
    const updatedStudents = savedStudents.filter(
      (s) => s.rollNumber !== student.rollNumber
    );

    // Update localStorage
    localStorage.setItem("students", JSON.stringify(updatedStudents));

    // Trigger parent update
    onDelete(student.rollNumber);

    toast.success(`${student.name} has been deleted successfully!`);
  };

  return (
    <div className="mt-5 flex justify-center gap-3">
      <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition text-sm flex items-center gap-1">
        <FontAwesomeIcon icon={faEye} /> View
      </button>

      <button className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition text-sm flex items-center gap-1">
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button>

      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition text-sm flex items-center gap-1"
      >
        <FontAwesomeIcon icon={faTrashAlt} /> Delete
      </button>
    </div>
  );
};

export default StudentActions;
