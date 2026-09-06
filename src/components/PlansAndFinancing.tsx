import React from 'react';
import { Users, DollarSign, ShieldCheck } from 'lucide-react';

interface PlansAndFinancingProps {
  onOpenPlans: (tab?: 'family' | 'financing' | 'warranties') => void;
}

export const PlansAndFinancing: React.FC<PlansAndFinancingProps> = ({ onOpenPlans }) => {
  return (
    <section className="py-16 bg-white" data-purpose="service-plans-and-financing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 - Parker Family Plan */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Parker Family Plan</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Enjoy the benefits of a maintenance plan, including discounted pricing, priority scheduling, and peace of mind.
              </p>
            </div>
            <div className="mt-8">
              <button
                id="plan-family-learn-more"
                onClick={() => onOpenPlans('family')}
                className="w-full text-center bg-brand-red hover:bg-brand-redHover text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Plan 2 - Financing */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Financing</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                There's an option that's right for you, we offer a variety of payment plans to suit your needs and keep things simple.
              </p>
            </div>
            <div className="mt-8">
              <button
                id="plan-financing-learn-more"
                onClick={() => onOpenPlans('financing')}
                className="w-full text-center bg-brand-red hover:bg-brand-redHover text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Plan 3 - Parts and Labor Warranties */}
          <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Parts and Labor Warranties</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Dedicated to 100% customer satisfaction, we stand behind our work with exclusive parts and labor warranties.
              </p>
            </div>
            <div className="mt-8">
              <button
                id="plan-warranties-learn-more"
                onClick={() => onOpenPlans('warranties')}
                className="w-full text-center bg-brand-red hover:bg-brand-redHover text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors cursor-pointer"
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
