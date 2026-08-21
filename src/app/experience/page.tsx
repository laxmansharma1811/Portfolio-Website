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
    <div className="pt-36 pb-24 bg-obsidian-950 min-h-screen font-sans border-b border-obsidian-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-rust-500 hover:text-rust-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              INDEX // CAREER TRACK RECORD
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase">
            Work Experience & <span className="text-rust-500">Internships</span>
          </h1>
          <p className="text-slate-400 text-base font-normal">
            Detailed breakdown of engineering achievements, model fine-tuning experiments at eSewa, and Airflow ETL pipeline execution at Dlytica.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-10">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={exp.company}
              className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800 space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-obsidian-800 pb-6">
                <div>
                  <span className="font-mono text-[10px] text-rust-500 font-bold uppercase">
                    EXP [{String(idx + 1).padStart(2, '0')}] // {exp.type}
                  </span>
                  <h2 className="font-display font-bold text-2xl text-white uppercase mt-1">{exp.company}</h2>
                  <p className="font-mono text-xs text-rust-500 font-semibold uppercase">{exp.role}</p>
                  <p className="text-slate-400 text-xs mt-1 flex items-center gap-1 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {exp.location}
                  </p>
                </div>
                <div className="font-mono text-xs text-slate-300 bg-obsidian-950 border border-obsidian-800 px-3.5 py-1.5 rounded flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-rust-500" />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">{exp.description}</p>

              <div className="space-y-3 pt-2">
                <h3 className="font-mono text-xs text-slate-400 uppercase font-semibold">
                  Engineering Deliverables:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-rust-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-obsidian-800">
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-obsidian-950 text-slate-300 border border-obsidian-800">
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
