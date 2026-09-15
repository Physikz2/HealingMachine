import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Maximize2, ShieldCheck, Zap, Activity, Eye, Sliders } from 'lucide-react';
import { VIDEO_SCENES } from '../data/productData';

interface Props {
  onOrderClick: () => void;
}

export const HeroVideoCommercial: React.FC<Props> = ({ onOrderClick }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isXrayMode, setIsXrayMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const TOTAL_DURATION = 10.0; // 10-second commercial loop

  // Animation frame loop for precise 10-second timeline
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const loop = (now: number) => {
      const delta = (now - lastTimestamp) / 1000;
      lastTimestamp = now;

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + delta;
          return next >= TOTAL_DURATION ? 0 : next;
        });
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  // Determine current active scene
  const currentSceneIndex = VIDEO_SCENES.findIndex(
    (scene) => currentTime >= scene.startTime && currentTime < scene.endTime
  );
  const activeScene = VIDEO_SCENES[currentSceneIndex >= 0 ? currentSceneIndex : 0];

  // Canvas-based dynamic plasma electric arc effect during spark scenes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let sparkCooldown = 0;

    const renderPlasma = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only draw heavy plasma sparks during scene 2 and active transitions
      const isSparkActive = currentTime >= 2.0 && currentTime <= 6.5;

      if (isSparkActive) {
        sparkCooldown++;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const gapWidth = 36; // representing the 0.45mm scaled gap

        // Glow aura
        const gradient = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, 90);
        gradient.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
        gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(centerX - 100, centerY - 100, 200, 200);

        // Electrodes silhouettes
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(centerX - 120, centerY - 14, 120 - gapWidth / 2, 28);
        ctx.fillRect(centerX + gapWidth / 2, centerY - 14, 120 - gapWidth / 2, 28);

        // Electrode tips (chamfered pure zinc)
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.arc(centerX - gapWidth / 2, centerY, 14, -Math.PI / 2, Math.PI / 2, false);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX + gapWidth / 2, centerY, 14, Math.PI / 2, (3 * Math.PI) / 2, false);
        ctx.fill();

        // High-voltage lightning sparks
        const startX = centerX - gapWidth / 2;
        const endX = centerX + gapWidth / 2;
        const numSegments = 6;

        for (let branch = 0; branch < (sparkCooldown % 3 === 0 ? 3 : 1); branch++) {
          ctx.beginPath();
          ctx.moveTo(startX, centerY + (Math.random() - 0.5) * 6);

          let currentX = startX;
          let currentY = centerY;
          const stepX = (endX - startX) / numSegments;

          for (let i = 1; i <= numSegments; i++) {
            currentX += stepX;
            currentY = centerY + (Math.random() - 0.5) * 16;
            ctx.lineTo(currentX, currentY);
          }
          ctx.lineTo(endX, centerY + (Math.random() - 0.5) * 6);

          ctx.strokeStyle = branch === 0 ? '#ffffff' : '#c084fc';
          ctx.lineWidth = branch === 0 ? 2.5 : 1.5;
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 12;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        // Particle sparks
        for (let p = 0; p < 4; p++) {
          const px = centerX + (Math.random() - 0.5) * 60;
          const py = centerY + (Math.random() - 0.5) * 50;
          ctx.fillStyle = '#e0e7ff';
          ctx.beginPath();
          ctx.arc(px, py, Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(renderPlasma);
    };

    renderPlasma();
    return () => cancelAnimationFrame(animId);
  }, [currentTime]);

  // Web Audio API ambient bio-resonance synthesizer
  const toggleAudio = () => {
    if (isMuted) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(528, ctx.currentTime); // 528Hz Solfeggio bio-harmonic
        gain.gain.setValueAtTime(0.04, ctx.currentTime); // gentle ambient volume

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsMuted(false);
      } catch {
        // audio fallback
      }
    } else {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
      }
      setIsMuted(true);
    }
  };

  const jumpToScene = (startTime: number) => {
    setCurrentTime(startTime);
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div id="product-commercial-container" className="relative w-full max-w-5xl mx-auto my-8">
      {/* Outer Luxury Enclosure Framing (Matches Smoked IP65 & Mahogany Aesthetic) */}
      <div 
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-amber-500/5 group"
      >
        {/* Top Video Header Bar (Commercial Telemetry HUD) */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border-b border-slate-800 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-semibold tracking-wider">10-SECOND CINEMATIC OVERVIEW</span>
            <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px]">
              VERSION 0.3 SCHEMATICS
            </span>
          </div>

          <div className="hidden sm:flex items-center space-x-4 text-slate-400">
            <div className="flex items-center space-x-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>ARC GAP: <strong className="text-white">0.45 mm</strong></span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>ELECTRODE: <strong className="text-white">99.95% Zn</strong></span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Sliders className="w-3.5 h-3.5 text-purple-400" />
              <span>RESONANCE: <strong className="text-white">528 Hz</strong></span>
            </div>
          </div>

          <button
            onClick={() => setIsXrayMode(!isXrayMode)}
            className={`flex items-center space-x-1.5 px-2.5 py-1 rounded transition-colors text-[11px] font-mono ${
              isXrayMode 
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' 
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
            }`}
            title="Toggle CAD Technical Blueprint View"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isXrayMode ? 'CAD X-RAY ACTIVE' : 'CAD X-RAY VIEW'}</span>
          </button>
        </div>

        {/* Cinematic Main Screen Stage */}
        <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-black select-none">
          {/* Active Visual Feed: Photographic Cinema vs CAD X-Ray */}
          <div className="absolute inset-0 transition-opacity duration-700 ease-out">
            <img
              src={isXrayMode ? (activeScene.altImage || activeScene.image) : activeScene.image}
              alt={activeScene.title}
              className="w-full h-full object-cover object-center transform scale-100 sm:scale-105 transition-transform duration-[3000ms] ease-out"
              key={`${activeScene.id}-${isXrayMode}`}
              loading="eager"
              decoding="async"
              onError={(e) => {
                // Fail-safe public path fallback
                const target = e.currentTarget;
                if (!target.dataset.fallbackTried) {
                  target.dataset.fallbackTried = "true";
                  if (activeScene.id === 1) target.src = "/images/aurawave_hero_device_1789076620144.jpg";
                  else if (activeScene.id === 2 || activeScene.id === 3) target.src = "/images/aurawave_spark_chamber_1789076632679.jpg";
                  else target.src = "/images/aurawave_cellular_regen_1789076648984.jpg";
                }
              }}
            />
            {/* Cinematic subtle film grain & lighting vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />
          </div>

          {/* Dynamic Plasma Arc Canvas Overlay (Visualized Spark Gap breakdown) */}
          <canvas
            ref={canvasRef}
            width={640}
            height={360}
            className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-90 mix-blend-screen"
          />

          {/* HUD Target Crosshairs & Blueprint Dimension Markers */}
          <div className="absolute inset-0 pointer-events-none z-20 p-3 sm:p-6 flex flex-col justify-between">
            {/* Top Left: Scene Number & Live Technical Spec Badge */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-[10px] sm:text-xs font-mono">
                  <span className="text-amber-400 font-bold">SCENE 0{activeScene.id}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-200 truncate max-w-[180px] sm:max-w-none">{activeScene.techHighlight}</span>
                </div>
                <div className="text-[10px] sm:text-xs font-mono text-cyan-300/80 pl-1 sm:pl-2">
                  10s LOOP • {currentTime.toFixed(1)}s / {TOTAL_DURATION.toFixed(1)}s
                </div>
              </div>

              {/* Right Side: Medical & Engineering Certification Stamp */}
              <div className="flex flex-col items-end space-y-1">
                <div className="flex items-center space-x-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/70 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[9px] sm:text-[11px] font-mono">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span className="hidden xs:inline">CALIBRATED TOLERANCE</span>
                  <span className="xs:hidden">VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Bottom Left: Headline & Descriptive Value Hook */}
            <div className="max-w-xl bg-gradient-to-r from-slate-950/95 via-slate-900/90 to-slate-950/70 p-3 sm:p-4 rounded-xl backdrop-blur-md border-l-2 sm:border-l-4 border-amber-500">
              <h3 className="text-sm sm:text-lg md:text-xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                {activeScene.title}
              </h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-300 mt-0.5 sm:mt-1 font-sans leading-relaxed line-clamp-2 sm:line-clamp-none">
                {activeScene.subtitle}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 mt-1.5 sm:mt-2">
                {activeScene.specs.map((spec, i) => (
                  <span 
                    key={i} 
                    className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded bg-slate-800/90 text-slate-200 border border-slate-700"
                  >
                    ✓ {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Center Play Overlay Icon when Paused */}
          {!isPlaying && (
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-amber-500/90 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-500/30 transition-transform transform hover:scale-110 z-30"
              aria-label="Play commercial"
            >
              <Play className="w-7 h-7 ml-1 fill-current" />
            </button>
          )}
        </div>

        {/* 10-Second Looping Progress Bar Bar (Interactive & Continuous) */}
        <div className="relative h-2 bg-slate-800 cursor-pointer group/bar">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 via-purple-500 to-cyan-400 transition-[width] duration-75"
            style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
          />
          {/* Scene Marker Notches at 2.5s intervals */}
          {[0.25, 0.5, 0.75].map((pct, idx) => (
            <div
              key={idx}
              className="absolute top-0 bottom-0 w-0.5 bg-slate-900 z-10"
              style={{ left: `${pct * 100}%` }}
            />
          ))}
        </div>

        {/* Video Control Bar & Navigation Tabs */}
        <div className="px-4 py-3 bg-slate-950 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-slate-900">
          {/* Playback Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={() => jumpToScene(0)}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Restart 10-Second Loop"
              aria-label="Restart commercial"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={toggleAudio}
              className={`p-2 rounded-lg transition-colors ${
                !isMuted 
                  ? 'bg-amber-500 text-black font-semibold' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
              }`}
              title={isMuted ? "Unmute 528Hz Harmonic Drone" : "Mute Audio"}
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <span className="font-mono text-slate-400 pl-1">
              00:{currentTime < 10 ? `0${Math.floor(currentTime)}` : '10'} / 00:10
            </span>
          </div>

          {/* 4 Scene Quick-Jump Buttons */}
          <div className="flex items-center space-x-1.5 overflow-x-auto py-1">
            {VIDEO_SCENES.map((scene, index) => {
              const isCurrent = activeScene.id === scene.id;
              return (
                <button
                  key={scene.id}
                  onClick={() => jumpToScene(scene.startTime)}
                  className={`px-3 py-1 rounded-md text-[11px] font-mono transition-all flex items-center space-x-1 whitespace-nowrap ${
                    isCurrent
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-sm shadow-amber-500/10'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: scene.color }} />
                  <span>0{index + 1}: {scene.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action: Instant Conversion Trigger & Fullscreen */}
          <div className="flex items-center space-x-2">
            <button
              onClick={onOrderClick}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-xs transition-all shadow-md shadow-amber-500/20 active:scale-95"
            >
              Claim Healing System →
            </button>

            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Toggle Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges Under Commercial Frame */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs text-slate-400 font-mono">
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 flex items-center justify-center space-x-2">
          <span className="text-amber-400 font-bold">99.95%</span>
          <span>Pure Zinc Electrodes</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 flex items-center justify-center space-x-2">
          <span className="text-cyan-400 font-bold">0.45mm</span>
          <span>Feeler-Gauge Precision</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 flex items-center justify-center space-x-2">
          <span className="text-emerald-400 font-bold">T2 Pure Cu</span>
          <span>Heavy Bus Conductor</span>
        </div>
        <div className="bg-slate-900/60 border border-slate-800/80 rounded-lg p-2 flex items-center justify-center space-x-2">
          <span className="text-purple-400 font-bold">Dual 40mm</span>
          <span>Forced Ionic Quench</span>
        </div>
      </div>
    </div>
  );
};
