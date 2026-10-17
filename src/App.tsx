import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProblemSolvingApproach } from './components/ProblemSolvingApproach';
import { ProjectGallery } from './components/ProjectGallery';
import { TechnicalSkills } from './components/TechnicalSkills';
import { Certifications } from './components/Certifications';
import { Leadership } from './components/Leadership';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="editorial-site-wrapper">
      {/* Contextual Custom Cursor for Desktop Fine Pointers */}
      <CustomCursor />

      {/* Floating Pill Nav at Top */}
      <Navbar />

      {/* Main Editorial Flow */}
      <main id="main-content">
        <Hero />
        <About />
        <ProblemSolvingApproach />
        <ProjectGallery />
        <TechnicalSkills />
        <Certifications />
        <Leadership />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
