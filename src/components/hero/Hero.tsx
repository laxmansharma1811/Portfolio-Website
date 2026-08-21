'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Database, Brain, Server, Terminal, Sparkles, CheckCircle2, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-dark-950 overflow-hidden bg-tech-grid">
      {/* Radial Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-xs text-slate-300">
                {PERSONAL_INFO.statusMessage}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
                Engineering Fine-Tuned <br className="hidden sm:block" />
                <span className="text-gradient-cyan">AI Models & Scalable</span> <br />
                Backend Pipelines.
              </h1>
              <p className="text-slate-400 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
                Hi, I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>. I specialize in production LLM/NLP model fine-tuning (eSewa), high-throughput FastAPI/Django backends, and automated Airflow data pipelines.
              </p>
            </div>

            {/* Core Competencies Badges */}
            <div className="flex flex-wrap gap-2.5 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-cyan-300 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-cyan-400" /> PyTorch & NLP Transformers
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-indigo-300 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-indigo-400" /> FastAPI & Django 4.2
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-emerald-300 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> Airflow & ETL Orchestration
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-dark-950 font-bold text-sm transition-all shadow-xl shadow-cyan-500/25 hover:scale-[1.02]"
              >
                View Selected Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all hover:border-cyan-500/40"
              >
                Let's Connect
              </Link>
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors underline underline-offset-4"
              >
                <Download className="w-3.5 h-3.5" /> Download Resume PDF
              </a>
            </div>
          </div>

          {/* Right Column: Architectural "Signal → Pipeline → Product" Visualization */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden border border-cyan-500/20 shadow-2xl">
              {/* Header Terminal Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <div className="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  pipeline_architecture.py
                </div>
              </div>

              {/* Architectural Nodes Flow */}
              <div className="space-y-4 font-mono text-xs">
                {/* Node 1: Raw Signal / Data */}
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">01. Raw Signal & Data Ingestion</div>
                      <div className="text-slate-400 text-[11px]">ETL Pipelines / Airflow / MinIO</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300">ACTIVE</span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-cyan-500 to-indigo-500"></div>
                </div>

                {/* Node 2: Fine-Tuned AI Models */}
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-indigo-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">02. Model Fine-Tuning</div>
                      <div className="text-slate-400 text-[11px]">Transformers / BLOOM / PyTorch</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300">FINE-TUNED</span>
                </div>

                {/* Connector Arrow */}
                <div className="flex justify-center my-1">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-indigo-500 to-emerald-500"></div>
                </div>

                {/* Node 3: Async API Backend */}
                <div className="p-3.5 rounded-xl bg-dark-950/80 border border-slate-800 flex items-center justify-between group hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">03. Production System Delivery</div>
                      <div className="text-slate-400 text-[11px]">FastAPI Async / Django / VPS Nginx</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300">PRODUCTION</span>
                </div>
              </div>

              {/* Footer Quick Metric */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Sunway College Kathmandu (BSc Hons 2025)
                </span>
                <span className="font-mono text-cyan-400 font-semibold">100% Fact Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
