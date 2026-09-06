import React from 'react';
import { Award, Clock, ShieldCheck, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white" data-purpose="why-choose-us" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Why Choose Parker &amp; Sons?
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            We simplify home service. From HVAC repairs to plumbing fixes and electrical upgrades, Parker &amp; Sons has you covered with fast, reliable service trusted for over 50 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 text-center hover:shadow-xl transition-all relative group">
            <div className="w-20 h-20 bg-brand-red/10 text-brand-red rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm">
              <Award className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Reputable and Awarded</h3>
            <ul className="text-left text-sm text-slate-600 space-y-3">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>A+ Rating with the BBB</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>Most Award-Winning Company in Arizona</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>Industry-Leading Warranties and Guarantees</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 text-center hover:shadow-xl transition-all relative group">
            <div className="w-20 h-20 bg-brand-red/10 text-brand-red rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm">
              <Clock className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Fast and Reliable</h3>
            <ul className="text-left text-sm text-slate-600 space-y-3">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>Open 24/7, 365 Days a Year</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>Service in Minutes, Not Days</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>No Extra Charge for Nights, Weekends, or Holidays</span>
              </li>
            </ul>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 text-center hover:shadow-xl transition-all relative group">
            <div className="w-20 h-20 bg-brand-red/10 text-brand-red rounded-3xl mx-auto flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Trustworthy and Credible</h3>
            <ul className="text-left text-sm text-slate-600 space-y-3">
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>Licensed, Bonded, and Insured</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>All Employees Trust Certified®</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <Check className="w-4 h-4 text-brand-red mt-0.5 shrink-0" />
                <span>Always a Live Person to Answer Your Calls</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
