import React, { useEffect, useState } from "react";
import { getStudents } from "../../api/studentApi";

const DashboardStats = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const data = await getStudents();
        setStudentCount(data.length); //if return array
      } catch (error) {
        console.error("Error fetching students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {/* Total Students Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex justify-center items-center mb-4">
          <div className="p-3 rounded-full bg-blue-100">
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

        <h2 className="text-xl font-semibold text-gray-700">Total Students</h2>
        <p className="text-3xl font-bold text-blue-600 mt-2">
          {loading ? "Loading..." : studentCount}
        </p>
      </div>

      {/* Courses Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex justify-center items-center mb-4">
          <div className="p-3 rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-green-600"
            >
              <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
              <path
                fillRule="evenodd"
                d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.163 3.75A.75.75 0 0110 12h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Courses</h2>
        <p className="text-3xl font-bold text-green-600 mt-2">15</p>
      </div>

      {/* Departments Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 text-center transition duration-300 hover:shadow-2xl hover:-translate-y-1">
        <div className="flex justify-center items-center mb-4">
          <div className="p-3 rounded-full bg-purple-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-purple-600"
            >
              <path
                fillRule="evenodd"
                d="M3.825 2.25a.75.75 0 01.75-.75h14.85a.75.75 0 01.75.75v19.5a.75.75 0 01-.75.75H4.575a.75.75 0 01-.75-.75V2.25zM5.325 3.75v16.5h13.35V3.75H5.325z"
                clipRule="evenodd"
              />
              <path d="M9 7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3zM9 13.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75v-3z" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Departments</h2>
        <p className="text-3xl font-bold text-purple-600 mt-2">5</p>
      </div>
    </div>
  );
};

export default DashboardStats;
