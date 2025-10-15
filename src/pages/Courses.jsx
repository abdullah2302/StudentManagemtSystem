import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/Course/HeroSection";
import CourseGrid from "../components/Course/CourseGrid";
import FeaturedCourses from "../components/Course/FeaturedCourses";

const Courses = () => {
  const courses = [
    {
      title: "Web Development",
      instructor: "Ali Khan",
      duration: "3 Months",
      description: "Learn HTML, CSS, JavaScript, React, and more.",
    },
    {
      title: "Data Science",
      instructor: "Sara Ahmed",
      duration: "4 Months",
      description: "Learn Python, Pandas, NumPy, ML, and Data Visualization.",
    },
    {
      title: "UI/UX Design",
      instructor: "Hamza Iqbal",
      duration: "2 Months",
      description: "Learn Figma, Adobe XD, Wireframing, and Prototyping.",
    },
    {
      title: "Digital Marketing",
      instructor: "Ayesha Noor",
      duration: "3 Months",
      description: "Learn SEO, Social Media Marketing, and Ads Strategy.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <section className="container mx-auto px-5 py-16">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-10 text-center">
            All Courses
          </h2>
          <CourseGrid courses={courses} />
        </section>
        <FeaturedCourses courses={courses.slice(0, 3)} />
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
