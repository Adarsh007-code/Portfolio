import React from 'react';
import { LEARNING_TRACKS } from '../data/portfolioData';
import { Compass, ShieldAlert, Code2, Lock, CheckCircle2, Flame } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-6 h-6 text-[#00FF41]" />,
  Code2: <Code2 className="w-6 h-6 text-[#00FF41]" />,
  Lock: <Lock className="w-6 h-6 text-[#00FF41]" />,
};

export const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>[ ROADMAP: CURRENT_EXPLORATION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Currently <span className="text-[#00FF41]">Exploring</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            My primary learning tracks as a 2nd-year CS student. Actively dedicating focused hours to offensive/defensive security concepts and algorithmic problem solving.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LEARNING_TRACKS.map((track) => {
            return (
              <div
                key={track.id}
                className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden transition-all duration-300 group flex flex-col justify-between space-y-6 hover:bg-white/[0.05] hover:border-[#00FF41]/40 transform hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                {/* Top Subtle Light Accent */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#00FF41] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Track Header */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-[#00FF41]/30 bg-[#00FF41]/10">
                      {ICON_MAP[track.iconName]}
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium border border-[#00FF41]/30 bg-[#00FF41]/10 text-[#00FF41] flex items-center gap-1.5">
                      <Flame className="w-3 h-3 animate-pulse" />
                      {track.status}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div>
                    <h3 className="text-2xl font-bold text-white font-['Outfit',sans-serif] group-hover:text-[#00FF41] transition-colors">
                      {track.title}
                    </h3>
                    <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
                      {track.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-sm leading-relaxed">
                    {track.description}
                  </p>

                  {/* Focus Areas Checklist */}
                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <div className="text-xs font-mono text-white/40 font-semibold uppercase tracking-wider mb-2">
                      Key Learning Topics:
                    </div>
                    {track.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-white/80">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#00FF41]" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Concepts & Tools Footer */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="text-[11px] font-mono text-white/40 uppercase tracking-wider">
                    Core Concepts:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {track.toolsAndConcepts.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded bg-white/[0.02] border border-white/10 text-[11px] font-mono text-white/60 group-hover:text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
