import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

import logo from '../../assets/logo/logo.png';

export const GaurLinkLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20',
    xl: 'h-24',
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img
        src={logo}
        alt="Gaur Link Fence & Fittings"
        className={sizeClasses}
        loading="lazy"
      />
    </div>
  );
};