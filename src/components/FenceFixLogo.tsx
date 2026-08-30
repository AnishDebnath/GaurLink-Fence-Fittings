import React from 'react';

interface FenceFixLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const FenceFixLogo: React.FC<FenceFixLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const height = {
    sm: 'h-8 sm:h-8.5',
    md: 'h-9.5 sm:h-10.5',
    lg: 'h-13 sm:h-14',
  }[size];

  return (
    <div className={`flex items-center gap-2 select-none shrink-0 ${height} ${className}`}>
      <svg
        viewBox="0 0 240 76"
        className="h-full w-auto object-contain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skylineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EA4335" />
            <stop offset="25%" stopColor="#FB8C00" />
            <stop offset="50%" stopColor="#FDD835" />
            <stop offset="75%" stopColor="#00ACC1" />
            <stop offset="100%" stopColor="#8E24AA" />
          </linearGradient>

          <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#801319" />
            <stop offset="100%" stopColor="#550A0E" />
          </linearGradient>

          <linearGradient id="goldBorder" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>

          <linearGradient id="bannerGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="50%" stopColor="#FFB300" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>
        </defs>

        {/* ================= MASCOT CONTRACTOR ================= */}
        <g id="mascot" transform="translate(4, 2)">
          {/* Wood Pickets held in arm */}
          <g id="wood-pickets" transform="rotate(-6 35 25)">
            {/* Picket 1 */}
            <path d="M 28,6 L 31,2 L 34,6 L 34,36 L 28,36 Z" fill="#C18953" stroke="#8D5B28" strokeWidth="0.8" />
            {/* Picket 2 */}
            <path d="M 33,4 L 36,0 L 39,4 L 39,36 L 33,36 Z" fill="#DDB07D" stroke="#8D5B28" strokeWidth="0.8" />
            {/* Picket 3 */}
            <path d="M 38,7 L 41,3 L 44,7 L 44,36 L 38,36 Z" fill="#A87342" stroke="#683F16" strokeWidth="0.8" />
          </g>

          {/* Boots */}
          <ellipse cx="14" cy="71" rx="4.5" ry="2.2" fill="#5D4037" />
          <ellipse cx="23" cy="71" rx="4.5" ry="2.2" fill="#4E342E" />

          {/* Legs / Jeans */}
          {/* Left leg */}
          <path d="M 12,47 L 16,47 L 16.5,70 L 11.5,70 Z" fill="#1976D2" stroke="#0D47A1" strokeWidth="0.7" />
          {/* Right leg */}
          <path d="M 18,47 L 23,47 L 25,70 L 20,70 Z" fill="#1565C0" stroke="#0D47A1" strokeWidth="0.7" />
          {/* Belt */}
          <rect x="11" y="45.5" width="13" height="2.5" rx="0.5" fill="#3E2723" />
          <rect x="15.5" y="45.2" width="4" height="3" rx="0.5" fill="#FFD54F" />

          {/* Torso / Work Shirt */}
          <path
            d="M 9,30 L 25,30 L 24,46 L 11,46 Z"
            fill="#795548"
            stroke="#4E342E"
            strokeWidth="0.8"
          />
          {/* Shirt V-neck collar & inner shirt */}
          <path d="M 14,30 L 17,37 L 20,30 Z" fill="#FFCCBC" />
          <path d="M 12,30 L 17,35 L 22,30" stroke="#3E2723" strokeWidth="0.8" fill="none" />

          {/* Right arm on hip */}
          <path
            d="M 9,31 C 4,36 4,44 11,45"
            fill="none"
            stroke="#795548"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="11" cy="45" r="2" fill="#FFCCBC" />

          {/* Left arm holding pickets */}
          <path
            d="M 23,32 C 27,34 30,38 31,31"
            fill="none"
            stroke="#795548"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <circle cx="31" cy="30" r="2.2" fill="#FFCCBC" />

          {/* Neck & Head */}
          <rect x="15" y="24" width="4" height="6" fill="#FFCCBC" />
          {/* Head & Ears */}
          <circle cx="12" cy="20" r="1.8" fill="#FFCCBC" />
          <circle cx="22" cy="20" r="1.8" fill="#FFCCBC" />
          <circle cx="17" cy="19" r="5.8" fill="#FFCCBC" />

          {/* Beard & Hair */}
          <path
            d="M 12,18 C 12,25 22,25 22,18 C 20,24 14,24 12,18 Z"
            fill="#5D4037"
          />
          {/* Hair on top */}
          <path
            d="M 11,18 C 11,12 23,12 23,18 C 22,14 13,14 11,18 Z"
            fill="#6D4C41"
          />

          {/* Smile and Eyes */}
          <circle cx="15" cy="18" r="0.8" fill="#3E2723" />
          <circle cx="19" cy="18" r="0.8" fill="#3E2723" />
          <path d="M 15.5,21 Q 17,23 18.5,21" stroke="#3E2723" strokeWidth="0.6" fill="none" />
        </g>

        {/* ================= GAURLINK FENCE & FITTINGS BADGE ================= */}
        <g id="fencefix-badge" transform="translate(48, 4)">
          {/* Skyline Silhouettes */}
          <g id="skyline" opacity="0.95">
            {/* Colorful Skyscraper Towers */}
            <rect x="18" y="10" width="8" height="15" fill="#EF5350" rx="1" />
            <polygon points="22,5 18,10 26,10" fill="#E53935" />

            <rect x="29" y="7" width="9" height="18" fill="#FFA726" rx="1" />
            <polygon points="33.5,2 29,7 38,7" fill="#FB8C00" />
            <rect x="33" y="0" width="1" height="3" fill="#E65100" />

            <rect x="41" y="4" width="11" height="21" fill="#FFEE58" rx="1" />
            <polygon points="46.5,0 41,4 52,4" fill="#FDD835" />

            <rect x="55" y="6" width="12" height="19" fill="#26C6DA" rx="1" />
            <polygon points="61,1 55,6 67,6" fill="#00ACC1" />

            <rect x="70" y="8" width="9" height="17" fill="#AB47BC" rx="1" />
            <polygon points="74.5,4 70,8 79,8" fill="#8E24AA" />

            <rect x="82" y="11" width="8" height="14" fill="#5C6BC0" rx="1" />
            <polygon points="86,7 82,11 90,11" fill="#3949AB" />

            <rect x="93" y="13" width="7" height="12" fill="#42A5F5" rx="1" />

            <rect x="103" y="10" width="8" height="15" fill="#EF5350" rx="1" />
            <polygon points="107,6 103,10 111,10" fill="#E53935" />

            <rect x="114" y="12" width="9" height="13" fill="#FFA726" rx="1" />

            <rect x="126" y="9" width="10" height="16" fill="#26A69A" rx="1" />
            <polygon points="131,4 126,9 136,9" fill="#00897B" />

            <rect x="139" y="12" width="8" height="13" fill="#AB47BC" rx="1" />
          </g>

          {/* Main Shield Outline & Drop Shadow */}
          <path
            d="M 12,22 L 152,22 C 152,22 154,49 146,56 C 138,63 94,70 82,71 C 70,70 26,63 18,56 C 10,49 12,22 12,22 Z"
            fill="url(#goldBorder)"
            stroke="#B26A00"
            strokeWidth="1.2"
            filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))"
          />

          {/* Inner Shield Body (Deep Forest Gaur Green) */}
          <path
            d="M 15,24 L 149,24 C 149,24 151,48 143,54 C 135,60 92,67 82,68 C 72,67 29,60 21,54 C 13,48 15,24 15,24 Z"
            fill="url(#shieldGrad)"
          />

          {/* Subtle Inner Gold Bevel Line */}
          <path
            d="M 18,26 L 146,26 C 146,26 148,46 141,52 C 134,58 91,64 82,65 C 73,64 30,58 23,52 C 16,46 18,26 18,26 Z"
            fill="none"
            stroke="#FFA000"
            strokeWidth="0.8"
            opacity="0.6"
          />

          {/* "GAURLINK" Typography */}
          <g transform="translate(82, 43)">
            {/* Dark Outline / 3D Shadow for GAURLINK */}
            <text
              x="0"
              y="0"
              textAnchor="middle"
              fill="#3E0000"
              fontSize="19"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.2"
              stroke="#2B0000"
              strokeWidth="2.5"
              strokeLinejoin="round"
            >
              GAURLINK
            </text>

            {/* Main Vibrant Gold GAURLINK text */}
            <text
              x="0"
              y="-0.5"
              textAnchor="middle"
              fill="#FFEA00"
              fontSize="19"
              fontWeight="900"
              fontFamily="system-ui, -apple-system, sans-serif"
              letterSpacing="1.2"
            >
              GAURLINK
            </text>
          </g>

          {/* "FENCE & FITTINGS" Golden-Orange Banner Ribbon */}
          <g id="houston-ribbon" transform="translate(82, 57)">
            {/* Banner Backing / Fold Left & Right */}
            <polygon points="-48,1 -53,5 -48,9" fill="#B24000" />
            <polygon points="48,1 53,5 48,9" fill="#B24000" />

            {/* Banner Main Rectangle */}
            <rect
              x="-48"
              y="-1"
              width="96"
              height="11"
              rx="2.5"
              fill="url(#bannerGrad)"
              stroke="#FFF9C4"
              strokeWidth="0.7"
            />

            {/* FENCE & FITTINGS Text */}
            <text
              x="0"
              y="7.5"
              textAnchor="middle"
              fill="#550A0E"
              fontSize="7.5"
              fontWeight="900"
              letterSpacing="1"
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              FENCE &amp; FITTINGS MFG
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};
