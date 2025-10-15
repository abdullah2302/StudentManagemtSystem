// src/components/SignupForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import AuthLayout from "../Auth/AuthLayout";

const SignupForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === form.email);

    setTimeout(() => {
      setLoading(false);
      if (userExists) {
        setError("⚠️ User already exists! Please login instead.");
        return;
      }

      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));

      toast.success("Signup successful! Please login.", { duration: 2000 });
      navigate("/login");
    }, 800);
  };

  return (
    <AuthLayout
      title="Join EduLearn Today!"
      subtitle="Start your learning journey 🌱"
      color="green"
    >
      <form onSubmit={handleSignup}>
        {/* Name */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
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
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
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
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-green-400">
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
        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
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
  );
};

export default SignupForm;
