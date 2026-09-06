import React, { useState } from 'react';
import {
  Phone,
  CalendarCheck,
  Search,
  Star,
  ChevronDown,
  Menu,
  X,
  MapPin,
  Flame,
  Snowflake,
  Waves,
  Wrench,
  Droplet,
  Home,
  Zap,
  Tag
} from 'lucide-react';
import { ASSETS } from '../data/content';
import { LocationInfo, ServiceId } from '../types';

interface HeaderProps {
  location: LocationInfo;
  onToggleLocation: () => void;
  onOpenSchedule: (serviceId?: ServiceId) => void;
  onOpenCoupons: () => void;
  onOpenReviews: () => void;
  onOpenCommunity: () => void;
  onOpenService: (serviceId: ServiceId) => void;
  onOpenSearch: () => void;
  onOpenPlans: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  location,
  onToggleLocation,
  onOpenSchedule,
  onOpenCoupons,
  onOpenReviews,
  onOpenCommunity,
  onOpenService,
  onOpenSearch,
  onOpenPlans
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navServices: { id: ServiceId; label: string; icon: React.ReactNode; subitems: string[] }[] = [
    {
      id: 'cooling',
      label: 'Air Conditioning',
      icon: <Snowflake className="w-4 h-4 text-sky-400" />,
      subitems: ['AC Repair (24/7)', 'Annual AC Tune-Up', 'Complete AC Replacement', 'Ductless Mini-Splits', 'Thermostats & Zoning']
    },
    {
      id: 'heating',
      label: 'Heating',
      icon: <Flame className="w-4 h-4 text-orange-400" />,
      subitems: ['Furnace Repair', 'Heat Pump Servicing', 'Heating Safety Tune-Up', 'System Replacement', 'Carbon Monoxide Checks']
    },
    {
      id: 'plumbing',
      label: 'Plumbing',
      icon: <Wrench className="w-4 h-4 text-brand-red" />,
      subitems: ['Emergency Leak Repair', 'Water Heater Repair & Install', 'Tankless Water Heaters', 'Slab Leak Detection', 'Repiping Services']
    },
    {
      id: 'drain-sewer',
      label: 'Drain & Sewer',
      icon: <Waves className="w-4 h-4 text-cyan-400" />,
      subitems: ['Clogged Drain Clearing ($99)', 'HD Video Camera Inspection', 'Hydro-Jetting High Pressure', 'Trenchless Sewer Repair', 'Main Line Cleanouts']
    },
    {
      id: 'electrical',
      label: 'Electrical',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      subitems: ['Breaker Panel Upgrades', 'EV Charger Installations', 'Whole-Home Surge Protection', 'Ceiling Fan & Lighting', 'Emergency Electrical']
    },
    {
      id: 'water-quality',
      label: 'Water Quality',
      icon: <Droplet className="w-4 h-4 text-blue-400" />,
      subitems: ['Whole-Home Water Softeners', 'Reverse Osmosis Drinking Water', 'Whole-House Carbon Filters', 'Free Water Hardness Test', 'Salt Delivery & Service']
    },
    {
      id: 'insulation',
      label: 'Insulation',
      icon: <Home className="w-4 h-4 text-emerald-400" />,
      subitems: ['Attic Blown-In Fiberglass', 'Radiant Heat Barriers', 'Aeroseal Air Duct Sealing', 'Energy Audit & Rebates', 'Top-Floor Cooling Relief']
    }
  ];

