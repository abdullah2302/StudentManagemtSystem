import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const CGPACalculator = () => {
  const [grades, setGrades] = useState([{ subject: "", credit: "", grade: "" }]);
  const [cgpa, setCgpa] = useState(null);

  const gradePoints = {
    A: 4.0,
    B: 3.0,
    C: 2.0,
    D: 1.0,
    F: 0.0,
  };

  const addRow = () => setGrades([...grades, { subject: "", credit: "", grade: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...grades];
    updated[index][field] = value;
    setGrades(updated);
  };

  const calculateCGPA = () => {
    let totalCredits = 0;
    let totalPoints = 0;

    grades.forEach(({ credit, grade }) => {
      const creditNum = parseFloat(credit);
      const gradePoint = gradePoints[grade] || 0;
      totalCredits += creditNum;
      totalPoints += creditNum * gradePoint;
    });

    setCgpa(totalPoints / totalCredits || 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 py-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-700 mb-8 tracking-tight">
          🎓 CGPA Calculator
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto transition-all duration-300 hover:shadow-2xl">
          {grades.map((row, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-3 mb-4 border-b pb-3 border-gray-100"
            >
              <input
                type="text"
                placeholder="Subject Name"
                value={row.subject}
                onChange={(e) => handleChange(index, "subject", e.target.value)}
                className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 text-sm sm:text-base"
              />

              <input
                type="number"
                placeholder="Credit Hours"
                value={row.credit}
                onChange={(e) => handleChange(index, "credit", e.target.value)}
                className="w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 text-sm sm:text-base"
              />

              {/* Grade Dropdown */}
              <select
                value={row.grade}
                onChange={(e) => handleChange(index, "grade", e.target.value)}
                className="w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 text-sm sm:text-base bg-white"
              >
                <option value="">Select Grade</option>
                <option value="A">A (4.0)</option>
                <option value="B">B (3.0)</option>
                <option value="C">C (2.0)</option>
                <option value="D">D (1.0)</option>
                <option value="F">F (0.0)</option>
              </select>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
            <button
              onClick={addRow}
              className="w-full sm:w-auto bg-blue-600 text-white font-medium px-4 sm:px-6 py-2.5 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
            >
              ➕ Add Subject
            </button>

            <button
              onClick={calculateCGPA}
              className="w-full sm:w-auto bg-green-600 text-white font-medium px-4 sm:px-6 py-2.5 rounded-lg shadow-md hover:bg-green-700 hover:scale-105 active:scale-95 transition-all text-sm sm:text-base"
            >
              🧮 Calculate CGPA
            </button>
          </div>

          {cgpa !== null && (
            <div className="mt-8 text-center">
              <div className="bg-blue-100 text-blue-800 font-bold text-2xl sm:text-3xl py-4 rounded-lg shadow-sm">
                🎯 Your CGPA: {cgpa.toFixed(2)}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CGPACalculator;
