import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Package,
  Play,
  X,
  CheckCircle2
} from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../home/MarqueeTicker';
import { WhyChooseUs } from '../home/WhyChooseUs';
import { TestimonialsGrid } from '../home/TestimonialsGrid';
import { ServiceAreasMap } from '../home/ServiceAreasMap';
import { FaqSection } from '../home/FaqSection';
import { ConversionBanner } from '../home/ConversionBanner';
import { IMAGES } from '../../data/images';

interface AboutPageProps {
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateSection,
  onNavigatePage,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Lock background scroll when video modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVideoModalOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="about"
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-[#071910] text-white pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={IMAGES.banner}
              alt="GaurLink USA Fence and Fittings Manufacturing"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071910] via-[#071910]/85 to-[#071910]/60" />

          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 sm:mb-5">
              <button 
                onClick={() => onNavigatePage('home')}
                className="hover:text-[#E5A912] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#E5A912]" />
              <span className="text-[#E5A912]">About Us</span>
            </div>

            <div className="max-w-3xl space-y-4 sm:space-y-5">
              <h1 className="text-2xl sm:text-4xl lg:text-[46px] font-black uppercase text-white tracking-tight leading-[1.1] font-sans">
                USA-BASED FENCE &amp; FITTINGS MANUFACTURING
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                GaurLink supplies commercial-grade pressed steel, malleable iron, and aluminum fence hardware directly to supply yards and contractors nationwide. Factory-direct pricing with ocean freight and duty-paid delivery to your warehouse dock.
              </p>

              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-3.5">
                <button
                  onClick={() => onNavigatePage('contact', { quote: true })}
                  className="h-[48px] sm:h-[50px] inline-flex items-center gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs sm:text-sm uppercase tracking-wider pl-2.5 pr-6 rounded-full shadow-md border border-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </span>
                  <span>Get Quote</span>
                </button>

                <button
                  onClick={() => onNavigatePage('products')}
                  className="h-[48px] sm:h-[50px] inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Package className="w-4 h-4 text-[#0D3823]" />
                  <span>Products</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'ESTABLISHED 1969',
            'ISO 9001:2015 CERTIFIED',
            '150M+ PIECES MANUFACTURED',
            'FENCETECH EXHIBITOR 30+ YRS',
            'ASTM A153 HOT-DIP GALVANIZED',
            'DDP FREIGHT TO YOUR DOCK',
          ]}
        />

        {/* Who We Are & Heritage Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-300 bg-white text-[11px] sm:text-xs font-bold tracking-wider text-gray-800 uppercase font-sans shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                  <span>MANUFACTURING SINCE 1969</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black uppercase tracking-tight text-[#0D3823] leading-[1.1] font-sans">
                  Who We Are &amp; <span className="text-[#E5A912]">Our Heritage</span>
                </h2>

                <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed">
                  With over 55 years of manufacturing excellence, our group has produced more than 150 million fence fittings across four continents with an uncompromising zero-defects policy.
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  We specialize in Pressed Steel, Malleable Iron, and Aluminum Fence Fittings &amp; Tension Bars — all hot-dip galvanized or powder-coated for superior durability. As a trusted industry name and FENCETECH exhibitor for over 30 years, we serve US supply yards and contractors with container and pallet volume shipments.
                </p>

                {/* 4 Core Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                    <span>FENCETECH 30+ Yrs Exhibitor</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                    <span>100% Zero Defects Policy</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-bold text-gray-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0D3823] shrink-0" />
                    <span>Custom Tool &amp; Die Stamping</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Plant & Facility Image */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[4/4.2] w-full max-w-md lg:max-w-none group">
                  <img
                    src={IMAGES.aboutUsHomePage}
                    alt="GaurLink Manufacturing Facility"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Bottom 4 Metric Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-10 sm:mt-14">
              <div className="bg-[#0D3823] text-white rounded-[24px] p-5 sm:p-6 shadow-lg border border-emerald-900/80 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-white tracking-tight leading-none mb-2">
                  55+
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-emerald-100 uppercase tracking-wide">
                  Years Heritage (Since 1969)
                </span>
              </div>

              <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
                  150M+
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  Pieces Manufactured
                </span>
              </div>

              <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
                  100%
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  Zero Defects Policy
                </span>
              </div>

              <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
                  30+ Yrs
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  FENCETECH Exhibitor
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[60%] sm:h-[64%] lg:h-[66%] bg-[#071910] pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8 sm:mb-11 text-white">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-[#0D3823]/80 text-[11px] sm:text-xs font-bold tracking-wider text-emerald-100 uppercase font-sans shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                  <span>OUR VALUES</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-white leading-[1.08] font-sans">
                  Mission &amp; <span className="text-[#E5A912]">Vision</span>
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4 lg:pt-2">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  <strong className="text-white font-black uppercase tracking-wide">Our Mission:</strong> Supply top-tier, ASTM-compliant commercial fence fittings and gate hardware directly to American supply yards at the best wholesale rates with guaranteed zero defects.
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  <strong className="text-white font-black uppercase tracking-wide">Our Vision:</strong> Be North America’s most dependable direct manufacturing partner for commercial fence hardware, custom progressive stamping, and perimeter security fittings.
                </p>
              </div>
            </div>

            {/* Video preview container */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[16/9] sm:aspect-[21/10] w-full group">
              <img
                src={IMAGES.banner}
                alt="GaurLink Manufacturing Team"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-[#071910]/85 hover:bg-[#071910] backdrop-blur-md border border-emerald-500/40 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer group/btn"
                >
                  <span>Facility Video</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5A912] text-[#071910] flex items-center justify-center shrink-0 shadow-md group-hover/btn:bg-white transition-colors">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Player Modal with default controls and no text */}
        {isVideoModalOpen && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <div 
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 shadow-lg transition-all cursor-pointer"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player with native default controls */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                  poster={IMAGES.manufacturingPlant}
                >
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        <WhyChooseUs onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* Testimonials Section */}
        <TestimonialsGrid />

        {/* Marquee Ticker */}
        <MarqueeTicker
          variant="deep-green"
          items={[
            'DIRECT WHOLESALE SUPPLY',
            'PALLET & CONTAINER VOLUME',
            'PRECISION PRESSED STEEL',
            'MALLEABLE IRON GATE HINGES',
            'USA NATIONWIDE SUPPLY',
            'CUSTOM OEM TOOLING',
            '12-24H RFQ TURNAROUND',
            'ASTM F626 COMPLIANT',
          ]}
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
