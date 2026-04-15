import React from "react";
import Navbar from "./components/Navbar";
import { TechnicalDesc } from "./components/technicaldesc";
import Skills from "./components/skill";
import Project from "./components/projects";
import WorkExp from "./components/workexp";
import ContactForm from "./components/contactform";
import Footer from "./components/Footer";
import VantaBackground from "./components/VantaBackground"; 

function App() {
  return (
   <div className="relative z-10 font-sans bg-gray-50/80 dark:bg-gray-900/80 transition-colors duration-500">
      
      {/* 🔥 Background */}
      <VantaBackground />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="technicaldesc">
        <TechnicalDesc />
      </section>

      <section id="skill">
        <Skills />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="workexp">
        <WorkExp />
      </section>

      <section id="contactform">
        <ContactForm />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;