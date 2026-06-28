import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ExternalLink, Image as ImageIcon, BookOpen, GitBranch,
  CheckCircle2, Trophy, User, Cpu, Star, Wifi, Zap,
  Users, Activity, Bell, ChevronLeft, ChevronRight,
  ArrowRight, Code2, Layers,
} from 'lucide-react';
import { GithubIcon as Github } from './Icons';

/* ─── Types ─────────────────────────────────────────────── */
interface GalleryImage {
  src: string;
  caption: string;
  orientation?: 'landscape' | 'portrait';
}

interface ProjectStat {
  value: string;
  label: string;
  icon: string;
}

interface TimelineStep {
  step: string;
  description: string;
}

interface ProjectButton {
  label: string;
  icon: string;
  action?: string;
  href?: string;
}

interface FeaturedProject {
  id: number;
  title: string;
  subtitle?: string;
  categoryBadge?: string;
  description: string;
  overview: string;
  projectDescription?: string;
  image: string;
  technologies: string[];
  highlights?: string[];
  role?: string[];
  achievements?: string[];
  galleryImages?: GalleryImage[];
  stats?: ProjectStat[];
  timeline?: TimelineStep[];
  buttons?: ProjectButton[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

interface Props {
  project: FeaturedProject;
  onClose: () => void;
}

/* ─── Stat icon map ──────────────────────────────────────── */
const StatIcon = ({ name }: { name: string }) => {
  const cls = 'text-accent';
  const sz = 22;
  switch (name) {
    case 'users':    return <Users size={sz} className={cls} />;
    case 'activity': return <Activity size={sz} className={cls} />;
    case 'bell':     return <Bell size={sz} className={cls} />;
    case 'cpu':      return <Cpu size={sz} className={cls} />;
    default:         return <Zap size={sz} className={cls} />;
  }
};

/* ─── Button icon map ────────────────────────────────────── */
const BtnIcon = ({ name }: { name: string }) => {
  const sz = 16;
  switch (name) {
    case 'image':      return <ImageIcon size={sz} />;
    case 'book':       return <BookOpen size={sz} />;
    case 'git-branch': return <GitBranch size={sz} />;
    default:           return <ExternalLink size={sz} />;
  }
};

/* ─── Lightbox ───────────────────────────────────────────── */
function Lightbox({
  images, index, onClose, onPrev, onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-10 p-3 bg-white/10 hover:bg-accent hover:text-background text-white rounded-full transition-colors backdrop-blur"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.2 }}
        className="relative max-w-5xl w-full flex flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.caption}
          className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
          loading="lazy"
        />
        {img.caption && (
          <p className="text-white/80 text-sm text-center bg-black/40 rounded-full py-1 px-4 backdrop-blur">
            {img.caption}
          </p>
        )}
        <p className="text-white/40 text-xs font-mono">{index + 1} / {images.length}</p>
      </motion.div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-10 p-3 bg-white/10 hover:bg-accent hover:text-background text-white rounded-full transition-colors backdrop-blur"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-accent hover:text-background text-white rounded-full transition-colors"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>
    </motion.div>
  );
}

/* ─── Gallery ────────────────────────────────────────────── */
function Gallery({ images, onOpenLightbox }: {
  images: GalleryImage[];
  onOpenLightbox: (index: number) => void;
}) {
  if (images.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-14 border-2 border-dashed border-borderCmp rounded-xl text-textMuted gap-3">
        <ImageIcon size={40} className="opacity-30" />
        <p className="text-sm font-medium">Gallery images coming soon</p>
        <p className="text-xs text-center max-w-xs opacity-70 leading-relaxed">
          Place your thesis photos inside{' '}
          <code className="font-mono text-accent bg-accent/10 px-1.5 py-0.5 rounded">
            public/projects/smart-drainage/
          </code>{' '}
          and add entries to the{' '}
          <code className="font-mono text-secondaryAccent">galleryImages</code> array in{' '}
          <code className="font-mono text-secondaryAccent">constants/index.ts</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl border border-borderCmp"
          onClick={() => onOpenLightbox(i)}
        >
          <img
            src={img.src}
            alt={img.caption}
            loading="lazy"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              img.orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-[4/3]'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            {img.caption && (
              <p className="text-xs text-white/90 font-medium leading-snug line-clamp-2">{img.caption}</p>
            )}
          </div>
          <div className="absolute top-2 right-2 p-1.5 bg-black/40 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ImageIcon size={12} className="text-white" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Timeline ───────────────────────────────────────────── */
function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative flex flex-col gap-0">
      {steps.map((s, i) => (
        <motion.div
          key={s.step}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="flex gap-4 group"
        >
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full border-2 border-accent bg-background flex items-center justify-center flex-shrink-0 z-10 group-hover:bg-accent transition-colors duration-200">
              <span className="text-accent group-hover:text-background text-xs font-bold transition-colors duration-200">{i + 1}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-0.5 flex-1 bg-borderCmp my-1 min-h-[24px]" />
            )}
          </div>
          <div className={`pb-4 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
            <p className="text-sm font-semibold text-textMain group-hover:text-accent transition-colors">{s.step}</p>
            <p className="text-xs text-textMuted mt-0.5 leading-snug">{s.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main Modal ─────────────────────────────────────────── */
export default function FeaturedProjectModal({ project, onClose }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = project.galleryImages ?? [];

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = useCallback(() =>
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : 0)),
  [images.length]);
  const nextImage = useCallback(() =>
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0)),
  [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, lightboxIndex]);

  const scrollToGallery = () => {
    setTimeout(() => {
      document.getElementById('gallery-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
  };

  return (
    <>
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />

      {/* Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl bg-card border border-borderCmp rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Top glow */}
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent z-10" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-30 p-2 bg-background/60 backdrop-blur text-textMain rounded-full hover:bg-accent hover:text-background transition-colors"
        >
          <X size={20} />
        </button>

        {/* Hero banner */}
        <div className="w-full relative flex-shrink-0 overflow-hidden" style={{ height: '260px' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            {project.categoryBadge && (
              <div className="flex flex-wrap gap-2 mb-2">
                {project.categoryBadge.split('•').map((b) => (
                  <span key={b} className="text-[11px] font-mono text-accent bg-accent/15 border border-accent/30 px-2.5 py-0.5 rounded-full">
                    {b.trim()}
                  </span>
                ))}
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-textMain leading-tight">{project.title}</h2>
            {project.subtitle && (
              <p className="text-secondaryAccent font-mono text-sm mt-1">{project.subtitle}</p>
            )}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-grow px-6 md:px-8 py-7 space-y-10">

          {/* Stats Cards */}
          {project.stats && project.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {project.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-4 rounded-xl border border-borderCmp bg-background/40 hover:border-accent/50 hover:bg-accent/5 transition-colors duration-200 group"
                >
                  <div className="mb-2 p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <StatIcon name={stat.icon} />
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-textMain font-mono">{stat.value}</p>
                  <p className="text-xs text-textMuted mt-0.5 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <motion.div
            custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-background border border-borderCmp rounded-lg hover:border-accent hover:text-accent transition-colors font-medium text-sm"
            >
              <Github size={16} /> View Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-accent text-background rounded-lg hover:bg-accent/90 transition-colors font-medium text-sm"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
            {project.buttons?.map((btn) =>
              btn.action === 'gallery' ? (
                <button
                  key={btn.label}
                  onClick={scrollToGallery}
                  className="flex items-center gap-2 px-4 py-2.5 bg-background border border-secondaryAccent/40 text-secondaryAccent rounded-lg hover:bg-secondaryAccent/10 transition-colors font-medium text-sm"
                >
                  <BtnIcon name={btn.icon} /> {btn.label}
                </button>
              ) : (
                <a
                  key={btn.label}
                  href={btn.href ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-background border border-borderCmp rounded-lg hover:border-secondaryAccent/50 hover:text-secondaryAccent transition-colors font-medium text-sm"
                >
                  <BtnIcon name={btn.icon} /> {btn.label}
                </a>
              )
            )}
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* LEFT col */}
            <div className="lg:col-span-2 space-y-8">

              {/* Overview */}
              <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-3 border-b border-borderCmp pb-2">
                  <Wifi size={15} className="text-accent" /> Overview
                </h3>
                <p className="text-textMuted leading-relaxed text-sm">{project.overview}</p>
              </motion.div>

              {/* Key Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-3 border-b border-borderCmp pb-2">
                    <Star size={15} className="text-accent" /> Key Highlights
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-textMuted text-sm">
                        <CheckCircle2 size={13} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Achievements */}
              {project.achievements && project.achievements.length > 0 && (
                <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-3 border-b border-borderCmp pb-2">
                    <Trophy size={15} className="text-accent" /> Achievements
                  </h3>
                  <ul className="space-y-2">
                    {project.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-textMuted text-sm">
                        <ArrowRight size={13} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* RIGHT col */}
            <div className="space-y-8">

              {/* Technologies */}
              <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-3 border-b border-borderCmp pb-2">
                  <Code2 size={15} className="text-accent" /> Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-secondaryAccent bg-secondaryAccent/10 border border-secondaryAccent/20 px-2.5 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Role */}
              {project.role && project.role.length > 0 && (
                <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-3 border-b border-borderCmp pb-2">
                    <User size={15} className="text-accent" /> My Role
                  </h3>
                  <ul className="space-y-2">
                    {project.role.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-textMuted text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* System Features Timeline */}
              {project.timeline && project.timeline.length > 0 && (
                <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-4 border-b border-borderCmp pb-2">
                    <Layers size={15} className="text-accent" /> System Features
                  </h3>
                  <Timeline steps={project.timeline} />
                </motion.div>
              )}
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
            id="gallery-section"
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-base font-semibold text-textMain mb-4 border-b border-borderCmp pb-2">
              <ImageIcon size={15} className="text-accent flex-shrink-0" />
              Project Gallery
              {images.length > 0 && (
                <span className="ml-auto text-xs font-mono text-textMuted">{images.length} images</span>
              )}
            </h3>
            <Gallery images={images} onOpenLightbox={openLightbox} />
          </motion.div>

          {/* Project Description Card */}
          {project.projectDescription && (
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-accent/5 via-background to-secondaryAccent/5 p-6"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondaryAccent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-accent/15 flex-shrink-0 mt-0.5">
                  <Cpu size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-mono text-accent mb-1 uppercase tracking-widest">Project Context</p>
                  <p className="text-textMuted text-sm leading-relaxed">{project.projectDescription}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  );
}
