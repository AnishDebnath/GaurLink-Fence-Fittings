/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustBar } from './components/TrustBar';
import { ServicesShowcase } from './components/ServicesShowcase';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { TestimonialsGrid } from './components/TestimonialsGrid';
import { ServiceAreasMap } from './components/ServiceAreasMap';
import { FaqSection } from './components/FaqSection';
import { ConversionBanner } from './components/ConversionBanner';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LaunchingSoon } from './components/LaunchingSoon';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  // Helper to determine if current URL matches '/home'
  const isHomePath = () => {
    if (typeof window === 'undefined') return false;
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return pathname === '/home' || pathname === '/home/' || hash === '#/home' || hash.startsWith('#/home');
  };

  const [currentRoute, setCurrentRoute] = useState<'home' | 'launching-soon'>(() => 
    isHomePath() ? 'home' : 'launching-soon'
  );

  useEffect(() => {
    const handleLocationChange = () => {
      if (isHomePath()) {
        setCurrentRoute('home');
      } else {
        setCurrentRoute('launching-soon');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      if (path === '/home' || path === '/home/' || path === '#/home') {
        setCurrentRoute('home');
      } else {
        setCurrentRoute('launching-soon');
      }
    }
  };

  const handleOpenSchedule = (serviceName?: string) => {
    setSelectedService(serviceName || null);
    setScheduleModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentRoute !== 'home') {
      navigateTo('/home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Default path ('/') renders the Launching Soon page
  if (currentRoute === 'launching-soon') {
    return <LaunchingSoon />;
  }

  // '/home' path renders the main website
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      {/* 1. Header Navbar */}
      <Navbar
        onOpenSchedule={() => handleOpenSchedule()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Layout */}
      <main className="flex-1">
        {/* 2. Hero Section with 3 Rating Badges & Floating Fast Estimate Card */}
        <Hero
          onOpenSchedule={() => handleOpenSchedule()}
          onExploreServices={() => handleNavigateSection('services')}
        />

        {/* 3. Section 2: Why Choose Us (Experienced Fence Repair Professional) */}
        <WhyChooseUs onOpenSchedule={() => handleOpenSchedule()} />

        {/* 4. Section 3: Stat Bar in Gaur Link Deep Green & Gold */}
        <TrustBar />

        {/* 5. Section 4: Service We Provide */}
        <ServicesShowcase
          onSelectService={(service) => handleOpenSchedule(service)}
          onOpenSchedule={() => handleOpenSchedule()}
        />

        {/* 6. Section 5: Marquee Ticker 1 (Deep Green Ribbon with Gold Stars) */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'WITH QUALITY',
            'RELIABLE FENCE FIXES',
            'FAST FENCE REPAIR',
            'FENCE REPAIR EXPERTS',
            'PREMIUM CRAFTSMANSHIP',
            'TEXAS LICENSED & INSURED',
            'FREE ONSITE ESTIMATES',
            'GUARANTEED WORKMANSHIP',
          ]}
        />

        {/* 7. Section 6: How It Works */}
        <HowItWorks />

        {/* 8. Section 7: Case Studies Gallery (Dark Theme) */}
        <CaseStudies />

        {/* 9. Section 8: Testimonials Grid */}
        <TestimonialsGrid />

        {/* 10. Section 9: Marquee Ticker 2 (Same as Upper Marquee Section) */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'WITH QUALITY',
            'RELIABLE FENCE FIXES',
            'FAST FENCE REPAIR',
            'FENCE REPAIR EXPERTS',
            'PREMIUM CRAFTSMANSHIP',
            'TEXAS LICENSED & INSURED',
            'FREE ONSITE ESTIMATES',
            'GUARANTEED WORKMANSHIP',
          ]}
        />

        {/* 11. Section 10: Our Service Areas with Regional Texas Map & Floating Card */}
        <ServiceAreasMap onOpenSchedule={() => handleOpenSchedule()} />

        {/* 12. Section 11: Frequently Asked Questions */}
        <FaqSection onOpenSchedule={() => handleOpenSchedule()} />

        {/* 13. Section 12: Need Fence Repair Fast? CTA Banner */}
        <ConversionBanner onOpenSchedule={() => handleOpenSchedule()} />
      </main>

      {/* 14. Section 13: 4-Column Dark Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      {/* Interactive Schedule / Free Estimate Modal */}
      <QuoteModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
}
