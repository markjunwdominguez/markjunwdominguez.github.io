import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { profileData } from '../constants';

// Safe syntax highlighter — processes line by line to avoid regex interference
function highlight(code: string): string {
  return code.split('\n').map(line => {
    // 1. Escape HTML special characters first
    let l = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 2. String values → cyan/teal
    l = l.replace(/"([^"]*)"/g, '<span style="color:#8be9fd">"$1"</span>');

    // 3. Property keys → pink
    l = l.replace(/\b(name|role|location|status|education|traits|experience|company|period|focus|currentlyLearning|loves):/g,
      '<span style="color:#ff79c6">$1:</span>');

    // 4. "const" keyword → bright red
    l = l.replace(/\bconst\b/g, '<span style="color:#ff4444">const</span>');

    // 5. "developer" variable → dark blue (cornflower)
    l = l.replace(/\bdeveloper\b/g, '<span style="color:#6495ed">developer</span>');

    // 6. "=" assignment → red
    l = l.replace(/ = /g, ' <span style="color:#ff2255">=</span> ');

    // 7. Brackets → soft white
    l = l.replace(/([{}[\]])/g, '<span style="color:#e6edf3">$1</span>');

    // 8. Semicolon → pink
    l = l.replace(/;/g, '<span style="color:#ff79c6">;</span>');

    return l;
  }).join('\n');
}

export default function About() {
  const codeString = `const developer = {
  name: "${profileData.name}",
  role: "${profileData.role}",
  location: "${profileData.location}",
  status: "${profileData.status}",
  education: "${profileData.education}",
  traits: [
${profileData.traits.map(trait => `    "${trait}"`).join(',\n')}
  ],
  experience: [
${profileData.experience.map(exp => `    {
      role: "${exp.role}",
      company: "${exp.company}",
      period: "${exp.period}",
      focus: "${exp.focus}"
    }`).join(',\n')}
  ],
  currentlyLearning: [
${profileData.currentlyLearning.map(skill => `    "${skill}"`).join(',\n')}
  ],
  loves: [
${profileData.loves.map(love => `    "${love}"`).join(',\n')}
  ]
};`;

  return (
    <section id="about" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <h2 className="text-3xl font-bold text-textMain mb-2 flex items-center gap-2">
          <span className="text-accent font-mono text-xl">01.</span> About Me
        </h2>
        <div className="h-1 w-20 bg-borderCmp rounded">
          <div className="h-full w-1/2 bg-accent rounded"></div>
        </div>
      </motion.div>

      <ScrollReveal direction="left" delay={0.15}>
        <div className="glass-panel overflow-hidden">
          {/* Editor Header */}
          <div className="flex items-center px-4 py-2 bg-[#0d1117] border-b border-borderCmp">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-sm font-mono text-textMuted flex justify-center items-center gap-2">
                profile.ts
              </span>
            </div>
          </div>

          {/* Editor Body */}
          <div className="flex flex-col md:flex-row bg-[#161B22]">
            {/* Line Numbers */}
            <div className="hidden md:flex flex-col text-right px-4 py-4 border-r border-borderCmp text-textMuted font-mono text-sm opacity-40 select-none leading-relaxed">
              {codeString.split('\n').map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>

            {/* Code Area */}
            <div className="p-4 overflow-x-auto w-full">
              <pre className="font-mono text-sm md:text-base leading-relaxed">
                <code dangerouslySetInnerHTML={{ __html: highlight(codeString) }} />
              </pre>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

