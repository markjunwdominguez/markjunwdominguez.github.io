import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

export default function GitHubSection() {
  const githubUsername = "markjunwdominguez";
  const githubRepoUrl = "https://github.com/markjunwdominguez/markjunwdominguez.github.io";
  
  return (
    <section id="github" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="group">
            <h2 className="text-3xl md:text-4xl font-bold text-textMain group-hover:text-accent transition-colors">
              <span className="text-accent">#</span> GitHub_Activity
            </h2>
          </a>
          <div className="h-[1px] flex-1 bg-border/50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Languages Card */}
          <ScrollReveal direction="left" delay={0.1}>
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
            className="border border-border bg-card p-6 rounded-lg relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-accent/10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">Top Languages</h3>
                <p className="text-sm text-textMuted">Most used languages in my repositories</p>
              </div>
            </div>
            <div className="w-full flex justify-center bg-background/50 rounded-lg p-4 border border-border/50">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00ff88&text_color=a0aec0&langs_count=8`} 
                alt="Top Languages" 
                className="w-full max-w-sm"
              />
            </div>
          </motion.div>
          </a>
          </ScrollReveal>

          {/* GitHub Stats Card */}
          <ScrollReveal direction="right" delay={0.1}>
          <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
          <motion.div 
            whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
            className="border border-border bg-card p-6 rounded-lg relative overflow-hidden group h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-accent/10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-lg text-accent">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">GitHub Stats</h3>
                <p className="text-sm text-textMuted">Overall statistics & contributions</p>
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
          </a>
          </ScrollReveal>
        </div>

        {/* Contribution Streak */}
        <ScrollReveal direction="up" delay={0.2}>
        <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="block mt-6">
        <motion.div
          whileHover={{ y: -5, boxShadow: '0 0 20px rgba(0,255,136,0.15)' }}
          className="border border-border bg-card p-6 rounded-lg relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -mr-24 -mt-24 transition-all group-hover:bg-accent/10"></div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-accent/10 rounded-lg text-accent">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-textMain group-hover:text-accent transition-colors">Contribution Streak</h3>
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
        </a>
        </ScrollReveal>

      </motion.div>
    </section>
  );
}