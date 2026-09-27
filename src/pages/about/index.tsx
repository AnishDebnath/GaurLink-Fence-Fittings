import React from 'react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../../components/common/Ticker';
import { TICKER_ABOUT_TOP, TICKER_ABOUT_BOTTOM } from '../../data/ticker';
import { WhyChooseUs } from '../../components/common/WhyUs';
import { TestimonialsGrid } from '../../components/common/Reviews';
import { ServiceAreasMap } from '../../components/common/Areas';
import { FaqSection } from '../../components/common/Faq';
import { ConversionBanner } from '../../components/common/Cta';
import { Hero } from './Hero';
import { Heritage } from './Heritage';
import { Mission } from './Mission';

interface AboutPageProps {
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateSection,
  onNavigatePage,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="about"
      />

      <main className="flex-1">
        <Hero onNavigatePage={onNavigatePage} />

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={TICKER_ABOUT_TOP}
        />

        <Heritage />
        <Mission />

        {/* Why Choose Us Section */}
        <WhyChooseUs onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* Testimonials Section */}
        <TestimonialsGrid />

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={TICKER_ABOUT_BOTTOM}
        />

        {/* Map Location Section */}
        <ServiceAreasMap onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* FAQ Section */}
        <FaqSection onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* Conversion Banner */}
        <ConversionBanner onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};
