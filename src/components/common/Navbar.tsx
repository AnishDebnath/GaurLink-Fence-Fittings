import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { FenceFixLogo } from './FenceFixLogo';

interface NavbarProps {
  onOpenSchedule: () => void;
  onNavigateSection: (sectionId: string) => void;
  onNavigatePage: (page: 'about' | 'contact') => void;
  currentRoute: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSchedule,
  onNavigateSection,
  onNavigatePage,
  currentRoute,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenus, setShowMenus] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 40) {
        setShowMenus(true);
      } else {
        const scrollDiff = currentScrollY - lastScrollY;
        if (Math.abs(scrollDiff) > 6) {
          setShowMenus(false);
        } else if (scrollDiff < -6) {
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

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  const isActive = (page: string) => currentRoute === page;

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 transition-all duration-500 -mb-16 sm:-mb-20 pointer-events-none">
      <div
        className={`mx-auto pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showMenus || mobileMenuOpen
            ? 'max-w-[1280px] px-0'
            : 'max-w-[620px] sm:max-w-[650px] lg:max-w-[630px] px-1 sm:px-2'
        }`}
      >
        <div
          className={`rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between border backdrop-saturate-150 ${
            !showMenus || isScrolled
              ? 'bg-white/85 backdrop-blur-xl shadow-[0_14px_32px_rgba(13,56,35,0.14),inset_0_1px_1px_rgba(255,255,255,0.9)] border-white/80 py-1.5 sm:py-2 px-3.5 sm:px-5 ring-1 ring-[#0D3823]/10'
              : 'bg-white/90 backdrop-blur-lg shadow-[0_10px_28px_rgba(0,0,0,0.09),inset_0_1px_1px_rgba(255,255,255,0.9)] border-white/70 py-1.5 sm:py-2 px-4 sm:px-6'
          }`}
        >
          {/* Left: Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="flex items-center focus:outline-none shrink-0 pr-2 sm:pr-4 cursor-pointer text-left"
            aria-label="Gaur Link Fence & Fittings Manufacturing"
          >
            <FenceFixLogo size={showMenus ? (isScrolled ? 'sm' : 'md') : 'sm'} />
          </button>

          {/* Center: Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              showMenus
                ? 'opacity-100 max-w-[680px] scale-100 gap-1 pointer-events-auto'
                : 'opacity-0 max-w-0 scale-95 gap-0 pointer-events-none overflow-hidden select-none'
            }`}
          >
            <button
              onClick={() => handleNavClick('home')}
              className={`relative px-3 py-2 text-[14px] font-semibold transition-colors whitespace-nowrap ${
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

            <button
              onClick={() => onNavigatePage('about')}
              className={`relative px-3 py-2 text-[14px] font-semibold transition-colors whitespace-nowrap ${
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
              onClick={onOpenSchedule}
              className="h-[40px] sm:h-[42px] flex items-center gap-2 sm:gap-2.5 bg-[#0D3823] hover:bg-[#072416] text-white pl-1.5 pr-4 sm:pr-5 rounded-full shadow-md hover:shadow-lg transition-all transform active:scale-95 group shrink-0 ring-1 ring-[#E5A912]/30 border border-emerald-600/30"
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
                className="p-1.5 sm:p-2 rounded-full text-gray-700 hover:bg-gray-100/80 focus:outline-none transition-colors"
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
              onClick={() => handleNavClick('home')}
              className={`relative block w-full text-left py-2.5 px-3 rounded-xl font-bold transition-all ${
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
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigatePage('about'); }}
              className={`relative block w-full text-left py-2.5 px-3 rounded-xl font-bold transition-all ${
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
                onClick={() => { setMobileMenuOpen(false); onOpenSchedule(); }}
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
