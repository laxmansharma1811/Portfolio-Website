import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Cpu } from 'lucide-react';

export const metadata = {
  title: 'All Projects & Engineering Portfolio | Laxman Sharma',
  description: 'Complete directory of AI/ML models, live Django SaaS platforms, ETL pipelines, and automation tools built by Laxman Sharma.',
};

export default function ProjectsDirectoryPage() {
  return (
    <div className="pt-32 pb-24 bg-dark-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Complete Project Archive
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Engineering Projects & <span className="text-gradient-cyan">Case Studies</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Detailed breakdown of all signature and open-source projects built across machine learning, backend architecture, and data engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="relative h-56 w-full rounded-xl overflow-hidden bg-dark-900 border border-white/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.liveUrl && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-dark-950 font-bold text-[10px]">
                        LIVE
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-slate-400">{project.subtitle}</p>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Read Case Study <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-emerald-400 text-xs font-mono flex items-center gap-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
