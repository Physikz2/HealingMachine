import React, { useState, useEffect } from 'react';
import { Zap, Shield, PhoneCall, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOrderClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/50 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Product Name */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-1.5">
              <span className="font-display font-black text-xl tracking-tight text-white">
                AuraWave <span className="text-amber-400">Pro™</span>
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 -mt-1 hidden sm:block">
              QUANTUM CELLULAR BIO-RESONANCE
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#technology" className="hover:text-amber-400 transition-colors">
            Core Technology
          </a>
          <a href="#schematics" className="hover:text-amber-400 transition-colors">
            PDF Schematics
          </a>
          <a href="#calibrator" className="hover:text-amber-400 transition-colors">
            Micro-Gap Tuner
          </a>
          <a href="#frequencies" className="hover:text-amber-400 transition-colors">
            Resonance Modes
          </a>
          <a href="#comparison" className="hover:text-amber-400 transition-colors">
            Clinical Proof
          </a>
          <a href="#pricing" className="hover:text-amber-400 transition-colors">
            Order Packages
          </a>
        </nav>

        {/* Live Batch Allocation & Order Action */}
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Batch 03: 7 Units Left</span>
          </div>

          <button
            onClick={onOrderClick}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 active:scale-95"
          >
            <span>Reserve Machine</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
