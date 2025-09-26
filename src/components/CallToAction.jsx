import React from "react";

const CallToAction = () => {
  return (
    <section className="py-12 md:py-16 text-center bg-white-600">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Join now and simplify your school or college management with our
        easy-to-use system.
      </p>
      <button className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition">
        Register Today
      </button>
    </section>
  );
};

export default CallToAction;
