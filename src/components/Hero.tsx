import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ProfileImage } from './ProfileImage';
import { ShieldCheck, ArrowRight, Mail, Terminal, Lock, Cpu, GraduationCap } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full text-center space-y-7">
        {/* Circular Profile Avatar with Glowing Cyber Ring */}
        <div className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center group">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-[#00FF41]/20 blur-xl pointer-events-none group-hover:bg-[#00FF41]/30 transition-all" />

          {/* Orbiting / Dashed Cyber Ring */}
          <div className="absolute -inset-2 rounded-full border border-[#00FF41]/30 border-dashed animate-[spin_24s_linear_infinite] pointer-events-none" />

          {/* Inner Glowing Gradient Frame */}
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-b from-[#00FF41] via-[#00FF41]/40 to-transparent shadow-[0_0_35px_rgba(0,255,65,0.3)]">
            <ProfileImage alt={PROFILE_DATA.name} size="lg" />
          </div>

          {/* Status Badge */}
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 px-2.5 py-0.5 rounded-full bg-[#080808] border border-[#00FF41]/60 shadow-[0_0_10px_rgba(0,255,65,0.2)] flex items-center gap-1.5 text-[10px] font-mono text-[#00FF41]">
            <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" />
            <span className="font-semibold tracking-wider">AVAILABLE</span>
          </div>
        </div>

        {/* Cyber Security Pill / Status Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(0,255,65,0.15)]">
          <ShieldCheck className="w-4 h-4 text-[#00FF41] animate-pulse" />
          <span>[ STATUS: 2ND_YEAR_CSE // CYBERSECURITY_&amp;_JAVA_DSA ]</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41]" />
        </div>

        {/* Main Hero Typography */}
        <div className="space-y-3.5 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I&apos;m <span className="text-[#00FF41] drop-shadow-[0_0_25px_rgba(0,255,65,0.3)]">{PROFILE_DATA.name}</span>.
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base sm:text-xl font-medium text-white/80 font-sans tracking-tight">
            <span className="text-white">B.Tech CSE Student</span>
            <span className="text-[#00FF41]">•</span>
            <span className="text-[#00FF41] font-semibold">Cybersecurity Enthusiast</span>
            <span className="text-[#00FF41]">•</span>
            <span className="text-white/90">Java Developer</span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal pt-1">
            {PROFILE_DATA.heroBio}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => scrollTo('#education')}
            id="hero-btn-education"
            className="bg-[#00FF41] text-[#050505] px-7 py-3.5 rounded-lg font-bold text-sm hover:bg-[#00dd39] transition-all shadow-[0_0_25px_rgba(0,255,65,0.35)] flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4 text-[#050505]" />
            <span>View Education</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo('#skills')}
            id="hero-btn-skills"
            className="border border-white/20 hover:border-[#00FF41]/50 px-6 py-3.5 rounded-lg font-bold text-sm text-white transition-all backdrop-blur-md hover:bg-white/5 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Terminal className="w-4 h-4 text-[#00FF41]" />
            <span>Technical Skills</span>
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            id="hero-btn-contact"
            className="border border-white/10 hover:border-white/30 px-6 py-3.5 rounded-lg font-bold text-sm text-white/80 hover:text-white transition-all backdrop-blur-md hover:bg-white/5 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4 text-[#00FF41]" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Key Facts HUD Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 max-w-3xl mx-auto">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-between backdrop-blur-sm hover:border-[#00FF41]/40 transition-colors text-center">
            <div className="text-xs font-mono text-[#00FF41] uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <GraduationCap className="w-4 h-4 text-[#00FF41]" />
              <span>University</span>
            </div>
            <div className="font-bold text-white text-sm sm:text-base">
              GLA University
            </div>
            <div className="text-xs text-white/50 font-mono mt-1">Mathura • 2nd Year B.Tech</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-between backdrop-blur-sm hover:border-[#00FF41]/40 transition-colors text-center">
            <div className="text-xs font-mono text-[#00FF41] uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Lock className="w-4 h-4 text-[#00FF41]" />
              <span>Specialization</span>
            </div>
            <div className="font-bold text-white text-sm sm:text-base">
              Cybersecurity
            </div>
            <div className="text-xs text-white/50 font-mono mt-1">Ethical Hacking &amp; Networks</div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-between backdrop-blur-sm hover:border-[#00FF41]/40 transition-colors text-center">
            <div className="text-xs font-mono text-[#00FF41] uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Cpu className="w-4 h-4 text-[#00FF41]" />
              <span>Programming</span>
            </div>
            <div className="font-bold text-white text-sm sm:text-base">
              Java &amp; Algorithms
            </div>
            <div className="text-xs text-white/50 font-mono mt-1">DSA &amp; Problem Solving</div>
          </div>
        </div>
      </div>
    </section>
  );
};
