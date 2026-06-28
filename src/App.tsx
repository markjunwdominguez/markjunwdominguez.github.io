
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

import Certificates from './sections/Certificates';
import GitHubSection from './sections/GitHubSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    // Clear any hash from URL and scroll to top on refresh/load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-accent/30 font-sans">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-left z-[100] shadow-[0_0_8px_rgba(0,255,136,0.8)]"
        style={{ scaleX }}
      />
      <Navbar />
      <main className="flex flex-col gap-24 pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Hero onContactOpen={() => setIsContactOpen(true)} />
        <About />
        <Skills />
        <Projects />

        <Certificates />
        <GitHubSection />
        <Contact onContactOpen={() => setIsContactOpen(true)} onTerminalOpen={() => setIsTerminalOpen(true)} />
      </main>
      <Footer />
      <TerminalModal isOpen={isTerminalOpen} onOpenChange={setIsTerminalOpen} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
