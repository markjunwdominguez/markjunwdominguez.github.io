import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { certificatesData } from '../constants';

export default function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain">
            <span className="text-accent">#</span> Certificates
          </h2>
          <div className="h-[1px] flex-1 bg-border/50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative border border-border bg-card rounded-lg overflow-hidden hover:border-accent/50 transition-all hover:shadow-[0_0_15px_rgba(var(--color-accent),0.2)]"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-textMuted mt-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="font-mono">{cert.issuer}</span>
                      <span className="text-border">•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-textMuted hover:text-accent transition-colors p-2 hover:bg-accent/10 rounded-full"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}