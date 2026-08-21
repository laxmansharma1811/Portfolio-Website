'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-obsidian-950 border-t border-obsidian-800 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-display font-bold text-base uppercase">
              <span className="w-2 h-2 bg-rust-500 rounded-full"></span>
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-400 text-xs font-sans max-w-md">
              AI/ML & Data Systems Engineer. PyTorch NLP fine-tuning @ eSewa, Airflow ETL @ Dlytica, production Django @ EDUHUB.
            </p>
          </div>

          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-6 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-4 h-4 text-rust-500" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-rust-500" />
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4 text-rust-500" />
              Resume PDF
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-obsidian-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Laxman Sharma. All facts 100% verified.
          </div>
          <div>
            Engineered with Next.js 14 App Router, TypeScript & Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
