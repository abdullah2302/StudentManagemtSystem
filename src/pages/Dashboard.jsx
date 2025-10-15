import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardStats from "../components/Dashboard/DashboardStats";
import DashboardActions from "../components/Dashboard/DashboardActions";




const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
     
      <Navbar />

      <main className="flex-grow container mx-auto px-6 py-10">
        <DashboardHeader />
        <DashboardStats />
        <DashboardActions />
      </main>

      
      <Footer />
    </div>
  );
};

export default Dashboard;
