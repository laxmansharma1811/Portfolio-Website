'use client';

import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export const AskLaxmanCopilot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'bot',
      text: `Hi! I'm Laxman's AI Copilot. Ask me about his fine-tuned NLP models at eSewa, Airflow pipelines at Dlytica, live apps (EduHub & Streamlit), or availability.`,
    },
  ]);

  const knowledgeBase = [
    {
      keywords: ['who', 'about', 'laxman', 'background', 'education', 'college', 'sunway'],
      reply: `${PERSONAL_INFO.name} is a Computer Science graduate (BSc Hons 2025) from Sunway College Kathmandu who specializes in fine-tuning NLP transformer models (BLOOM/BERT), async Python backends (FastAPI/Django), and automated ETL pipelines (Airflow).`,
    },
    {
      keywords: ['esewa', 'nlp', 'bhasabodh', 'translation', 'bloom', 'bert', 'bleu'],
      reply: 'At eSewa Ltd (Nov 2024 – Mar 2025), Laxman built BHASABODH, a Romanized-to-Devanagari NLP translation model & QA assistant. He fine-tuned transformer variants (BLOOM/BERT), set up BLEU evaluation loops, and integrated the model into FastAPI.',
    },
    {
      keywords: ['dlytica', 'airflow', 'etl', 'minio', 'pipeline', 'data engineering'],
      reply: 'At Dlytica (Jul – Nov 2024), Laxman developed automated Apache Airflow DAG workflows and integrated MinIO object storage for scalable cloud data transformation and ETL execution.',
    },
    {
      keywords: ['eduhub', 'django', 'vps', 'live', 'education', 'eduhubuniversalservices'],
      reply: 'EDUHUB Global Education Portal is a live SaaS platform (eduhubuniversalservices.com) built by Laxman using Django 4.2, PostgreSQL, Nginx, Uvicorn, and hosted on Nest Nepal VPS.',
    },
    {
      keywords: ['heart', 'disease', 'streamlit', 'prediction', 'scikit', 'ml'],
      reply: 'The Heart Disease Prediction System is live at heardiseaseprediction1811.streamlit.app. It uses trained scikit-learn classification models to evaluate clinical parameters in real-time.',
    },
    {
      keywords: ['contact', 'email', 'phone', 'hire', 'freelance', 'available'],
      reply: `Reach Laxman directly at ${PERSONAL_INFO.email} or ${PERSONAL_INFO.phone}. He is actively available for remote engineering roles and backend/ML contracting!`,
    },
    {
      keywords: ['resume', 'cv', 'pdf', 'download'],
      reply: `You can download his official resume PDF at ${PERSONAL_INFO.resumePdf} anytime.`,
    },
  ];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');

    const lower = userText.toLowerCase();
    let replyText = "I'm trained on Laxman's specific background, projects, and skills. Try asking about eSewa, Dlytica, EduHub, or how to contact him!";

    for (const item of knowledgeBase) {
      if (item.keywords.some((k) => lower.includes(k))) {
        replyText = item.reply;
        break;
      }
    }

    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: replyText };
      setMessages((prev) => [...prev, botMsg]);
    }, 300);
  };

  const handleReset = () => {
    setMessages([
      {
        id: 'init-reset',
        sender: 'bot',
        text: `Conversation reset. Feel free to ask any question about Laxman's skills or projects!`,
      },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-mono">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] max-h-[480px] bg-obsidian-950 rounded-xl border border-obsidian-800 shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="p-3.5 bg-obsidian-900 border-b border-obsidian-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-rust-500/20 text-rust-500 border border-rust-500/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-white text-xs uppercase">Ask Laxman Copilot</h4>
                <p className="text-[10px] text-rust-500">AI Fact Retrieval</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-obsidian-800"
                title="Reset Conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-obsidian-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-2.5 overflow-y-auto max-h-[300px] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-2.5 rounded text-[11px] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-rust-500 text-white font-medium'
                      : 'bg-obsidian-900 text-slate-200 border border-obsidian-800'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSend} className="p-3 bg-obsidian-900 border-t border-obsidian-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, eSewa, EduHub..."
              className="flex-1 bg-obsidian-950 border border-obsidian-800 rounded px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rust-500"
            />
            <button
              type="submit"
              className="p-2 rounded bg-rust-500 text-white font-bold hover:bg-rust-600"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}

      {/* Launcher */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-rust-500 hover:bg-rust-600 text-white font-bold shadow-xl flex items-center justify-center transition-all hover:scale-105"
        aria-label="Open AI Copilot"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  );
};
