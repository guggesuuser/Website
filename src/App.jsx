import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Verein from "./pages/Verein";
import Bilder from "./pages/Bilder";

// Seiten
import Home from "./pages/Home";
import Datenschutz from "./pages/Datenschutz";

function App() {
  // Beim Laden Logo aus localStorage laden
  useEffect(() => {
    const saved = localStorage.getItem("logoUrl");
    if (saved) setLogoUrl(saved);
  }, []);

  return (
    <div className="pt-16">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/verein" element={<Verein />} />
        <Route path="/bilder" element={<Bilder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
