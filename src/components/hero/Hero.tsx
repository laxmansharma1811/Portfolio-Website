'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Terminal, CheckCircle2, FileText, Database, Brain, Server } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-36 pb-20 flex items-center justify-center bg-obsidian-950 grid-hairline border-b border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Positioning */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Index Marker */}
            <div className="inline-flex items-center gap-3">
              <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
                INDEX // 01 — ARCHITECTURAL PROFILE
              </span>
              <span className="h-px w-12 bg-rust-500/40"></span>
            </div>

            {/* Main Statement */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] uppercase">
                Engineering <br className="hidden sm:block" />
                <span className="text-rust-500">Fine-Tuned AI Models</span> <br />
                & Systems Pipelines.
              </h1>
              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, an AI/ML & Data Systems Engineer specializing in PyTorch NLP fine-tuning at eSewa Ltd, high-throughput FastAPI/Django backends, and automated Apache Airflow ETL workflows.
              </p>
            </div>

            {/* Architecture Metadata Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded bg-obsidian-900 border border-obsidian-800">
                <div className="text-rust-500 text-[10px] uppercase font-bold">MODEL FINE-TUNING</div>
                <div className="text-white mt-1">PyTorch / BLOOM / BERT</div>
              </div>
              <div className="p-3 rounded bg-obsidian-900 border border-obsidian-800">
                <div className="text-rust-500 text-[10px] uppercase font-bold">BACKEND & SAAS</div>
                <div className="text-white mt-1">FastAPI & Django 4.2</div>
              </div>
              <div className="p-3 rounded bg-obsidian-900 border border-obsidian-800">
                <div className="text-rust-500 text-[10px] uppercase font-bold">ORCHESTRATION</div>
                <div className="text-white mt-1">Apache Airflow & MinIO</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 font-mono text-xs">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded bg-rust-500 hover:bg-rust-600 text-white font-bold transition-colors shadow-lg"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-obsidian-900 hover:bg-obsidian-800 border border-obsidian-800 text-slate-200 transition-colors"
              >
                Contact Engineer
              </Link>
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-rust-500 transition-colors underline underline-offset-4"
              >
                <FileText className="w-3.5 h-3.5" /> PDF Resume
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Live Technical Index */}
          <div className="lg:col-span-5">
            <div className="editorial-card rounded-xl p-6 border border-obsidian-800 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-obsidian-800 pb-4 font-mono text-xs">
                <span className="text-rust-500 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Terminal className="w-4 h-4" />
                  SYSTEM_PIPELINE_INDEX.DAT
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                  VERIFIED
                </span>
              </div>

              {/* Index Items */}
              <div className="space-y-4 font-mono text-xs">
                {/* Item 1 */}
                <div className="p-3.5 rounded bg-obsidian-950 border border-obsidian-800 space-y-1">
                  <div className="flex justify-between text-slate-400 text-[10px] uppercase">
                    <span>[01] NLP MODEL ENGINE</span>
                    <span className="text-rust-500">eSewa Internship</span>
                  </div>
                  <div className="text-white font-bold text-sm">BHASABODH AI Translation</div>
                  <div className="text-slate-400 text-[11px]">
                    Fine-tuned BLOOM/BERT variants for Romanized-to-Devanagari translation with BLEU metric validation loop.
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3.5 rounded bg-obsidian-950 border border-obsidian-800 space-y-1">
                  <div className="flex justify-between text-slate-400 text-[10px] uppercase">
                    <span>[02] SAAS BACKEND PLATFORM</span>
                    <span className="text-emerald-400">Live Production</span>
                  </div>
                  <div className="text-white font-bold text-sm">EDUHUB Global Education Portal</div>
                  <div className="text-slate-400 text-[11px]">
                    Django 4.2 + PostgreSQL hosted on Nest Nepal VPS with Nginx reverse proxy and Uvicorn.
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3.5 rounded bg-obsidian-950 border border-obsidian-800 space-y-1">
                  <div className="flex justify-between text-slate-400 text-[10px] uppercase">
                    <span>[03] ETL ORCHESTRATION</span>
                    <span className="text-blueprint-500">Dlytica Internship</span>
                  </div>
                  <div className="text-white font-bold text-sm">Apache Airflow DAG Storage Pipeline</div>
                  <div className="text-slate-400 text-[11px]">
                    Automated data extraction & MinIO object storage workflows with Docker task runners.
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-obsidian-800 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Sunway College Kathmandu (BSc 2025)
                </span>
                <span className="text-rust-500 font-bold">100% Facts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
