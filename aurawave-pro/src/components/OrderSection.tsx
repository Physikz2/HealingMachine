import React from 'react';
import { Check, ShieldCheck, Zap, Sparkles, Clock, Truck, Gift } from 'lucide-react';
import { PRICING_TIERS } from '../data/productData';
import { PricingTier } from '../types';

interface OrderSectionProps {
  onSelectTier: (tierId: string) => void;
}

export const OrderSection: React.FC<OrderSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-24 bg-[#0b0f17] relative border-t border-slate-800">
      {/* Glow aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Urgent Allocation Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border border-amber-500/40 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>Batch 03 Live Allocation:</span>
          </div>
          <span className="text-white text-xs sm:text-sm font-semibold">
            Only 7 Hand-Calibrated Units Remaining for Immediate Shipment
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Investment in Cellular Longevity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Select Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">AuraWave Pro™ System</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Every machine is individually bench-tested, gap-calibrated to 0.45mm with precision feeler blades, and sealed with factory warranty certification.
          </p>
        </div>

        {/* 3 Pricing Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all relative backdrop-blur-xl ${
                tier.popular
                  ? 'bg-slate-900 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 lg:-translate-y-3'
                  : 'bg-slate-900/60 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Popular Ribbon */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-mono font-bold tracking-wider shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                {/* Tier Title & Description */}
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-xs text-slate-400 mt-2 font-sans min-h-[36px]">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="my-6 pt-4 border-t border-slate-800/80">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                      ${tier.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-mono text-slate-500 line-through">
                      ${tier.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-400 mt-1">
                    Save ${(tier.originalPrice - tier.price).toLocaleString()} with Batch 03 Intro Pricing
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Core Inclusions:
                  </div>
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Included Hardware Box */}
                <div className="mt-6 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs space-y-1.5">
                  <div className="font-mono text-amber-400 font-semibold flex items-center space-x-1">
                    <Gift className="w-3.5 h-3.5" />
                    <span>Included Accessories & Tools:</span>
                  </div>
                  <ul className="text-slate-400 space-y-1 pl-4 list-disc text-[11px]">
                    {tier.includedHardware.map((hw, i) => (
                      <li key={i}>{hw}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Conversion Action Button */}
              <div className="pt-8">
                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`w-full py-4 rounded-2xl font-display font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg active:scale-[0.98] ${
                    tier.popular
                      ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 shadow-amber-500/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  Order {tier.name.split(' ')[0]} Edition →
                </button>
                <div className="text-center text-[10px] font-mono text-slate-500 mt-2.5">
                  60-Day Trial • Insured Courier Delivery Included
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 60-Day Money Back Guarantee Section */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 rounded-3xl border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-12 h-12 stroke-[1.5]" />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Our 60-Day "Full Cellular Vitality" Guarantee
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                We know the power of raw 99.95% elemental zinc spark gap physics. Experience the AuraWave Pro in your own home or clinical practice for a full 60 days. If you do not experience marked improvements in recovery, cellular energy, or restful sleep, return the system in its original packaging for an immediate, courteous 100% refund.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-400">
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Zero restocking fees</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free return shipping label provided</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>2-Year to Lifetime Hardware Warranty</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
