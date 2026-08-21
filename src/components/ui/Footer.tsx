'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, FileText, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2 text-white font-display font-bold text-base">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {PERSONAL_INFO.name}
            </div>
            <p className="text-slate-400 text-xs font-sans max-w-md">
              AI/ML & Data Systems Engineer. Fine-tuned NLP models @ eSewa, Airflow ETL @ Dlytica, production Django @ EDUHUB.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-4 h-4 text-indigo-400" />
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              Resume PDF
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Laxman Sharma. All facts 100% verified.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            Engineered with Next.js 14, Tailwind CSS & TypeScript.
          </div>
        </div>
      </div>
    </footer>
  );
};
