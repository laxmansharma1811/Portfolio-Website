'use client';

import React from 'react';
import Image from 'next/image';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Award, GraduationCap, UserCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-obsidian-950 border-b border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-card rounded-xl p-4 border border-obsidian-800 space-y-4">
              <div className="relative h-96 w-full rounded overflow-hidden bg-obsidian-950 border border-obsidian-800">
                <Image
                  src={PERSONAL_INFO.avatarImage}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Verified Credentials Box */}
              <div className="p-4 bg-obsidian-950 rounded border border-obsidian-800 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-rust-500 font-bold uppercase">
                  <GraduationCap className="w-4 h-4" />
                  {PERSONAL_INFO.education.institution}
                </div>
                <div className="text-white">
                  {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.graduationDate})
                </div>
                <div className="text-emerald-400 text-[11px] flex items-center gap-1.5 pt-1 border-t border-obsidian-800">
                  <Award className="w-3.5 h-3.5" />
                  {PERSONAL_INFO.education.certification}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Journey */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
                INDEX // 05 — PHILOSOPHY & JOURNEY
              </span>
              <span className="h-px w-12 bg-rust-500/40"></span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase leading-tight">
              Building AI & Data Systems with <span className="text-rust-500">Rigor & Discipline</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                My engineering focus centers on bridging machine learning research with scalable backend architectures. Graduating with a Computer Science degree (BSc Hons, March 2025) from Sunway College Kathmandu provided me with a strong foundation in algorithms, databases, and software design.
              </p>
              <p>
                During my internship at <strong className="text-white">eSewa Ltd</strong> (Nepal's leading digital wallet platform), I contributed directly to R&D by fine-tuning BLOOM and BERT models for Romanized-to-Devanagari translation. That hands-on project reinforced my belief that production ML relies on meticulous data pipelines, robust BLEU score benchmarking, and low-latency API optimization.
              </p>
              <p>
                Whether orchestrating Apache Airflow DAGs at Dlytica or deploying production Django SaaS platforms on Linux VPS servers, I focus on building <em className="text-rust-500 not-italic font-semibold font-mono">clean, verifiable code that solves explicit problems.</em>
              </p>
            </div>

            {/* Quick Fact Callouts */}
            <div className="grid grid-cols-2 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded bg-obsidian-900 border border-obsidian-800">
                <div className="text-rust-500 font-bold text-base">Kathmandu, Nepal</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Location & Timezone (GMT+5:45)</div>
              </div>
              <div className="p-4 rounded bg-obsidian-900 border border-obsidian-800">
                <div className="text-emerald-400 font-bold text-base">10+ Deployed Projects</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Production SaaS & Open Source</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
