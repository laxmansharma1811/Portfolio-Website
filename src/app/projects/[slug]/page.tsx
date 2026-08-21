import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/data/caseStudies';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Terminal, Cpu } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const caseStudy = CASE_STUDIES[params.slug];
  if (!caseStudy) return { title: 'Case Study Not Found' };
  return {
    title: `${caseStudy.title} — Deep Case Study | Laxman Sharma`,
    description: caseStudy.overview,
  };
}

export default function CaseStudyPage({ params }: Props) {
  const caseStudy = CASE_STUDIES[params.slug];

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Selected Work
        </Link>

        {/* Case Study Header */}
        <div className="space-y-4 mb-12 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs uppercase">
            Deep Technical Case Study
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {caseStudy.title}
          </h1>
          <p className="font-mono text-sm sm:text-base text-cyan-400">
            {caseStudy.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-dark-950 font-bold hover:bg-emerald-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> View Live Application
              </a>
            )}
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" /> View GitHub Repository
              </a>
            )}
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="space-y-12 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Executive Overview */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-3">
            <h2 className="font-display font-bold text-xl text-white text-gradient-cyan">
              Executive Overview
            </h2>
            <p>{caseStudy.overview}</p>
          </section>

          {/* Problem & Context */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                The Problem
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">{caseStudy.problem}</p>
            </section>

            <section className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-400" />
                Engineering Context & My Role
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">{caseStudy.role}</p>
            </section>
          </div>

          {/* Architecture Pipeline */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              System Architecture & Flow
            </h3>
            <div className="bg-dark-950 p-4 rounded-xl border border-white/10 font-mono text-xs space-y-2 text-cyan-300">
              {caseStudy.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-slate-500">{idx + 1}.</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering Approach & Implementation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">Engineering Approach</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {caseStudy.approach.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-lg text-white">Implementation Details</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {caseStudy.implementation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Technical Rationale & Tradeoffs */}
          <section className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-4">
            <h3 className="font-display font-bold text-xl text-white">Key Architectural Decisions</h3>
            <div className="space-y-4 font-mono text-xs">
              {caseStudy.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-dark-950/80 border border-white/5 space-y-1">
                  <div className="text-cyan-300 font-bold">{dec.decision}</div>
                  <div className="text-slate-400">{dec.rationale}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Results & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <h3 className="font-display font-bold text-lg text-white text-emerald-400">
                Verified Outcomes & Results
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {caseStudy.result.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono">✓</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass-card rounded-2xl p-6 border border-white/10 space-y-3">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-400" />
                Lessons Learned
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {caseStudy.lessonsLearned.map((l, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-yellow-400 font-mono">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
