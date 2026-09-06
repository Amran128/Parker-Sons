import React from 'react';
import { Award, CheckCircle2, Star, Trophy, Shield } from 'lucide-react';

export const AwardsSection: React.FC = () => {
  return (
    <section className="py-12 bg-slate-100 border-y border-slate-200" data-purpose="awards-and-certifications" id="awards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xs sm:text-sm md:text-base font-bold text-slate-500 uppercase tracking-widest mb-8">
          Awards and Certifications
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12 opacity-90 transition-all">
          <div className="flex items-center space-x-2.5 font-bold text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-brand-red/30 transition-all">
            <Award className="w-5 h-5 text-brand-red" />
            <span className="text-sm">Nextdoor Favorite</span>
          </div>

          <div className="flex items-center space-x-2.5 font-bold text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-brand-red/30 transition-all">
            <CheckCircle2 className="w-5 h-5 text-brand-red" />
            <span className="text-sm">TC Certified</span>
          </div>

          <div className="flex items-center space-x-2.5 font-bold text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-brand-red/30 transition-all">
            <Star className="w-5 h-5 text-brand-red fill-brand-red" />
            <span className="text-sm">HomeAdvisor Top Rated</span>
          </div>

          <div className="flex items-center space-x-2.5 font-bold text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-brand-red/30 transition-all">
            <Trophy className="w-5 h-5 text-brand-red" />
            <span className="text-sm">Ranking Arizona</span>
          </div>

          <div className="flex items-center space-x-2.5 font-bold text-slate-700 bg-white px-4 py-2.5 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md hover:border-brand-red/30 transition-all">
            <Shield className="w-5 h-5 text-brand-red" />
            <span className="text-sm">BBB Torch Awards</span>
          </div>
        </div>
      </div>
    </section>
  );
};
