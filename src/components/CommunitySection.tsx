import React from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/content';

interface CommunitySectionProps {
  onOpenCommunity: (tab?: 'teacher' | 'senior' | 'past') => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenCommunity }) => {
  return (
    <section id="community-giveback" className="py-16 bg-white" data-purpose="community-giveback">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight">
            See How You Can Help Parker &amp; Sons Give Back Today
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 - Outstanding Teacher 2026 */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Teachers helping smiling elementary students in classroom"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.teacherCard}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-brand-navy/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>3rd Annual Giveaway</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-brand-red font-bold text-xs uppercase tracking-wider">
                  Community Initiative
                </span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">
                  Outstanding Teacher 2026
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Parker &amp; Sons is proud to host our Third Annual Teacher Giveaway, awarding four outstanding Arizona teachers. Stay tuned as we announce this year's recipients.
                </p>
              </div>

              <button
                id="community-teacher-btn"
                onClick={() => onOpenCommunity('teacher')}
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redHover text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-sm cursor-pointer"
              >
                <span>READ MORE ABOUT OUR TEACHERS</span>
              </button>
            </div>
          </div>

          {/* Card 2 - Our Deserving Senior 2026 */}
          <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group">
            <div className="h-56 bg-slate-200 relative overflow-hidden">
              <img
                alt="Happy senior couple relaxing on living room couch enjoying clean cool air"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={ASSETS.seniorCard}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3 bg-brand-navy/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                <Heart className="w-3 h-3 text-rose-400 fill-current" />
                <span>Goodman Partnership</span>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-brand-red font-bold text-xs uppercase tracking-wider">
                  Community Initiative
                </span>
                <h3 className="text-xl font-bold text-brand-navy mt-1">
                  Our Deserving Senior 2026
                </h3>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Parker &amp; Sons and Goodman are proud to honor National Senior Citizens Day by giving away a new A/C system. Stay tuned as we announce this year's recipient.
                </p>
              </div>

              <button
                id="community-senior-btn"
                onClick={() => onOpenCommunity('senior')}
                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-redHover text-white font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-sm cursor-pointer"
              >
                <span>READ MORE ABOUT OUR SENIORS</span>
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            id="community-past-events-btn"
            onClick={() => onOpenCommunity('past')}
            className="inline-flex items-center gap-2 bg-slate-200 hover:bg-slate-300 text-brand-navy font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer"
          >
            <span>SEE PAST EVENTS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
