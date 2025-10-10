import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Student from "./pages/Student";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent"; 
import Courses from "./pages/Courses"; 
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Student />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </Router>
  );
}

export default App;
