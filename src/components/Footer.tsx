import React from 'react';
import { SOCIAL_LINKS, PROFILE_DATA } from '../data/portfolioData';
import {
  Terminal,
  ArrowUp,
  Github,
  Linkedin,
  Code2,
  Mail,
  Shield,
  Heart,
} from 'lucide-react';

const SOCIAL_ICON_MAP: Record<string, React.ReactNode> = {
  Github: <Github className="w-4 h-4" />,
  Linkedin: <Linkedin className="w-4 h-4" />,
  Code: <Code2 className="w-4 h-4" />,
  Mail: <Mail className="w-4 h-4" />,
};

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050505] py-12 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0c0c0c] border border-[#00FF41]/30 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-[#00FF41]" />
            </div>
            <span className="font-['JetBrains_Mono',monospace] font-bold text-sm tracking-wider text-white">
              &lt;ADARSH<span className="text-[#00FF41]">/&gt;</span>
            </span>
          </div>

          <span className="text-white/20 hidden sm:inline">|</span>

          <p className="text-xs text-white/50 font-mono">
            &copy; 2026 Adarsh. Built with curiosity, code &amp; continuous learning.
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                title={link.name}
                className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 text-white/60 hover:text-[#00FF41] hover:border-[#00FF41]/40 flex items-center justify-center transition-all cursor-pointer"
              >
                {SOCIAL_ICON_MAP[link.iconName]}
              </a>
            ))}
          </div>

          <div className="w-[1px] h-6 bg-white/10" />

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            title="Scroll to Top"
            className="p-2 rounded-lg bg-white/[0.03] border border-white/10 hover:border-[#00FF41]/40 text-white/60 hover:text-[#00FF41] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* System Status Ticker */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-white/40 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
          <span>PORTFOLIO_SYSTEM // GLA_CSE_MATHURA</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LATENCY: 12ms</span>
          <span>•</span>
          <span>SECURITY: HARDENED</span>
        </div>
      </div>
    </footer>
  );
};
