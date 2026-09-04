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

interface HomePageProps {
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
  currentRoute: string;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateSection, onNavigatePage, currentRoute }) => {
  const handleOpenQuote = (serviceOrProduct?: string) => {
    onNavigatePage('contact', { quote: true, productId: serviceOrProduct });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => handleOpenQuote()}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute={currentRoute}
      />

      <main className="flex-1">
        <Hero
          onOpenSchedule={() => handleOpenQuote()}
          onExploreServices={() => onNavigatePage('products')}
        />
        <WhyChooseUs onOpenSchedule={() => handleOpenQuote()} />
        <TrustBar />
        <ServicesShowcase
          onSelectService={(service) => handleOpenQuote(service)}
          onOpenSchedule={() => handleOpenQuote()}
        />
        <MarqueeTicker
          variant="deep-green"
          items={[
            'USA-BASED MANUFACTURER',
            'WHOLESALE FENCE & FITTINGS',
            'ASTM A153 HOT-DIP GALVANIZED',
            'FACTORY-DIRECT BULK RATES',
            'COMMERCIAL GATE HARDWARE',
            'CHAIN LINK FITTINGS & POST CLAMPS',
            'IN-HOUSE TOOL & DIE DIVISION',
            'DDP US NATIONWIDE FREIGHT',
          ]}
        />
        <HowItWorks />
        <CaseStudies />
        <TestimonialsGrid />
        <MarqueeTicker
          variant="deep-green"
          items={[
            'DIRECT WHOLESALE SUPPLY',
            'PALLET & CONTAINER VOLUME',
            'PRECISION PRESSED STEEL',
            'MALLEABLE IRON GATE HINGES',
            'NATIONWIDE CONTRACTOR SUPPLY',
            'CUSTOM OEM TOOLING',
            '12-24H RFQ TURNAROUND',
            'ASTM F626 COMPLIANT',
          ]}
        />
        <ServiceAreasMap onOpenSchedule={() => handleOpenQuote()} />
        <FaqSection onOpenSchedule={() => handleOpenQuote()} />
        <ConversionBanner onOpenSchedule={() => handleOpenQuote()} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => handleOpenQuote()}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};
