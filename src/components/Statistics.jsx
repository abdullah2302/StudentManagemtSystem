import React from "react";

const Statistics = () => {
  return (
    <section className="py-12 md:py-16 bg-blue-600 text-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Our Impact</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <div>
          <h3 className="text-3xl font-bold">1200+</h3>
          <p className="text-sm">Students Enrolled</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">85+</h3>
          <p className="text-sm">Courses Offered</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">50+</h3>
          <p className="text-sm">Teachers</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">200+</h3>
          <p className="text-sm">Reports Generated</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
