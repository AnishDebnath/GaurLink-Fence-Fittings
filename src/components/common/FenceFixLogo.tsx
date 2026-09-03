import React from 'react';

import logoOriginal from '../../assets/logo/logo-original.png';

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
      <img
        src={logoOriginal}
        alt="Gaur Link Fence & Fittings"
        className="h-full w-auto object-contain"
      />
    </div>
  );
};
