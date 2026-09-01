import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>[ EDUCATION: ACADEMIC_RECORD ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Formal <span className="text-[#00FF41]">Education</span> &amp; Studies
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            Academic degree track, university milestones, and foundational coursework in Computer Science Engineering.
          </p>
        </div>

        {/* Education Timeline & Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-[#00FF41]/40 transition-all duration-300 shadow-xl space-y-8">
            {/* Top glowing bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#00FF41] via-white/40 to-transparent" />

            {/* University & Degree Details Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#0c0c0c] border border-[#00FF41]/30 flex items-center justify-center text-[#00FF41] shrink-0 shadow-[0_0_15px_rgba(0,255,65,0.15)]">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#00FF41] font-semibold uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit',sans-serif]">
                    {PROFILE_DATA.university}
                  </h3>
                  <p className="text-white/70 font-medium text-base">
                    {PROFILE_DATA.degree}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#00FF41] animate-pulse" />
                  Currently: 2nd Year
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <Calendar className="w-3.5 h-3.5 text-[#00FF41]" />
                  <span>2025 – Present</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-white/50">
                  <MapPin className="w-3.5 h-3.5 text-[#00FF41]" />
                  <span>Mathura, Uttar Pradesh</span>
                </div>
              </div>
            </div>

            {/* Coursework & Learning Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-[#00FF41] font-semibold uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Core CS Coursework &amp; Topics
                </div>
                <ul className="space-y-2 text-xs sm:text-[13px] text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Data Structures &amp; Algorithms in Java</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>C Programming &amp; Procedural Foundations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Object-Oriented Programming (OOP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Computer Organization &amp; Memory Basics</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="text-xs font-mono text-[#00FF41] font-semibold uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  Cybersecurity Focus Track
                </div>
                <ul className="space-y-2 text-xs sm:text-[13px] text-white/70">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Cybersecurity Principles &amp; CIA Triad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Networking Fundamentals (TCP/IP, OSI)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Linux Terminal &amp; File System Navigation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00FF41] shrink-0" />
                    <span>Ethical Hacking Methodologies &amp; Lab Audits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* University Footnote */}
            <div className="p-4 rounded-xl bg-[#080808] border border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
              <span className="text-white/80 font-medium">Department of Computer Engineering &amp; Applications</span>
              <span className="text-[#00FF41] font-semibold">GLA University</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
