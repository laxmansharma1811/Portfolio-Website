import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/portfolioData';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Terminal } from 'lucide-react';

export const metadata = {
  title: 'All Projects & Engineering Portfolio | Laxman Sharma',
  description: 'Complete directory of AI/ML models, live Django SaaS platforms, ETL pipelines, and automation tools built by Laxman Sharma.',
};

export default function ProjectsDirectoryPage() {
  return (
    <div className="pt-36 pb-24 bg-obsidian-950 min-h-screen font-sans border-b border-obsidian-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-rust-500 hover:text-rust-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Homepage
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              INDEX // COMPLETE ARCHIVE
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight uppercase">
            Engineering Projects & <span className="text-rust-500">Case Studies</span>
          </h1>
          <p className="text-slate-400 text-base font-normal">
            Detailed technical breakdown of all signature, high-impact, and open-source builds across machine learning, backend architecture, and data engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-card rounded-xl p-6 border border-obsidian-800 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-[11px] border-b border-obsidian-800 pb-3">
                  <span className="text-rust-500 font-bold">PROJECT [{String(idx + 1).padStart(2, '0')}]</span>
                  <span className="text-slate-400 uppercase">{project.category}</span>
                </div>

                <div className="relative h-56 w-full rounded overflow-hidden bg-obsidian-950 border border-obsidian-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                  />
                  {project.liveUrl && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded bg-emerald-500 text-obsidian-950 font-mono text-[10px] font-bold">
                        LIVE
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-rust-500">{project.subtitle}</p>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded bg-obsidian-950 text-slate-300 border border-obsidian-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-obsidian-800 flex items-center justify-between font-mono text-xs">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 font-bold text-rust-500 hover:text-rust-600 transition-colors"
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
