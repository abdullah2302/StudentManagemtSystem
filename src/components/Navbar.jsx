import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo (Top Left) */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Student <span className="text-yellow-400">MS</span>
        </h1>

        {/* Desktop Menu (Right) */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium tracking-wide">
          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Students
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-yellow-300 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button (Right) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4">
          <ul className="space-y-3 text-lg font-medium tracking-wide text-center">
            <li>
              <a href="#" className="block py-2 hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-yellow-300">
                Students
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-yellow-300">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
