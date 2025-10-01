import React from "react";

const StudentAvatar = ({ name }) => {
  return (
    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold shadow-md">
      {name.charAt(0)}
    </div>
  );
};

export default StudentAvatar;
