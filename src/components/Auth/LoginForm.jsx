import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { Toaster, toast } from "react-hot-toast";
import AuthLayout from "../Auth/AuthLayout";
import { loginAdmin } from "../../api/adminApi"; 

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const admins = await loginAdmin(form.email, form.password); 

      if (admins.length > 0) {
        const admin = admins[0];
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("loggedInAdmin", JSON.stringify(admin));
        toast.success(`Welcome back, ${admin.name}! 👋`, { duration: 2000 });
        navigate("/");
      } else {
        setError("❌ Invalid email or password!");
        toast.error("Invalid email or password!");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.error("Failed to connect to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <AuthLayout
        title="Welcome Back!"
        subtitle="Login to continue your learning journey 📘"
        messageTitle="Welcome Learner!"
        messageText="Access your dashboard and start learning today."
      >
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-3" />
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
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
              <FontAwesomeIcon icon={faLock} className="text-blue-500 mr-3" />
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
            className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg"
            }`}
          >
            {loading ? "Signing In..." : "Login"}
          </button>

          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
            >
              Sign up now
            </span>
          </p>
        </form>
      </AuthLayout>
    </>
  );
};

export default LoginForm;
