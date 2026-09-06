import React from 'react';
import {
  Snowflake,
  Flame,
  Waves,
  Wrench,
  Droplet,
  Home,
  Zap,
  Warehouse,
  ArrowUpRight
} from 'lucide-react';
import { ServiceId } from '../types';
import { SERVICES } from '../data/content';

interface ServicesGridProps {
  onOpenService: (serviceId: ServiceId) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onOpenService }) => {
  const getIcon = (id: ServiceId) => {
    switch (id) {
      case 'cooling':
        return <Snowflake className="w-8 h-8" />;
      case 'heating':
        return <Flame className="w-8 h-8" />;
      case 'drain-sewer':
        return <Waves className="w-8 h-8" />;
      case 'plumbing':
        return <Wrench className="w-8 h-8" />;
      case 'water-quality':
        return <Droplet className="w-8 h-8" />;
      case 'insulation':
        return <Home className="w-8 h-8" />;
      case 'electrical':
        return <Zap className="w-8 h-8" />;
      case 'garage-renovation':
        return <Warehouse className="w-8 h-8" />;
    }
  };

  return (
    <section
      id="services"
      className="py-16 bg-slate-100 border-y border-slate-200"
      data-purpose="services-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            Your One-Stop Shop for Total Home Comfort!
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Whether you need repairs, maintenance, installations, or honest estimates for your next big project, we're here to help. We offer the expert services you need at prices you can live with.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => onOpenService(service.id)}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-200/80 text-center flex flex-col items-center justify-center space-y-4 transform hover:-translate-y-1 cursor-pointer relative text-slate-800"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 shadow-sm">
                {getIcon(service.id)}
              </div>
              <div className="flex items-center gap-1">
                <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-brand-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
