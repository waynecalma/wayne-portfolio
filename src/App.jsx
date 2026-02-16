import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';



function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <Navbar />
      
      {/* 1. HOME / ABOUT (The Hero Section) */}
      <div id="hero">
        <Hero />
      </div>

      {/* 2. PROJECTS SECTION */}
      
      <div id="projects">
        <Projects />
      </div>

      {/* 3. SKILLS SECTION */}
      <div id="skills">
        <Skills />
      </div>

      {/* 4. ACHIEVEMENTS SECTION */}
      <div id="achievements">
        <Achievements />
      </div>
      

    </div>
  )
}

export default App