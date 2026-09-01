import React, { useState, useEffect } from 'react';
import { CyberBackground } from './components/CyberBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Learning } from './components/Learning';
import { Projects } from './components/Projects';
import { ProblemSolving } from './components/ProblemSolving';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'learning', 'projects', 'dsa', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#e0e0e0] selection:bg-[#00FF41]/30 selection:text-[#00FF41] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top neon subtle accent line */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF41]/40 to-transparent z-[60] pointer-events-none" />

      {/* Interactive Cursor Parallax Background */}
      <CyberBackground />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Learning />
        <Projects />
        <ProblemSolving />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
