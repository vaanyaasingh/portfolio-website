import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { AboutMe } from "./screens/AboutMe";
import { Projects } from "./screens/Projects";
import { Resume } from "./screens/Resume";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fffef3]">
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;