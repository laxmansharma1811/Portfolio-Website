'use client';

import React from 'react';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900/60 relative overflow-hidden border-y border-white/5">
      {/* Background radial glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Verified Professional Track Record
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Work Experience & <span className="text-gradient-indigo">Engineering Internships</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal">
            Direct industry experience fine-tuning NLP transformer models at Nepal's leading fintech wallet (eSewa) and engineering automated Airflow data pipelines (Dlytica).
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={exp.company}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.accentColor} flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-lg group-hover:scale-105 transition-transform`}
                    >
                      {exp.logoInitial}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-2 text-slate-400 text-xs mt-1 font-mono">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="space-y-3 pt-2">
                  <div className="font-mono text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Core Technical Contributions:
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    {exp.achievements.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10 hover:border-indigo-500/30 transition-colors"
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
