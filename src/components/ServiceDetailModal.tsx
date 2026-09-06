import React from 'react';
import {
  X,
  CheckCircle2,
  AlertTriangle,
  CalendarCheck,
  Phone,
  Shield,
  Clock
} from 'lucide-react';
import { ServiceId, LocationInfo } from '../types';
import { SERVICES } from '../data/content';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: ServiceId | null;
  onScheduleService: (serviceId: ServiceId) => void;
  location: LocationInfo;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  serviceId,
  onScheduleService,
  location
}) => {
  if (!isOpen || !serviceId) return null;

  const service = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-brand-navy text-white p-6 relative border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>Parker &amp; Sons Professional Services</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black">{service.title} Solutions</h2>
          <p className="text-slate-300 text-sm mt-1 max-w-xl">
            {service.shortDesc}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 className="text-base font-bold text-brand-navy mb-2">Overview</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Bullet points & guarantees */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-3">
              Why Homeowners Choose Parker &amp; Sons for {service.title}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.bulletPoints.map((pt, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Common issues checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Common Signs You Need {service.title} Service Immediately
            </h4>
            <div className="space-y-2">
              {service.commonIssues.map((issue, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center justify-between"
                >
                  <span className="font-medium">{issue}</span>
                  <span className="text-[11px] text-brand-red font-bold">Diagnose &amp; Fix</span>
                </div>
              ))}
            </div>
          </div>

          {/* 24/7 Guarantee Banner */}
          <div className="bg-brand-navy text-white p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Under 60 Minutes Emergency Dispatch</p>
                <p className="text-xs text-slate-300">No overtime fees for nights, weekends, or holidays.</p>
              </div>
            </div>
            <a
              href={`tel:${location.phone}`}
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shrink-0 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-red" />
              {location.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Action Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            {service.startingPrice && (
              <span>Transparent Pricing Starting At: <strong>{service.startingPrice}</strong></span>
            )}
          </div>
          <button
            onClick={() => {
              onClose();
              onScheduleService(service.id);
            }}
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-brand-red/20 transition-all cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Schedule {service.title} Service Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
