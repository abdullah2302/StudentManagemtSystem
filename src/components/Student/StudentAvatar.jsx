import React from "react";

const StudentAvatar = ({ name }) => {
  // Handle case when name might be undefined or empty
  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold shadow-md">
      {initial}
    </div>
  );
};

export default StudentAvatar;
