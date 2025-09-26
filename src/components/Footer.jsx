import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white text-center p-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Student Management System. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
