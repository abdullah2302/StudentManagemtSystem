// 📁 src/components/Student/SearchBar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="max-w-md mx-auto mb-8 relative">
      {/* 🔍 Search Icon */}
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-3 text-gray-400"
      />

      {/* 🔤 Input Field */}
      <input
        type="text"
        placeholder="Search by name or roll number..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
