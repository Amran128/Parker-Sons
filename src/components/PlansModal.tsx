import React, { useState } from 'react';
import { X, Users, DollarSign, ShieldCheck, Check, Calculator, CalendarCheck } from 'lucide-react';

interface PlansModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'family' | 'financing' | 'warranties';
  onOpenSchedule: () => void;
}

export const PlansModal: React.FC<PlansModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'family',
  onOpenSchedule
}) => {
  const [activeTab, setActiveTab] = useState<'family' | 'financing' | 'warranties'>(initialTab);

  // Financing calculator state
  const [projectCost, setProjectCost] = useState<number>(7500);
  const [termMonths, setTermMonths] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(7.99);

  if (!isOpen) return null;

  // Monthly payment calculation: M = P * (r*(1+r)^n) / ((1+r)^n - 1)
  const monthlyRate = interestRate / 100 / 12;
  const estimatedMonthly =
    interestRate === 0
      ? Math.round(projectCost / termMonths)
      : Math.round(
          (projectCost * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
            (Math.pow(1 + monthlyRate, termMonths) - 1)
        );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-red flex items-center justify-center text-white">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Plans, Financing &amp; Warranties</h3>
              <p className="text-xs text-slate-300">
                Guaranteed protection, easy flexible payments, and VIP homeowner benefits
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex gap-2">
          <button
            onClick={() => setActiveTab('family')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'family'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Parker Family Plan
          </button>
          <button
            onClick={() => setActiveTab('financing')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'financing'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Financing Calculator
          </button>
          <button
            onClick={() => setActiveTab('warranties')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'warranties'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Parts &amp; Labor Warranties
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          {/* TAB 1: PARKER FAMILY PLAN */}
          {activeTab === 'family' && (
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                  VIP Homeowner Club
                </span>
                <h4 className="text-2xl font-black text-brand-navy">
                  Join the Parker Family Plan
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Regular maintenance prevents 95% of unexpected AC failures in the Arizona summer. Protect your home and save money all year long.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                  <div className="flex justify-between items-center">
                    <h5 className="font-extrabold text-brand-navy text-base">Essential Protection</h5>
                    <span className="text-lg font-black text-brand-red">$14.95<span className="text-xs font-normal text-slate-500">/mo</span></span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>2 Precision HVAC Tune-Ups per year (Spring AC &amp; Fall Heating)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>15% Discount on all repairs across all trades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Front-of-the-line VIP priority dispatch</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero overtime or emergency weekend dispatch fees</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSchedule();
                    }}
                    className="w-full bg-brand-navy hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs"
                  >
                    Enroll in Essential Plan
                  </button>
                </div>

                <div className="bg-gradient-to-br from-brand-navy to-slate-900 text-white p-6 rounded-2xl border border-slate-700 space-y-4 relative shadow-md">
                  <div className="absolute top-3 right-3 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    Most Popular
                  </div>
                  <div className="flex justify-between items-center">
                    <h5 className="font-extrabold text-white text-base">Whole-Home Elite</h5>
                    <span className="text-lg font-black text-amber-400">$24.95<span className="text-xs font-normal text-slate-300">/mo</span></span>
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-200">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Everything in Essential Plan included</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Annual Whole-Home Plumbing &amp; Water Heater Safety Flush</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Annual Main Electrical Panel &amp; Surge Safety Audit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>$50 Annual Equipment Replacement Loyalty Credits (up to $500)</span>
                    </li>
                  </ul>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenSchedule();
                    }}
                    className="w-full bg-brand-red hover:bg-brand-redHover text-white font-bold py-2.5 rounded-xl text-xs shadow-md"
                  >
                    Enroll in Elite Plan
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FINANCING CALCULATOR */}
          {activeTab === 'financing' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <DollarSign className="w-8 h-8 text-emerald-600 shrink-0" />
                <div>
                  <h5 className="font-bold text-emerald-950 text-sm">Flexible Financing With Low Monthly Payments</h5>
                  <p className="text-xs text-emerald-800">
                    0% APR for up to 18 months or terms up to 120 months. Instant credit decisions with soft credit check.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <div className="space-y-4">
                  <h5 className="font-bold text-brand-navy text-sm flex items-center gap-1.5">
                    <Calculator className="w-4 h-4 text-brand-red" />
                    Estimate Your Monthly Payment
                  </h5>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Estimated Project Cost: ${projectCost.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="20000"
                      step="500"
                      value={projectCost}
                      onChange={(e) => setProjectCost(Number(e.target.value))}
                      className="w-full accent-brand-red"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>$1,000</span>
                      <span>$10,000</span>
                      <span>$20,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Loan Term: {termMonths} Months
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[18, 36, 60].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setTermMonths(t);
                            if (t === 18) setInterestRate(0);
                            else setInterestRate(7.99);
                          }}
                          className={`p-2 rounded-xl text-xs font-bold border transition-colors ${
                            termMonths === t
                              ? 'border-brand-red bg-brand-red text-white'
                              : 'border-slate-300 bg-white text-slate-700'
                          }`}
                        >
                          {t} Months {t === 18 ? '(0% APR)' : ''}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 flex flex-col justify-between items-center text-center">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Estimated Payment</span>
                    <div className="text-4xl font-black text-brand-navy my-2">
                      ${estimatedMonthly}
                      <span className="text-xs font-normal text-slate-500">/mo</span>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Based on ${projectCost.toLocaleString()} financed over {termMonths} months at {interestRate}% APR. Subject to credit approval.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onOpenSchedule();
                    }}
                    className="w-full mt-4 bg-brand-red hover:bg-brand-redHover text-white font-bold py-3 rounded-xl text-xs shadow-md transition-colors"
                  >
                    Apply for Pre-Approval
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WARRANTIES */}
          {activeTab === 'warranties' && (
            <div className="space-y-6">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                  Complete Peace of Mind
                </span>
                <h4 className="text-2xl font-black text-brand-navy">
                  Industry-Leading Parts &amp; Labor Guarantees
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We stand behind our work 100%. If you're not completely satisfied with our craftsmanship, we will make it right or refund your money.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <ShieldCheck className="w-7 h-7 text-brand-red" />
                  <h5 className="font-extrabold text-sm text-brand-navy">100% Satisfaction</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    If you are dissatisfied with our service within the first year, we will repair the issue to your complete satisfaction at no charge.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <ShieldCheck className="w-7 h-7 text-emerald-600" />
                  <h5 className="font-extrabold text-sm text-brand-navy">Up to 10-Yr Warranty</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    All new residential HVAC system installations come with up to 10 years of comprehensive parts and labor warranty protection.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <ShieldCheck className="w-7 h-7 text-blue-600" />
                  <h5 className="font-extrabold text-sm text-brand-navy">Clean Home Guarantee</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Our technicians wear protective shoe coverings and use floor drop cloths. If we leave any mess, your cleaning service is on us!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
          <span className="text-xs text-slate-500">Need personalized financing advice? Call our customer care team 24/7.</span>
          <button
            onClick={onClose}
            className="bg-brand-navy hover:bg-slate-800 text-white font-bold px-6 py-2 rounded-xl text-xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
