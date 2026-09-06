import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/content';

interface ReviewsSectionProps {
  onOpenReviews: () => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenReviews }) => {
  // Grab the top 3 featured reviews matching the exact ones in user HTML
  const featuredReviews = REVIEWS.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50" data-purpose="customer-reviews" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
            What More Than 15,000 People Are Saying
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed">
            Read what our customers -- people just like you -- have to say about our products and services. More than 15,000 of them have taken time out of their busy lives to write a review of their experiences and post it to Google for you to see. These are just a few examples:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                <div className="flex text-amber-400 text-sm mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  {rev.text}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-brand-navy">{rev.author}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    {rev.source}
                  </p>
                </div>
                <span className="text-xs text-slate-400 font-medium">{rev.location}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            id="read-more-reviews-btn"
            onClick={onOpenReviews}
            className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-3.5 rounded-xl text-sm shadow-md transition-all cursor-pointer"
          >
            <Star className="w-4 h-4 fill-current" />
            <span>READ MORE REVIEWS</span>
          </button>
        </div>
      </div>
    </section>
  );
};
