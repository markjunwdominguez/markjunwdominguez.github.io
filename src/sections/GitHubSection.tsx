import { motion } from 'framer-motion';
import { Activity, Code2 } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

const topLanguages = [
  { name: 'TypeScript', percent: 38, color: '#3178c6' },
  { name: 'JavaScript', percent: 22, color: '#f1e05a' },
  { name: 'CSS',        percent: 16, color: '#563d7c' },
  { name: 'HTML',       percent: 10, color: '#e34c26' },
  { name: 'PHP',        percent:  7, color: '#4f5b93' },
  { name: 'Python',     percent:  4, color: '#3572A5' },
  { name: 'C++',        percent:  3, color: '#f34b7d' },
];

export default function GitHubSection() {
  const githubUsername   = 'markjunwdominguez';
  const githubRepoUrl    = 'https://github.com/markjunwdominguez/markjunwdominguez.github.io';

  return (
    <section id="github" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Section heading — only the title is a link */}
        <div className="flex items-center gap-4 mb-12">
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="group">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain group-hover:text-accent transition-colors">
              <span className="text-accent">#</span> GitHub_Activity
            </h2>
          </a>
          <div className="h-[1px] flex-1 bg-border/50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Top Languages (custom hardcoded) ── */}
          <ScrollReveal direction="left" delay={0.1}>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
              className="border border-border bg-card p-6 rounded-lg relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textMain">Top Languages</h3>
                  <p className="text-sm text-textMuted">Languages used across my projects</p>
                </div>
              </div>

              {/* Language bars */}
              <div className="space-y-3">
                {topLanguages.map((lang, i) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-mono text-textMain flex items-center gap-2">
                        <span
                          className="inline-block w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: lang.color }}
                        />
                        {lang.name}
                      </span>
                      <span className="text-xs text-textMuted font-mono">{lang.percent}%</span>
                    </div>
                    <div className="h-2 bg-border/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: lang.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.07, ease: 'easeOut' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Colour legend strip */}
              <div className="mt-5 flex gap-1 h-2 rounded-full overflow-hidden">
                {topLanguages.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full rounded-full"
                    style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                    title={`${lang.name} ${lang.percent}%`}
                  />
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* ── GitHub Stats (API, no link wrapper) ── */}
          <ScrollReveal direction="right" delay={0.1}>
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
              className="border border-border bg-card p-6 rounded-lg relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16" />

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg text-accent">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-textMain">GitHub Stats</h3>
                  <p className="text-sm text-textMuted">Overall contribution summary</p>
                </div>
              </div>

              <div className="w-full flex justify-center bg-background/50 rounded-lg p-4 border border-border/50">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00ff88&icon_color=00ff88&text_color=a0aec0&include_all_commits=true&count_private=true`}
                  alt="GitHub Stats"
                  className="w-full max-w-sm"
                />
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* ── Contribution Streak (no link) ── */}
        <ScrollReveal direction="up" delay={0.2}>
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
            className="border border-border bg-card p-6 rounded-lg relative overflow-hidden mt-6"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textMain">Contribution Streak</h3>
                <p className="text-sm text-textMuted">Daily commit activity</p>
              </div>
            </div>
            <div className="w-full flex justify-center bg-background/50 rounded-lg p-4 border border-border/50">
              <img
                src={`https://streak-stats.demolab.com/?user=${githubUsername}&theme=tokyonight&hide_border=true&background=0d1117&ring=00ff88&fire=00ff88&currStreakLabel=00ff88`}
                alt="GitHub Streak"
                className="w-full max-w-2xl"
              />
            </div>
          </motion.div>
        </ScrollReveal>

      </motion.div>
    </section>
  );
}