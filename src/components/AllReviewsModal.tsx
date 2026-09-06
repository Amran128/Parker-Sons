import React, { useState } from 'react';
import { X, Star, CheckCircle, Search, ThumbsUp, MessageSquarePlus } from 'lucide-react';
import { REVIEWS } from '../data/content';
import { ReviewItem } from '../types';

interface AllReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSchedule: () => void;
}

export const AllReviewsModal: React.FC<AllReviewsModalProps> = ({
  isOpen,
  onClose,
  onOpenSchedule
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [submittedReview, setSubmittedReview] = useState(false);

  const [newReview, setNewReview] = useState({
    name: '',
    service: 'cooling',
    rating: 5,
    city: 'Phoenix',
    comment: ''
  });

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Trades' },
    { id: 'cooling', label: 'Air Conditioning' },
    { id: 'heating', label: 'Heating' },
    { id: 'plumbing', label: 'Plumbing' },
    { id: 'drain-sewer', label: 'Drain & Sewer' },
    { id: 'electrical', label: 'Electrical' },
    { id: 'water-quality', label: 'Water Quality' }
  ];

  const filteredReviews = REVIEWS.filter((rev) => {
    const matchesCategory = activeCategory === 'all' || rev.serviceCategory === activeCategory;
    const matchesSearch =
      rev.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rev.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rev.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      setSubmittedReview(true);
      setTimeout(() => {
        setShowSubmitModal(false);
        setSubmittedReview(false);
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navyDark/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 my-8">
        {/* Header */}
        <div className="bg-brand-navy text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="text-xl font-extrabold tracking-tight">
              Customer Reviews &amp; Testimonials
            </h3>
            <div className="flex items-center gap-2 mt-1 text-xs text-slate-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.7 Overall Rating</span>
              <span>•</span>
              <span>Based on 31,940+ Google &amp; BBB Reviews</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200 space-y-3">
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search reviews by keyword..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-brand-red"
              />
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-redHover text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors cursor-pointer"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand-navy text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4">
          {showSubmitModal ? (
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-brand-navy text-sm">Share Your Experience</h4>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="text-xs text-slate-500 hover:text-brand-red"
                >
                  Cancel
                </button>
              </div>

              {submittedReview ? (
                <div className="text-center py-6 text-emerald-600 font-bold text-sm">
                  Thank you! Your verified review has been submitted for publication.
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City</label>
                      <input
                        type="text"
                        required
                        value={newReview.city}
                        onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Performed</label>
                    <select
                      value={newReview.service}
                      onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                    >
                      <option value="cooling">Air Conditioning</option>
                      <option value="heating">Heating</option>
                      <option value="plumbing">Plumbing</option>
                      <option value="drain-sewer">Drain &amp; Sewer</option>
                      <option value="electrical">Electrical</option>
                      <option value="water-quality">Water Quality</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Review</label>
                    <textarea
                      rows={3}
                      required
                      value={newReview.comment}
                      onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                      placeholder="Tell Arizona homeowners about your technician and service experience..."
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-redHover text-white font-bold py-2.5 rounded-xl text-xs"
                  >
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          ) : null}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.date}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                    {rev.text}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-brand-navy">{rev.author}</p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-emerald-500" />
                      {rev.source}
                    </p>
                  </div>
                  <span className="text-slate-500 font-medium">{rev.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Need home service today? Experience the 5-star Parker &amp; Sons difference.
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenSchedule();
            }}
            className="w-full sm:w-auto bg-brand-red hover:bg-brand-redHover text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
          >
            Schedule Service Now
          </button>
        </div>
      </div>
    </div>
  );
};
