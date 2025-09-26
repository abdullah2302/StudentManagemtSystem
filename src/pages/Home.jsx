import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import CallToAction from "../components/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
      <CallToAction />
      <About />
    </>
  );
};

export default Home;
