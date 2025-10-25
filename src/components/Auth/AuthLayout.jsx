import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Toaster } from "react-hot-toast";

const AuthLayout = ({
  children,
  title,
  subtitle,
  messageTitle,
  messageText,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6">
      {/* Auth Card Container */}
      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-6xl min-h-[80vh] sm:min-h-[70vh]">

        {/* Left Side (Hidden on small) */}
        <div className="hidden md:flex flex-1 bg-gradient-to-br from-green-500 to-blue-500 items-center justify-center p-10">
          <div className="text-center text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1048/1048948.png"
              alt="Education Illustration"
              className="w-32 lg:w-40 mx-auto mb-6 animate-bounce-slow"
            />
            <h2 className="text-2xl lg:text-3xl font-bold mb-2">
              {messageTitle || "Join Our Learning Family!"}
            </h2>
            <p className="text-sm lg:text-base opacity-90">
              {messageText ||
                "Sign up and start your educational journey with us today."}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-center p-6 sm:p-8 bg-white">
          <div className="w-full max-w-sm sm:max-w-md">
            {/* Header */}
            <div className="flex flex-col items-center mb-6 sm:mb-8">
              <div className="bg-blue-600 text-white rounded-full p-4 sm:p-5 shadow-md">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mt-4 text-center">
                {title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-1 text-center">
                {subtitle}
              </p>
            </div>

            {children}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toaster position="top-center" />
    </div>
  );
};

export default AuthLayout;
