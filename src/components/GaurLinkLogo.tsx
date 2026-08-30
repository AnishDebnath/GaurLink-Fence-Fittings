import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const GaurLinkLogo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark', // 'dark' = for light backgrounds (green text); 'light' = for dark backgrounds (white text)
  size = 'md',
  showSubtitle = true,
}) => {
  const isLight = theme === 'light';
  const primaryColor = isLight ? '#FFFFFF' : '#0D3823';
  const accentGold = '#E5A912'; // The golden tilak accent
  const subtextColor = isLight ? '#A7F3D0' : '#144D31';

  const sizeClasses = {
    sm: { icon: 'w-9 h-9', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-[11px]' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl', sub: 'text-[13px]' },
    xl: { icon: 'w-20 h-20', text: 'text-4xl', sub: 'text-[15px]' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Gaur Link Vector Emblem based on Gaurlink logo */}
      <div className={`relative shrink-0 ${sizeClasses.icon}`}>
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chain Link Fence Boundary Wire & Posts */}
          <g stroke={primaryColor} strokeWidth="2.5" strokeLinecap="round">
            {/* Left Terminal Fence Post with Rounded Ball Cap */}
            <rect x="18" y="24" width="4" height="110" rx="2" fill={primaryColor} />
            <circle cx="20" cy="22" r="4.5" fill={primaryColor} />
            
            {/* Right Terminal Fence Post with Rounded Ball Cap */}
            <rect x="138" y="24" width="4" height="110" rx="2" fill={primaryColor} />
            <circle cx="140" cy="22" r="4.5" fill={primaryColor} />
          </g>

          {/* Diamond Chain Link Fence Wire Grid */}
          <g stroke={primaryColor} strokeWidth="1.2" opacity={isLight ? "0.6" : "0.55"}>
            {/* Diagonal Left-to-Right Wires */}
            <line x1="22" y1="36" x2="138" y2="94" />
            <line x1="22" y1="52" x2="138" y2="110" />
            <line x1="22" y1="68" x2="138" y2="126" />
            <line x1="22" y1="84" x2="118" y2="132" />
            <line x1="22" y1="100" x2="86" y2="132" />
            <line x1="22" y1="20" x2="138" y2="78" />
            <line x1="42" y1="20" x2="138" y2="68" />
            <line x1="72" y1="20" x2="138" y2="53" />
            <line x1="102" y1="20" x2="138" y2="38" />

            {/* Diagonal Right-to-Left Wires */}
            <line x1="138" y1="36" x2="22" y2="94" />
            <line x1="138" y1="52" x2="22" y2="110" />
            <line x1="138" y1="68" x2="22" y2="126" />
            <line x1="138" y1="84" x2="42" y2="132" />
            <line x1="138" y1="100" x2="74" y2="132" />
            <line x1="138" y1="20" x2="22" y2="78" />
            <line x1="118" y1="20" x2="22" y2="68" />
            <line x1="88" y1="20" x2="22" y2="53" />
            <line x1="58" y1="20" x2="22" y2="38" />
          </g>

          {/* Dancing Gauranga Deity Silhouette */}
          <g fill={primaryColor}>
            {/* Left Arm extended gracefully skyward */}
            <path d="M 74 38 C 65 30, 52 20, 42 10 C 40 8, 43 5, 46 8 C 54 16, 66 26, 73 34 Z" />
            {/* Left Hand open fingers */}
            <path d="M 42 10 C 39 8, 38 6, 42 4 C 45 4, 46 7, 44 9 Z" />
            <path d="M 44 8 C 43 5, 46 3, 49 6 Z" />

            {/* Right Arm extended gracefully skyward */}
            <path d="M 86 38 C 95 30, 108 20, 118 10 C 120 8, 117 5, 114 8 C 106 16, 94 26, 87 34 Z" />
            {/* Right Hand open fingers */}
            <path d="M 118 10 C 121 8, 122 6, 118 4 C 115 4, 114 7, 116 9 Z" />
            <path d="M 116 8 C 117 5, 114 3, 111 6 Z" />

            {/* Head & Neck with Hair Bun (Chignon) */}
            <ellipse cx="80" cy="24" rx="7.5" ry="9" />
            <circle cx="80" cy="16" r="3.5" />

            {/* Flowing Celestial Scarf / Uttariya fluttering dynamically */}
            <path d="M 70 36 C 60 42, 58 54, 66 50 C 74 46, 76 38, 70 36 Z" />
            <path d="M 90 36 C 100 42, 114 44, 118 52 C 122 60, 112 64, 106 58 C 96 48, 92 40, 90 36 Z" />
            {/* Curving sash tail loop */}
            <path
              d="M 106 58 C 100 68, 102 82, 98 88 C 95 90, 92 86, 94 80 C 96 72, 96 64, 102 58 Z"
              stroke={primaryColor}
              strokeWidth="2.5"
              fill="none"
            />

            {/* Torso & Elegant Posture */}
            <path d="M 73 34 C 70 45, 68 56, 70 68 C 72 78, 70 90, 68 100 C 74 102, 86 102, 92 100 C 90 90, 88 78, 90 68 C 92 56, 90 45, 87 34 Z" />

            {/* Flowing Dhoti Robes with pleats */}
            <path d="M 68 98 C 62 108, 60 118, 64 122 C 72 120, 78 112, 80 102 Z" />
            <path d="M 92 98 C 88 108, 86 118, 88 126 C 94 122, 96 112, 94 100 Z" />

            {/* Graceful Dancing Feet in classical stance */}
            {/* Left foot plant */}
            <ellipse cx="72" cy="126" rx="4" ry="7" transform="rotate(-15 72 126)" />
            {/* Right foot arched */}
            <ellipse cx="88" cy="124" rx="4" ry="6" transform="rotate(20 88 124)" />
          </g>

          {/* Golden Sacred Vaishnava Tilak on Forehead (Exact from the Logo!) */}
          <g fill={accentGold}>
            {/* Urdhva Pundra V-shape Tilak */}
            <path d="M 78.5 21 L 80 25 L 81.5 21 Z" />
            <circle cx="80" cy="20" r="1" />
          </g>
        </svg>
      </div>

      {/* Brand Typography (Exact styling from the logo: GAURLINK with flourish underline + LET'S FITTINGZ) */}
      <div className="flex flex-col leading-none">
        {/* GAURLINK with custom K-tail underline */}
        <div className="relative">
          <span
            className={`font-serif font-black tracking-tight ${sizeClasses.text} ${
              isLight ? 'text-white' : 'text-[#0D3823]'
            }`}
            style={{
              fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
              letterSpacing: '-0.02em',
            }}
          >
            GAURLINK
          </span>

          {/* Swoosh Underline flourishing from K */}
          <svg
            viewBox="0 0 140 16"
            className="w-full h-2 sm:h-2.5 -mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              d="M 50 2 C 70 8, 100 12, 138 6 C 120 14, 85 14, 50 8 Z"
              fill={isLight ? '#FFFFFF' : '#0D3823'}
            />
          </svg>
        </div>

        {/* Subtitle: LET'S FITTINGZ */}
        {showSubtitle && (
          <span
            className={`font-sans font-black tracking-[0.18em] uppercase -mt-0.5 ${sizeClasses.sub} ${
              isLight ? 'text-emerald-300' : 'text-[#0D3823]'
            }`}
            style={{
              letterSpacing: '0.18em',
            }}
          >
            LET'S FITTINGZ
          </span>
        )}
      </div>
    </div>
  );
};
