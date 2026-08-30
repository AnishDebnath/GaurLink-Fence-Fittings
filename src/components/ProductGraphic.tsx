import React from 'react';

interface ProductGraphicProps {
  id: string;
  name: string;
  className?: string;
}

export const ProductGraphic: React.FC<ProductGraphicProps> = ({ id, name, className = '' }) => {
  // Renders a high-precision, technical industrial hardware visualization
  const renderHardwareSvg = () => {
    switch (id) {
      case 'barbed-arm':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Base collar post clamp */}
            <path d="M 40,110 C 40,125 70,125 70,110 L 70,85 C 70,75 40,75 40,85 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
            <circle cx="55" cy="98" r="4" fill="#1E293B" />
            {/* 45-degree angled arm bar */}
            <path d="M 60,82 L 165,22 L 175,34 L 70,94 Z" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            {/* 3 barbed wire slots */}
            <path d="M 95,62 L 95,50 L 102,50 L 102,58" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 125,45 L 125,33 L 132,33 L 132,41" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 155,28 L 155,16 L 162,16 L 162,24" fill="#F1F5F9" stroke="#0F172A" strokeWidth="1.5" />
            {/* Rivet markings */}
            <circle cx="75" cy="85" r="2.5" fill="#475569" />
            <circle cx="83" cy="80" r="2.5" fill="#475569" />
          </svg>
        );

      case 'male-hinge':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Pipe clamp circular channel */}
            <path d="M 50,45 C 50,20 100,20 100,45 L 100,105 C 100,130 50,130 50,105 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2.5" />
            <ellipse cx="75" cy="45" rx="18" ry="8" fill="#64748B" />
            <ellipse cx="75" cy="105" rx="18" ry="8" fill="#475569" />
            {/* Clamp bolt flanges */}
            <path d="M 100,60 L 120,60 L 120,90 L 100,90 Z" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            <circle cx="110" cy="75" r="4.5" fill="#0F172A" />
            {/* Solid upward pintle pin */}
            <rect x="135" y="30" width="16" height="55" rx="3" fill="#E2E8F0" stroke="#1E293B" strokeWidth="2" />
            <ellipse cx="143" cy="30" rx="8" ry="3" fill="#F8FAFC" />
            {/* Connecting web bracket */}
            <path d="M 120,65 L 136,65 L 136,85 L 120,85 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
          </svg>
        );

      case 'industrial-offset-hinge-180':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Post collar bracket */}
            <path d="M 35,40 C 35,25 75,25 75,40 L 75,110 C 75,125 35,125 35,110 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2.5" />
            {/* Heavy duty offset curved arm */}
            <path d="M 75,55 C 105,55 125,70 145,50 L 160,50 L 160,100 L 145,100 C 125,80 105,95 75,95 Z" fill="#CBD5E1" stroke="#334155" strokeWidth="2.5" />
            {/* Heavy pivot barrel */}
            <rect x="155" y="35" width="22" height="80" rx="4" fill="#64748B" stroke="#1E293B" strokeWidth="2" />
            <circle cx="166" cy="50" r="3" fill="#0F172A" />
            <circle cx="166" cy="100" r="3" fill="#0F172A" />
            {/* Gusset reinforcement rib */}
            <line x1="85" y1="75" x2="140" y2="75" stroke="#475569" strokeWidth="3" />
          </svg>
        );

      case 'box-hinge-malleable':
      case 'box-hinge-pressed-steel':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Box-shaped wraparound post bracket */}
            <rect x="40" y="35" width="55" height="80" rx="5" fill="#94A3B8" stroke="#334155" strokeWidth="2.5" />
            <rect x="52" y="47" width="31" height="56" rx="3" fill="#475569" />
            {/* Clamping bolt heads */}
            <circle cx="48" cy="50" r="3.5" fill="#0F172A" />
            <circle cx="48" cy="100" r="3.5" fill="#0F172A" />
            {/* Connecting hinge knuckle */}
            <rect x="95" y="45" width="24" height="60" rx="3" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            {/* Gate frame cradle */}
            <path d="M 119,50 C 145,50 160,65 160,75 C 160,85 145,100 119,100 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
            <ellipse cx="142" cy="75" rx="12" ry="16" fill="#334155" />
            {/* Pivot pin */}
            <rect x="103" y="38" width="8" height="74" rx="2" fill="#E2E8F0" stroke="#0F172A" strokeWidth="1.5" />
          </svg>
        );

      case 'rolling-gate-kit':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Wheel axle bracket */}
            <rect x="55" y="65" width="90" height="20" rx="3" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
            {/* Dual wheels */}
            <circle cx="65" cy="85" r="26" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            <circle cx="65" cy="85" r="14" fill="#94A3B8" stroke="#0F172A" strokeWidth="2" />
            <circle cx="65" cy="85" r="4" fill="#F8FAFC" />

            <circle cx="135" cy="85" r="26" fill="#1E293B" stroke="#475569" strokeWidth="3" />
            <circle cx="135" cy="85" r="14" fill="#94A3B8" stroke="#0F172A" strokeWidth="2" />
            <circle cx="135" cy="85" r="4" fill="#F8FAFC" />
            {/* Pipe clamp uprights */}
            <rect x="90" y="25" width="20" height="42" rx="2" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            <circle cx="100" cy="38" r="4" fill="#0F172A" />
            <circle cx="100" cy="54" r="4" fill="#0F172A" />
          </svg>
        );

      case 'bull-dog-hinge':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Heavy wrap-around clamping collar */}
            <path d="M 40,40 C 40,20 90,20 90,40 L 90,110 C 90,130 40,130 40,110 Z" fill="#64748B" stroke="#1E293B" strokeWidth="3" />
            <ellipse cx="65" cy="40" rx="18" ry="10" fill="#334155" />
            {/* Clamp lug ears */}
            <rect x="90" y="55" width="22" height="40" rx="2" fill="#94A3B8" stroke="#1E293B" strokeWidth="2" />
            <circle cx="101" cy="65" r="4" fill="#0F172A" />
            <circle cx="101" cy="85" r="4" fill="#0F172A" />
            {/* Heavy forged pivot housing */}
            <path d="M 112,50 L 155,50 L 155,100 L 112,100 Z" fill="#CBD5E1" stroke="#1E293B" strokeWidth="2.5" />
            {/* Solid pivot cylinder */}
            <rect x="145" y="30" width="18" height="90" rx="3" fill="#E2E8F0" stroke="#0F172A" strokeWidth="2" />
          </svg>
        );

      case 'tension-bar':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Long straight galvanized steel bars at perspective */}
            <rect x="25" y="45" width="150" height="8" rx="2" fill="#CBD5E1" stroke="#334155" strokeWidth="1.5" />
            <rect x="30" y="65" width="145" height="8" rx="2" fill="#E2E8F0" stroke="#334155" strokeWidth="1.5" />
            <rect x="35" y="85" width="140" height="8" rx="2" fill="#94A3B8" stroke="#334155" strokeWidth="1.5" />
            <rect x="40" y="105" width="135" height="8" rx="2" fill="#64748B" stroke="#1E293B" strokeWidth="1.5" />
            {/* Tension band clamp rings */}
            <ellipse cx="65" cy="75" rx="6" ry="18" fill="none" stroke="#0F172A" strokeWidth="2.5" />
            <ellipse cx="145" cy="75" rx="6" ry="18" fill="none" stroke="#0F172A" strokeWidth="2.5" />
          </svg>
        );

      case 'cantilever-roller-nylon':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* High-density nylon grooved wheel */}
            <ellipse cx="100" cy="75" rx="42" ry="42" fill="#0F172A" stroke="#334155" strokeWidth="3" />
            {/* Deep groove for 2-3/8" pipe track */}
            <ellipse cx="100" cy="75" rx="30" ry="30" fill="#1E293B" stroke="#64748B" strokeWidth="2" />
            {/* Sealed bearing hub */}
            <ellipse cx="100" cy="75" rx="14" ry="14" fill="#94A3B8" stroke="#E2E8F0" strokeWidth="2" />
            <circle cx="100" cy="75" r="5" fill="#38BDF8" />
            {/* Heavy galvanized post mounting bracket */}
            <path d="M 40,40 L 40,110 L 65,110 L 65,40 Z" fill="#CBD5E1" stroke="#334155" strokeWidth="2" />
            <circle cx="52" cy="55" r="4" fill="#0F172A" />
            <circle cx="52" cy="95" r="4" fill="#0F172A" />
            {/* Safety pinch guard */}
            <path d="M 75,32 C 100,24 125,24 150,32" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
          </svg>
        );

      case 'post-clamps':
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            {/* Circular brace/tension band */}
            <circle cx="85" cy="75" r="38" fill="none" stroke="#64748B" strokeWidth="9" />
            <circle cx="85" cy="75" r="33.5" fill="#F8FAFC" />
            {/* Clamping tang ears with carriage bolt slot */}
            <path d="M 122,65 L 165,65 L 165,75 L 122,75 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
            <path d="M 122,80 L 165,80 L 165,90 L 122,90 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
            {/* Carriage bolt */}
            <rect x="142" y="58" width="8" height="38" rx="2" fill="#CBD5E1" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="146" cy="57" r="5.5" fill="#334155" />
          </svg>
        );

      default:
        // Generic custom OEM stamping diagram
        return (
          <svg viewBox="0 0 200 150" className="w-full h-full" fill="none" stroke="currentColor">
            <rect x="40" y="35" width="120" height="80" rx="4" fill="#CBD5E1" stroke="#334155" strokeWidth="2.5" />
            <circle cx="65" cy="60" r="7" fill="#64748B" stroke="#0F172A" strokeWidth="1.5" />
            <circle cx="135" cy="60" r="7" fill="#64748B" stroke="#0F172A" strokeWidth="1.5" />
            <path d="M 80,75 L 120,75 L 120,95 L 80,95 Z" fill="#94A3B8" stroke="#334155" strokeWidth="2" />
            <circle cx="100" cy="85" r="4" fill="#F8FAFC" />
            <line x1="30" y1="35" x2="30" y2="115" stroke="#0F766E" strokeWidth="2" strokeDasharray="3 3" />
            <text x="15" y="78" fill="#0F766E" fontSize="9" fontWeight="bold">CAD</text>
          </svg>
        );
    }
  };

  return (
    <div className={`relative flex items-center justify-center p-6 bg-gradient-to-br from-[#F1F5F0] via-[#E8ECE6] to-[#DDE3DA] border border-[#D1D9CD] rounded-lg overflow-hidden group-hover:border-[#133E2B]/40 transition-colors ${className}`}>
      {/* Background blueprint grid watermark */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#133E2B 0.75px, transparent 0.75px)',
          backgroundSize: '12px 12px',
        }}
      />
      <div className="relative z-10 w-44 h-32 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        {renderHardwareSvg()}
      </div>
      <span className="sr-only">{name}</span>
    </div>
  );
};
