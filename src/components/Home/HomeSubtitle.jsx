import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeSubtitle = () => {
  return (
    <TypeAnimation
      sequence={[
        "Manage students with ease 📚",
        1500,
        "Track courses effortlessly 🎓",
        1500,
        "Stay organized with dashboard 📊",
        1500,
      ]}
      wrapper="p"
      speed={50}
      className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
      repeat={`false`}
    />
  );
};

export default HomeSubtitle;