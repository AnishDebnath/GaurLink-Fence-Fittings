import React from 'react';

interface MarqueeTickerProps {
  items?: string[];
  direction?: 'left' | 'right';
  className?: string;
  variant?: 'deep-green' | 'gold' | 'midnight' | 'theme-accent';
}

// 8-arm starburst asterisk icon matching reference image exactly
const RibbonAsterisk: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-white' }) => (
  <svg
    className={`shrink-0 ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0L13.8 8.2L20.5 3.5L16.8 11L24 12L16.8 13L20.5 20.5L13.8 15.8L12 24L10.2 15.8L3.5 20.5L7.2 13L0 12L7.2 11L3.5 3.5L10.2 8.2L12 0Z" />
  </svg>
);

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  items = [
    'WITH QUALITY',
    'RELIABLE FENCE FIXES',
    'FAST FENCE REPAIR',
    'FENCE REPAIR EXPERTS',
    'PREMIUM CRAFTSMANSHIP',
    'TEXAS LICENSED & INSURED',
    'FREE ONSITE ESTIMATES',
    'GUARANTEED WORKMANSHIP',
  ],
  className = '',
  variant = 'gold',
}) => {
  const bgClasses = {
    'deep-green': 'bg-[#0D3823] text-white border-y-2 border-[#072416]',
    'gold': 'bg-[#E5A912] text-[#071910] border-y-2 border-[#C88E09]',
    'theme-accent': 'bg-[#0D3823] text-[#E5A912] border-y-2 border-emerald-900',
    'midnight': 'bg-[#071910] text-white border-y-2 border-emerald-950',
  }[variant];

  const asteriskColor = variant === 'gold' ? 'text-[#071910]' : variant === 'deep-green' ? 'text-[#E5A912]' : 'text-white';

  return (
    <section className={`${bgClasses} py-3.5 sm:py-4.5 overflow-hidden select-none relative shadow-md ${className}`}>
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-8 sm:gap-12 animate-marquee shrink-0">
          {items.map((item, idx) => (
            <div key={`m1-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <span className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wider font-sans">
                {item}
              </span>
              <RibbonAsterisk className={`w-5 h-5 sm:w-6 sm:h-6 ${asteriskColor}`} />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-8 sm:gap-12 animate-marquee shrink-0" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`m2-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <span className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-wider font-sans">
                {item}
              </span>
              <RibbonAsterisk className={`w-5 h-5 sm:w-6 sm:h-6 ${asteriskColor}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


