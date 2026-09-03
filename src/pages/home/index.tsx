import { useState } from 'react';
import { Hero } from './Hero';
import { WhyChooseUs } from './WhyChooseUs';
import { TrustBar } from './TrustBar';
import { ServicesShowcase } from './ServicesShowcase';
import { MarqueeTicker } from './MarqueeTicker';
import { HowItWorks } from './HowItWorks';
import { CaseStudies } from './CaseStudies';
import { TestimonialsGrid } from './TestimonialsGrid';
import { ServiceAreasMap } from './ServiceAreasMap';
import { FaqSection } from './FaqSection';
import { ConversionBanner } from './ConversionBanner';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { QuoteModal } from './QuoteModal';

interface HomePageProps {
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'about' | 'contact') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateSection, onNavigatePage }) => {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleOpenSchedule = (serviceName?: string) => {
    setSelectedService(serviceName || null);
    setScheduleModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => handleOpenSchedule()}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
      />

      <main className="flex-1">
        <Hero
          onOpenSchedule={() => handleOpenSchedule()}
          onExploreServices={() => onNavigateSection('services')}
        />
        <WhyChooseUs onOpenSchedule={() => handleOpenSchedule()} />
        <TrustBar />
        <ServicesShowcase
          onSelectService={(service) => handleOpenSchedule(service)}
          onOpenSchedule={() => handleOpenSchedule()}
        />
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
        <HowItWorks />
        <CaseStudies />
        <TestimonialsGrid />
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
        <ServiceAreasMap onOpenSchedule={() => handleOpenSchedule()} />
        <FaqSection onOpenSchedule={() => handleOpenSchedule()} />
        <ConversionBanner onOpenSchedule={() => handleOpenSchedule()} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      <QuoteModal
        isOpen={scheduleModalOpen}
        onClose={() => setScheduleModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
};
