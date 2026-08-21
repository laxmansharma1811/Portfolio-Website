'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, Globe } from 'lucide-react';

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
    <section id="contact" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            Direct Communication Terminal
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Intelligent Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-normal">
            Open for remote backend engineering roles, AI model fine-tuning contracts, and automated data pipeline projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">Message Received</h3>
                  <p className="text-slate-400 text-sm max-w-md mx-auto font-mono">
                    Thank you, {formData.name}. Your inquiry has been logged. Laxman will reply directly to <span className="text-cyan-300">{formData.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', organization: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 border border-white/10"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@organization.com"
                        className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Fintech Startup / Studio"
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      What would you like to build or discuss? *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Laxman, I would like to discuss a project regarding..."
                      className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-dark-950 font-bold text-sm transition-all shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Let's Build Something
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Details & Social Terminal Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Email Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-slate-400 uppercase">Direct Email</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-display font-semibold text-white hover:text-cyan-300 transition-colors text-base"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-slate-400 uppercase">Phone & WhatsApp</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-display font-semibold text-white hover:text-indigo-300 transition-colors text-base font-mono"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono text-xs text-slate-400 uppercase">Location</div>
                <div className="font-display font-semibold text-white text-base">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Links Terminal */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <div className="font-mono text-xs text-slate-400 uppercase">Professional Network</div>
              <div className="flex flex-wrap gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-indigo-400" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <Globe className="w-4 h-4 text-emerald-400" />
                  laxman-sharma.com.np
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
