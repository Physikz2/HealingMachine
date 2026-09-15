import React from 'react';
import { Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      feature: "Pulse Rise Time & Harmonic Cascade",
      aurawave: "Sub-nanosecond (<1.2 ns) avalanche spark breakdown",
      others: "Slow millisecond/microsecond synthetic transitions",
      advantage: true
    },
    {
      feature: "Electrode Purity & Ionization",
      aurawave: "99.95% Pure Elemental Zinc (biocompatible mineral vapor)",
      others: "Toxic synthetic rubber or chemical gel pads",
      advantage: true
    },
    {
      feature: "Frequency Depth & Spectrum",
      aurawave: "Infinite multi-wave fractal harmonics (Audio to 3GHz)",
      others: "Single rigid artificial sine or square wave",
      advantage: true
    },
    {
      feature: "Cellular ATP & Mitochondrial Stimulation",
      aurawave: "+300% transmembrane potential restoration",
      others: "Superficial cutaneous sensory nerve distraction only",
      advantage: true
    },
    {
      feature: "Ionic Quenching & Thermal Stabilization",
      aurawave: "Dual 40mm hydraulic brushless fans with chrome wire guards",
      others: "None; prone to thermal runaway & frequency drift",
      advantage: true
    },
    {
      feature: "Build Architecture & Materials",
      aurawave: "T2 solid copper bus, SK10 CNC aluminum, 4mm optical acrylic",
      others: "Thin mass-produced plastic housings",
      advantage: true
    }
  ];

  return (
    <section id="comparison" className="py-24 bg-[#0b0f17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Clinical Superiority Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            AuraWave Pro™ <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">vs Conventional Devices</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            See why high-performance clinics and biological medicine practitioners are upgrading from sterile digital synthesizers to calibrated zinc spark gap systems.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-900/80 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/90 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <th className="p-5 sm:p-6 w-1/3">Technology Metric</th>
                  <th className="p-5 sm:p-6 w-1/3 bg-amber-500/10 text-amber-300 border-x border-amber-500/20 font-bold">
                    AuraWave Pro™ (Zinc Spark Gap)
                  </th>
                  <th className="p-5 sm:p-6 w-1/3 text-slate-400">
                    Conventional TENS / Consumer PEMF
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                    <td className="p-5 sm:p-6 font-medium text-slate-200 font-display">
                      {row.feature}
                    </td>
                    <td className="p-5 sm:p-6 bg-amber-500/5 text-amber-200 border-x border-amber-500/20 font-sans">
                      <div className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.aurawave}</span>
                      </div>
                    </td>
                    <td className="p-5 sm:p-6 text-slate-400 font-sans">
                      <div className="flex items-start space-x-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-950/70 border-t border-slate-800 text-center text-xs font-mono text-slate-400">
            *Verified against standard electro-therapy lab benchmark tests & dielectric avalanche models.
          </div>
        </div>
      </div>
    </section>
  );
};
