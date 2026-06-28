import { motion } from 'framer-motion';
import { skillsList } from '../constants';
import { Code2, Layers, Wrench, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-textMain mb-2 flex items-center gap-2">
          <span className="text-accent font-mono text-xl">02.</span> Skills & Arsenal
        </h2>
        <div className="h-1 w-20 bg-borderCmp rounded">
          <div className="h-full w-1/2 bg-accent rounded"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Languages */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/10 text-accent rounded-lg">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-semibold">Languages</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skillsList.languages.map((skill) => (
              <motion.span 
                key={skill}
                variants={itemVariants}
                className="px-3 py-1.5 bg-background border border-borderCmp rounded-md text-sm font-medium text-textMain shadow-sm hover:border-accent hover:text-accent transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#58A6FF]/10 text-[#58A6FF] rounded-lg">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-semibold">Frameworks</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skillsList.frameworks.map((skill) => (
              <motion.span 
                key={skill}
                variants={itemVariants}
                className="px-3 py-1.5 bg-background border border-borderCmp rounded-md text-sm font-medium text-textMain shadow-sm hover:border-[#58A6FF] hover:text-[#58A6FF] transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#ff7b72]/10 text-[#ff7b72] rounded-lg">
              <Wrench size={24} />
            </div>
            <h3 className="text-xl font-semibold">Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skillsList.tools.map((skill) => (
              <motion.span 
                key={skill}
                variants={itemVariants}
                className="px-3 py-1.5 bg-background border border-borderCmp rounded-md text-sm font-medium text-textMain shadow-sm hover:border-[#ff7b72] hover:text-[#ff7b72] transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* AI Tools */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass-panel p-6 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-[#d2a8ff]/10 text-[#d2a8ff] rounded-lg">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-semibold">AI Stack</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skillsList.ai.map((skill) => (
              <motion.span 
                key={skill}
                variants={itemVariants}
                className="px-3 py-1.5 bg-background border border-borderCmp rounded-md text-sm font-medium text-textMain shadow-sm hover:border-[#d2a8ff] hover:text-[#d2a8ff] transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}