import { assetUrl } from '../../lib/cdn';
import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigatePage }) => {
  return (
    <section className="relative bg-[#071910] text-white pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={assetUrl('banner-product.jpg')}
          alt="Fence Hardware Catalog"
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
          <span className="text-[#E5A912]">Products</span>
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight leading-tight">
            COMMERCIAL FITTINGS &amp; HARDWARE
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            ASTM A153 galvanized pressed steel, malleable iron hinges, and gate hardware for supply yards and contractors.
          </p>
        </div>
      </div>
    </section>
  );
};
