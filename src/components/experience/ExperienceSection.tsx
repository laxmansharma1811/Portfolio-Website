'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-obsidian-950 border-b border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              INDEX // 03 — CAREER HISTORY
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Work Experience & <span className="text-rust-500">Engineering Internships</span>
          </h2>
          <p className="text-slate-400 text-base font-normal">
            Direct industry experience fine-tuning NLP transformer models at Nepal's premier digital wallet platform (eSewa) and engineering automated Airflow data pipelines (Dlytica).
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={exp.company}
              className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-obsidian-800 pb-5">
                  <div>
                    <span className="font-mono text-[10px] text-rust-500 font-bold uppercase">
                      EXP [{String(idx + 1).padStart(2, '0')}] // {exp.type}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white mt-1 uppercase">
                      {exp.company}
                    </h3>
                    <p className="font-mono text-xs text-rust-500 font-semibold uppercase mt-0.5">
                      {exp.role}
                    </p>
                    <p className="text-slate-400 text-xs mt-1 font-mono flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" /> {exp.location}
                    </p>
                  </div>
                  <div className="font-mono text-xs text-slate-300 bg-obsidian-950 border border-obsidian-800 px-3 py-1.5 rounded flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-rust-500" />
                    {exp.period}
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

                {/* Achievements Bullet Points */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Engineering Deliverables:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {exp.achievements.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-rust-500 flex-shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-6 border-t border-obsidian-800">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-obsidian-950 border border-obsidian-800 text-slate-300"
                    >
                      {tech}
                    </span>
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
