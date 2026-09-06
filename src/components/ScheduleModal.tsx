import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
  Phone,
  Tag,
  MapPin,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { ServiceId, LocationInfo, BookingState } from '../types';
import { SERVICES, COUPONS } from '../data/content';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: ServiceId;
  initialCouponCode?: string;
  location: LocationInfo;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'cooling',
  initialCouponCode,
  location
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [booking, setBooking] = useState<BookingState>({
    serviceId: initialServiceId,
    subService: 'AC Blowing Warm Air',
    urgency: 'emergency',
    preferredDate: 'Today',
    preferredTime: 'Earliest Available (Under 60 Min)',
    fullName: '',
    phone: '',
    email: '',
    streetAddress: '',
    city: location.city,
    zipCode: location.city === 'Phoenix' ? '85001' : '85701',
    appliedCoupon: initialCouponCode || '',
    notes: ''
  });

  const [confirmedTicket, setConfirmedTicket] = useState<string>('');

  if (!isOpen) return null;

  const currentService = SERVICES.find((s) => s.id === booking.serviceId) || SERVICES[0];

  const handleNext = () => {
    if (step === 3) {
      // Validate step 3 fields
      if (!booking.fullName || !booking.phone || !booking.streetAddress) {
        alert('Please fill in your name, phone number, and address so our technician can be dispatched.');
        return;
      }
      const ticketId = `ROC-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmedTicket(ticketId);
      setStep(4);
    } else {
      setStep((prev) => (prev + 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleApplyCoupon = (code: string) => {
    setBooking({ ...booking, appliedCoupon: code });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-red flex items-center justify-center text-white font-bold text-sm">
              P&amp;S
            </div>
            <div>
              <h3 className="text-lg font-bold">Schedule Your Service Appointment</h3>
              <p className="text-xs text-slate-300">
                {location.city} Valley Metro • 24/7/365 Emergency Dispatch Available
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper indicator */}
        {step < 4 && (
          <div className="bg-slate-100 px-6 py-3 border-b border-slate-200">
            <div className="flex items-center justify-between max-w-md mx-auto text-xs font-semibold text-slate-500">
              <span className={step >= 1 ? 'text-brand-red font-bold flex items-center gap-1' : ''}>
                1. Select Service
              </span>
              <span>&rarr;</span>
              <span className={step >= 2 ? 'text-brand-red font-bold flex items-center gap-1' : ''}>
                2. Time &amp; Date
              </span>
              <span>&rarr;</span>
              <span className={step >= 3 ? 'text-brand-red font-bold flex items-center gap-1' : ''}>
                3. Your Location
              </span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6">
          {/* STEP 1: SERVICE & SYMPTOMS */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Service Trade
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setBooking({ ...booking, serviceId: s.id, subService: s.commonIssues[0] })}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        booking.serviceId === s.id
                          ? 'border-brand-red bg-brand-red/10 text-brand-red ring-2 ring-brand-red/30'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  What issue are you experiencing?
                </label>
                <div className="space-y-1.5">
                  {currentService.commonIssues.map((issue, idx) => (
                    <label
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer text-xs transition-colors ${
                        booking.subService === issue
                          ? 'border-brand-red bg-slate-50 font-semibold text-brand-navy'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="subService"
                        checked={booking.subService === issue}
                        onChange={() => setBooking({ ...booking, subService: issue })}
                        className="text-brand-red focus:ring-brand-red"
                      />
                      <span>{issue}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  How urgent is this repair?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, urgency: 'emergency' })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      booking.urgency === 'emergency'
                        ? 'border-rose-500 bg-rose-50 text-rose-800 ring-2 ring-rose-200'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      Emergency (<span className="underline">Under 60 Min</span>)
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">No extra charge for nights/weekends</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, urgency: 'today' })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      booking.urgency === 'today'
                        ? 'border-brand-red bg-red-50 text-brand-red ring-2 ring-red-200'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold">Today (2 - 4 Hours)</div>
                    <p className="text-[11px] text-slate-500 mt-1">Valley-wide technician dispatched</p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setBooking({ ...booking, urgency: 'flexible' })}
                    className={`p-3 rounded-xl border text-left text-xs transition-all ${
                      booking.urgency === 'flexible'
                        ? 'border-brand-navy bg-slate-100 text-brand-navy ring-2 ring-slate-300'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="font-bold">Scheduled Routine</div>
                    <p className="text-[11px] text-slate-500 mt-1">Choose your preferred day/time</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: TIME & DATE */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Preferred Day
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today', 'Tomorrow', 'This Weekend'].map((day) => (
                    <button
                      key={day}
                      type="button"
                      onClick={() => setBooking({ ...booking, preferredDate: day })}
                      className={`p-3 rounded-xl border text-center font-bold text-xs transition-all ${
                        booking.preferredDate === day
                          ? 'border-brand-red bg-brand-red text-white'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Arrival Window
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Earliest Available (Under 60 Min)',
                    'Morning Window (8:00 AM - 12:00 PM)',
                    'Afternoon Window (12:00 PM - 4:00 PM)',
                    'Evening Window (4:00 PM - 8:00 PM)'
                  ].map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setBooking({ ...booking, preferredTime: time })}
                      className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                        booking.preferredTime === time
                          ? 'border-brand-red bg-brand-red/10 text-brand-red ring-2 ring-brand-red/30'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 inline mr-1.5 text-slate-400" />
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-brand-red" />
                  Have a Promo Code or Coupon?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={booking.appliedCoupon}
                    onChange={(e) => setBooking({ ...booking, appliedCoupon: e.target.value.toUpperCase() })}
                    placeholder="e.g. SAVE50REPAIR"
                    className="flex-1 px-3 py-2 border border-slate-300 rounded-xl text-xs font-mono font-bold uppercase focus:outline-none focus:ring-2 focus:ring-brand-red"
                  />
                  <button
                    type="button"
                    onClick={() => handleApplyCoupon('SAVE50REPAIR')}
                    className="px-3 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-bold rounded-xl"
                  >
                    Quick $50 Off
                  </button>
                </div>
                {booking.appliedCoupon && (
                  <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Coupon code <strong>{booking.appliedCoupon}</strong> will be applied to your invoice!
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: CONTACT & ADDRESS */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.fullName}
                    onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (for dispatch call) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={booking.phone}
                    onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                    placeholder="(480) 555-0199"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={booking.streetAddress}
                    onChange={(e) => setBooking({ ...booking, streetAddress: e.target.value })}
                    placeholder="1234 E Camelback Rd"
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-red focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={booking.city}
                    onChange={(e) => setBooking({ ...booking, city: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-red focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Technician Notes / Gate Code / Pet Warning
                </label>
                <textarea
                  rows={2}
                  value={booking.notes}
                  onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                  placeholder="Gate code #1234. Please ring the doorbell upon arrival."
                  className="w-full px-3 py-2.5 border border-slate-300 rounded-xl text-xs focus:ring-2 focus:ring-brand-red focus:outline-none"
                />
              </div>

              <div className="p-3 bg-brand-navy/5 border border-slate-200 rounded-xl flex items-center gap-3 text-xs text-slate-600">
                <ShieldCheck className="w-5 h-5 text-brand-red shrink-0" />
                <span>
                  Our Trust Certified® technician will call 15 minutes ahead of arrival. Zero charge if you need to reschedule.
                </span>
              </div>
            </div>
          )}

          {/* STEP 4: CONFIRMATION */}
          {step === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-extrabold text-brand-navy">
                Service Appointment Confirmed!
              </h4>

              <div className="inline-block bg-slate-100 px-4 py-2 rounded-xl text-xs font-mono font-bold text-slate-700 border border-slate-300">
                Dispatch Reference: {confirmedTicket}
              </div>

              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{booking.fullName}</strong>. A Parker &amp; Sons Trust Certified® technician has been queued for your location at <strong>{booking.streetAddress}, {booking.city}</strong> for <strong>{booking.preferredDate} ({booking.preferredTime})</strong>.
              </p>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl max-w-md mx-auto text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-brand-navy capitalize">{booking.serviceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Issue:</span>
                  <span className="font-semibold text-slate-800">{booking.subService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Response:</span>
                  <span className="text-emerald-600 font-bold">Under 60 Minutes</span>
                </div>
                {booking.appliedCoupon && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applied Discount:</span>
                    <span className="text-brand-red font-bold">{booking.appliedCoupon}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-slate-800 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-red" />
                  Speak to Dispatch ({location.phoneDisplay})
                </a>
                <button
                  onClick={onClose}
                  className="bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        {step < 4 && (
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as 1 | 2 | 3)}
                className="inline-flex items-center gap-1 text-slate-600 hover:text-brand-navy text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-1.5 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{step === 3 ? 'Confirm & Dispatch Tech' : 'Continue'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
