import { FacebookIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center border-t border-border/50 mt-12">
      <p className="text-textMuted font-mono text-sm">
        <span className="text-accent">&gt;</span> Built by Mark Jun W. Dominguez
      </p>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={() => window.open('https://www.facebook.com/mjchoichoi.dominguezjr.1', '_blank', 'noopener,noreferrer')}
          aria-label="Facebook Profile"
          className="group p-2 rounded-full border border-borderCmp text-textMuted hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-200 cursor-pointer"
        >
          <FacebookIcon size={18} className="group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>

      <p className="text-textMuted text-xs mt-4 opacity-70">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}