  return (
    <>
      {/* Top Utility & Announcement Bar */}
      <div id="top-announcement-bar" className="bg-brand-navy text-slate-300 text-xs sm:text-sm border-b border-slate-800 relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-red text-white animate-pulse">
              Live
            </span>
            <p className="truncate text-xs sm:text-sm">
              You are in {location.city}.{' '}
              <button
                onClick={onToggleLocation}
                className="underline hover:text-white transition-colors font-medium text-slate-200"
              >
                We also have a {location.city === 'Phoenix' ? 'Tucson' : 'Phoenix'} site.
              </button>
            </p>
          </div>

          <div className="hidden md:flex items-center space-x-6 font-medium text-xs sm:text-sm">
            <button
              onClick={() => onOpenPlans()}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Blog
            </button>
            <a href="#why-us" className="hover:text-white transition-colors">
              About Us
            </a>
            <button
              onClick={onOpenCoupons}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors font-semibold"
            >
              <Tag className="w-3.5 h-3.5" />
              Special Offers
            </button>
            <a href="#footer" className="hover:text-white transition-colors">
              Careers
            </a>
            <button
              onClick={onToggleLocation}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-brand-red" />
              Service Areas
            </button>
            <button
              onClick={onOpenCommunity}
              className="hover:text-white transition-colors"
            >
              Community
            </button>
            <button
              id="search-trigger-btn"
              onClick={onOpenSearch}
              aria-label="Search"
              className="hover:text-white transition-colors p-1 rounded hover:bg-white/10"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          {/* Brand Logo & Rating */}
          <div className="flex items-center space-x-3">
            <a href="#" className="block focus:outline-none">
              <img
                src={ASSETS.logo}
                alt="Parker & Sons Logo"
                className="h-11 sm:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <div
              onClick={onOpenReviews}
              className="hidden lg:flex items-center pl-4 border-l border-slate-200 space-x-2 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors shrink-0"
              title="Click to view all 31,940 reviews"
            >
              <div className="flex text-amber-400 text-xs shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap shrink-0 grow-0">
                4.7 <span className="font-normal text-slate-500">(31,940 Reviews)</span>
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-slate-100 text-xs font-bold text-slate-700 ml-1 whitespace-nowrap shrink-0 grow-0">
                A+ BBB
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center space-x-5 lg:space-x-6 text-sm font-semibold text-slate-700 shrink-0">
            <a href="#services" className="hover:text-brand-red transition-colors whitespace-nowrap shrink-0 grow-0">
              Services
            </a>
            <a href="#why-us" className="hover:text-brand-red transition-colors whitespace-nowrap shrink-0 grow-0">
              Why Parker &amp; Sons
            </a>
            <a href="#awards" className="hover:text-brand-red transition-colors whitespace-nowrap shrink-0 grow-0">
              Awards
            </a>
            <button
              onClick={onOpenReviews}
              className="hover:text-brand-red transition-colors font-semibold whitespace-nowrap shrink-0 grow-0"
            >
              Reviews
            </button>
          </nav>

          {/* Phone CTA & Schedule Button */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            <a
              id="header-phone-cta"
              href={`tel:${location.phone}`}
              className="hidden sm:flex items-center space-x-2 text-brand-navy hover:text-brand-red font-bold text-sm sm:text-base transition-colors bg-slate-100 hover:bg-slate-200 pl-2 pr-3 sm:pr-3.5 py-2 sm:py-2.5 rounded-full whitespace-nowrap shrink-0 grow-0"
            >
              <div className="w-7 h-7 rounded-full bg-brand-red text-white flex items-center justify-center text-xs shadow-sm shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="whitespace-nowrap shrink-0 grow-0">{location.phoneDisplay}</span>
            </a>

            <button
              id="header-schedule-btn"
              onClick={() => onOpenSchedule()}
              className="bg-brand-red hover:bg-brand-redHover text-white font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-full shadow-lg shadow-brand-red/20 transition-all transform hover:-translate-y-0.5 flex items-center space-x-2 text-xs sm:text-sm md:text-base cursor-pointer whitespace-nowrap shrink-0 grow-0"
            >
              <CalendarCheck className="w-4 h-4 sm:w-4.5 sm:h-4.5 shrink-0" />
              <span className="whitespace-nowrap shrink-0 grow-0">SCHEDULE NOW</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="xl:hidden p-2 text-slate-700 hover:text-brand-red hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Sub-Header Navigation Bar (Navy Blue with Mega Menus) */}
      <nav id="sub-header-navigation" className="bg-brand-navy text-white shadow-inner hidden md:block relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-6 lg:space-x-10 py-3 text-sm font-medium">
            {navServices.map((service) => (
              <li
                key={service.id}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(service.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onOpenService(service.id)}
                  className="hover:text-brand-red text-slate-100 transition-colors flex items-center space-x-1.5 py-1 focus:outline-none"
                >
                  <span>{service.label}</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === service.id && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-brand-navyDark border border-slate-700 rounded-xl shadow-2xl p-3 z-50 text-left">
                    <div className="flex items-center gap-2 pb-2 mb-2 border-b border-slate-700">
                      {service.icon}
                      <span className="text-xs font-bold text-white uppercase tracking-wider">{service.label}</span>
                    </div>
                    <ul className="space-y-1 text-xs">
                      {service.subitems.map((sub, i) => (
                        <li key={i}>
                          <button
                            onClick={() => onOpenService(service.id)}
                            className="w-full text-left px-2.5 py-1.5 rounded text-slate-300 hover:text-white hover:bg-brand-red/20 transition-colors"
                          >
                            {sub}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 pt-2 border-t border-slate-700/80">
                      <button
                        onClick={() => onOpenSchedule(service.id)}
                        className="w-full bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold py-1.5 px-3 rounded-lg text-center transition-colors"
                      >
                        Book {service.label}
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-brand-navy text-white px-4 pt-3 pb-6 border-b border-slate-800 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-700 text-xs">
            <span>Location: <strong>{location.city}</strong></span>
            <button
              onClick={() => {
                onToggleLocation();
                setMobileMenuOpen(false);
              }}
              className="text-brand-red hover:underline font-bold"
            >
              Switch to {location.city === 'Phoenix' ? 'Tucson' : 'Phoenix'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            {navServices.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  onOpenService(service.id);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 bg-slate-800/60 hover:bg-brand-red/20 p-2.5 rounded-lg text-left text-xs font-semibold"
              >
                {service.icon}
                <span className="truncate">{service.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenCoupons();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-center text-sm flex items-center justify-center gap-2"
            >
              <Tag className="w-4 h-4" />
              View Coupons &amp; Specials
            </button>
            <button
              onClick={() => {
                onOpenReviews();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 rounded-xl text-center text-sm flex items-center justify-center gap-2"
            >
              <Star className="w-4 h-4 text-amber-400 fill-current" />
              Read 31,940+ Reviews
            </button>
            <a
              href={`tel:${location.phone}`}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 rounded-xl text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-red" />
              Call {location.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
