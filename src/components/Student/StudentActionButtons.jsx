import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const StudentActionButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="mt-5 flex justify-center gap-3">
      <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition text-sm flex items-center gap-1">
        <FontAwesomeIcon icon={faEye} /> View
      </button>

      <button 
        onClick={onEdit}
        className="bg-yellow-400 text-white px-3 py-1 rounded-md hover:bg-yellow-500 transition text-sm flex items-center gap-1"
      >
        <FontAwesomeIcon icon={faEdit} /> Edit
      </button>

      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition text-sm flex items-center gap-1"
      >
        <FontAwesomeIcon icon={faTrashAlt} /> Delete
      </button>
    </div>
  );
};

export default StudentActionButtons;