import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { ProfileImage } from './ProfileImage';
import { User, GraduationCap, MapPin, Calendar, Shield, Code, CheckCircle2, Target, Lightbulb, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>[ IDENTITY: ABOUT_ADARSH ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-['Outfit',sans-serif] text-white tracking-tight">
            Building Foundations in <span className="text-[#00FF41]">Cybersecurity</span> &amp; <span className="text-white/90">Code</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-sm sm:text-base font-normal">
            A dedicated Computer Science undergraduate focused on practical systems knowledge, security ethics, and algorithmic problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Mindset */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm relative overflow-hidden space-y-5">
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00FF41]/40 to-transparent" />

              <h3 className="text-xl font-bold text-white flex items-center gap-2.5 font-['Outfit',sans-serif]">
                <Compass className="w-5 h-5 text-[#00FF41]" />
                Academic &amp; Technical Journey
              </h3>

              <div className="space-y-4 text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  I am currently pursuing my <span className="text-[#00FF41] font-medium">B.Tech in Computer Science</span> at{' '}
                  <span className="text-white font-medium">GLA University, Mathura</span> and am in my second year.
                </p>
                <p>
                  My main area of interest and specialization is <span className="text-[#00FF41] font-medium">Cybersecurity</span>—particularly understanding how operating systems, protocols, and networks function beneath the surface, discovering how vulnerabilities emerge, and learning ethical hacking concepts responsibly.
                </p>
                <p>
                  Alongside cybersecurity, I am actively practicing <span className="text-white font-medium">Data Structures &amp; Algorithms in Java</span>. I tackle algorithmic challenges to sharpen my analytical reasoning, time complexity optimization, and rigorous problem-solving discipline.
                </p>
                <p className="text-white/70 italic border-l-2 border-[#00FF41]/60 pl-3.5 py-1 bg-[#00FF41]/5 rounded-r">
                  &ldquo;I believe in learning by building and continuously improving my technical skills through deliberate daily practice.&rdquo;
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-1.5 hover:border-[#00FF41]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41]">
                    <Target className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-white">Continuous DSA</span>
                  <span className="text-[11px] text-white/40">Java algorithmic problem solving daily</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-1.5 hover:border-[#00FF41]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#00FF41]/10 flex items-center justify-center text-[#00FF41]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-white">Security Ethics</span>
                  <span className="text-[11px] text-white/40">Responsible testing &amp; defense foundations</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col gap-1.5 hover:border-[#00FF41]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/80">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-white">Build-to-Learn</span>
                  <span className="text-[11px] text-white/40">Hands-on coding &amp; lab environments</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0c0c0c] border border-[#00FF41]/30 shadow-[0_0_30px_rgba(0,255,65,0.05)] relative overflow-hidden backdrop-blur-md group transition-all duration-300">
              {/* Top Cyber Badge with Circular Avatar */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/10">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#00FF41] to-[#00FF41]/30 shadow-[0_0_15px_rgba(0,255,65,0.25)] flex items-center justify-center">
                    <ProfileImage alt={PROFILE_DATA.name} size="sm" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#00FF41] border-2 border-[#0c0c0c]" />
                  </div>
                  <div>
                    <h4 className="font-['Outfit',sans-serif] font-bold text-white text-base">
                      {PROFILE_DATA.name}
                    </h4>
                    <span className="text-[11px] font-mono text-white/40">ID: SEC-STUDENT-2025</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-[11px] font-mono font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
                  Active
                </span>
              </div>

              {/* Key Attributes List */}
              <div className="space-y-3.5 text-xs sm:text-[13px] font-mono">
                <div className="flex items-start justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#00FF41]" />
                    Name:
                  </span>
                  <span className="text-white font-semibold">{PROFILE_DATA.name}</span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-[#00FF41]" />
                    Education:
                  </span>
                  <span className="text-white font-semibold">{PROFILE_DATA.degree}</span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#00FF41]" />
                    University:
                  </span>
                  <span className="text-white font-semibold text-right">
                    {PROFILE_DATA.university}
                  </span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#00FF41]" />
                    Year:
                  </span>
                  <span className="text-[#00FF41] font-semibold">{PROFILE_DATA.year}</span>
                </div>

                <div className="flex items-start justify-between py-1.5 border-b border-white/5">
                  <span className="text-white/50 flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5 text-[#00FF41]" />
                    Specialization:
                  </span>
                  <span className="text-white/90 font-semibold">{PROFILE_DATA.specialization}</span>
                </div>

                <div className="flex items-start justify-between pt-1.5">
                  <span className="text-white/50 flex items-center gap-2">
                    <Code className="w-3.5 h-3.5 text-[#00FF41]" />
                    Currently Learning:
                  </span>
                  <span className="text-[#00FF41] font-semibold text-right">
                    {PROFILE_DATA.currentlyLearning}
                  </span>
                </div>
              </div>

              {/* Status Verification Footer */}
              <div className="mt-5 p-3 rounded-xl bg-white/[0.02] border border-white/10 text-[11px] font-mono text-white/50 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[#00FF41]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00FF41]" />
                  GLA CSE Department
                </span>
                <span className="text-white/40">2025 – Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
