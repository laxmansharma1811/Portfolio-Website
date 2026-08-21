import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CASE_STUDIES } from '@/data/caseStudies';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb, Terminal } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug,
  }));
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
    <div className="pt-36 pb-24 bg-obsidian-950 min-h-screen font-sans border-b border-obsidian-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-rust-500 hover:text-rust-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Selected Work
        </Link>

        {/* Header */}
        <div className="space-y-4 mb-12 border-b border-obsidian-800 pb-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              TECHNICAL CASE STUDY
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-tight">
            {caseStudy.title}
          </h1>
          <p className="font-mono text-sm text-rust-500">
            {caseStudy.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
            {caseStudy.liveUrl && (
              <a
                href={caseStudy.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-500 text-obsidian-950 font-bold hover:bg-emerald-400 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> View Live Platform
              </a>
            )}
            {caseStudy.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded bg-obsidian-900 hover:bg-obsidian-800 text-white border border-obsidian-800 transition-colors"
              >
                <Github className="w-4 h-4" /> View GitHub Repository
              </a>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-10 text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Executive Overview */}
          <section className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800 space-y-3">
            <h2 className="font-display font-bold text-xl text-white uppercase text-rust-500">
              Executive Overview
            </h2>
            <p>{caseStudy.overview}</p>
          </section>

          {/* Problem & Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="editorial-card rounded-xl p-6 border border-obsidian-800 space-y-3">
              <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-400" />
                The Problem
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">{caseStudy.problem}</p>
            </section>

            <section className="editorial-card rounded-xl p-6 border border-obsidian-800 space-y-3">
              <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2 font-mono">
                <Terminal className="w-5 h-5 text-rust-500" />
                My Engineering Role
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">{caseStudy.role}</p>
            </section>
          </div>

          {/* Architecture */}
          <section className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800 space-y-4 font-mono text-xs">
            <h3 className="font-display font-bold text-xl text-white uppercase flex items-center gap-2">
              <Terminal className="w-5 h-5 text-rust-500" />
              System Architecture Flow
            </h3>
            <div className="bg-obsidian-950 p-4 rounded border border-obsidian-800 space-y-2 text-rust-500 font-bold">
              {caseStudy.architecture.map((arch, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-slate-500">[{String(idx + 1).padStart(2, '0')}]</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Rationale */}
          <section className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800 space-y-4">
            <h3 className="font-display font-bold text-xl text-white uppercase">Key Architectural Decisions</h3>
            <div className="space-y-4 font-mono text-xs">
              {caseStudy.technicalDecisions.map((dec, idx) => (
                <div key={idx} className="p-4 rounded bg-obsidian-950 border border-obsidian-800 space-y-1">
                  <div className="text-rust-500 font-bold uppercase">{dec.decision}</div>
                  <div className="text-slate-400">{dec.rationale}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes & Lessons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="editorial-card rounded-xl p-6 border border-obsidian-800 space-y-3">
              <h3 className="font-display font-bold text-lg text-emerald-400 uppercase">
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

            <section className="editorial-card rounded-xl p-6 border border-obsidian-800 space-y-3">
              <h3 className="font-display font-bold text-lg text-white uppercase flex items-center gap-2">
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
