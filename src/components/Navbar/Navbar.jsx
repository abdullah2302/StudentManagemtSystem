import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast";
import NavLinkItem from "./NavLinkItem";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Students", path: "/students" },
    { name: "Courses", path: "/courses" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logout successful!", { duration: 2000 });
    navigate("/login"); 
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      
      

      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
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
