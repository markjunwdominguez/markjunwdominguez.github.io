import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
// ─── Web3Forms Config ──────────────────────────────────────────────────────────
// 1. Go to https://web3forms.com/
// 2. Enter your email (markjunwdominguez@gmail.com) to receive an Access Key
// 3. Paste the Access Key below
const WEB3FORMS_ACCESS_KEY = '862a9101-2a3b-44cd-87f9-cb531c592192';

export const OWNER_GMAIL = 'markjunwdominguez@gmail.com';
// ──────────────────────────────────────────────────────────────────────────────

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('sending');
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => { setStatus('idle'); onClose(); }, 2500);
      } else {
        throw new Error("Failed to send");
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="w-full max-w-lg bg-card border border-borderCmp rounded-2xl shadow-2xl pointer-events-auto overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-borderCmp">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-textMain">Send a Message</h2>
                    <p className="text-xs text-textMuted font-mono">→ {OWNER_GMAIL}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg text-textMuted hover:text-textMain hover:bg-borderCmp transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <form ref={formRef} onSubmit={handleSubmit} className="px-6 py-6 flex flex-col gap-4">

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-background border border-borderCmp rounded-lg text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-background border border-borderCmp rounded-lg text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hey Mark, I'd love to connect..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-borderCmp rounded-lg text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors text-sm resize-none"
                  />
                </div>

                {/* Status feedback */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-2.5"
                    >
                      <CheckCircle size={16} />
                      Message sent! Mark will get back to you soon.
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2.5"
                    >
                      <AlertCircle size={16} />
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-background font-bold rounded-xl hover:bg-accent/90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed text-sm"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" /> Sending...</>
                  ) : status === 'success' ? (
                    <><CheckCircle size={16} /> Sent!</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
