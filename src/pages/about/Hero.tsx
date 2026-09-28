import { assetUrl } from '../../lib/cdn';
import React from 'react';
import { ArrowRight, ChevronRight, Package } from 'lucide-react';

interface HeroProps {
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigatePage }) => {
  return (
    <section className="relative bg-[#071910] text-white pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={assetUrl('banner-about.jpg')}
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
  );
};
