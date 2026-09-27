import { Hero } from './Hero';
import { WhyChooseUs } from '../../components/common/WhyUs';
import { TrustBar } from './Stats';
import { ServicesShowcase } from './Carousel';
import { MarqueeTicker } from '../../components/common/Ticker';
import { TICKER_HOME_TOP, TICKER_HOME_BOTTOM } from '../../data/ticker';
import { HowItWorks } from './Process';
import { CaseStudies } from './Gallery';
import { TestimonialsGrid } from '../../components/common/Reviews';
import { ServiceAreasMap } from '../../components/common/Areas';
import { FaqSection } from '../../components/common/Faq';
import { ConversionBanner } from '../../components/common/Cta';
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
          items={TICKER_HOME_TOP}
        />
        <HowItWorks />
        <CaseStudies />
        <TestimonialsGrid />
        <MarqueeTicker
          variant="deep-green"
          items={TICKER_HOME_BOTTOM}
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
