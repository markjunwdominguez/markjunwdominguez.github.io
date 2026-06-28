import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { profileData, skillsList } from '../constants';

interface TerminalModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function TerminalModal({ isOpen, onOpenChange }: TerminalModalProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{type: 'input'|'output', text: string}[]>([
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with Ctrl+`
      if (e.ctrlKey && e.key === '`') {
        onOpenChange(!isOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().toLowerCase().split(' ');
    const command = args[0];

    setHistory(prev => [...prev, { type: 'input', text: cmd }]);

    let output = '';
    switch (command) {
      case 'help':
        output = 'Available commands: about, techstack, skills, clear, echo [text], whoami';
        break;
      case 'about':
        output = `${profileData.name} - ${profileData.role}. Status: ${profileData.status}`;
        break;
      case 'techstack':
      case 'skills':
        output = `Languages: ${skillsList.languages.join(', ')}\nFrameworks: ${skillsList.frameworks.join(', ')}\nTools: ${skillsList.tools.join(', ')}`;
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'echo':
        output = args.slice(1).join(' ');
        break;
      case 'whoami':
        output = 'visitor';
        break;
      case '':
        return;
      default:
        output = `Command not found: ${command}. Type "help" for available commands.`;
    }

    setHistory(prev => [...prev, { type: 'output', text: output }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <>
      <button 
        onClick={() => onOpenChange(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-card border border-border text-accent rounded-full shadow-lg hover:border-accent hover:shadow-[0_0_15px_rgba(var(--color-accent),0.3)] transition-all group"
        title="Open Terminal (Ctrl + `)"
      >
        <TerminalIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className={`fixed z-50 bg-background/95 backdrop-blur-xl border border-border shadow-2xl flex flex-col overflow-hidden ${
              isMaximized 
                ? 'inset-4 rounded-xl' 
                : 'bottom-24 right-6 w-[400px] h-[500px] rounded-lg'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-card border-b border-border/50">
              <div className="flex items-center gap-2 text-textMuted font-mono text-sm">
                <TerminalIcon className="w-4 h-4" />
                <span>guest@portfolio:~</span>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1 hover:bg-border/50 rounded text-textMuted hover:text-textMain transition-colors"
                >
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => onOpenChange(false)}
                  className="p-1 hover:bg-red-500/20 rounded text-textMuted hover:text-red-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div 
              className="flex-1 p-4 overflow-y-auto font-mono text-sm"
              onClick={() => inputRef.current?.focus()}
            >
              <div className="text-accent mb-4">
                <pre className="font-mono text-xs hidden sm:block">
{`   _  _         _         
  | || |__ _ __| |_____ _ _ 
  | __ / _\` / _| / / -_) '_|
  |_||_\\__,_\\__|_\\_\\___|_|  
`}
                </pre>
                <p>Welcome to the interactive portfolio terminal.</p>
                <p className="text-textMuted">Type 'help' to see available commands.</p>
              </div>

              {history.map((line, i) => (
                <div key={i} className="mb-2">
                  {line.type === 'input' ? (
                    <div className="flex gap-2 text-textMuted">
                      <span className="text-accent">➜</span>
                      <span>~</span>
                      <span className="text-textMain">{line.text}</span>
                    </div>
                  ) : (
                    <div className="text-textMuted whitespace-pre-wrap">{line.text}</div>
                  )}
                </div>
              ))}

              <form onSubmit={onSubmit} className="flex gap-2 mt-2">
                <span className="text-accent">➜</span>
                <span className="text-textMuted">~</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-textMain placeholder-textMuted/30"
                  spellCheck={false}
                  autoComplete="off"
                  autoFocus
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}