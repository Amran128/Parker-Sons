import React, { useState } from 'react';
import { X, Sparkles, Heart, Award, CheckCircle2, Send } from 'lucide-react';
import { ASSETS } from '../data/content';

interface CommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'teacher' | 'senior' | 'past';
}

export const CommunityModal: React.FC<CommunityModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'teacher'
}) => {
  const [activeTab, setActiveTab] = useState<'teacher' | 'senior' | 'past'>(initialTab);
  const [nominated, setNominated] = useState(false);

  const [form, setForm] = useState({
    nomineeName: '',
    schoolOrCommunity: '',
    reason: '',
    yourName: '',
    yourEmail: ''
  });

  if (!isOpen) return null;

  const handleNominate = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.nomineeName && form.reason) {
      setNominated(true);
      setTimeout(() => {
        setNominated(false);
        setForm({
          nomineeName: '',
          schoolOrCommunity: '',
          reason: '',
          yourName: '',
          yourEmail: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-red flex items-center justify-center text-white">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Parker &amp; Sons Gives Back</h3>
              <p className="text-xs text-slate-300">
                Investing in Arizona teachers, seniors, and local community families
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

        {/* Tabs */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex gap-2">
          <button
            onClick={() => setActiveTab('teacher')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'teacher'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Outstanding Teacher 2026
          </button>
          <button
            onClick={() => setActiveTab('senior')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'senior'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Our Deserving Senior 2026
          </button>
          <button
            onClick={() => setActiveTab('past')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'past'
                ? 'bg-white text-brand-navy shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Past Giving &amp; Impact
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          {activeTab === 'teacher' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={ASSETS.teacherCard}
                  alt="Outstanding Teacher 2026"
                  className="w-full md:w-60 h-44 object-cover rounded-2xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                    Annual Recognition
                  </span>
                  <h4 className="text-xl font-extrabold text-brand-navy">
                    Third Annual Outstanding Teacher Giveaway
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Teachers shape Arizona's future. Parker &amp; Sons is proud to award four extraordinary Arizona teachers with classroom grants, supplies, and special prizes to thank them for their dedication.
                  </p>
                </div>
              </div>

              {/* Nomination form */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-brand-navy text-sm mb-1 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-brand-red" />
                  Nominate an Arizona Teacher for 2026
                </h5>
                <p className="text-xs text-slate-500 mb-4">
                  Tell us who inspires you and why they deserve this recognition.
                </p>

                {nominated ? (
                  <div className="p-4 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Thank you! Your nomination has been received for the 2026 committee review.
                  </div>
                ) : (
                  <form onSubmit={handleNominate} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Teacher's Name *</label>
                        <input
                          type="text"
                          required
                          value={form.nomineeName}
                          onChange={(e) => setForm({ ...form, nomineeName: e.target.value })}
                          placeholder="e.g. Mrs. Sarah Jenkins"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">School &amp; District *</label>
                        <input
                          type="text"
                          required
                          value={form.schoolOrCommunity}
                          onChange={(e) => setForm({ ...form, schoolOrCommunity: e.target.value })}
                          placeholder="e.g. Mesa Elementary School"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Why should they be recognized? *</label>
                      <textarea
                        rows={3}
                        required
                        value={form.reason}
                        onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        placeholder="Share a short story of how this educator makes a positive difference..."
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Teacher Nomination</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {activeTab === 'senior' && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={ASSETS.seniorCard}
                  alt="Our Deserving Senior 2026"
                  className="w-full md:w-60 h-44 object-cover rounded-2xl shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-red uppercase tracking-wider">
                    Goodman &amp; Parker &amp; Sons Partnership
                  </span>
                  <h4 className="text-xl font-extrabold text-brand-navy">
                    Our Deserving Senior 2026: Free Complete AC System
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Extreme desert heat can be dangerous for fixed-income seniors. In honor of National Senior Citizens Day, we are partnering with Goodman Manufacturing to provide a complete, brand-new HVAC system, professional installation, and 10-year warranty at zero cost to a senior in need.
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h5 className="font-bold text-brand-navy text-sm mb-1 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-current" />
                  Nominate an Arizona Senior Citizen
                </h5>
                <p className="text-xs text-slate-500 mb-4">
                  Do you know a senior citizen with an inoperative or failing A/C system? Nominate them below.
                </p>

                {nominated ? (
                  <div className="p-4 bg-emerald-100 text-emerald-800 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Thank you! Your senior nomination has been submitted.
                  </div>
                ) : (
                  <form onSubmit={handleNominate} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Senior's Name *</label>
                        <input
                          type="text"
                          required
                          value={form.nomineeName}
                          onChange={(e) => setForm({ ...form, nomineeName: e.target.value })}
                          placeholder="e.g. Robert &amp; Mary Miller"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Neighborhood / City *</label>
                        <input
                          type="text"
                          required
                          value={form.schoolOrCommunity}
                          onChange={(e) => setForm({ ...form, schoolOrCommunity: e.target.value })}
                          placeholder="e.g. Phoenix, Sun City, Glendale"
                          className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Current Situation &amp; HVAC Need *</label>
                      <textarea
                        rows={3}
                        required
                        value={form.reason}
                        onChange={(e) => setForm({ ...form, reason: e.target.value })}
                        placeholder="Tell us about their story, community impact, and their current cooling situation..."
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Senior Nomination</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {activeTab === 'past' && (
            <div className="space-y-4">
              <h4 className="text-base font-bold text-brand-navy">
                Over 50 Years of Valley Community Support
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <Award className="w-6 h-6 text-brand-red mb-2" />
                  <h5 className="font-bold text-xs text-brand-navy">St. Mary's Food Bank</h5>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Over 50,000 lbs of canned goods gathered through our annual holiday driver collections.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <Heart className="w-6 h-6 text-rose-500 mb-2" />
                  <h5 className="font-bold text-xs text-brand-navy">Veterans First Initiative</h5>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Free HVAC inspections and emergency repairs for disabled Arizona military veterans.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <Sparkles className="w-6 h-6 text-amber-500 mb-2" />
                  <h5 className="font-bold text-xs text-brand-navy">Youth Apprenticeships</h5>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Full trade-school scholarships sponsoring aspiring plumbers and HVAC technicians.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-brand-navy hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
