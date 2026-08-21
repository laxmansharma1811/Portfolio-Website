'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-obsidian-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-rust-500 font-bold uppercase tracking-widest">
              INDEX // 06 — CONTACT TERMINAL
            </span>
            <span className="h-px w-12 bg-rust-500/40"></span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight uppercase">
            Start a <span className="text-rust-500">Conversation</span>
          </h2>
          <p className="text-slate-400 text-base font-normal">
            Open for remote backend engineering roles, AI model fine-tuning contracts, and automated data pipeline projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="editorial-card rounded-xl p-6 sm:p-8 border border-obsidian-800">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4 font-mono">
                  <div className="w-12 h-12 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white uppercase">Inquiry Logged</h3>
                  <p className="text-slate-400 text-xs max-w-md mx-auto">
                    Thank you, {formData.name}. Your message has been received. Laxman will respond directly to <span className="text-rust-500">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2 rounded bg-obsidian-900 border border-obsidian-800 text-xs text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 mb-2 uppercase font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded bg-obsidian-950 border border-obsidian-800 text-white placeholder-slate-600 focus:outline-none focus:border-rust-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-slate-300 mb-2 uppercase font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded bg-obsidian-950 border border-obsidian-800 text-white placeholder-slate-600 focus:outline-none focus:border-rust-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-slate-300 mb-2 uppercase font-bold">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Fintech Startup / Engineering Studio"
                      className="w-full px-4 py-3 rounded bg-obsidian-950 border border-obsidian-800 text-white placeholder-slate-600 focus:outline-none focus:border-rust-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-2 uppercase font-bold">
                      What would you like to build or discuss? *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Laxman, I would like to discuss a backend or ML project..."
                      className="w-full px-4 py-3 rounded bg-obsidian-950 border border-obsidian-800 text-white placeholder-slate-600 focus:outline-none focus:border-rust-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded bg-rust-500 hover:bg-rust-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Start a Conversation
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-5 font-mono text-xs">
            {/* Email */}
            <div className="editorial-card rounded-xl p-5 border border-obsidian-800 flex items-center gap-4">
              <div className="p-3 rounded bg-obsidian-950 border border-obsidian-800 text-rust-500">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">DIRECT EMAIL</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-bold text-white hover:text-rust-500 transition-colors text-sm"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="editorial-card rounded-xl p-5 border border-obsidian-800 flex items-center gap-4">
              <div className="p-3 rounded bg-obsidian-950 border border-obsidian-800 text-rust-500">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">PHONE & WHATSAPP</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-bold text-white hover:text-rust-500 transition-colors text-sm"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="editorial-card rounded-xl p-5 border border-obsidian-800 flex items-center gap-4">
              <div className="p-3 rounded bg-obsidian-950 border border-obsidian-800 text-rust-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-slate-400 text-[10px] uppercase">LOCATION</div>
                <div className="font-bold text-white text-sm">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="editorial-card rounded-xl p-5 border border-obsidian-800 space-y-3">
              <div className="text-slate-400 text-[10px] uppercase">PROFESSIONAL PROFILES</div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded bg-obsidian-950 border border-obsidian-800 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-rust-500" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded bg-obsidian-950 border border-obsidian-800 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-rust-500" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
