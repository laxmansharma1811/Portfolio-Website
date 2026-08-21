'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { ExternalLink, Github, ArrowRight, Terminal } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai-ml' | 'data-engineering' | 'backend-web' | 'mobile-automation'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const filterButtons = [
    { label: 'ALL ARCHIVE', value: 'all' },
    { label: 'AI & ML', value: 'ai-ml' },
    { label: 'DATA ENGINEERING', value: 'data-engineering' },
    { label: 'BACKEND SYSTEMS', value: 'backend-web' },
    { label: 'SCRAPING & MOBILE', value: 'mobile-automation' },
  ];

  return (
    <section id="projects" className="py-24 bg-obsidian-950 border-b border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              INDEX // 02 — SELECTED WORK
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Featured <span className="text-rust-500">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-base font-normal">
            Real systems built with verified evidence—spanning production NLP models, live Django SaaS platforms, Streamlit diagnostics, and automated Airflow data pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 font-mono text-xs">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as any)}
              className={`px-4 py-2 rounded transition-colors ${
                filter === btn.value
                  ? 'bg-rust-500 text-white font-bold'
                  : 'bg-obsidian-900 text-slate-300 border border-obsidian-800 hover:border-rust-500/50'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Editorial Projects List */}
        <div className="space-y-10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="editorial-card rounded-xl overflow-hidden border border-obsidian-800 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Image & Description */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center justify-between font-mono text-xs border-b border-obsidian-800 pb-3">
                    <span className="text-rust-500 font-bold">PROJECT [{String(idx + 1).padStart(2, '0')}]</span>
                    <span className="text-slate-400 uppercase">{project.category}</span>
                  </div>

                  <div className="relative h-64 sm:h-72 w-full rounded overflow-hidden bg-obsidian-950 border border-obsidian-800">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                    />
                    {project.liveUrl && (
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded bg-emerald-500 text-obsidian-950 font-mono text-[10px] font-bold">
                          LIVE PRODUCTION
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-rust-500">{project.subtitle}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 font-mono text-xs">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded bg-obsidian-950 border border-obsidian-800 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Technical Specification Box & CTAs */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-5 rounded bg-obsidian-950 border border-obsidian-800 space-y-4 font-mono text-xs">
                    <div className="text-rust-500 font-bold uppercase tracking-wider flex items-center gap-2 border-b border-obsidian-800 pb-2">
                      <Terminal className="w-4 h-4" />
                      TECHNICAL PARAMETERS
                    </div>

                    {project.metrics ? (
                      <div className="space-y-2.5">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="flex justify-between border-b border-obsidian-800/60 pb-2">
                            <span className="text-slate-400 uppercase text-[11px]">{m.label}</span>
                            <span className="text-white font-bold">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-slate-400 text-[11px]">
                        Architected and verified with strict software engineering standards.
                      </div>
                    )}

                    <div className="pt-2 text-[11px] text-slate-400">
                      Category: <span className="text-white">{project.category}</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="space-y-3 font-mono text-xs">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="w-full py-3 px-4 rounded bg-rust-500 hover:bg-rust-600 text-white font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      Read Technical Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-3 rounded bg-obsidian-900 border border-obsidian-800 text-emerald-400 hover:text-emerald-300 text-center flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" /> Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-3 rounded bg-obsidian-900 border border-obsidian-800 text-slate-300 hover:text-white text-center flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <Github className="w-3.5 h-3.5" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center pt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded bg-obsidian-900 hover:bg-obsidian-800 border border-obsidian-800 text-white font-mono text-xs font-bold transition-colors"
          >
            Explore Full Projects Archive & Case Studies
            <ArrowRight className="w-4 h-4 text-rust-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};
