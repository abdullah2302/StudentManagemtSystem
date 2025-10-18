import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast";
import NavLinkItem from "./NavLinkItem";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); 
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Students", path: "/students" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully!", { duration: 2000 });
    navigate("/login");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Toaster position="top-center" />
      <nav
        className={`${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        } `}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-wide">
            Student<span className="text-yellow-300">MS</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLinkItem {...link} />
              </li>
            ))}
            <AuthButtons
              isAuthenticated={isAuthenticated}
              handleLogout={handleLogout}
            />

            {/* 🌗 Theme Toggle Button — Added Here */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
              aria-label="Toggle Theme"
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faSun : faMoon}
                className={`text-lg ${
                  theme === "dark" ? "text-yellow-400" : "text-white"
                }`}
              />
            </button>
          </ul>

          {/* Mobile Toggle Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu
            navLinks={navLinks}
            isAuthenticated={isAuthenticated}
            handleLogout={handleLogout}
            closeMenu={closeMenu}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;
