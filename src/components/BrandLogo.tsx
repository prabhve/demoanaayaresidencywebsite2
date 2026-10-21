import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md'
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? 'text-white' : 'text-[#100909]';
  const subTextColor = isLight ? 'text-gray-300' : 'text-gray-600';

  const iconSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: 'w-9 h-9 sm:w-11 sm:h-11',
    lg: 'w-12 h-12 sm:w-14 sm:h-14'
  };

  const titleSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-lg sm:text-2xl',
    lg: 'text-2xl sm:text-3xl'
  };

  const subSizes = {
    sm: 'text-[9px] tracking-widest',
    md: 'text-[10px] sm:text-xs tracking-widest',
    lg: 'text-xs tracking-widest'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Luxury Gold Architectural Emblem */}
      <div
        className={`${iconSizes[size]} shrink-0 rounded-xl bg-gradient-to-br from-[#F8BB13] via-[#E29600] to-[#b87600] p-0.5 shadow-md flex items-center justify-center`}
      >
        <div className="w-full h-full rounded-[10px] bg-[#100909] flex items-center justify-center p-1.5 sm:p-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F8BB13"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            {/* Elegant Royal Crown & Arch */}
            <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01M12 10h.01" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left justify-center">
        <span
          className={`font-serif font-black tracking-tight leading-none ${titleSizes[size]} ${textColor}`}
        >
          ANAAYA
        </span>
        <span
          className={`font-sans font-bold uppercase text-[#E29600] leading-tight mt-0.5 ${subSizes[size]}`}
        >
          RESIDENCY
        </span>
        <span className={`text-[9px] uppercase hidden sm:block font-medium ${subTextColor}`}>
          Near Kamakhya Temple • Guwahati
        </span>
      </div>
    </div>
  );
};
