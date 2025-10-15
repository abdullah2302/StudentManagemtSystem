import React from "react";
import { Link } from "react-router-dom";

const AuthButtons = ({ isAuthenticated, handleLogout, mobile, closeMenu }) => {
  return isAuthenticated ? (
    <button
      onClick={() => {
        handleLogout();
        if (mobile) closeMenu();
      }}
      className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold text-white transition w-full md:w-auto"
    >
      Logout
    </button>
  ) : (
    <div className={`flex ${mobile ? "flex-col space-y-3" : "space-x-3"}`}>
      <Link
        to="/login"
        onClick={mobile ? closeMenu : undefined}
        className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
      >
        Login
      </Link>
      <Link
        to="/signup"
        onClick={mobile ? closeMenu : undefined}
        className="bg-yellow-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition text-center"
      >
        Signup
      </Link>
    </div>
  );
};

export default AuthButtons;
