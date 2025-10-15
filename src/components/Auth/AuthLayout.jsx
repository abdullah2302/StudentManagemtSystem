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
    <div className="flex items-center justify-center min-h-screen p-6">
     
      {/* Auth Card Container */}
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">
        
        {/* Left Side*/}
        <div className="hidden md:flex flex-1 bg-gradient-to-br from-green-500 to-blue-500 items-center justify-center p-8">
          <div className="text-center text-white">
            <img
              src={
                
                "https://cdn-icons-png.flaticon.com/512/1048/1048948.png"
              }
              alt="Education Illustration"
              className="w-32 mx-auto mb-4 animate-bounce-slow"
            />
            <h2 className="text-2xl font-bold mb-2">
              {messageTitle || "Join Our Learning Family!"}
            </h2>
            <p className="text-sm opacity-90">
              {messageText ||
                "Sign up and start your educational journey with us today."}
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="flex flex-col items-center mb-8">
              <div className="bg-blue-600 text-white rounded-full p-4 shadow-md">
                <FontAwesomeIcon icon={faGraduationCap} size="2x" />
              </div>
              <h2 className="text-3xl font-extrabold text-gray-800 mt-4">
                {title}
              </h2>
              <p className="text-gray-500 text-sm mt-1">{subtitle}</p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
