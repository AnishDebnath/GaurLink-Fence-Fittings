import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { FenceFixLogo } from './FenceFixLogo';

interface NavbarProps {
  onOpenSchedule?: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onNavigatePage: (page: 'home' | 'products' | 'about' | 'contact', params?: { quote?: boolean; productId?: string }) => void;
  currentRoute: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSchedule,
  onNavigatePage,
  currentRoute,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenus, setShowMenus] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = typeof window !== 'undefined' ? (window.scrollY || document.documentElement.scrollTop || 0) : 0;
      setIsScrolled(currentScrollY > 20);

      // When at top, always stay expanded
      if (currentScrollY <= 60) {
        setShowMenus(true);
      } else {
        const scrollDiff = currentScrollY - lastScrollY;
        // Hysteresis threshold to prevent jitter
        if (scrollDiff > 12) {
          setShowMenus(false);
        } else if (scrollDiff < -10) {
          setShowMenus(true);
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

  const handleRequestQuote = () => {
    if (onOpenSchedule) {
      onOpenSchedule();
    } else {
      onNavigatePage('contact', { quote: true });
    }
    setMobileMenuOpen(false);
  };

  const isActive = (page: string) => currentRoute === page;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-2.5 sm:pt-3 pb-1 px-3 sm:px-6 pointer-events-none">
      <div
        className={`mx-auto pointer-events-auto transition-[max-width,padding] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          showMenus || mobileMenuOpen
            ? 'max-w-[1280px] px-0'
            : 'max-w-[620px] sm:max-w-[650px] lg:max-w-[630px] px-1 sm:px-2'
        }`}
      >
        <div
          className={`rounded-full transition-[background-color,border-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] flex items-center justify-between border backdrop-saturate-150 ${
            !showMenus || isScrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-[0_12px_32px_rgba(13,56,35,0.16),inset_0_1px_1px_rgba(255,255,255,0.9)] border-white/90 py-1.5 sm:py-2 px-3.5 sm:px-5 ring-1 ring-[#0D3823]/10'
              : 'bg-white/90 backdrop-blur-lg shadow-[0_10px_28px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.9)] border-white/70 py-1.5 sm:py-2 px-4 sm:px-6'
          }`}
        >
          {/* Left: Logo */}
          <button
            type="button"
            onClick={() => onNavigatePage('home')}
            className="flex items-center focus:outline-none shrink-0 pr-2 sm:pr-4 cursor-pointer text-left"
            aria-label="Gaur Link Fence & Fittings Manufacturing"
          >
            <FenceFixLogo size="md" />
          </button>

          {/* Center: Desktop Nav with smooth width and opacity animation */}
          <nav
            className={`hidden lg:flex items-center overflow-hidden transition-[max-width,opacity,transform] duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[max-width,opacity] ${
              showMenus
                ? 'opacity-100 max-w-[500px] scale-100 gap-1 pointer-events-auto'
                : 'opacity-0 max-w-0 scale-95 gap-0 pointer-events-none select-none'
            }`}
          >
            <button
              onClick={() => onNavigatePage('home')}
              className={`relative px-3.5 py-2 text-[14px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
                isActive('home')
                  ? 'text-[#0D3823]'
                  : 'text-gray-600 hover:text-[#0D3823]'
              }`}
            >
              Home
              {isActive('home') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>

{/* Products button - commented out
            <button
              onClick={() => onNavigatePage('products')}
              className={`relative px-3.5 py-2 text-[14px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
                isActive('products')
                  ? 'text-[#0D3823]'
                  : 'text-gray-600 hover:text-[#0D3823]'
              }`}
            >
              Products
              {isActive('products') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>
            */}

            <button
              onClick={() => onNavigatePage('about')}
              className={`relative px-3.5 py-2 text-[14px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
                isActive('about')
                  ? 'text-[#0D3823]'
                  : 'text-gray-600 hover:text-[#0D3823]'
              }`}
            >
              About
              {isActive('about') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>

            <button
              onClick={() => onNavigatePage('contact')}
              className={`relative px-3.5 py-2 text-[14px] font-bold transition-colors whitespace-nowrap cursor-pointer ${
                isActive('contact')
                  ? 'text-[#0D3823]'
                  : 'text-gray-600 hover:text-[#0D3823]'
              }`}
            >
              Contact
              {isActive('contact') && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>
          </nav>

          {/* Right: Phone + CTA + Mobile Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="tel:7208053155"
              className="hidden md:flex items-center gap-2 group"
            >
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

            <button
              onClick={handleRequestQuote}
              className="h-[40px] sm:h-[42px] flex items-center gap-2 sm:gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white pl-1.5 pr-4 sm:pr-5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 group shrink-0 ring-1 ring-[#E5A912]/30 border border-emerald-600/30 cursor-pointer"
            >
              <span className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#E5A912] flex items-center justify-center text-[#0D3823] shrink-0 group-hover:translate-x-0.5 transition-transform shadow-xs">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </span>
              <span className="text-[11.5px] sm:text-[12.5px] font-black uppercase tracking-wider text-white select-none whitespace-nowrap">
                REQUEST WHOLESALE QUOTE
              </span>
            </button>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-full text-gray-700 hover:bg-gray-100/80 focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-900/10 p-5 space-y-1 animate-in fade-in slide-in-from-top-3 duration-200">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('home'); }}
              className={`relative block w-full text-left py-2.5 px-3 rounded-xl font-bold transition-all cursor-pointer ${
                isActive('home')
                  ? 'text-[#0D3823] bg-emerald-50/80'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#0D3823]'
              }`}
            >
              Home
              {isActive('home') && (
                <span className="absolute bottom-1 left-3 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>

{/* Products Catalog - commented out
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('products'); }}
              className={`relative block w-full text-left py-2.5 px-3 rounded-xl font-bold transition-all cursor-pointer ${
                isActive('products')
                  ? 'text-[#0D3823] bg-emerald-50/80'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#0D3823]'
              }`}
            >
              Products Catalog
              {isActive('products') && (
                <span className="absolute bottom-1 left-3 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>
            */}

            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('about'); }}
              className={`relative block w-full text-left py-2.5 px-3 rounded-xl font-bold transition-all cursor-pointer ${
                isActive('about')
                  ? 'text-[#0D3823] bg-emerald-50/80'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#0D3823]'
              }`}
            >
              About
              {isActive('about') && (
                <span className="absolute bottom-1 left-3 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('contact'); }}
              className={`relative block w-full text-left py-2.5 px-3 rounded-xl font-bold transition-all cursor-pointer ${
                isActive('contact')
                  ? 'text-[#0D3823] bg-emerald-50/80'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-[#0D3823]'
              }`}
            >
              Contact &amp; Wholesale Quote
              {isActive('contact') && (
                <span className="absolute bottom-1 left-3 w-5 h-0.5 bg-[#0D3823] rounded-full" />
              )}
            </button>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3 mt-2">
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
                onClick={handleRequestQuote}
                className="w-full flex items-center justify-center gap-2.5 bg-[#0D3823] text-white py-3 rounded-full font-black text-xs uppercase shadow-md ring-2 ring-[#E5A912]/30 cursor-pointer"
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
