import React from "react";
import { useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react"; // if using lucide-react icons

const DashboardActions = () => {
  const navigate = useNavigate();

  return (
    <>
 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Manage Students Card */}
      <div className="bg-white shadow-lg  p-6 flex flex-col transition duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Icon */}
        <div className="flex justify-center items-center mb-4">
          <div className="p-3 rounded-full bg-blue-100">
            {/* Heroicon: UserGroup */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-blue-600"
            >
              <path
                fillRule="evenodd"
                d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A.75.75 0 017.06 14.5h9.88a.75.75 0 01.75.617l.442 2.21a.75.75 0 01-.75.883H6.56a.75.75 0 01-.75-.883l.442-2.21zM17.69 15.117A.75.75 0 0118.44 14.5h1.11a.75.75 0 01.75.617l.442 2.21a.75.75 0 01-.75.883h-1.11a.75.75 0 01-.75-.883l.442-2.21zM2.56 17.317A.75.75 0 011.81 16.43l.442-2.21a.75.75 0 01.75-.617h1.11a.75.75 0 01.75.883l.442 2.21a.75.75 0 01-.75.617H2.56z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
          Manage Students
        </h2>
        <p className="text-gray-600 mb-5 text-center">
          Add, edit, or view student details.
        </p>

        {/* Button - mt-auto pushes it to the bottom */}
        <div className="mt-auto">
          <button
            onClick={() => navigate("/students")}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            See Students
          </button>
        </div>
      </div>

      {/* Manage Courses Card */}
      <div className="bg-white shadow-lg  p-6 flex flex-col transition duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Icon */}
        <div className="flex justify-center items-center mb-4">
          <div className="p-3 rounded-full bg-green-100">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-green-600"
            >
              <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.5a.75.75 0 00.5.707A9.735 9.735 0 006 21a9.707 9.707 0 005.25-1.533v-1.176c-.007-.02-.014-.04-.02-.061a4.5 4.5 0 01-8.458-2.212.75.75 0 011.06-1.06 3 3 0 004.38 1.472v-.235A9.733 9.733 0 006 16.5a3 3 0 00-3-3 .75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75 3 3 0 003-3A9.733 9.733 0 009 5.765v.235a3 3 0 00-4.38 1.472.75.75 0 01-1.06-1.06 4.5 4.5 0 018.458-2.212c.006-.02.013-.04.02-.061V4.533zM12.75 4.533A9.707 9.707 0 0118 3a9.735 9.735 0 013.25.555.75.75 0 01.5.707v14.5a.75.75 0 01-.5.707A9.735 9.735 0 0118 21a9.707 9.707 0 01-5.25-1.533v-1.176c.007-.02.014-.04.02-.061a4.5 4.5 0 008.458-2.212.75.75 0 00-1.06-1.06 3 3 0 01-4.38 1.472v-.235A9.733 9.733 0 0118 16.5a3 3 0 013-3 .75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75 3 3 0 01-3-3A9.733 9.733 0 0115 5.765v.235a3 3 0 014.38 1.472.75.75 0 001.06-1.06 4.5 4.5 0 00-8.458-2.212c-.006-.02-.013-.04-.02-.061V4.533z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
          Manage Courses
        </h2>
        <p className="text-gray-600 mb-5 text-center">
          Create or update course information.
        </p>

        {/* Button - mt-auto pushes it to the bottom */}
        <div className="mt-auto">
          <button onClick={() => navigate("/courses")}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
          Go to Course
          </button>
        </div>
      </div>
      <button
        onClick={() => navigate("/cgpa-calculator")}
        className="flex flex-col items-center justify-center bg-green-600 hover:bg-green-700 text-white p-6  shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <Calculator size={40} className="mb-3" />
        <h2 className="text-xl font-semibold">CGPA Calculator</h2>
        <p className="text-sm opacity-80 mt-1">Calculate student grades easily</p>
      </button>
    </div>
  
    </>
  );
};

export default DashboardActions;