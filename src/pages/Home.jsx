import React from "react";
import HomeHeading from "../components/Home/HomeHeading";
import HomeSubtitle from "../components/Home/HomeSubtitle";
import HomeButton from "../components/Home/HomeButton";
import Footer from "../components/Footer";

const Home = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center p-6">
          
          <HomeHeading />

         
          <HomeSubtitle />

          
          <HomeButton onGetStarted={onGetStarted} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
