import React from 'react';
import Link from 'next/link';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { ArrowLeft, Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Work Experience & Internships | Laxman Sharma',
  description: 'Detailed work experience of Laxman Sharma, including AI/ML Engineering Internship at eSewa Ltd and Data Engineering Internship at Dlytica.',
};

export default function ExperiencePage() {
  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Verified Career Track Record
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Work Experience & <span className="text-gradient-indigo">Internships</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Detailed breakdown of engineering achievements, model fine-tuning experiments at eSewa, and Airflow ETL pipeline execution at Dlytica.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.company}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${exp.accentColor} flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-lg`}
                  >
                    {exp.logoInitial}
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-2xl text-white">{exp.company}</h2>
                    <p className="font-mono text-xs text-indigo-400 font-semibold uppercase">{exp.role}</p>
                    <p className="text-slate-400 text-xs mt-1 flex items-center gap-1 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className="font-mono text-xs text-slate-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs text-slate-400 uppercase font-semibold">
                  Detailed Engineering Contributions:
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded bg-white/5 text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
