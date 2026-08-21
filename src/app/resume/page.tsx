import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO, EXPERIENCE_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '@/data/portfolioData';
import { ArrowLeft, Download, FileText, GraduationCap, Award, Briefcase, Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Interactive Resume & CV | Laxman Sharma',
  description: 'Official digital resume of Laxman Sharma — AI/ML & Data Systems Engineer from Kathmandu, Nepal.',
};

export default function ResumePage() {
  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Controls */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>
          <a
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs transition-colors shadow-lg"
          >
            <Download className="w-4 h-4" /> Download PDF Resume
          </a>
        </div>

        {/* Paper / Digital CV Container */}
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 space-y-10 text-slate-300 text-sm">
          {/* Header */}
          <div className="border-b border-white/10 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-display font-extrabold text-3xl text-white">{PERSONAL_INFO.name}</h1>
                <p className="font-mono text-xs text-cyan-400 font-semibold uppercase mt-1">
                  {PERSONAL_INFO.title}
                </p>
              </div>
              <div className="font-mono text-xs text-slate-400 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> {PERSONAL_INFO.email}
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" /> {PERSONAL_INFO.phone}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-300 pt-2 border-t border-white/5">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education & Certification
            </h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex justify-between font-bold text-white">
                <span>{PERSONAL_INFO.education.institution}</span>
                <span className="font-mono text-xs font-normal text-slate-400">{PERSONAL_INFO.education.graduationDate}</span>
              </div>
              <div className="text-xs text-slate-300">{PERSONAL_INFO.education.degree}</div>
              <div className="text-xs text-emerald-400 pt-1 flex items-center gap-1 font-mono">
                <Award className="w-3 h-3" /> {PERSONAL_INFO.education.certification}
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-bold flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h2>
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.company} className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex justify-between font-bold text-white">
                  <span>{exp.role} @ {exp.company}</span>
                  <span className="font-mono text-xs font-normal text-slate-400">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-300">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pl-1">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
              <FileText className="w-4 h-4" /> Key Projects
            </h2>
            {PROJECTS_DATA.slice(0, 4).map((p) => (
              <div key={p.id} className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <div className="flex justify-between font-bold text-white">
                  <span>{p.title}</span>
                  <span className="font-mono text-[10px] text-cyan-400 uppercase">{p.category}</span>
                </div>
                <p className="text-xs text-slate-300">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs">
            <h2 className="uppercase tracking-wider text-cyan-400 font-bold">Technical Skills Summary</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
              <div><strong className="text-white">AI/ML:</strong> PyTorch, Transformers, BERT, BLOOM, Scikit-learn, Pandas, NumPy</div>
              <div><strong className="text-white">Backend:</strong> Python, FastAPI, Django 4.2, REST APIs, Flask, PostgreSQL</div>
              <div><strong className="text-white">Data Eng:</strong> Apache Airflow, MinIO, Docker, ETL, MySQL, Redis</div>
              <div><strong className="text-white">DevOps & Tools:</strong> Linux, Nginx, VPS, Selenium, Git, Streamlit, JS/TS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
