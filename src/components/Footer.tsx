import React from 'react';
import { ASSETS } from '../data/content';
import { ServiceId } from '../types';

interface FooterProps {
  onOpenService: (serviceId: ServiceId) => void;
  onOpenReviews: () => void;
  onOpenPlans: () => void;
  onOpenSearch: () => void;
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenService,
  onOpenReviews,
  onOpenPlans,
  onOpenSearch,
  onOpenSchedule
}) => {
  return (
    <footer
      id="footer"
      className="bg-brand-navyDark text-slate-400 text-sm border-t border-slate-800"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Logo & Legal Disclaimers */}
          <div className="lg:col-span-2 space-y-4">
            <img
              alt="Parker and Sons Logo"
              className="h-10 w-auto object-contain brightness-0 invert"
              src={ASSETS.footerLogo}
              referrerPolicy="no-referrer"
            />
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Environmental Conditioning, LLC dba Parker and Sons
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              &copy;2026 Parker &amp; Sons, LLC ROC#152654, ROC152656, ROC233298, ROC258885, ROC300696
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-red text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                f
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-red text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                𝕏
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-brand-red text-white flex items-center justify-center transition-colors text-xs font-bold"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Links Col 1: Services */}
          <div className="space-y-3">
            <p className="font-bold text-white text-xs uppercase tracking-wider">Services</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenService('cooling')}
                  className="hover:text-white transition-colors text-left"
                >
                  Air Conditioning
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('heating')}
                  className="hover:text-white transition-colors text-left"
                >
                  Heating
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('plumbing')}
                  className="hover:text-white transition-colors text-left"
                >
                  Plumbing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('drain-sewer')}
                  className="hover:text-white transition-colors text-left"
                >
                  Drain &amp; Sewer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('electrical')}
                  className="hover:text-white transition-colors text-left"
                >
                  Electrical
                </button>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Quick Links */}
          <div className="space-y-3">
            <p className="font-bold text-white text-xs uppercase tracking-wider">Quick Links</p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenService('cooling')}
                  className="hover:text-white transition-colors text-left"
                >
                  Air Quality
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('water-quality')}
                  className="hover:text-white transition-colors text-left"
                >
                  Water Quality
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenService('insulation')}
                  className="hover:text-white transition-colors text-left"
                >
                  Insulation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlans()}
                  className="hover:text-white transition-colors text-left"
                >
                  Membership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPlans()}
                  className="hover:text-white transition-colors text-left"
                >
                  Financing
                </button>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Company */}
          <div className="space-y-3">
            <p className="font-bold text-white text-xs uppercase tracking-wider">Company</p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenSchedule()}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReviews}
                  className="hover:text-white transition-colors text-left"
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSearch}
                  className="hover:text-white transition-colors text-left"
                >
                  Search
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Help Guides
                </a>
              </li>
              <li>
                <span className="text-slate-500 cursor-default">Safety Protocols</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-white transition-colors" href="#">
              Careers
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Sitemap
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Notice At Collection
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Your Privacy Choices
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Use
            </a>
          </div>
          <p className="text-slate-500">
            Emergency Dispatch 24/7/365
          </p>
        </div>
      </div>
    </footer>
  );
};
