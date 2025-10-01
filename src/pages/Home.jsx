import React from "react";
import Hero from "../components/Hero";

const Home = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero onGetStarted={onGetStarted} />
    </div>
  );
};

export default Home;
