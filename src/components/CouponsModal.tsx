import React, { useState } from 'react';
import { X, Tag, Scissors, Check, Calendar, AlertCircle } from 'lucide-react';
import { COUPONS } from '../data/content';
import { CouponItem, ServiceId } from '../types';

interface CouponsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithCoupon: (couponCode: string, serviceId?: ServiceId) => void;
}

export const CouponsModal: React.FC<CouponsModalProps> = ({
  isOpen,
  onClose,
  onBookWithCoupon
}) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-emerald-700 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center text-white">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight">Special Offers &amp; Instant Savings</h3>
              <p className="text-xs text-emerald-100">
                Clip these verified coupons and present them to your technician or apply directly online
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Coupons Grid */}
        <div className="p-6 sm:p-8 bg-slate-50 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COUPONS.map((coupon) => (
              <div
                key={coupon.id}
                className="bg-white rounded-2xl border-2 border-dashed border-emerald-500/60 p-5 relative flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Cutout notch visuals */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-50 rounded-full border-r border-emerald-500/60"></div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-slate-50 rounded-full border-l border-emerald-500/60"></div>

                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-2xl font-black text-brand-red tracking-tight">
                      {coupon.discount}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {coupon.expires}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-brand-navy text-base mb-1">
                    {coupon.title}
                  </h4>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    {coupon.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                      CODE: {coupon.code}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(coupon.code)}
                      className="text-emerald-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1 cursor-pointer"
                    >
                      {copiedCode === coupon.code ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Code Copied!</span>
                        </>
                      ) : (
                        <>
                          <Scissors className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 italic">
                    {coupon.terms}
                  </p>

                  <button
                    onClick={() => {
                      onBookWithCoupon(coupon.code, coupon.serviceId);
                    }}
                    className="w-full bg-brand-red hover:bg-brand-redHover text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Apply Code &amp; Schedule Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-slate-400" />
            <span>Mention these coupons when booking or hand them to your technician.</span>
          </div>
          <button
            onClick={onClose}
            className="font-bold text-brand-navy hover:text-brand-red"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
