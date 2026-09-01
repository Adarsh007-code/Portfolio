import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../data/portfolioData';
import { Menu, X, Shield, Terminal, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 text-white transition-colors"
          id="nav-logo"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0c0c0c] border border-[#00FF41]/40 flex items-center justify-center group-hover:border-[#00FF41] group-hover:shadow-[0_0_12px_rgba(0,255,65,0.3)] transition-all">
            <Terminal className="w-4 h-4 text-[#00FF41]" />
          </div>
          <div className="flex flex-col">
            <span className="font-['JetBrains_Mono',monospace] font-bold text-base tracking-wider flex items-center gap-0.5 text-white">
              <span className="text-[#00FF41]">&lt;</span>ADARSH<span className="text-[#00FF41]">/&gt;</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase -mt-0.5">
              SEC // DEV
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                id={`nav-link-${item.id}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
                  isActive
                    ? 'text-[#00FF41] font-semibold bg-[#00FF41]/10 border border-[#00FF41]/30 shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Status Indicator & Quick Contact Action */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-white/60 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse shadow-[0_0_8px_#00FF41]" />
            <span className="text-white/80">2nd Year B.Tech</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            id="nav-cta-contact"
            className="px-3.5 py-1.5 rounded-lg bg-[#00FF41]/10 hover:bg-[#00FF41]/20 border border-[#00FF41]/40 hover:border-[#00FF41] text-[#00FF41] text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,255,65,0.15)]"
          >
            <Shield className="w-3.5 h-3.5 text-[#00FF41]" />
            <span>Connect</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-[#0c0c0c]/95 backdrop-blur-xl border border-white/10 shadow-2xl transition-all"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse shadow-[0_0_6px_#00FF41]" />
              <span className="text-xs font-mono text-[#00FF41] font-medium">
                CYBER // DEV PORTFOLIO
              </span>
            </div>
            <span className="text-[11px] font-mono text-white/40">GLA University</span>
          </div>

          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  id={`mobile-nav-${item.id}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#00FF41]/15 text-[#00FF41] border border-[#00FF41]/30 font-semibold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full py-2.5 rounded-lg bg-[#00FF41] text-[#050505] text-center text-xs font-mono font-bold hover:bg-[#00dd39] transition-all shadow-[0_0_15px_rgba(0,255,65,0.3)]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
