import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinkItem = ({ name, path, mobile, onClick }) => {
  const { pathname } = useLocation();
  const active = pathname === path;

  return (
    <Link
      to={path}
      onClick={onClick}
      className={`px-2 py-1 font-medium transition duration-300 block
        ${
          active
            ? "text-yellow-300 font-bold after:w-full"
            : "hover:text-yellow-300"
        }
        ${
          !mobile &&
          "relative after:content-[''] after:block after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 hover:after:w-full"
        }`}
    >
      {name}
    </Link>
  );
};

export default NavLinkItem;
