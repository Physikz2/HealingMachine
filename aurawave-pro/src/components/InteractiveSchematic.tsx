import React, { useState } from 'react';
import { Sliders, Wrench, ShieldAlert, CheckCircle, ZoomIn, ArrowRight, Layers, Cpu } from 'lucide-react';
import cadBlueprintImg from '../assets/images/aurawave_blueprint_cad_1789076684215.jpg';

export const InteractiveSchematic: React.FC = () => {
  const [sparkGapDistance, setSparkGapDistance] = useState<number>(0.45); // in millimeters
  const [activeTab, setActiveTab] = useState<'calibrator' | 'blueprint' | 'assemblySteps'>('calibrator');

  // Diagnostic feedback based on gap width (from PDF page 8, 14-15)
  const getGapStatus = (gap: number) => {
    if (gap < 0.38) {
      return {
        status: "Too Narrow (Arc Latch-Up)",
        color: "text-rose-400 border-rose-500/40 bg-rose-950/40",
        message: "Electrodes too close. Voltage breaks down prematurely with low joule density. Risk of zinc ball bridging.",
        efficiency: "42% Harmonic Yield"
      };
    } else if (gap <= 0.52) {
      return {
        status: "Optimal Bio-Resonance (0.40 - 0.50mm)",
        color: "text-emerald-400 border-emerald-500/40 bg-emerald-950/40",
        message: "Exact PDF tolerance. Steep sub-nanosecond avalanche pulse fronts producing full multi-octave harmonic spectrum.",
        efficiency: "99.4% Peak Coherence"
      };
    } else {
      return {
        status: "Too Wide (Dielectric Quench)",
        color: "text-amber-400 border-amber-500/40 bg-amber-950/40",
        message: "Air barrier impedance too high. Requires excessive voltage, causing sporadic misfires and high acoustic noise.",
        efficiency: "58% Inconsistent Pulses"
      };
    }
  };

  const currentStatus = getGapStatus(sparkGapDistance);

  return (
    <section id="schematics" className="py-24 bg-[#0b0f17] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Assembly & CAD Inspection</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Mechanical Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">& Feeler Calibration</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Directly modeled on the v0.3 technical schematics: explore the micro-metric 0.45mm spark gap mechanics and explore the exact millimeter assembly tolerances.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm font-mono">
            <button
              onClick={() => setActiveTab('calibrator')}
              className={`px-4 sm:px-6 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'calibrator'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>0.45mm Feeler Calibrator</span>
            </button>

            <button
              onClick={() => setActiveTab('blueprint')}
              className={`px-4 sm:px-6 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'blueprint'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>CAD Blueprint Layout</span>
            </button>

            <button
              onClick={() => setActiveTab('assemblySteps')}
              className={`px-4 sm:px-6 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                activeTab === 'assemblySteps'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>PDF Build Specs (v0.3)</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Feeler Gauge Calibrator */}
        {activeTab === 'calibrator' && (
          <div id="calibrator" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
            {/* Visual Micro-Gap Chamber Simulation */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800/90 p-6 flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden">
              {/* Background Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none" />

              {/* Status Banner */}
              <div className="w-full flex items-center justify-between z-10 text-xs font-mono pb-4 border-b border-slate-800">
                <span className="text-slate-400">FEELER GAUGE TOLERANCE CHECK</span>
                <span className={`px-3 py-1 rounded-full border text-[11px] font-bold ${currentStatus.color}`}>
                  {currentStatus.status}
                </span>
              </div>

              {/* Physical Zinc Rods Visual Representation */}
              <div className="relative my-12 flex items-center justify-center w-full z-10">
                {/* Left Zinc Rod (Diameter 10mm) */}
                <div className="relative flex items-center">
                  <div className="w-28 sm:w-36 h-12 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-l-md border border-slate-400 shadow-md shadow-slate-900 flex items-center justify-start pl-3 text-[10px] font-mono font-bold text-slate-800">
                    Ø10mm Zn
                  </div>
                  {/* Beveled Arc Tip */}
                  <div className="w-4 h-12 bg-gradient-to-r from-slate-300 to-slate-100 rounded-r-full shadow-inner border-y border-r border-slate-400" />
                </div>

                {/* Micro Spark Gap Dimension (Dynamically Spaced by slider) */}
                <div 
                  className="relative flex flex-col items-center justify-center transition-all duration-150"
                  style={{ width: `${Math.max(16, sparkGapDistance * 110)}px` }}
                >
                  {/* Dynamic Plasma Arc Sparks */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-full h-1 bg-gradient-to-r from-cyan-400 via-white to-purple-400 shadow-[0_0_15px_#a855f7] animate-pulse"
                      style={{ opacity: sparkGapDistance >= 0.35 && sparkGapDistance <= 0.65 ? 1 : 0.2 }}
                    />
                  </div>

                  {/* Feeler Gauge Blade Guide Indicator */}
                  <div className="absolute -top-7 text-[10px] font-mono text-amber-400 whitespace-nowrap bg-slate-900/90 px-2 py-0.5 rounded border border-amber-500/40">
                    Gap: {sparkGapDistance.toFixed(2)} mm
                  </div>

                  {/* Spark Flash Particle */}
                  {sparkGapDistance >= 0.38 && sparkGapDistance <= 0.52 && (
                    <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_20px_#38bdf8] animate-ping" />
                  )}
                </div>

                {/* Right Zinc Rod (Diameter 10mm) */}
                <div className="relative flex items-center">
                  {/* Beveled Arc Tip */}
                  <div className="w-4 h-12 bg-gradient-to-l from-slate-300 to-slate-100 rounded-l-full shadow-inner border-y border-l border-slate-400" />
                  <div className="w-28 sm:w-36 h-12 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-500 rounded-r-md border border-slate-400 shadow-md shadow-slate-900 flex items-center justify-end pr-3 text-[10px] font-mono font-bold text-slate-800">
                    Ø10mm Zn
                  </div>
                </div>
              </div>

              {/* Bottom Chamber Details */}
              <div className="w-full z-10 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800 gap-2">
                <div>CHAMBER: IP65 Smoked Acrylic</div>
                <div>CONTACT: Sanded SK10 Clamp (M6 Tapped)</div>
                <div className="text-amber-400 font-bold">{currentStatus.efficiency}</div>
              </div>
            </div>

            {/* Right Column: Controls & Instructions */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  PRECISION MICROMETER CONTROL
                </div>
                <h3 className="text-2xl font-display font-bold text-white mt-1">
                  Tune the Gap Distance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 font-sans leading-relaxed">
                  Per <strong>Page 8 & 14-15</strong> of the schematics, the zinc electrodes must be set between <strong>0.40 mm and 0.50 mm</strong> using a precision feeler gauge or razor blade thickness.
                </p>
              </div>

              {/* Range Slider */}
              <div className="space-y-2 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">Calibrated Gap Spacing:</span>
                  <span className="text-xl font-bold font-mono text-amber-400">
                    {sparkGapDistance.toFixed(2)} mm
                  </span>
                </div>

                <input
                  type="range"
                  min="0.10"
                  max="1.00"
                  step="0.01"
                  value={sparkGapDistance}
                  onChange={(e) => setSparkGapDistance(parseFloat(e.target.value))}
                  className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-1">
                  <span>0.10mm (Short)</span>
                  <span className="text-emerald-400 font-bold">0.45mm (Sweet Spot)</span>
                  <span>1.00mm (Quench)</span>
                </div>
              </div>

              {/* Quick Snap to Perfect Calibrated 0.45mm Button */}
              <button
                onClick={() => setSparkGapDistance(0.45)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-amber-500/50 text-slate-200 text-xs font-mono font-semibold flex items-center justify-center space-x-2 transition-all"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Snap to 0.45 mm Factory Precision Feeler</span>
              </button>

              {/* Diagnostic Explanation Card */}
              <div className={`p-4 rounded-xl border ${currentStatus.color}`}>
                <div className="text-xs font-mono font-bold flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{currentStatus.status}</span>
                </div>
                <p className="text-xs mt-1.5 font-sans leading-relaxed opacity-90">
                  {currentStatus.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: CAD Blueprint Layout & Dimensions */}
        {activeTab === 'blueprint' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl relative group">
              <img
                src={cadBlueprintImg}
                alt="CAD Blueprint Schematics"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-cyan-400 border border-cyan-800">
                BLUEPRINT: SCHEMATIC SPEC V0.3
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                GEOMETRIC TOLERANCES
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Laser-Symmetrical Layout
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Extracted directly from the blueprint measurements on Page 2, 3, 6, and 7:
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Plexiglass Dielectric Bed:</span>
                  <span className="text-white font-bold">11.0 cm × 17.0 cm (4mm thick)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">SK10 Clamp Spacing:</span>
                  <span className="text-white font-bold">16 mm Center-to-Outer Pitch</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">T2 Copper Bus Length:</span>
                  <span className="text-white font-bold">10.0 cm (3mm × 15mm Flat Bar)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Zinc Rod Length (Cut):</span>
                  <span className="text-white font-bold">10cm rod bisected to 5cm pairs</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Bolt Drill Diameter:</span>
                  <span className="text-white font-bold">6.5 mm - 7.0 mm (M6 Hex)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: PDF Build Specs (v0.3) Notes */}
        {activeTab === 'assemblySteps' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold flex items-center justify-center text-sm">
                01
              </div>
              <h4 className="text-lg font-display font-bold text-white">SK10 Clamp Preparation</h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                (Page 4-5) Thread the SK10 holes from the bottom using an M6 tap. Sand down the mounting beds to bare conductive aluminum so they conduct without the non-conductive anodized factory coating.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold flex items-center justify-center text-sm">
                02
              </div>
              <h4 className="text-lg font-display font-bold text-white">Forced Air Quenching Fans</h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                (Page 8-10) Install twin WINSINN 40mm brushless 12V hydraulic fans on opposing walls of the IP65 enclosure with chrome wire guards. Ensures continuous de-ionization of the spark chamber.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-mono font-bold flex items-center justify-center text-sm">
                03
              </div>
              <h4 className="text-lg font-display font-bold text-white">Capacitor Bank Safety</h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                (Page 11-13) Marked feeds with red and black shrink sleeves. Prior to touching electrodes or performing feeler gauge maintenance, bridge the feeds with the safety jumper to discharge stored joules.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
