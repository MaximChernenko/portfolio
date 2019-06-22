import React from "react";

// styles
import s from "./app.module.css";
// components
import Header from "./components/Header/Header";
import Objective from "./components/Objective/Objective";
import TechnicalSkills from "./components/TechnicalSkills/TechnicalSkills";
import SoftSkills from "./components/SoftSkills/SoftSkills";
import Languages from "./components/Languages/Languages";
import Projects from "./components/Projects/Projects";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import AdditionalEducation from "./components/AdditionalEducation/AdditionalEducation";
import Footer from "./components/Footer/Footer";

// options
import techSkills from "./options/techSkills";
import softSkills from "./options/softSkills";

const App = () => (
  <div className={s.app}>
    <Header />
    <main className={s.main}>
      <Objective />
      <TechnicalSkills skills={techSkills} />
      <SoftSkills skills={softSkills} />
      <Languages />
      <Projects />
      <Work />
      <Education />
      <AdditionalEducation />
    </main>
    <Footer />
  </div>
);

export default App;
