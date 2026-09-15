import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, Lock, CreditCard, Sparkles } from 'lucide-react';
import { PricingTier } from '../types';
import { PRICING_TIERS } from '../data/productData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTierId?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, selectedTierId }) => {
  const [activeTierId, setActiveTierId] = useState<string>(selectedTierId || PRICING_TIERS[1].id);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    shippingAddress: '',
    city: '',
    country: 'United States',
    notes: ''
  });

  if (!isOpen) return null;

  const currentTier = PRICING_TIERS.find((t) => t.id === activeTierId) || PRICING_TIERS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              ⚡
            </div>
            <div>
              <h3 className="text-lg font-display font-bold text-white">
                Reserve AuraWave Pro™ System
              </h3>
              <p className="text-xs font-mono text-slate-400">
                Batch 03 Allocation • Precision Inspected & Tested
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Package Selector */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Selected Edition:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRICING_TIERS.map((tier) => {
                  const isSelected = tier.id === activeTierId;
                  return (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => setActiveTierId(tier.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold truncate">{tier.name.split(' ')[0]} {tier.name.split(' ')[1]}</div>
                      <div className="text-base font-display font-bold text-amber-400 mt-1">
                        ${tier.price.toLocaleString()}
                      </div>
                      <div className="text-[10px] text-slate-500 line-through">
                        ${tier.originalPrice.toLocaleString()}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Tier Quick Summary */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs font-mono">
              <div>
                <span className="text-slate-400">Includes: </span>
                <span className="text-slate-200 font-bold">{currentTier.name} + Calibrated Feeler Gauge Kit</span>
              </div>
              <span className="text-emerald-400 font-bold">In Stock (7 Left)</span>
            </div>

            {/* Buyer Details Fields */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Dr. Jordan Hayes"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jordan@clinicrecovery.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Shipping Address *</label>
                  <input
                    type="text"
                    required
                    value={formData.shippingAddress}
                    onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                    placeholder="1204 Sanctuary Way, Suite 400"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">City, State / Region *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Austin, TX 78701"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Guarantee Callout */}
            <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 flex items-center space-x-3 text-xs text-emerald-300">
              <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
              <span><strong>60-Day Vitality Guarantee:</strong> Experience deep cellular resonance risk-free. 100% money back if not completely revitalized.</span>
            </div>

            {/* Submission Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-display font-extrabold text-base tracking-wide transition-all shadow-xl shadow-amber-500/20 active:scale-[0.98]"
              >
                Confirm Reservation • ${currentTier.price.toLocaleString()}
              </button>
              <div className="flex items-center justify-center space-x-4 mt-3 text-[11px] font-mono text-slate-500">
                <span className="flex items-center space-x-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>256-Bit Encrypted</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Truck className="w-3.5 h-3.5" />
                  <span>Free Insured Express Air Delivery</span>
                </span>
              </div>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                Batch 03 Allocation Reserved!
              </h3>
              <p className="text-sm text-slate-300 mt-2 font-sans max-w-md mx-auto">
                Thank you, <strong>{formData.fullName || 'Valued Practitioner'}</strong>. Your <strong>{currentTier.name}</strong> has been assigned serial registry number <strong>AWP-03-{Math.floor(1000 + Math.random() * 9000)}</strong>.
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left font-mono text-xs text-slate-300 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Delivery Target:</span>
                <span className="text-white font-bold">2-4 Business Days Express</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Calibration Spec:</span>
                <span className="text-amber-400">0.45mm Feeler Certified</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Confirmation Sent To:</span>
                <span className="text-cyan-400">{formData.email || 'Your registered email'}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
