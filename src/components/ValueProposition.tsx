import React, { useState } from 'react';
import { Zap, Gauge, Shield, Layers, Wind, Box, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { TECH_FEATURES } from '../data/productData';

export const ValueProposition: React.FC = () => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(TECH_FEATURES[0].id);

  const selectedFeature = TECH_FEATURES.find((f) => f.id === selectedFeatureId) || TECH_FEATURES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Gauge': return <Gauge className="w-5 h-5 text-cyan-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Wind': return <Wind className="w-5 h-5 text-sky-400" />;
      case 'Box': return <Box className="w-5 h-5 text-amber-300" />;
      default: return <Zap className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="technology" className="py-24 bg-[#0d121d] relative overflow-hidden border-t border-slate-800">
      {/* Subtle background radial aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Extracted From Version 0.3 Engineering Schematics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            The Science of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Avalanche Bio-Resonance</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Why digital synthesizers fail to stimulate living cells: how the AuraWave Pro™ combines sub-millimeter elemental physics, pure zinc ionic plasma, and steep-wave harmonics to trigger endogenous cellular repair.
          </p>
        </div>

        {/* Interactive Feature Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of 6 Core Technical Components from PDF */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 px-1">
              Select Architecture Component:
            </div>
            {TECH_FEATURES.map((feature, idx) => {
              const isSelected = feature.id === selectedFeatureId;
              return (
                <button
                  key={feature.id}
                  onClick={() => setSelectedFeatureId(feature.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-start space-x-4 ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-500/70 shadow-lg shadow-amber-500/10 scale-[1.01]'
                      : 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-850 hover:border-slate-700 text-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-slate-950 border border-amber-500/40' : 'bg-slate-800/60'
                  }`}>
                    {getIcon(feature.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-amber-400/90 tracking-wide">
                        MODULE 0{idx + 1} • {feature.tag}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        PDF REF
                      </span>
                    </div>
                    <h4 className="text-base font-display font-bold text-white tracking-tight mt-0.5 truncate">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-400 truncate mt-0.5">
                      {feature.componentName}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Technical Spec & Biological Benefit Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-cyan-400" />

              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-slate-800">
                <div>
                  <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/50 px-2.5 py-1 rounded-full mb-2">
                    <span>{selectedFeature.tag}</span>
                    <span>•</span>
                    <span>Schematic Verified</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-sm font-mono text-amber-400/90 mt-1">
                    {selectedFeature.componentName}
                  </p>
                </div>

                <div className="bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-right">
                  <div className="text-[10px] font-mono text-slate-400">DOCUMENT SOURCE</div>
                  <div className="text-xs font-mono text-slate-200 font-semibold">{selectedFeature.pdfReference.split(':')[0]}</div>
                </div>
              </div>

              {/* Source Reference Callout Box */}
              <div className="my-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 font-mono flex items-start space-x-3">
                <FileText className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-400">PDF Schematic Note:</strong> {selectedFeature.pdfReference}
                </div>
              </div>

              {/* Dual Benefit & Mechanism Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>HOLISTIC RECOVERY BENEFIT</span>
                  </div>
                  <p className="text-sm text-slate-200 font-sans leading-relaxed">
                    {selectedFeature.benefit}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-2">
                  <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400">
                    <Zap className="w-4 h-4" />
                    <span>BIOLOGICAL MECHANISM</span>
                  </div>
                  <p className="text-sm text-slate-200 font-sans leading-relaxed">
                    {selectedFeature.mechanism}
                  </p>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/40">
                <div className="bg-slate-950/80 px-4 py-2 border-b border-slate-800 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Verified Hardware Specifications
                </div>
                <div className="divide-y divide-slate-800/60">
                  {selectedFeature.specs.map((s, idx) => (
                    <div key={idx} className="flex justify-between items-center px-4 py-2.5 text-xs sm:text-sm">
                      <span className="text-slate-400 font-mono">{s.label}</span>
                      <span className="text-white font-mono font-semibold text-right">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual schematics badge */}
              <div className="mt-6 flex items-center justify-between text-xs font-mono text-slate-400 pt-4 border-t border-slate-800">
                <span className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Calibrated to DIN & High-Voltage Standards</span>
                </span>
                <a href="#schematics" className="text-amber-400 hover:text-amber-300 flex items-center space-x-1">
                  <span>View Assembly Blueprints</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
