import React, { useState, useEffect, useRef } from 'react';
import { Activity, Radio, Volume2, VolumeX, Sparkles, Check } from 'lucide-react';
import { RESONANCE_MODES } from '../data/productData';

export const FrequencySimulator: React.FC = () => {
  const [selectedModeId, setSelectedModeId] = useState<string>(RESONANCE_MODES[0].id);
  const [intensity, setIntensity] = useState<number>(75); // 0 to 100%
  const [isToneActive, setIsToneActive] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const selectedMode = RESONANCE_MODES.find((m) => m.id === selectedModeId) || RESONANCE_MODES[0];

  // Canvas Oscilloscope Waveform Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let phase = 0;

    const renderWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw faint oscilloscope grid lines
      ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Primary Bio-Resonant Waveform with steep spark spikes
      ctx.beginPath();
      ctx.strokeStyle = selectedMode.waveColor;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = selectedMode.waveColor;
      ctx.shadowBlur = 10;

      const amplitude = (height * 0.28) * (intensity / 100);
      const freqMultiplier = selectedMode.hzValue < 100 ? 0.02 : 0.05;

      for (let x = 0; x < width; x++) {
        // Base sine wave combined with steep avalanche impulse spike simulation
        const angle = x * freqMultiplier + phase;
        let y = centerY + Math.sin(angle) * amplitude;

        // Add periodic spark gap avalanche spikes (sub-nanosecond rise time simulation)
        if (Math.abs(Math.sin(angle * 3)) > 0.94) {
          y += (Math.random() - 0.5) * amplitude * 0.8;
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      phase += 0.08 * (intensity / 50);
      animId = requestAnimationFrame(renderWave);
    };

    renderWave();
    return () => cancelAnimationFrame(animId);
  }, [selectedMode, intensity]);

  // Audio Tone Generator for the Selected Frequency
  const toggleSound = () => {
    if (isToneActive) {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
      }
      setIsToneActive(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Tune oscillator frequency (scaled for audible pleasant listening)
        const audibleFreq = selectedMode.hzValue < 50 ? selectedMode.hzValue * 20 : Math.min(selectedMode.hzValue, 650);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(audibleFreq, ctx.currentTime);

        const volume = Math.min(0.08, (intensity / 100) * 0.06);
        gain.gain.setValueAtTime(volume, ctx.currentTime);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsToneActive(true);
      } catch {
        // Fallback gracefully
      }
    }
  };

  // Change audio frequency on mode switch
  useEffect(() => {
    if (isToneActive && oscRef.current && audioContextRef.current) {
      const audibleFreq = selectedMode.hzValue < 50 ? selectedMode.hzValue * 20 : Math.min(selectedMode.hzValue, 650);
      oscRef.current.frequency.setValueAtTime(audibleFreq, audioContextRef.current.currentTime);
    }
  }, [selectedModeId, isToneActive, selectedMode.hzValue]);

  return (
    <section id="frequencies" className="py-24 bg-[#0d121d] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Radio className="w-3.5 h-3.5" />
            <span>Harmonic Multi-Wave Emission</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Bio-Resonance <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-300 to-amber-400">Frequency Modes</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Every cell in the human body operates as a tuned resonant circuit. Select the therapeutic harmonic envelope to witness how the spark gap adapts its pulse cadence.
          </p>
        </div>

        {/* Oscilloscope Stage & Mode Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Mode Cards */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            {RESONANCE_MODES.map((mode) => {
              const isSelected = mode.id === selectedModeId;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedModeId(mode.id)}
                  className={`text-left p-5 rounded-2xl border transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-800/90 border-amber-500/80 shadow-xl shadow-amber-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-850 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full" style={{ backgroundColor: `${mode.waveColor}20`, color: mode.waveColor }}>
                      {mode.frequency}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {mode.sparkRate}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white mt-2">
                    {mode.name}
                  </h4>

                  <p className="text-xs text-slate-300 font-sans mt-1">
                    {mode.targetBenefit}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Live Digital Oscilloscope Screen */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            {/* Top Oscilloscope Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-850 text-xs font-mono">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300 font-bold">DIGITAL HARMONIC ANALYZER</span>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-slate-400 hidden sm:inline">CH1: AVALANCHE ARC</span>
                <button
                  onClick={toggleSound}
                  className={`px-3 py-1 rounded-lg flex items-center space-x-1.5 transition-colors text-xs ${
                    isToneActive
                      ? 'bg-purple-500 text-slate-950 font-bold shadow-md shadow-purple-500/20'
                      : 'bg-slate-850 hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  {isToneActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                  <span>{isToneActive ? 'Tone On' : 'Hear Frequency'}</span>
                </button>
              </div>
            </div>

            {/* Oscilloscope CRT Canvas Screen */}
            <div className="relative my-4 rounded-xl overflow-hidden border border-slate-800/80 bg-[#060a12] aspect-video">
              <canvas
                ref={canvasRef}
                width={600}
                height={338}
                className="w-full h-full object-cover"
              />

              {/* On-screen Telemetry Overlay */}
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-cyan-400 bg-slate-950/80 px-2 py-1 rounded border border-cyan-800/50">
                SWEEP: 50μs/DIV • PK-PK: 14.8 kV • Zn EMISSION: STABLE
              </div>

              <div className="absolute top-3 right-3 text-[10px] font-mono text-amber-400 bg-slate-950/80 px-2 py-1 rounded border border-amber-800/50">
                ACTIVE MODE: {selectedMode.frequency}
              </div>
            </div>

            {/* Bottom Controls: Intensity Potentiometer & Specs */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-mono text-slate-400">ARC DISCHARGE INTENSITY</div>
                  <div className="text-sm font-bold text-white font-mono">{intensity}% Plasma Output</div>
                </div>

                <div className="w-1/2">
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={intensity}
                    onChange={(e) => setIntensity(parseInt(e.target.value))}
                    className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Mechanism Description */}
              <p className="text-xs text-slate-300 font-sans leading-relaxed bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80">
                <strong className="text-amber-400">Protocol Description:</strong> {selectedMode.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
