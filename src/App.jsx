import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays on top across all pages */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Home />
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}

export default App;
