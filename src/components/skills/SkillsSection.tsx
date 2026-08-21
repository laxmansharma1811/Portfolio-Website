'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Brain, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-yellow-400" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Brain className="w-3.5 h-3.5" />
            Engineering Depth & Capability Matrix
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Technical Stack & <span className="text-gradient-cyan">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal">
            Organized strictly by real capability and evidence from deployed projects and internships—no arbitrary 100% percentage bars.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[cat.iconName] || <Cpu className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-slate-400 text-xs mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-dark-950/80 border border-white/5 hover:border-white/15 flex items-center justify-between transition-colors"
                    >
                      <span className="text-slate-200 font-medium">{skill.name}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded font-semibold ${
                          skill.level === 'Primary'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : skill.level === 'Proficient'
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-white/5 text-slate-400 border border-white/10'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
