import React from 'react';
import { ShieldCheck, Check, CalendarDays, Phone, Clock, Award, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/content';
import { LocationInfo } from '../types';

interface HeroProps {
  location: LocationInfo;
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ location, onOpenSchedule }) => {
  return (
    <section id="hero-section" className="relative bg-brand-navy text-white overflow-hidden py-16 lg:py-24" data-purpose="hero-section">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
        <img
          alt="Parker and Sons Van and Technician"
          className="w-full h-full object-cover"
          src={ASSETS.heroBg}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text & Value Props */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-brand-red/20 border border-brand-red/40 px-3 py-1 rounded-full text-brand-red font-semibold text-xs sm:text-sm tracking-wide uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Arizona's Most Trusted Home Services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              We're Not Your <span className="text-brand-red underline decoration-brand-red/40">Average Joe!</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Cooling • Heating • Plumbing • Drains • Water Softening • Electrical
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  No Extra Charge for Nights, Weekends, or Holidays
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Service in Minutes, Not Days... 24/7!
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-3 rounded-xl backdrop-blur-sm sm:col-span-2 hover:bg-white/10 transition-colors">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm font-medium text-slate-200">
                  Voted #1 by Consumers 14 Years in a Row!
                </span>
              </div>
            </div>

            {/* Hero CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                id="hero-schedule-btn"
                onClick={onOpenSchedule}
                className="bg-brand-red hover:bg-brand-redHover text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-brand-red/30 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2 cursor-pointer"
              >
                <CalendarDays className="w-5 h-5" />
                <span>SCHEDULE APPOINTMENT</span>
              </button>

              <a
                id="hero-phone-btn"
                href={`tel:${location.phone}`}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-xl backdrop-blur-md transition-all text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-brand-red" />
                <span>Call {location.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Hero Graphic Card / Visual */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 shadow-2xl text-slate-900 border border-slate-100 relative transform hover:scale-[1.01] transition-transform">
              <div className="absolute -top-4 -right-4 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                <span>Voted #1 in Arizona</span>
              </div>

              <div className="rounded-2xl overflow-hidden mb-6 bg-slate-100 h-64 relative">
                <img
                  alt="Modern HVAC and plumbing service van parked in front of Arizona home"
                  className="w-full h-full object-cover"
                  src={ASSETS.vanCard}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex items-end p-4">
                  <div className="text-white">
                    <p className="font-bold text-sm flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Licensed, Bonded &amp; Insured
                    </p>
                    <p className="text-xs text-slate-200">ROC #292634 • ROC #233298</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold border-b border-slate-100 pb-3">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" /> Response Time
                  </span>
                  <span className="text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md font-bold">
                    Under 60 Minutes
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm font-semibold border-b border-slate-100 pb-3">
                  <span className="text-slate-500">Availability</span>
                  <span className="text-brand-navy font-bold">24/7/365 Emergency Service</span>
                </div>

                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-500">Satisfaction</span>
                  <span className="text-amber-500 font-bold">100% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
