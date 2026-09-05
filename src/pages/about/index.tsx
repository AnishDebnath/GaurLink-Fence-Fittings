import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Package,
  Play,
  X
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

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="about"
      />

      <main className="flex-1">
        {/* Hero Section with balanced height */}
        <section className="relative bg-[#071910] text-white pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={IMAGES.banner}
              alt="Gaur Link Plant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071910] via-[#071910]/85 to-[#071910]/60" />

          {/* Subtle Ambient Radial Glow */}
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
                GaurLink is a USA-based fence and fittings manufacturing company, supplying high-quality fence and fittings items at direct factory wholesale rates to supply yards and contractors nationwide.
              </p>

              <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-3.5">
                <button
                  onClick={() => onNavigatePage('contact', { quote: true })}
                  className="h-[48px] sm:h-[50px] inline-flex items-center gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs sm:text-sm uppercase tracking-wider pl-2.5 pr-6 rounded-full shadow-md border border-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                  </span>
                  <span>Contact Our Team</span>
                </button>

                <button
                  onClick={() => onNavigatePage('products')}
                  className="h-[48px] sm:h-[50px] inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-black text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <Package className="w-4 h-4 text-[#0D3823]" />
                  <span>View Products</span>
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
            '20,000 SQ.FT FACILITY',
            'ASTM A153 & F626 SPEC',
            'DIRECT CONTAINER SUPPLY',
          ]}
        />

        {/* The Story Behind GaurLink Section (Matching Why Choose Us width) */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-300 bg-white text-[11px] sm:text-xs font-bold tracking-wider text-gray-800 uppercase font-sans shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                  <span>SINCE 1969</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-black uppercase tracking-tight text-[#0D3823] leading-[1.08] font-sans">
                  <span className="text-[#E5A912]">The Story</span> Behind GaurLink
                </h2>

                <p className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed">
                  We manufacture and supply high-precision fence fittings, industrial gate hardware, and custom-stamped components to distributors and contractors nationwide. Every part is produced with precision, durability, and care.
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  GaurLink started with a mission to deliver commercial-grade perimeter hardware directly from our own progressive stamping presses and molten zinc hot-dip galvanizing lines. Over more than five decades, we’ve built our reputation through honest craftsmanship, tight dimensional tolerances, and dependable relationships with fence supply yards across North America. Whether supplying bulk container loads or bespoke tooling runs, we approach every order with an uncompromising commitment to ASTM specifications and long-term customer trust.
                </p>
              </div>

              {/* Right Column: Founder / Leadership Portrait */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[4/4.5] sm:aspect-[4/4.2] w-full max-w-md lg:max-w-none group">
                  <img
                    src={IMAGES.aboutUsHomePage}
                    alt="GaurLink Leadership"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Floating Dark Info Card */}
                  {/*}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-auto z-10">
                    <div className="bg-[#071910]/90 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border border-emerald-500/30 text-white shadow-2xl max-w-xs">
                      <h4 className="text-sm sm:text-base font-black tracking-tight text-white leading-tight font-sans">
                        Arun Gaur
                      </h4>
                      <p className="text-[10px] sm:text-[11px] font-bold text-[#E5A912] uppercase tracking-wider mt-0.5">
                        Founder &amp; Managing Director
                      </p>
                    </div>
                  </div>
                  {*/}
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
                  Years Of Experience
                </span>
              </div>

              <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
                  99.8%
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  Client Satisfaction
                </span>
              </div>

              <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
                  150M+
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  Fittings Supplied
                </span>
              </div>

              <div className="bg-[#F2F7F4] text-[#0D3823] rounded-[24px] p-5 sm:p-6 shadow-xs border border-emerald-900/10 flex flex-col justify-between transition-all hover:-translate-y-0.5">
                <span className="text-2xl sm:text-3xl lg:text-[36px] font-black text-[#0D3823] tracking-tight leading-none mb-2">
                  5.00
                </span>
                <span className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase tracking-wide">
                  Star Average Rating
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Mission And Vision Section (Preserving previous deep green color with split background position) */}
        <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-20 overflow-hidden">
          {/* Top Deep Dark Green Background Block extending down halfway behind the image card */}
          <div className="absolute top-0 left-0 right-0 h-[60%] sm:h-[64%] lg:h-[66%] bg-[#071910] pointer-events-none" />

          {/* Ambient Subtle Emerald Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Grid: Left Heading vs Right Statements */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-8 sm:mb-11 text-white">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-[#0D3823]/80 text-[11px] sm:text-xs font-bold tracking-wider text-emerald-100 uppercase font-sans shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                  <span>OUR MISSION</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-white leading-[1.08] font-sans">
                  Meet Our <span className="text-[#E5A912]">Mission</span><br className="hidden sm:inline" /> And <span className="text-[#E5A912]">Vision</span>
                </h2>
              </div>

              {/* Right Column: Mission & Vision text */}
              <div className="lg:col-span-7 space-y-5 lg:pt-2">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  <strong className="text-white font-black uppercase tracking-wide">Our Mission</strong> is to manufacture high-quality, ASTM-certified fence fittings and industrial hardware that protect and secure commercial, industrial, and residential properties nationwide, using heavy-gauge materials and an uncompromising commitment to factory-direct wholesale service.
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  <strong className="text-white font-black uppercase tracking-wide">Our Vision</strong> is to be the most trusted and respected manufacturer and supplier in the perimeter security and fence fittings industry, recognized for unyielding engineering integrity, hot-dip zinc durability, and lasting distributor partnerships.
                </p>
              </div>
            </div>

            {/* Bottom Wide Team Photo with Play Video button straddling green and white */}
            <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[16/9] sm:aspect-[21/10] w-full group">
              <img
                src={IMAGES.banner}
                alt="GaurLink Manufacturing Team"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

              {/* Center Play Video Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-full bg-[#071910]/85 hover:bg-[#071910] backdrop-blur-md border border-emerald-500/40 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95 cursor-pointer group/btn"
                >
                  <span>Play Video</span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5A912] text-[#071910] flex items-center justify-center shrink-0 shadow-md group-hover/btn:bg-white transition-colors">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Player Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#071910] rounded-[28px] border border-emerald-500/30 overflow-hidden shadow-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#0D3823]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white font-sans">
                    GaurLink Manufacturing &amp; Facility Tour
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Player Container */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={IMAGES.manufacturingPlant}
                  alt="GaurLink Plant Video Preview"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-[#E5A912] text-[#071910] flex items-center justify-center mb-4 shadow-xl animate-pulse">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-white font-sans tracking-tight">
                    Full Facility &amp; Quality Control Tour
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mt-1">
                    Watch our heavy-tonnage progressive stamping, tool &amp; die division, and ASTM A153 molten zinc hot-dip galvanizing lines in action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Section (from Home Page) */}
        <WhyChooseUs onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* Testimonials Section (from Home Page) */}
        <TestimonialsGrid />

        {/* Marquee Ticker right above Map Section */}
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

        {/* Map Location Section (from Home Page) */}
        <ServiceAreasMap onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* FAQ Section (from Home Page) */}
        <FaqSection onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />

        {/* Conversion Banner (CTA from Home Page) */}
        <ConversionBanner onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />
      </main>

      {/* Footer Section (from Home Page) */}
      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};
