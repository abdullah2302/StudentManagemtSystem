import React from "react";
import StudentEditForm from "./StudentEditForm";

const StudentEditModal = ({ isOpen, formData, setFormData, onSubmit, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  z-1">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onCancel}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-blue-700 text-center mb-4">
          Edit Student Details
        </h2>

        <StudentEditForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
      </div>
    </div>
  );
};

export default StudentEditModal;
