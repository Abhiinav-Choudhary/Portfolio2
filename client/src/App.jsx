import React from "react";
import Navbar from "./components/Navbar";
import { TechnicalDesc } from "./components/technicaldesc";
import Skills from "./components/skill";
import Project from "./components/projects";
import WorkExp from "./components/workexp";
import ContactForm from "./components/contactform";
import Footer from "./components/Footer";
import ProblemSolving from "./components/ProblemSolving";

function App() {
  return (
    <div className="font-sans bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <section id="technicaldesc">
        <TechnicalDesc />
      </section>

     <section id="skill" className="scroll-mt-20">
     <Skills />
     </section>
     
     <section id="problem-solving" className="scroll-mt-20">
     <ProblemSolving />
     </section>

     <section id="projects" className="scroll-mt-20">
      <Project />
     </section>

     <section id="workexp" className="scroll-mt-20">
      <WorkExp />
      </section>

     <section id="contactform" className="scroll-mt-20">
      <ContactForm />
     </section>
      
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
