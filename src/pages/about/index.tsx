import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Layers,
  Wrench,
  Package,
  Truck
} from 'lucide-react';
import { Navbar } from '../../components/common/Navbar';
import { Footer } from '../../components/common/Footer';
import { MarqueeTicker } from '../home/MarqueeTicker';
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
  const manufacturingPillars = [
    {
      icon: Wrench,
      title: 'In-House Tool & Die Room',
      desc: 'Bespoke stamping dies built in 15–25 days from CAD drawings and sample parts.',
    },
    {
      icon: Layers,
      title: '25 to 250-Ton Stamping',
      desc: 'High-speed mechanical presses forming heavy-gauge steel fence fittings.',
    },
    {
      icon: ShieldCheck,
      title: 'ASTM A153 Hot-Dip Galvanizing',
      desc: 'Molten zinc coating exceeding commercial corrosion resistance standards.',
    },
    {
      icon: Truck,
      title: 'DDP US Nationwide Freight',
      desc: 'Ocean-to-dock container and pallet logistics directly to your yard.',
    },
  ];

  const milestones = [
    { year: '1969', title: 'Foundry Founded', desc: 'Started as an engineering workshop for pressed steel components.' },
    { year: '1988', title: 'Tool & Die Expansion', desc: 'Added progressive high-tonnage stamping lines for fence hardware.' },
    { year: '2004', title: 'ASTM Galvanizing Line', desc: 'Commissioned in-house molten zinc bath for ASTM A153 compliance.' },
    { year: 'Present', title: 'Global Distribution', desc: 'Over 150M+ fittings supplied to North American supply yards.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#0D3823] selection:text-[#E5A912]">
      <Navbar
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigateSection={onNavigateSection}
        onNavigatePage={onNavigatePage}
        currentRoute="about"
      />

      <main className="flex-1">
        {/* Simple Hero Section */}
        <section className="relative bg-[#071910] text-white pt-32 sm:pt-36 pb-12 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-25">
            <img
              src={IMAGES.manufacturingPlant || IMAGES.hero}
              alt="Gaur Link Plant"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071910] via-[#071910]/80 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
              <button 
                onClick={() => onNavigatePage('home')}
                className="hover:text-[#E5A912] transition-colors cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#E5A912]" />
              <span className="text-[#E5A912]">About Us</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/40 bg-[#0D3823]/70 text-[11px] font-bold tracking-wider text-[#E5A912] uppercase font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A912]"></span>
                <span>USA-BASED WHOLESALE MANUFACTURER</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
                USA-BASED FENCE &amp; FITTINGS MANUFACTURING
              </h1>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                GaurLink is a USA-based fence and fittings manufacturing company, supplying high-quality fence and fittings items at direct factory wholesale rates to supply yards and contractors nationwide.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigatePage('contact', { quote: true })}
                  className="h-[48px] inline-flex items-center gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white font-black text-xs uppercase tracking-wider pl-2 pr-6 rounded-full shadow-md border border-emerald-500/30 cursor-pointer"
                >
                  <span className="w-7 h-7 rounded-full bg-[#E5A912] text-[#0D3823] font-black flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Contact Our Team</span>
                </button>

                <button
                  onClick={() => onNavigatePage('products')}
                  className="h-[48px] inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-black text-xs uppercase tracking-wider px-6 rounded-full shadow-md transition-all cursor-pointer"
                >
                  <Package className="w-4 h-4 text-[#0D3823]" />
                  <span>View Products</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-emerald-900/60">
              <div>
                <span className="text-lg sm:text-xl font-black text-[#E5A912] block leading-none">20,000 SQ.FT</span>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wide">Manufacturing Plant</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-black text-[#E5A912] block leading-none">55+ YEARS</span>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wide">Continuous Operation</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-black text-[#E5A912] block leading-none">150M+ PARTS</span>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wide">Supplied Globally</span>
              </div>
              <div>
                <span className="text-lg sm:text-xl font-black text-[#E5A912] block leading-none">ASTM A153</span>
                <span className="text-[11px] font-bold text-gray-300 uppercase tracking-wide">Hot-Dip Galvanized</span>
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

        {/* Manufacturing Capabilities - 4 Clean Cards */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 text-[11px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D3823]"></span>
                <span>PRODUCTION CAPABILITIES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight">
                BUILT FOR COMMERCIAL RELIABILITY
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {manufacturingPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-[24px] border-2 border-gray-900 bg-white shadow-xs hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#0D3823] text-[#E5A912] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-black uppercase text-gray-900 mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compact Milestones - Clean 4-step */}
        <section className="py-14 sm:py-20 bg-[#FBFBFA] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gray-800 text-[11px] font-bold tracking-wider text-gray-900 uppercase font-sans mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D3823]"></span>
                <span>OUR TIMELINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-gray-900 tracking-tight">
                OVER FIVE DECADES OF GROWTH
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-[24px] bg-white border border-gray-200 shadow-xs"
                >
                  <span className="text-2xl font-black text-[#0D3823] block mb-2">
                    {m.year}
                  </span>
                  <h4 className="text-sm font-black uppercase text-gray-900 mb-1">
                    {m.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conversion Banner */}
        <ConversionBanner onOpenSchedule={() => onNavigatePage('contact', { quote: true })} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenSchedule={() => onNavigatePage('contact', { quote: true })}
        onNavigatePage={onNavigatePage}
      />
    </div>
  );
};
