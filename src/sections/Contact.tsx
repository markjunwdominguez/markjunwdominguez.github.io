import { motion } from 'framer-motion';
import { Mail, Terminal } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

interface ContactProps {
  onContactOpen: () => void;
  onTerminalOpen: () => void;
}

export default function Contact({ onContactOpen, onTerminalOpen }: ContactProps) {
  return (
    <section id="contact" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-6">
          <span className="text-accent">05.</span> What's Next?
        </h2>
        
        <h3 className="text-4xl md:text-5xl font-bold text-textMain mb-6">
          Get In Touch
        </h3>
        
        <p className="text-textMuted mb-10 text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactOpen}
          className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-accent text-accent rounded hover:bg-accent/10 transition-colors font-mono text-lg cursor-pointer"
        >
          <Mail className="w-5 h-5" />
          Say_Hello()
        </motion.button>

        <div className="mt-16 flex justify-center gap-6">
          {/* GitHub */}
          <motion.a
            href="https://github.com/markjunwdominguez"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="text-textMuted hover:text-accent transition-colors p-3 hover:bg-accent/10 rounded-full"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>

          {/* Gmail */}
          <motion.a
            href="https://mail.google.com/mail/?view=cm&to=markjunwdominguez@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="text-textMuted hover:text-accent transition-colors p-3 hover:bg-accent/10 rounded-full"
            title="Send Email via Gmail"
          >
            <Mail className="w-6 h-6" />
          </motion.a>

          {/* Terminal */}
          <motion.button
            onClick={onTerminalOpen}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="text-textMuted hover:text-accent transition-colors p-3 hover:bg-accent/10 rounded-full cursor-pointer"
            title="Open Terminal"
          >
            <Terminal className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
