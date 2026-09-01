import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';
import {
  Code,
  Cpu,
  FileCode,
  Palette,
  Binary,
  Boxes,
  Zap,
  Shield,
  Terminal,
  Network,
  HardDrive,
  CheckCircle,
  Filter,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-[#00FF41]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#00FF41]" />,
  FileCode: <FileCode className="w-5 h-5 text-[#00FF41]" />,
  Palette: <Palette className="w-5 h-5 text-[#00FF41]" />,
  Binary: <Binary className="w-5 h-5 text-[#00FF41]" />,
  Boxes: <Boxes className="w-5 h-5 text-[#00FF41]" />,
  Zap: <Zap className="w-5 h-5 text-[#00FF41]" />,
  Shield: <Shield className="w-5 h-5 text-[#00FF41]" />,
  Terminal: <Terminal className="w-5 h-5 text-[#00FF41]" />,
  Network: <Network className="w-5 h-5 text-[#00FF41]" />,
  HardDrive: <HardDrive className="w-5 h-5 text-[#00FF41]" />,
};

type CategoryFilter = 'All' | 'Programming' | 'Web Development' | 'Computer Science' | 'Cybersecurity';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Programming',
    'Web Development',
    'Computer Science',
    'Cybersecurity',
  ];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  const getStatusBadge = (status: SkillItem['status']) => {
    switch (status) {
      case 'Active Practice':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#00FF41]/15 text-[#00FF41] border border-[#00FF41]/30">
            Active Practice
          </span>
        );
      case 'Core':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/10 text-white border border-white/20">
            Core Concept
          </span>
        );
      case 'Foundations':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-white/5 text-white/70 border border-white/10">
            Foundations
          </span>
        );
      case 'Exploring':
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#00FF41]/10 text-[#00FF41] border border-[#00FF41]/20">
            Currently Learning
          </span>
        );
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <Code className="w-3.5 h-3.5" />
            <span>[ STACK: TECHNICAL_SKILLS ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Skills &amp; Technical <span className="text-[#00FF41]">Toolkit</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base">
            Honest mapping of programming languages, computer science foundations, and cybersecurity concepts I know or am actively learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-[#00FF41] text-[#050505] font-bold shadow-[0_0_15px_rgba(0,255,65,0.3)]'
                  : 'bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
              <span>{cat}</span>
              <span className="text-[10px] opacity-75 ml-1">
                ({cat === 'All' ? SKILLS_DATA.length : SKILLS_DATA.filter((s) => s.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-[#00FF41]/40 hover:bg-white/[0.05] transition-all duration-300 group flex flex-col justify-between space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] transform hover:-translate-y-1"
            >
              <div className="space-y-3">
                {/* Header with Icon & Category */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0c0c0c] border border-white/10 flex items-center justify-center group-hover:border-[#00FF41]/40 group-hover:bg-[#00FF41]/5 transition-colors">
                    {ICON_MAP[skill.iconName] || <Code className="w-5 h-5 text-[#00FF41]" />}
                  </div>
                  {getStatusBadge(skill.status)}
                </div>

                {/* Skill Name & Level */}
                <div>
                  <h3 className="text-lg font-bold text-white font-['Outfit',sans-serif] group-hover:text-[#00FF41] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-white/40">{skill.category} • {skill.level}</span>
                </div>

                {/* Description */}
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-white/[0.02] border border-white/10 text-[11px] font-mono text-white/50 group-hover:text-white/80 group-hover:border-[#00FF41]/20 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Commitment Footnote */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[#00FF41] shrink-0" />
            <span>Continuous Improvement: Regular Java problem-solving and security lab sessions</span>
          </div>
          <span className="text-[#00FF41] font-medium">Updated 2026</span>
        </div>
      </div>
    </section>
  );
};
