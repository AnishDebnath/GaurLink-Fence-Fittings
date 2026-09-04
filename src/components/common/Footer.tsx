import React, { useState } from 'react';
import { Phone, Mail, MapPin, Plus, Minus } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenSchedule: () => void;
  onNavigatePage?: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenSchedule, onNavigatePage }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(6);

  const handlePageClick = (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => {
    if (onNavigatePage) {
      onNavigatePage(page, params);
    } else if (page === 'contact' && params?.quote) {
      onOpenSchedule();
    } else {
      onNavigateSection(page);
    }
  };

  const quickLinks = [
    { label: 'Home', page: 'home' as const },
    { label: 'Products Catalog', page: 'products' as const },
    { label: 'About Us', page: 'about' as const },
    { label: 'Contact & Wholesale Quote', page: 'contact' as const },
  ];

  const productCategories = [
    'Gate Hinges (Male & Box)',
    'Fence Fittings & Post Clamps',
    'Rolling Gate Hardware Kits',
    'Industrial Cantilever Rollers',
    'Galvanized Tension Bars',
    'Barbed Wire Extension Arms',
    'Custom Stamping & OEM Tooling',
  ];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 1, 14));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 1, 4));

  return (
    <footer className="bg-[#071910] text-gray-300 pt-8 sm:pt-10 pb-10 font-sans select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Col 1: Brand Mascot, Bio, Socials & Review Badges */}
          <div className="lg:col-span-4 space-y-4">
            <img src={logo} alt="Gaur Link Fence & Fittings" className="h-14 w-auto object-contain" />

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-[310px] font-normal">
              Direct manufacturer of pressed steel, malleable iron, and custom OEM fence hardware for commercial fence contractors and supply yards across the USA.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#E5A912] text-[#071910] hover:bg-[#D89A08] flex items-center justify-center text-xs font-bold transition-transform active:scale-95 shadow-xs cursor-pointer"
                title="Facebook"
                aria-label="Facebook"
              >
                f
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                in
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="X"
                aria-label="X"
              >
                X
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="YouTube"
                aria-label="YouTube"
              >
                ▶
              </button>
            </div>

            {/* Rating Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 bg-[#0D291B]/80 px-2.5 py-1 rounded border border-emerald-800/40">
                <div className="flex font-black text-xs tracking-tighter">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-300 leading-none">Reviews</span>
                  <div className="flex text-[#FBBC05] text-[8px] leading-none mt-0.5 tracking-tight">
                    ★★★★★
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-[#0D291B]/80 px-2.5 py-1 rounded border border-emerald-800/40">
                <span className="font-black text-xs text-white">ISO 9001</span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-[#E5A912] leading-none">Certified</span>
                  <span className="text-[8px] text-gray-300">ASTM Compliant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-sm text-emerald-100/80 font-medium">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageClick(link.page)}
                    className="hover:text-[#E5A912] transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageClick('contact', { quote: true })}
                  className="text-[#E5A912] font-bold hover:underline transition-colors text-left cursor-pointer"
                >
                  Request Wholesale Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              PRODUCTS
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80 font-medium">
              {productCategories.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handlePageClick('products')}
                    className="hover:text-[#E5A912] transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info & Mini Map */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              WHOLESALE TRADE DESK
            </h3>

            <div className="space-y-2.5 text-sm text-emerald-100/85">
              <a
                href="tel:7208053155"
                className="flex items-center gap-2.5 hover:text-[#E5A912] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E5A912] shrink-0" />
                <span>(720) 805-3155</span>
              </a>

              <a
                href="mailto:trade@gaurlink.com"
                className="flex items-center gap-2.5 hover:text-[#E5A912] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E5A912] shrink-0" />
                <span>trade@gaurlink.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A912] shrink-0 mt-0.5" />
                <span>20,000 SQ.FT Manufacturing Plant (DDP USA Freight)</span>
              </div>
            </div>

            {/* Embedded Mini Interactive Google Map */}
            <div className="relative w-full h-28 rounded-xl overflow-hidden border border-emerald-800/50 shadow-md bg-black mt-2">
              <iframe
                title="Footer Texas Mini Map"
                src={`https://maps.google.com/maps?q=Texas,USA&t=m&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 grayscale-[15%] contrast-[105%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              <div className="absolute bottom-2 right-2 flex flex-col gap-1 z-10">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  className="w-5 h-5 bg-[#0D291B] hover:bg-[#153D29] text-white rounded flex items-center justify-center text-[10px] font-bold shadow-md cursor-pointer transition-transform active:scale-95 border border-emerald-700/50"
                  title="Zoom Out"
                >
                  <Minus className="w-2.5 h-2.5 stroke-[3]" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  className="w-5 h-5 bg-[#E5A912] hover:bg-[#D89A08] text-[#071910] rounded flex items-center justify-center text-[10px] font-bold shadow-md cursor-pointer transition-transform active:scale-95"
                  title="Zoom In"
                >
                  <Plus className="w-2.5 h-2.5 stroke-[3]" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-emerald-100/70 gap-3 font-normal">
          <div>
            Copyright © 2026 Gaur Link Fence Fittings &amp; Hardware Manufacturing. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-emerald-100/75">
            <button 
              type="button" 
              onClick={() => handlePageClick('about')}
              className="hover:text-[#E5A912] transition-colors cursor-pointer"
            >
              About Manufacturer
            </button>
            <span>|</span>
            <button 
              type="button" 
              onClick={() => handlePageClick('contact')}
              className="hover:text-[#E5A912] transition-colors cursor-pointer"
            >
              Wholesale RFQ
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


