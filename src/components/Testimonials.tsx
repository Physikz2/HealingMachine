import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/productData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d121d] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Clinical Evidence & Real World Results</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Practitioners & Biohackers</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Read clinical observations from integrative clinics and high-performance individuals who have integrated AuraWave Pro into their therapeutic regimens.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-900/80 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between shadow-xl relative backdrop-blur-xl group hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700 group-hover:text-amber-500/40 transition-colors" />
                </div>

                {/* Main Quote */}
                <p className="text-sm text-slate-200 font-sans leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-850 space-y-3">
                {/* Highlight Result Pill */}
                <div className="text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded-md">
                  ★ {t.result}
                </div>

                {/* Author Details */}
                <div className="flex items-center space-x-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <div className="text-sm font-display font-bold text-white flex items-center space-x-1">
                      <span>{t.name}</span>
                    </div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                    <div className="text-[10px] font-mono text-slate-500">{t.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
