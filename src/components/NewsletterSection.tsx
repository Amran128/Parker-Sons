import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2 } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-brand-navy py-16 text-white text-center" data-purpose="newsletter-signup">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          Subscribe to Our E-Newsletter
        </h2>
        <p className="text-slate-300 text-sm">
          Stay up-to-date on current news, promotions, and industry tips.
        </p>

        {subscribed ? (
          <div className="pt-4 max-w-md mx-auto bg-emerald-900/40 border border-emerald-500/50 p-4 rounded-xl text-emerald-200 text-sm flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Thank you for subscribing! Your <strong>$25 OFF</strong> welcome promo code is: <strong>NEWSLETTER25</strong></span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-2 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="newsletter-email-input"
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
              />
            </div>
            <button
              id="newsletter-submit-btn"
              type="submit"
              className="inline-flex items-center justify-center gap-1.5 bg-brand-red hover:bg-brand-redHover text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all text-sm cursor-pointer whitespace-nowrap"
            >
              <span>SIGN UP</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
