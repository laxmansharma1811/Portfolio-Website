'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileText, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '/#projects', num: '01' },
    { name: 'Experience', href: '/#experience', num: '02' },
    { name: 'Capabilities', href: '/#capabilities', num: '03' },
    { name: 'About', href: '/#about', num: '04' },
    { name: 'Contact', href: '/#contact', num: '05' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-obsidian-800 py-3 shadow-xl'
          : 'bg-obsidian-950/60 backdrop-blur-sm border-b border-obsidian-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Index */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="px-2.5 py-1 rounded bg-rust-500/10 border border-rust-500/30 text-rust-500 font-mono font-bold text-xs">
              LS
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-sm tracking-tight group-hover:text-rust-500 transition-colors uppercase">
                {PERSONAL_INFO.name}
              </span>
              <span className="font-mono text-[10px] text-obsidian-500 tracking-wider uppercase">
                AI & Systems Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-rust-500 transition-colors flex items-center gap-1.5"
              >
                <span className="text-rust-500/70 text-[10px]">[{link.num}]</span>
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Terminal */}
          <div className="hidden md:flex items-center gap-3 font-mono text-xs">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-obsidian-900 border border-obsidian-800 text-slate-300 hover:text-white hover:border-rust-500/50 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-obsidian-900 border border-obsidian-800 text-slate-300 hover:text-white hover:border-rust-500/50 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-rust-500 text-white font-bold hover:bg-rust-600 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              Resume PDF
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded bg-obsidian-900 border border-obsidian-800 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-950 border-b border-obsidian-800 px-4 py-4 space-y-3 font-mono text-xs">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-rust-500 flex items-center gap-2"
            >
              <span className="text-rust-500">[{link.num}]</span>
              {link.name}
            </Link>
          ))}
          <div className="pt-3 border-t border-obsidian-800 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-rust-500 text-white font-bold"
            >
              <FileText className="w-4 h-4" /> Resume PDF
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded bg-obsidian-900 border border-obsidian-800 text-slate-300"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
