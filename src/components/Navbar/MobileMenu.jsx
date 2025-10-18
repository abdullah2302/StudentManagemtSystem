import React from "react";
import NavLinkItem from "./NavLinkItem";
import AuthButtons from "./AuthButtons";

const MobileMenu = ({ navLinks, isAuthenticated, handleLogout, closeMenu }) => {
  return (
    <div className="md:hidden bg-indigo-800">
      <ul className="flex flex-col space-y-4 p-4">
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLinkItem {...link} mobile onClick={closeMenu} />
          </li>
        ))}

        {/* Auth Buttons for Mobile */}
        <AuthButtons
          isAuthenticated={isAuthenticated}
          handleLogout={handleLogout}
          mobile
          closeMenu={closeMenu}
        />
      </ul>
      
    </div>
  );
};

export default MobileMenu;
