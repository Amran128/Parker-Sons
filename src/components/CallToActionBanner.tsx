import React from 'react';
import { Phone, CalendarDays, Tag } from 'lucide-react';
import { LocationInfo } from '../types';

interface CallToActionBannerProps {
  location: LocationInfo;
  onOpenSchedule: () => void;
  onOpenCoupons: () => void;
}

export const CallToActionBanner: React.FC<CallToActionBannerProps> = ({
  location,
  onOpenSchedule,
  onOpenCoupons
}) => {
  return (
    <section className="bg-brand-navy py-12 text-white" data-purpose="cta-banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Call or Schedule Your Service Online!
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            id="cta-call-btn"
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 transition-all"
            href={`tel:${location.phone}`}
          >
            <Phone className="w-5 h-5" />
            <span>{location.phoneDisplay}</span>
          </a>

          <button
            id="cta-schedule-online-btn"
            onClick={onOpenSchedule}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center space-x-3 transition-all cursor-pointer"
          >
            <CalendarDays className="w-5 h-5 text-brand-red" />
            <span>SCHEDULE ONLINE</span>
          </button>

          <button
            id="cta-save-money-btn"
            onClick={onOpenCoupons}
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-3 transition-all cursor-pointer"
          >
            <Tag className="w-5 h-5" />
            <span>SAVE MONEY</span>
          </button>
        </div>
      </div>
    </section>
  );
};
