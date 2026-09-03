import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Menu, X, MapPin, Wrench, Phone } from 'lucide-react';
import { FenceFixLogo } from './FenceFixLogo';

interface NavbarProps {
  onOpenSchedule: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'about' | 'contact') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSchedule,
  onNavigateSection,
  onNavigatePage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenus, setShowMenus] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if left top hero boundary
      setIsScrolled(currentScrollY > 20);

      // When at or near the very top, always show full normal navbar with menus
      if (currentScrollY <= 40) {
        setShowMenus(true);
      } else {
        const scrollDiff = currentScrollY - lastScrollY;
        // Require at least 6px of intentional scroll delta
        if (Math.abs(scrollDiff) > 6) {
          if (scrollDiff > 0) {
            // Scrolling down -> hide navbar menus and shrink navbar from left & right
            setShowMenus(false);
            setServicesDropdownOpen(false);
            setAreasDropdownOpen(false);
          } else {
            // Scrolling upward -> return navbar back to its normal size with menus
            setShowMenus(true);
          }
        }
      }

      lastScrollY = Math.max(0, currentScrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productCategories = [
    { title: 'Chain Link Fittings & Post Caps', id: 'services' },
    { title: 'Commercial Gate Hardware & 180° Hinges', id: 'services' },
    { title: 'Barbed Wire Arms & High Security', id: 'services' },
    { title: 'Tension Bars & Truss Rod Assemblies', id: 'services' },
    { title: 'Pressed Steel Rail Ends & Clamps', id: 'services' },
    { title: 'OEM Custom Stamping & Tooling', id: 'services' },
  ];

  const distributionHubs = [
    'Houston, TX (Central Plant & HQ)',
    'Dallas - Fort Worth Freight Terminal',
    'Austin & Central Texas Depot',
    'San Antonio Wholesale Hub',
    'West Texas & El Paso Corridor',
    'Nationwide LTL & Container Dispatch',
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAreasDropdownOpen(false);
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 transition-all duration-500 -mb-16 sm:-mb-20 pointer-events-none">
      {/* Outer shrink container: shrinks from left and right on scroll down, expands on scroll up */}
      <div
        className={`mx-auto pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showMenus || mobileMenuOpen
            ? 'max-w-[1280px] px-0'
            : 'max-w-[620px] sm:max-w-[650px] lg:max-w-[630px] px-1 sm:px-2'
        }`}
      >
        {/* Floating Capsule Pill Navbar with Glassmorphism On White Background */}
        <div
          className={`rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between border backdrop-saturate-150 ${
            !showMenus || isScrolled
              ? 'bg-white/85 backdrop-blur-xl shadow-[0_14px_32px_rgba(13,56,35,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] border-white/80 py-1.5 sm:py-2 px-3.5 sm:px-5 ring-1 ring-[#0D3823]/10'
              : 'bg-white/90 backdrop-blur-lg shadow-[0_10px_28px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.9)] border-white/70 py-1.5 sm:py-2 px-4 sm:px-6'
          }`}
        >
          {/* Left: Mascot & Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none shrink-0 pr-2 sm:pr-4 cursor-pointer text-left"
            id="nav-brand-logo"
            aria-label="Gaur Link Fence & Fittings Manufacturing"
          >
            <FenceFixLogo size={showMenus ? (isScrolled ? 'sm' : 'md') : 'sm'} />
          </button>

          {/* Center: Desktop Navigation Links (Hides on scroll down, reappears on scroll up) */}
          <nav
            className={`hidden lg:flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showMenus
                ? 'opacity-100 max-w-[680px] scale-100 gap-5 xl:gap-7 pointer-events-auto'
                : 'opacity-0 max-w-0 scale-95 gap-0 pointer-events-none overflow-hidden select-none'
            }`}
          >
            <button
              onClick={() => handleNavClick('home')}
              className="text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors whitespace-nowrap"
              id="nav-link-home"
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('why-choose-us')}
              className="text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors whitespace-nowrap"
              id="nav-link-about"
            >
              Manufacturing
            </button>

            {/* Our Products Dropdown with Chevron */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className="flex items-center gap-1 text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors py-1.5 whitespace-nowrap"
                id="nav-link-services"
              >
                <span>Product Catalog</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#0D3823] stroke-[2.2] transition-transform duration-150" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-900/10 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {productCategories.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-emerald-50 hover:text-[#0D3823] transition-colors flex items-center gap-2"
                    >
                      <Wrench className="w-3.5 h-3.5 text-[#0D3823]" />
                      {item.title}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Distribution Network Dropdown with Chevron */}
            <div
              className="relative group"
              onMouseEnter={() => setAreasDropdownOpen(true)}
              onMouseLeave={() => setAreasDropdownOpen(false)}
            >
              <button
                onClick={() => handleNavClick('service-areas')}
                className="flex items-center gap-1 text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors py-1.5 whitespace-nowrap"
                id="nav-link-areas"
              >
                <span>Freight &amp; Hubs</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#0D3823] stroke-[2.2] transition-transform duration-150" />
              </button>

              {areasDropdownOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-900/10 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {distributionHubs.map((loc, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick('service-areas')}
                      className="w-full text-left px-4 py-2 text-xs font-bold text-gray-700 hover:bg-emerald-50 hover:text-[#0D3823] transition-colors flex items-center gap-2"
                    >
                      <MapPin className="w-3.5 h-3.5 text-[#0D3823]" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => onNavigatePage('about')}
              className="text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors whitespace-nowrap"
              id="nav-link-about"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('case-studies')}
              className="text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors whitespace-nowrap"
              id="nav-link-projects"
            >
              Supply Projects
            </button>

            <button
              onClick={() => onNavigatePage('contact')}
              className="text-[14px] font-semibold text-gray-800 hover:text-[#0D3823] transition-colors whitespace-nowrap"
              id="nav-link-contact"
            >
              Contact
            </button>
          </nav>

          {/* Right: Phone & Brand Matching Pill Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Phone Block styled with website's deep green #0D3823 & gold accents */}
            <a
              href="tel:7208053155"
              className="hidden md:flex items-center gap-2 group"
              id="nav-phone-call"
            >
              {/* Ringing Phone Icon */}
              <div className="w-6.5 h-6.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0D3823"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  <path d="M14.5 3a7 7 0 0 1 6.5 6.5" stroke="#E5A912" />
                  <path d="M14.5 7a3 3 0 0 1 2.5 2.5" stroke="#E5A912" />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="text-[10.5px] font-bold text-gray-500 tracking-tight leading-none mb-0.5">
                  Wholesale Desk
                </span>
                <span className="text-[13.5px] sm:text-[14px] font-black text-gray-900 group-hover:text-[#0D3823] transition-colors leading-none tracking-tight">
                  (720) 805-3155
                </span>
              </div>
            </a>

            {/* Brand Matching Capsule CTA Button: Deep Green #0D3823 with Golden Amber #E5A912 Arrow */}
            <button
              onClick={onOpenSchedule}
              className="h-[40px] sm:h-[42px] flex items-center gap-2 sm:gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white pl-1.5 pr-4 sm:pr-5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 group shrink-0 ring-1 ring-[#E5A912]/30 border border-emerald-600/30"
              id="nav-schedule-btn"
            >
              {/* Golden Amber Circle with Forest Green Arrow */}
              <span className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#E5A912] flex items-center justify-center text-[#0D3823] shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span className="text-[11.5px] sm:text-[12.5px] font-black uppercase tracking-wider text-white select-none whitespace-nowrap">
                REQUEST WHOLESALE QUOTE
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-full text-gray-700 hover:bg-gray-100/80 focus:outline-none transition-colors"
                id="mobile-menu-toggle"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer with Glassmorphism */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-900/10 p-5 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
            <button
              onClick={() => handleNavClick('home')}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('why-choose-us')}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              Manufacturing
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              Product Catalog
            </button>
            <button
              onClick={() => handleNavClick('service-areas')}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              Freight &amp; Hubs
            </button>
            <button
              onClick={() => handleNavClick('case-studies')}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              Supply Projects
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('about'); }}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('contact'); }}
              className="block w-full text-left py-2 font-bold text-gray-800 hover:text-[#0D3823] transition-colors"
            >
              Contact
            </button>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:7208053155"
                className="flex items-center gap-2.5 font-bold text-gray-900 py-1"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-50 flex items-center justify-center text-[#0D3823]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-bold">Wholesale Trade Desk</div>
                  <div className="text-sm font-bold text-gray-900">(720) 805-3155</div>
                </div>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSchedule();
                }}
                className="w-full flex items-center justify-center gap-2.5 bg-[#0D3823] text-white py-3 rounded-full font-black text-xs uppercase shadow-md ring-2 ring-[#E5A912]/30"
              >
                <span className="w-6 h-6 rounded-full bg-[#E5A912] text-[#0D3823] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>REQUEST WHOLESALE QUOTE</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
