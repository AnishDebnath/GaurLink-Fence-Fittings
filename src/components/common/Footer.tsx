import React, { useState } from 'react';
import { Phone, Mail, MapPin, Plus, Minus } from 'lucide-react';
import { FenceFixLogo } from './FenceFixLogo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(6);

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'why-choose-us' },
    { label: 'Our Services', id: 'services' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Our Blog', id: 'services' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Our Team', id: 'testimonials' },
    { label: 'Contact Us', id: 'faq' },
  ];

  const services = [
    'Fence Installation',
    'Wood Fence Repair',
    'Gate fence Repair',
    'Fence Replacement',
    'Fence Post Repair',
    'Fence Maintenance',
    'Privacy Fence Repair',
    'Commercial Fence',
  ];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 1, 14));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 1, 4));

  return (
    <footer className="bg-[#071910] text-gray-300 pt-8 sm:pt-10 pb-10 font-sans select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-emerald-900/40">
          
          {/* Col 1: Brand Mascot, Bio, Socials & Review Badges */}
          <div className="lg:col-span-4 space-y-4">
            <FenceFixLogo size="lg" />

            <p className="text-sm text-emerald-100/80 leading-relaxed max-w-[310px] font-normal">
              Construction marketing for contractors and construction companies across the USA. We help builders, remodelers, and service professionals grow in visibility.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2 pt-1">
              {/* Facebook (Gold/Amber highlighted) */}
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#E5A912] text-[#071910] hover:bg-[#D89A08] flex items-center justify-center text-xs font-bold transition-transform active:scale-95 shadow-xs cursor-pointer"
                title="Facebook"
                aria-label="Facebook"
              >
                f
              </button>
              {/* LinkedIn */}
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="LinkedIn"
                aria-label="LinkedIn"
              >
                in
              </button>
              {/* X */}
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="X"
                aria-label="X"
              >
                X
              </button>
              {/* TikTok */}
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="TikTok"
                aria-label="TikTok"
              >
                ♪
              </button>
              {/* YouTube */}
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-[#0D291B] text-white hover:bg-[#153D29] flex items-center justify-center text-xs font-bold transition-colors border border-emerald-800/40 cursor-pointer"
                title="YouTube"
                aria-label="YouTube"
              >
                ▶
              </button>
            </div>

            {/* Rating Badges Row matching screenshot */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* 1. Google Reviews */}
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

              {/* 2. Facebook Reviews */}
              <div className="flex items-center gap-1.5 bg-[#0D291B]/80 px-2.5 py-1 rounded border border-emerald-800/40">
                <span className="font-black text-xs text-white">facebook</span>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-gray-300 leading-none">Reviews</span>
                  <div className="flex text-white text-[8px] leading-none mt-0.5 tracking-tight">
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* 3. Yelp Reviews */}
              <div className="bg-[#D32323] text-white px-2.5 py-1 rounded-sm flex flex-col items-center justify-center shadow-xs">
                <span className="font-black text-[10px] tracking-tighter leading-none">yelp</span>
                <div className="flex text-white text-[7px] leading-none mt-0.5 tracking-tight">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-sm text-emerald-100/80 font-medium">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateSection(link.id)}
                    className="hover:text-[#E5A912] transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-sm text-emerald-100/80 font-medium">
              {services.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateSection('services')}
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
              CONTACT INFO
            </h3>

            <div className="space-y-2.5 text-sm text-emerald-100/85">
              <a
                href="mailto:fenching@repair.com"
                className="flex items-center gap-2.5 hover:text-[#E5A912] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E5A912] shrink-0" />
                <span>fenching@repair.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A912] shrink-0 mt-0.5" />
                <span>3000 Texas Villa St #10, USA</span>
              </div>

              <a
                href="tel:7208053155"
                className="flex items-center gap-2.5 hover:text-[#E5A912] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E5A912] shrink-0" />
                <span>(720) 805-3155</span>
              </a>
            </div>

            {/* Embedded Mini Interactive Google Map matching screenshot */}
            <div className="relative w-full h-28 rounded-xl overflow-hidden border border-emerald-800/50 shadow-md bg-black mt-2">
              <iframe
                title="Footer Texas Mini Map"
                src={`https://maps.google.com/maps?q=Texas,USA&t=m&z=${zoomLevel}&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 grayscale-[15%] contrast-[105%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Zoom Buttons in corner */}
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

        {/* Bottom Copyright Bar matching screenshot */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-[13px] text-emerald-100/70 gap-3 font-normal">
          <div>
            Copyright © 2026 Fench Repair (Website Design By FleexStudio)
          </div>
          <div className="flex items-center gap-2 text-emerald-100/75">
            <button type="button" className="hover:text-[#E5A912] transition-colors cursor-pointer">
              Terms And Condition
            </button>
            <span>|</span>
            <button type="button" className="hover:text-[#E5A912] transition-colors cursor-pointer">
              Privacy Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


