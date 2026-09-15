import React from 'react';
import { Zap, Heart, Shield, FileCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500 flex items-center justify-center text-slate-950">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                AuraWave <span className="text-amber-400">Pro™</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs font-sans leading-relaxed max-w-md">
              The Quantum Cellular Bio-Resonance & Regeneration Healing Machine. Precision engineered with 99.95% pure elemental zinc electrodes, 0.45mm feeler-calibrated spark gap, solid T2 copper bus bars, and active forced-air ionic quenching.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              Directly inspired by the "Spark Gap Upgrade (v0.3)" engineering documentation.
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Architecture & Proof
            </div>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#technology" className="hover:text-amber-400 transition-colors">Core Technology</a></li>
              <li><a href="#schematics" className="hover:text-amber-400 transition-colors">0.45mm Feeler Calibrator</a></li>
              <li><a href="#frequencies" className="hover:text-amber-400 transition-colors">Resonance Modes & Oscilloscope</a></li>
              <li><a href="#comparison" className="hover:text-amber-400 transition-colors">Clinical Comparison</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">Batch 03 Allocation</a></li>
            </ul>
          </div>

          {/* Safety & Compliance */}
          <div className="space-y-3">
            <div className="font-mono text-xs uppercase tracking-wider text-white font-semibold">
              Safety & Standards
            </div>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>IP65 Smoked Dielectric Shield</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Feeler Gauge Calibrated</span>
              </li>
              <li className="flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Capacitor Safety Shunt Feed</span>
              </li>
            </ul>
            <button
              onClick={scrollToTop}
              className="mt-4 flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs font-mono transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Medical & Wellness Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-[11px] text-slate-500 font-sans leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> AuraWave Pro™ is an experimental bio-resonance, harmonic frequency, and wellness electro-therapy system inspired by the works of Lakhovsky, Tesla, and modern multi-wave cellular regeneration research. Statements made on this site have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any medical condition. Individuals with electronic implants (such as pacemakers) or pregnancy should consult a qualified physician before using high-voltage bio-resonance devices.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-2">
          <div>© {new Date().getFullYear()} AuraWave Pro™ Technologies Inc. All rights reserved.</div>
          <div>Engineered with 99.95% Pure Zinc & Precision Spark Mechanics.</div>
        </div>
      </div>
    </footer>
  );
};
