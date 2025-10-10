import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Students", path: "/students" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const NavLinkItem = ({ name, path, mobile }) => {
    const active = pathname === path;
    return (
      <Link
        to={path}
        onClick={() => mobile && setIsOpen(false)}
        className={`px-2 py-1 font-medium transition duration-300 block
          ${active ? "text-yellow-300 font-bold after:w-full" : "hover:text-yellow-300"}
          ${
            !mobile &&
            "relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
          }`}
      >
        {name}
      </Link>
    );
  }

  return (
    <nav className=" bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide">
          Student<span className="text-yellow-300">MS</span>
        </Link>

        {/* desktop section, laptop, or tap*/}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLinkItem {...link} />
            </li>
          ))}
        </ul>

        {/* mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLinkItem {...link} mobile />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
