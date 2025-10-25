import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { toast, Toaster } from "react-hot-toast";
import AuthLayout from "../Auth/AuthLayout";
import { getAdminByEmail, createAdmin } from "../../api/adminApi";

const SignupForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const existingAdmin = await getAdminByEmail(form.email);
      if (existingAdmin) {
        setError("⚠️ Admin already exists! Please login instead.");
        toast.error("Admin already exists!");
        setLoading(false);
        return;
      }
    
      await createAdmin(form);
      toast.success("Signup successful! Please login.", { duration: 2000 });
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.status === 403) {
        toast.error("Only one admin can register. Please login instead.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
    
  };

  return (
    <>
      <Toaster position="top-center" />
      <AuthLayout title="Join EduLearn Today!" subtitle="Start your learning journey 🌱">
        <form onSubmit={handleSignup}>
          {/* Full Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <div className="flex items-center border-b px-3 py-2 bg-green-50 focus-within:ring-2 focus-within:ring-green-400">
              <FontAwesomeIcon icon={faUser} className="text-green-500 mr-3" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <div className="flex items-center border-b px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-500 mr-3" />
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <div className="flex items-center border-b px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
              <FontAwesomeIcon icon={faLock} className="text-green-500 mr-3" />
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-gray-700"
                required
              />
            </div>
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3  font-semibold text-white transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-600 font-semibold cursor-pointer hover:underline"
            >
              Login here
            </span>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default SignupForm;
