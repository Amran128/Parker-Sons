import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface SchedulingBannerProps {
  onOpenSchedule: () => void;
}

export const SchedulingBanner: React.FC<SchedulingBannerProps> = ({ onOpenSchedule }) => {
  return (
    <section
      id="scheduling-banner"
      className="bg-brand-navy py-12 text-white relative overflow-hidden"
      data-purpose="scheduling-banner"
    >
      <div className="absolute inset-0 bg-brand-red/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center justify-center md:justify-start gap-2">
            <Calendar className="w-7 h-7 text-brand-red inline-block" />
            <span>Scheduling Your Service Just Got Easier!</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-1">
            Book online in seconds or call our team directly for immediate assistance.
          </p>
        </div>
        <button
          id="scheduling-banner-learn-how"
          onClick={onOpenSchedule}
          className="bg-brand-red hover:bg-brand-redHover text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
        >
          <span>LEARN HOW</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
