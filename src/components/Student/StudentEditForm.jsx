import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";

const StudentEditForm = ({ formData, setFormData, onSubmit, onCancel }) => {
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    e.preventDefault();
  };

  return (
    <div className="mt-4 p-4 bg-yellow-50 border-t-4 border-yellow-400 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold text-gray-800 mb-4">
        Editing: {formData.name}
      </h3>
      <form onSubmit={onSubmit} className="space-y-3">
        {/* Name Field */}
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleInputChange}
          placeholder="Student Name"
          className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
          required
        />
        <input
          type="tel"
          name="course"
          value={formData.course || ''}
          onChange={handleInputChange}
          placeholder="course"
          className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
        />
        {/* Department Field */}
        <input
          type="text"
          name="department"
          value={formData.department || ''}
          onChange={handleInputChange}
          placeholder="Department"
          className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
          required
        />
        {/* Phone Field */}
        <input
          type="tel"
          name="contact"
          value={formData.contact || ''}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full p-2 border border-gray-300 rounded focus:ring-yellow-500 focus:border-yellow-500"
        />
        
        {/* Action Buttons for the form */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center gap-1 px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"
          >
            <FontAwesomeIcon icon={faTimes} /> Cancel
          </button>
          <button
            type="submit"
            className="flex items-center gap-1 px-4 py-2 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition"
          >
            <FontAwesomeIcon icon={faSave} /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentEditForm;