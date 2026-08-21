'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Brain, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-4 h-4 text-rust-500" />,
  Server: <Server className="w-4 h-4 text-rust-500" />,
  Database: <Database className="w-4 h-4 text-rust-500" />,
  Cpu: <Cpu className="w-4 h-4 text-rust-500" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 bg-obsidian-950 border-b border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              INDEX // 04 — CAPABILITY MATRIX
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Technical Stack & <span className="text-rust-500">Core Competencies</span>
          </h2>
          <p className="text-slate-400 text-base font-normal">
            Organized strictly by evidence from real deployed projects and internships—no arbitrary percentage bars.
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800 space-y-6"
            >
              <div className="flex items-center justify-between border-b border-obsidian-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-obsidian-950 border border-obsidian-800">
                    {iconMap[cat.iconName] || <Cpu className="w-4 h-4 text-rust-500" />}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-rust-500 font-bold uppercase">
                      CAT [{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <h3 className="font-display font-bold text-lg text-white uppercase">
                      {cat.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">{cat.description}</p>

              {/* Skills Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-2.5 rounded bg-obsidian-950 border border-obsidian-800 flex items-center justify-between"
                  >
                    <span className="text-slate-200 font-medium">{skill.name}</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                        skill.level === 'Primary'
                          ? 'bg-rust-500/20 text-rust-500 border border-rust-500/30'
                          : skill.level === 'Proficient'
                          ? 'bg-blueprint-500/20 text-blue-300 border border-blueprint-500/30'
                          : 'bg-obsidian-900 text-slate-400 border border-obsidian-800'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
