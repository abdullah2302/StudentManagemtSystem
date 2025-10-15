import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <main className="flex-grow container mx-auto px-5 py-16">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-16">
          Get in Touch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
