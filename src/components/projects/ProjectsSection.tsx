'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS_DATA, Project } from '@/data/portfolioData';
import { ExternalLink, Github, ArrowRight, Brain, Server, Database, Cpu, CheckCircle } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'ai-ml' | 'data-engineering' | 'backend-web' | 'mobile-automation'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const filterButtons = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI & ML', value: 'ai-ml' },
    { label: 'Data Engineering', value: 'data-engineering' },
    { label: 'Backend Systems', value: 'backend-web' },
    { label: 'Scraping & Mobile', value: 'mobile-automation' },
  ];

  return (
    <section id="projects" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Proven Technical Execution
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Selected <span className="text-gradient-cyan">Engineering Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal">
            Real systems built with verified facts—spanning production NLP models, live Django SaaS platforms, Streamlit diagnostics, and automated Airflow data pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value as any)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                filter === btn.value
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Tier 1 Signature Projects Grid */}
        <div className="space-y-12 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
                {/* Visual / Screenshot / Preview Column */}
                <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-full rounded-xl overflow-hidden bg-dark-900 border border-white/10 group-hover:border-cyan-500/30 transition-colors flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-dark-950/90 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-dark-950 text-[11px] font-bold shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-dark-950 animate-pulse"></span>
                        LIVE
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-cyan-400/90">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Pills */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-white/5 border border-white/10">
                          <div className="text-[10px] text-slate-400 uppercase">{m.label}</div>
                          <div className="text-white font-semibold mt-0.5">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs transition-colors"
                    >
                      Deep Technical Case Study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Live Site
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" /> GitHub Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all hover:border-cyan-500/40"
          >
            Explore Full Projects Archive & Case Studies
            <ArrowRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>
      </div>
    </section>
  );
};
