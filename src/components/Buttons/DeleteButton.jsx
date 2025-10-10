import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const DeleteButton = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition text-sm flex items-center gap-1"
    >
      <FontAwesomeIcon icon={faTrashAlt} /> Delete
    </button>
  );
};

export default DeleteButton;
