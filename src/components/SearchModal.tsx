import React, { useState } from 'react';
import { X, Search, ArrowRight, Tag, Wrench, FileText } from 'lucide-react';
import { SERVICES, COUPONS, FAQS } from '../data/content';
import { ServiceId } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (serviceId: ServiceId) => void;
  onOpenCoupons: () => void;
  onOpenSchedule: (serviceId?: ServiceId) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onOpenCoupons,
  onOpenSchedule
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchingServices = cleanQuery
    ? SERVICES.filter(
        (s) =>
          s.title.toLowerCase().includes(cleanQuery) ||
          s.shortDesc.toLowerCase().includes(cleanQuery) ||
          s.commonIssues.some((issue) => issue.toLowerCase().includes(cleanQuery))
      )
    : SERVICES.slice(0, 4);

  const matchingCoupons = cleanQuery
    ? COUPONS.filter(
        (c) =>
          c.title.toLowerCase().includes(cleanQuery) ||
          c.description.toLowerCase().includes(cleanQuery) ||
          c.code.toLowerCase().includes(cleanQuery)
      )
    : COUPONS.slice(0, 2);

  const matchingFaqs = cleanQuery
    ? FAQS.filter(
        (f) =>
          f.q.toLowerCase().includes(cleanQuery) ||
          f.a.toLowerCase().includes(cleanQuery)
      )
    : FAQS.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        {/* Search input field */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, issues (e.g. AC leaking, water heater), coupons..."
            className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-5 text-xs">
          {/* Services Matches */}
          <div>
            <span className="font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Services &amp; Trades ({matchingServices.length})
            </span>
            <div className="space-y-1.5">
              {matchingServices.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    onClose();
                    onSelectService(service.id);
                  }}
                  className="w-full p-3 rounded-xl hover:bg-slate-100 flex items-center justify-between transition-colors text-left border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-red/10 text-brand-red flex items-center justify-center">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy text-sm">{service.title}</p>
                      <p className="text-slate-500 text-[11px] line-clamp-1">{service.shortDesc}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>
          </div>

          {/* Coupons Matches */}
          {matchingCoupons.length > 0 && (
            <div>
              <span className="font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Applicable Coupons &amp; Offers
              </span>
              <div className="space-y-1.5">
                {matchingCoupons.map((coupon) => (
                  <button
                    key={coupon.id}
                    onClick={() => {
                      onClose();
                      onOpenCoupons();
                    }}
                    className="w-full p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100/70 flex items-center justify-between transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="font-bold text-emerald-900">{coupon.title}</span>
                        <span className="text-emerald-700 ml-2 font-mono font-bold">[{coupon.code}]</span>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-800 font-semibold">View Offer &rarr;</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Help & FAQ Matches */}
          {matchingFaqs.length > 0 && (
            <div>
              <span className="font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Help &amp; FAQs
              </span>
              <div className="space-y-2">
                {matchingFaqs.map((faq, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="font-bold text-brand-navy text-xs mb-1">{faq.q}</p>
                    <p className="text-slate-600 text-[11px] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Footer */}
        <div className="bg-slate-50 p-3 px-6 border-t border-slate-200 flex justify-between items-center text-slate-400 text-[11px]">
          <span>Tip: You can schedule any service 24/7 with zero overtime fees.</span>
          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="text-brand-red font-bold hover:underline"
          >
            Quick Schedule &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
