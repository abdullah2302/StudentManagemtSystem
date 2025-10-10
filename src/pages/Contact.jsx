import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col">
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
