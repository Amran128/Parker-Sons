import React from 'react';
import { ASSETS } from '../data/content';
import { Award, CheckCircle } from 'lucide-react';

export const HomeComfortStory: React.FC = () => {
  return (
    <section className="py-20 bg-white" data-purpose="home-comfort-intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Home Comfort Starts Here. And Stays Here.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              For nearly 50 years, Parker &amp; Sons has been helping Arizona homeowners stay comfortable, with honest, expert service in HVAC, plumbing, electrical, and more.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We show up on time. We fix it right. And we treat your home like it's our own.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              But we're not just here to repair what's broken, we're here to earn your trust, one visit at a time. That means clear communication, fair pricing, and yes... maybe even a bad pun or two while we're at it.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We've got your back year-round. Every job is handled by our Trust Certified® technicians, trained pros who care as much about people as they do about leaving your home's systems in a better place.
            </p>
            <div className="pt-2 flex items-center gap-6 text-sm font-semibold text-slate-700">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-red" />
                Licensed ROC Contractors
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-red" />
                100% Upfront Pricing
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
              <img
                alt="Two professional Parker and Sons HVAC technicians smiling with toolkits in clean uniforms"
                className="w-full h-auto object-cover"
                src={ASSETS.technicians}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-navy text-white p-6 rounded-2xl shadow-xl hidden sm:block border border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-brand-red">50+ Years</p>
                  <p className="text-xs text-slate-300 mt-0.5">Serving the Valley with Pride</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
