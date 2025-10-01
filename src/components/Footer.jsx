import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center p-4 shadow-inner">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Student Management System</span>. 
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
