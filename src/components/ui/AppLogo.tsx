'use client';

import React from 'react';

interface AppLogoProps {
  size?: number;
  className?: string;
  onClick?: () => void;
}

const AppLogo = ({ size = 32, className = '', onClick }: AppLogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <rect width="40" height="40" rx="8" fill="#C9A96E" fillOpacity="0.15" />
      <rect x="0.5" y="0.5" width="39" height="39" rx="7.5" stroke="#C9A96E" strokeOpacity="0.4" />
      <text
        x="50%"
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="900"
        fontSize="18"
        fill="#C9A96E"
        letterSpacing="-1"
      >
        BC
      </text>
    </svg>
  );
};

export default AppLogo;
