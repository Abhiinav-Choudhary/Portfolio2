import React from "react";
import Navbar from "./components/Navbar";
import { TechnicalDesc } from "./components/technicaldesc";
import Skills from "./components/skill";
import Project from "./components/projects";
import WorkExp from "./components/workexp";
import ContactForm from "./components/contactform";

function App() {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
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
    </div>
  );
}

export default App;
