import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-extrabold tracking-wide">
          Student<span className="text-yellow-300">MS</span>
        </h1>
        <ul className="flex space-x-6">
          {["Home", "Students", "Courses", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative px-2 py-1 font-medium hover:text-yellow-300 transition duration-300 
                           after:content-[''] after:block after:h-[2px] after:w-0 after:bg-yellow-300 after:transition-all 
                           after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
