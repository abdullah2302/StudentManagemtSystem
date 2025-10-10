import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
  const infoStyle = "flex items-center gap-4 bg-white/80 backdrop-blur-lg p-5 rounded-2xl shadow-lg transition hover:shadow-2xl";

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Contact Information
      </h2>

      <div className={infoStyle}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-600 text-2xl" />
        <p>123 Main Street, City, Country</p>
      </div>

      <div className={infoStyle}>
        <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-2xl" />
        <p>+123 456 7890</p>
      </div>

      <div className={infoStyle}>
        <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-2xl" />
        <p>info@example.com</p>
      </div>
    </div>
  );
};

export default ContactInfo;
