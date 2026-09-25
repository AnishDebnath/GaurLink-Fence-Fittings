import React, { useState } from 'react';
import { 
  ArrowRight, 
  ChevronRight, 
  Package,
  Play,
  X,
  CheckCircle2,
  ShieldCheck,
  Award,
  Factory,
  Sparkles
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

              {/* Right Column: Plant & 20,000 SQFT Facility */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-xl border-[2.5px] border-[#1C1C1C] bg-gray-900 aspect-[4/4.2] w-full max-w-md lg:max-w-none group">
                  <img
                    src={IMAGES.aboutUsHomePage}
                    alt="GaurLink 20,000 SQFT Manufacturing Facility"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Facility Info Badge */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="bg-[#071910]/95 backdrop-blur-md rounded-2xl p-4 border border-emerald-500/30 text-white shadow-xl space-y-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#E5A912] text-[#071910] flex items-center justify-center font-black shrink-0">
                          <Factory className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-black uppercase text-white font-sans">
                            20,000 SQ.FT Facility
                          </h3>
                          <p className="text-[11px] text-emerald-200/90 font-medium">
                            In-house galvanizing plant, die &amp; mold development, and testing lab
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
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

        {/* Founders & Leadership Section (According to PDF details) */}
        <section className="py-14 sm:py-20 bg-[#FBFBFA] border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-300 bg-white text-[11px] sm:text-xs font-bold tracking-wider text-gray-800 uppercase font-sans shadow-xs mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0D3823]"></span>
                <span>EXECUTIVE LEADERSHIP</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black uppercase tracking-tight text-gray-900 font-sans">
                Our Founders &amp; Executive Team
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Decades of engineering mastery, global trade governance, and dedication to American supply partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Founder 1: Mr. OP Maskara */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 border-2 border-gray-900 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase text-gray-900 font-sans tracking-tight">
                        Mr. OP Maskara
                      </h3>
                      <p className="text-xs font-bold text-[#0D3823] uppercase tracking-wider mt-0.5">
                        Founder President &amp; Chairman
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-[#0D3823] text-xs font-black rounded-full border border-emerald-200">
                      62+ Yrs Exp.
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    With 62 years of expertise in hardware engineering and global manufacturing, Mr. OP Maskara established our progressive stamping standards and zero-defect quality systems.
                  </p>
                  
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    He served as Deputy Regional Chairman of the Engineering Export Promotion Council, and has been a distinguished Lions Clubs International member for 57 years and former Deputy District Governor. His lifelong philosophy of discipline and mindful leadership guides our company's culture.
                  </p>
                </div>

                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 pt-2 border-t border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-[#0D3823] shrink-0" />
                  <span>Quality Governance &amp; Manufacturing Integrity</span>
                </div>
              </div>

              {/* Founder 2: Mr. Som Maskara */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 border-2 border-gray-900 shadow-sm flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3.5">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black uppercase text-gray-900 font-sans tracking-tight">
                        Mr. Som Maskara
                      </h3>
                      <p className="text-xs font-bold text-[#0D3823] uppercase tracking-wider mt-0.5">
                        Vice President &amp; Managing Director (Americas)
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-[#E5A912]/20 text-gray-900 text-xs font-black rounded-full border border-[#E5A912]/50">
                      USA Operations
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                    Mr. Som Maskara leads our North American commercial contracts, distributor partnerships, and nationwide supply logistics.
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                    A dedicated humanitarian and former President of Leo Club International, he brings the focus, discipline, and precision of competitive sports (badminton &amp; rifle shooting) to every wholesale partnership, ensuring rapid turnaround, accurate orders, and dependable US customer service.
                  </p>
                </div>

                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2 pt-2 border-t border-gray-100">
                  <Award className="w-4 h-4 text-[#0D3823] shrink-0" />
                  <span>North America Supply Desk &amp; Commercial Partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Stamping & Capability Box */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[28px] bg-[#0D3823] text-white p-6 sm:p-10 border border-emerald-900 shadow-xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A912] text-[#071910] text-[11px] font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>CUSTOM OEM FABRICATION</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white font-sans">
                    We Can Make Any Sheet Metal Fabrication Item As Per Your Requirements
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                    Custom sizes, tooling runs, and OEM stampings available on request. In-house mold design and rapid sample production with complete references available for US distributors.
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <button
                    onClick={() => onNavigatePage('contact', { quote: true })}
                    className="h-[48px] px-6 inline-flex items-center justify-center gap-2.5 bg-[#E5A912] hover:bg-[#D89A08] text-[#071910] font-black text-xs uppercase tracking-wider rounded-full shadow-lg transition-all cursor-pointer"
                  >
                    <span>Custom Tooling</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </button>
                  <button
                    onClick={() => onNavigatePage('products')}
                    className="h-[48px] px-6 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all cursor-pointer"
                  >
                    <span>View Catalog</span>
                  </button>
                </div>
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

        {/* Video Player Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
            <div className="relative w-full max-w-4xl bg-[#071910] rounded-[28px] border border-emerald-500/30 overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-900/60 bg-[#0D3823]/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5A912]"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-white font-sans">
                    GaurLink Facility &amp; Stamping Plant
                  </span>
                </div>
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

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
                    Facility &amp; Quality Control Tour
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-md mt-1">
                    Progressive stamping presses, in-house tooling, and ASTM A153 hot-dip galvanizing lines.
                  </p>
                </div>
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
