import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Student from "./pages/Student";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CGPACalculator from "./pages/CGPAcalculator";

import PrivateRoute from "./components/Auth/PrivateRoute";

function App() {
  return (
    <Router>
     <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/students"
          element={
            <PrivateRoute>
              <Student />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/add-student"
          element={
            <PrivateRoute>
              <AddStudent />
            </PrivateRoute>
          }
        />
        
        <Route path="/cgpa-calculator" 
        element=
        {<PrivateRoute>
             <CGPACalculator />
        </PrivateRoute>
        
        } />
      </Routes>
    </Router>
  );
}

export default App;
