'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Award, GraduationCap, Code2, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark-900/60 relative overflow-hidden border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-4 border border-white/10 relative overflow-hidden group">
              <div className="relative h-96 w-full rounded-xl overflow-hidden bg-dark-950">
                <Image
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent"></div>
              </div>

              {/* Overlaid Verified Credentials Badge */}
              <div className="p-4 bg-dark-950/90 rounded-xl border border-white/10 mt-3 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <GraduationCap className="w-4 h-4" />
                  {PERSONAL_INFO.education.institution}
                </div>
                <div className="text-slate-300">
                  {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.graduationDate})
                </div>
                <div className="text-emerald-400 text-[11px] flex items-center gap-1.5 pt-1">
                  <Award className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.education.certification}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Journey & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              Engineering Mindset & Background
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Building Production AI & Data Software with <span className="text-gradient-cyan">Rigor & Discipline</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                My passion lies at the intersection of machine learning models and high-performance backend engineering. During my Computer Science degree at Sunway College Kathmandu (graduated March 2025), I focused heavily on building software systems that automate data collection and model inference.
              </p>
              <p>
                At <strong className="text-white">eSewa Ltd</strong>, I had the privilege of working alongside R&D engineers to fine-tune BLOOM and BERT models for Romanized Nepali translation. That experience taught me that real-world AI is 20% model selection and 80% data cleaning pipelines, latency optimization, and robust API integration.
              </p>
              <p>
                Whether I am configuring Apache Airflow DAGs for automated ETL workflows or deploying Django SaaS applications on Linux VPS servers, my goal remains constant: <em className="text-cyan-300 not-italic font-semibold">write clean, verifiable code that solves explicit problems.</em>
              </p>
            </div>

            {/* Quick Fact Callouts */}
            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-cyan-400 font-bold text-lg font-display">Kathmandu, Nepal</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Location & Timezone (GMT+5:45)</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-bold text-lg font-display">10+ Deployed Projects</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Live Production & Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
