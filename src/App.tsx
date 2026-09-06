import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CommunitySection } from './components/CommunitySection';
import { ServicesGrid } from './components/ServicesGrid';
import { SchedulingBanner } from './components/SchedulingBanner';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AwardsSection } from './components/AwardsSection';
import { HomeComfortStory } from './components/HomeComfortStory';
import { CallToActionBanner } from './components/CallToActionBanner';
import { ReviewsSection } from './components/ReviewsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { PlansAndFinancing } from './components/PlansAndFinancing';
import { Footer } from './components/Footer';

// Modals / Interactive Screens
import { ScheduleModal } from './components/ScheduleModal';
import { CouponsModal } from './components/CouponsModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { AllReviewsModal } from './components/AllReviewsModal';
import { CommunityModal } from './components/CommunityModal';
import { PlansModal } from './components/PlansModal';
import { SearchModal } from './components/SearchModal';

import { LOCATIONS } from './data/content';
import { ServiceId } from './types';

export default function App() {
  const [currentCity, setCurrentCity] = useState<'Phoenix' | 'Tucson'>('Phoenix');
  const currentLocation = LOCATIONS[currentCity];

  // Modals state
  const [activeModal, setActiveModal] = useState<
    'schedule' | 'coupons' | 'service-detail' | 'reviews' | 'community' | 'plans' | 'search' | null
  >(null);

  const [selectedServiceId, setSelectedServiceId] = useState<ServiceId>('cooling');
  const [activeCouponCode, setActiveCouponCode] = useState<string>('');
  const [communityTab, setCommunityTab] = useState<'teacher' | 'senior' | 'past'>('teacher');
  const [plansTab, setPlansTab] = useState<'family' | 'financing' | 'warranties'>('family');

  const handleToggleLocation = () => {
    setCurrentCity((prev) => (prev === 'Phoenix' ? 'Tucson' : 'Phoenix'));
  };

  const handleOpenSchedule = (serviceId?: ServiceId, couponCode?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    if (couponCode) setActiveCouponCode(couponCode);
    setActiveModal('schedule');
  };

  const handleOpenServiceDetail = (serviceId: ServiceId) => {
    setSelectedServiceId(serviceId);
    setActiveModal('service-detail');
  };

  const handleOpenCoupons = () => {
    setActiveModal('coupons');
  };

  const handleOpenReviews = () => {
    setActiveModal('reviews');
  };

  const handleOpenCommunity = (tab: 'teacher' | 'senior' | 'past' = 'teacher') => {
    setCommunityTab(tab);
    setActiveModal('community');
  };

  const handleOpenPlans = (tab: 'family' | 'financing' | 'warranties' = 'family') => {
    setPlansTab(tab);
    setActiveModal('plans');
  };

  const handleOpenSearch = () => {
    setActiveModal('search');
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleBookWithCoupon = (couponCode: string, serviceId?: ServiceId) => {
    setActiveCouponCode(couponCode);
    if (serviceId) setSelectedServiceId(serviceId);
    setActiveModal('schedule');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand-red selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        location={currentLocation}
        onToggleLocation={handleToggleLocation}
        onOpenSchedule={handleOpenSchedule}
        onOpenCoupons={handleOpenCoupons}
        onOpenReviews={handleOpenReviews}
        onOpenCommunity={() => handleOpenCommunity('teacher')}
        onOpenService={handleOpenServiceDetail}
        onOpenSearch={handleOpenSearch}
        onOpenPlans={() => handleOpenPlans('family')}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          location={currentLocation}
          onOpenSchedule={() => handleOpenSchedule()}
        />

        {/* Community Giveback Section */}
        <CommunitySection
          onOpenCommunity={handleOpenCommunity}
        />

        {/* 8 Services Grid */}
        <ServicesGrid
          onOpenService={handleOpenServiceDetail}
        />

        {/* Scheduling Banner */}
        <SchedulingBanner
          onOpenSchedule={() => handleOpenSchedule()}
        />

        {/* Why Choose Parker & Sons */}
        <WhyChooseUs />

        {/* Awards and Certifications */}
        <AwardsSection />

        {/* Home Comfort Story */}
        <HomeComfortStory />

        {/* Call to Action Banner */}
        <CallToActionBanner
          location={currentLocation}
          onOpenSchedule={() => handleOpenSchedule()}
          onOpenCoupons={handleOpenCoupons}
        />

        {/* Customer Reviews Section */}
        <ReviewsSection
          onOpenReviews={handleOpenReviews}
        />

        {/* Newsletter Signup */}
        <NewsletterSection />

        {/* Service Plans and Financing */}
        <PlansAndFinancing
          onOpenPlans={handleOpenPlans}
        />

        {/* Target Anchor for #schedule */}
        <div id="schedule"></div>
      </main>

      {/* Main Site Footer */}
      <Footer
        onOpenService={handleOpenServiceDetail}
        onOpenReviews={handleOpenReviews}
        onOpenPlans={() => handleOpenPlans('family')}
        onOpenSearch={handleOpenSearch}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      {/* Interactive Modals & Screens */}
      <ScheduleModal
        isOpen={activeModal === 'schedule'}
        onClose={handleCloseModal}
        initialServiceId={selectedServiceId}
        initialCouponCode={activeCouponCode}
        location={currentLocation}
      />

      <CouponsModal
        isOpen={activeModal === 'coupons'}
        onClose={handleCloseModal}
        onBookWithCoupon={handleBookWithCoupon}
      />

      <ServiceDetailModal
        isOpen={activeModal === 'service-detail'}
        onClose={handleCloseModal}
        serviceId={selectedServiceId}
        onScheduleService={(srvId) => handleOpenSchedule(srvId)}
        location={currentLocation}
      />

      <AllReviewsModal
        isOpen={activeModal === 'reviews'}
        onClose={handleCloseModal}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      <CommunityModal
        isOpen={activeModal === 'community'}
        onClose={handleCloseModal}
        initialTab={communityTab}
      />

      <PlansModal
        isOpen={activeModal === 'plans'}
        onClose={handleCloseModal}
        initialTab={plansTab}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      <SearchModal
        isOpen={activeModal === 'search'}
        onClose={handleCloseModal}
        onSelectService={handleOpenServiceDetail}
        onOpenCoupons={handleOpenCoupons}
        onOpenSchedule={handleOpenSchedule}
      />
    </div>
  );
}
