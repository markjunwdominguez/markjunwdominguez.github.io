import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../constants';
import { ExternalLink, X, Cpu, Star, CheckCircle2, User, Trophy, Zap, Wifi, ArrowRight } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';
import FeaturedProjectModal from '../components/FeaturedProjectModal';

type Project = typeof projectsData[0];

// The hero project (index 0) has the rich case-study data
const heroProject = projectsData[0];
const otherProjects = projectsData.slice(1);

export default function Projects() {
  const [heroOpen, setHeroOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-textMain mb-2 flex items-center gap-2">
          <span className="text-accent font-mono text-xl">03.</span> Featured Projects
        </h2>
        <div className="h-1 w-20 bg-borderCmp rounded">
          <div className="h-full w-1/2 bg-accent rounded"></div>
        </div>
      </motion.div>

      {/* ── Hero Featured Card ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-10 cursor-pointer group"
        onClick={() => setHeroOpen(true)}
      >
        <div className="relative rounded-xl overflow-hidden border border-borderCmp bg-card hover:border-accent/60 transition-colors duration-300 shadow-xl">
          {/* Glow accent line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-80 z-10" />

          <div className="flex flex-col lg:flex-row">
            {/* Image */}
            <div className="relative lg:w-[55%] h-64 lg:h-auto min-h-[280px] overflow-hidden flex-shrink-0">
              <img
                src={heroProject.image}
                alt={heroProject.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90 lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-accent text-background text-xs font-bold rounded-full shadow-lg">
                <Star size={12} />
                Featured Project
              </div>
            </div>

            {/* Content */}
            <div className="p-7 lg:p-10 flex flex-col justify-center gap-4 flex-grow">
              {heroProject.categoryBadge && (
                <div className="flex flex-wrap gap-2">
                  {heroProject.categoryBadge.split('•').map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full"
                    >
                      {badge.trim()}
                    </span>
                  ))}
                </div>
              )}

              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-textMain group-hover:text-accent transition-colors leading-tight">
                  {heroProject.title}
                </h3>
                {heroProject.subtitle && (
                  <p className="text-secondaryAccent font-mono text-sm mt-1">{heroProject.subtitle}</p>
                )}
              </div>

              <p className="text-textMuted leading-relaxed text-sm lg:text-base line-clamp-3">
                {heroProject.overview}
              </p>

              {heroProject.highlights && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {heroProject.highlights.slice(0, 4).map((h) => (
                    <div key={h} className="flex items-start gap-2 text-textMuted text-xs">
                      <Zap size={12} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-1">
                {heroProject.technologies.slice(0, 6).map((tech) => (
                  <span key={tech} className="text-xs font-mono text-secondaryAccent bg-secondaryAccent/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {heroProject.technologies.length > 6 && (
                  <span className="text-xs font-mono text-textMuted bg-borderCmp px-2 py-1 rounded">
                    +{heroProject.technologies.length - 6} more
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-accent text-sm font-semibold mt-1 group-hover:gap-3 transition-all">
                <Cpu size={15} />
                <span>View Full Case Study</span>
                <ExternalLink size={14} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Other Projects Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: i * 0.1 }}
            className="glass-panel flex flex-col group cursor-pointer overflow-hidden h-full"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-300"></div>
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-background text-xs font-bold rounded-full shadow-lg">
                  Featured
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-textMain mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-textMuted text-sm mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-mono text-secondaryAccent bg-secondaryAccent/10 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Featured Project Modal (case study) ── */}
      <AnimatePresence>
        {heroOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <FeaturedProjectModal
              project={heroProject as Parameters<typeof FeaturedProjectModal>[0]['project']}
              onClose={() => setHeroOpen(false)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* ── Simple Modal for other projects ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-card border border-borderCmp rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur text-textMain rounded-full hover:bg-accent hover:text-background transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-full h-64 md:h-80 relative flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <div className="flex gap-3">
                    <a href={selectedProject.githubUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-background border border-borderCmp rounded-lg hover:border-accent hover:text-accent transition-colors font-medium">
                      <Github size={18} /> Code
                    </a>
                    <a href={selectedProject.liveUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-medium">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 border-b border-borderCmp pb-2">
                        <Wifi size={16} className="text-accent" /> Overview
                      </h3>
                      <p className="text-textMuted leading-relaxed">{selectedProject.overview || selectedProject.description}</p>
                    </div>
                    {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                      <div>
                        <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 border-b border-borderCmp pb-2">
                          <Star size={16} className="text-accent" /> Key Features
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedProject.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-textMuted text-sm">
                              <CheckCircle2 size={14} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                      <div>
                        <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 border-b border-borderCmp pb-2">
                          <Trophy size={16} className="text-accent" /> Achievements
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.achievements.map((a) => (
                            <li key={a} className="flex items-start gap-2 text-textMuted text-sm">
                              <ArrowRight size={13} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 border-b border-borderCmp pb-2">
                        <Cpu size={16} className="text-accent" /> Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span key={tech} className="text-sm font-mono text-secondaryAccent bg-secondaryAccent/10 px-3 py-1.5 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {selectedProject.role && selectedProject.role.length > 0 && (
                      <div>
                        <h3 className="flex items-center gap-2 text-xl font-semibold mb-3 border-b border-borderCmp pb-2">
                          <User size={16} className="text-accent" /> Role
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.role.map((r) => (
                            <li key={r} className="flex items-center gap-2 text-textMuted text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}