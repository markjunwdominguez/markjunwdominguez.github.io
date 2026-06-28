import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Download } from 'lucide-react';
import { GithubIcon as Github, FacebookIcon as Facebook } from '../components/Icons';
import { profileData } from '../constants';

const typeWriterTexts = [
  "Junior Full Stack Developer",
  "Aspiring Software Engineer",
  "AI Automation Enthusiast",
  "React & Laravel Developer",
  "Open Source Enthusiast"
];

interface HeroProps {
  onContactOpen: () => void;
}

export default function Hero({ onContactOpen }: HeroProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = typeWriterTexts[textIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const delay = !isDeleting && displayText === currentText ? 2000 : 
                  isDeleting && displayText === '' ? 500 : typeSpeed;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentText) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typeWriterTexts.length);
      } else {
        setDisplayText(currentText.substring(0, displayText.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
      
      <div className="z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5
          }}
          className="relative mb-8 group"
        >
          {/* Animated glowing border rings */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-secondaryAccent to-accent opacity-75 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-500 animate-spin-slow"></div>
          <div className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-accent to-secondaryAccent opacity-50 animate-pulse"></div>
          
          {/* Image Container */}
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full p-1 bg-card overflow-hidden z-10 border-2 border-transparent group-hover:border-accent/50 transition-colors duration-300">
            <img 
              src="/profile.jpg" 
              alt={profileData.name} 
              className="w-full h-full object-cover rounded-full transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Hello, I'm <span className="text-accent">{profileData.name}</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl text-textMain font-semibold mb-2"
        >
          {profileData.role}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-textMuted mb-6 max-w-2xl"
        >
          Junior Full Stack Developer <span className="text-accent px-2">|</span> Aspiring Software Engineer
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-8 mb-8 text-secondaryAccent font-mono text-xl"
        >
          &gt; {displayText}
          <span className="animate-pulse ml-1 inline-block w-3 h-5 bg-secondaryAccent transform translate-y-1"></span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-textMuted mb-10 max-w-xl mx-auto leading-relaxed"
        >
          I enjoy building modern web applications, automation tools, and AI-powered solutions while continuously learning new technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a href="#projects" className="flex items-center gap-2 px-6 py-3 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 transition-transform hover:scale-105 active:scale-95">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-card border border-borderCmp text-textMain font-semibold rounded-xl hover:border-accent hover:text-accent transition-transform hover:scale-105 active:scale-95">
            Download Resume <Download size={18} />
          </a>
          <button onClick={onContactOpen} className="flex items-center gap-2 px-6 py-3 bg-transparent border border-borderCmp text-textMain font-semibold rounded-xl hover:bg-borderCmp transition-transform hover:scale-105 active:scale-95">
            Contact Me
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6"
        >
          <a href="https://github.com/markjunwdominguez/markjunwdominguez.github.io" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full border border-borderCmp text-textMuted hover:text-accent hover:border-accent transition-colors">
            <Github size={24} />
          </a>
          <button onClick={() => window.open('https://www.facebook.com/mjchoichoi.dominguezjr.1', '_blank', 'noopener,noreferrer')} className="p-3 bg-card rounded-full border border-borderCmp text-textMuted hover:text-accent hover:border-accent transition-colors cursor-pointer">
            <Facebook size={24} />
          </button>
          <a href="https://mail.google.com/mail/?view=cm&to=markjunwdominguez@gmail.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-full border border-borderCmp text-textMuted hover:text-accent hover:border-accent transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}