import React, { useState } from 'react';
import { 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  Activity, 
  Gauge, 
  CheckCircle2, 
  Layers, 
  Play, 
  Download,
  Flame,
  Award
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroVideoCommercial } from './components/HeroVideoCommercial';
import { ValueProposition } from './components/ValueProposition';
import { InteractiveSchematic } from './components/InteractiveSchematic';
import { FrequencySimulator } from './components/FrequencySimulator';
import { ComparisonTable } from './components/ComparisonTable';
import { Testimonials } from './components/Testimonials';
import { OrderSection } from './components/OrderSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { PRICING_TIERS } from './data/productData';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [selectedTierId, setSelectedTierId] = useState<string>(PRICING_TIERS[1].id);

  const handleOpenOrder = (tierId?: string) => {
    if (tierId) {
      setSelectedTierId(tierId);
    }
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onOrderClick={() => handleOpenOrder(PRICING_TIERS[1].id)} />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Ambient Plasma Glow Orbs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-purple-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Pill: Schematics & Technology Verification */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/40 text-xs font-mono text-amber-300 shadow-lg shadow-amber-500/5 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-semibold tracking-wider">VERSION 0.3 SPECIFICATION</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300 hidden sm:inline">0.45mm PURE ZINC SPARK GAP</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px]">
                CLINICAL GRADE
              </span>
            </div>
          </div>

          {/* High-Impact Hero Headline */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-[1.08] text-white">
              <span className="text-amber-400">AuraWave Pro™:</span> The Quantum Cellular Bio-Resonance & Regeneration Healing Machine
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
              Restore deep cellular coherence, accelerate tissue recovery, and recharge mitochondrial vitality with the world’s first <strong>99.95% pure elemental zinc</strong> avalanche spark gap generator.
            </p>

            {/* Quick Hero Call-To-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => handleOpenOrder(PRICING_TIERS[1].id)}
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-display font-extrabold text-base tracking-wide transition-all shadow-xl shadow-amber-500/20 active:scale-95 flex items-center space-x-2 group"
              >
                <span>Claim Batch 03 Allocation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calibrator"
                className="px-6 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-mono text-sm tracking-wide transition-all flex items-center space-x-2"
              >
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>Test 0.45mm Micro-Gap</span>
              </a>
            </div>

            {/* Micro-Trust Highlights */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-2 text-xs font-mono text-slate-400">
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>60-Day Vitality Guarantee</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Feeler Gauge Precision Certified</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free Insured Express Worldwide Delivery</span>
              </span>
            </div>
          </div>

          {/* THE 10-SECOND CINEMATIC PRODUCT VIDEO COMPONENT */}
          <HeroVideoCommercial onOrderClick={() => handleOpenOrder(PRICING_TIERS[1].id)} />

          {/* Four Core Metric Callouts */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-display font-black text-amber-400">
                99.95%
              </div>
              <div className="text-xs font-mono text-slate-300 font-semibold mt-1">
                Pure Zinc Electrodes
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Trace-mineral zinc vaporizes at the arc tip for enzymatic synthesis.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-display font-black text-cyan-400">
                0.45 mm
              </div>
              <div className="text-xs font-mono text-slate-300 font-semibold mt-1">
                Feeler-Toleranced Gap
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Calibrated to sub-millimeter precision for avalanche dielectric breakdown.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-display font-black text-emerald-400">
                &lt; 1.2 ns
              </div>
              <div className="text-xs font-mono text-slate-300 font-semibold mt-1">
                Sub-Nanosecond Rise Time
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                Creates fractal multi-octave harmonics from audio to gigahertz.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-display font-black text-purple-400">
                Dual 40mm
              </div>
              <div className="text-xs font-mono text-slate-300 font-semibold mt-1">
                Hydraulic Ionic Quench
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                High-speed crossflow fans prevent arc latch-up & disperse negative ions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION: Breakdown of Core Tech Features from PDF */}
      <ValueProposition />

      {/* INTERACTIVE SCHEMATIC & FEELER CALIBRATOR */}
      <InteractiveSchematic />

      {/* BIO-RESONANCE FREQUENCY MODES & OSCILLOSCOPE */}
      <FrequencySimulator />

      {/* CLINICAL COMPARISON MATRIX */}
      <ComparisonTable />

      {/* TESTIMONIALS & CLINICAL PROOF */}
      <Testimonials />

      {/* ORDER CONVERSION AREA & PRICING TIERS */}
      <OrderSection onSelectTier={(tierId) => handleOpenOrder(tierId)} />

      {/* FAQ ACCORDION SECTION */}
      <FAQSection />

      {/* FOOTER */}
      <Footer />

      {/* HIGH-CONVERTING CHECKOUT / RESERVATION MODAL */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedTierId={selectedTierId}
      />
    </div>
  );
}
