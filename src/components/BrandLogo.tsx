import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon-only' | 'badge';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  lightText = false,
}) => {
  // Brand color constants matching the official brand identity
  const orange = '#FF7A00'; // Vibrant Adventure Orange for S & "HOLIDAYS"
  const teal = '#1698B4';   // Vibrant Sky Wander Teal for W & "SKY WANDER"

  // Sizing mappings
  const dimensions = {
    sm: { height: 36, iconHeight: 34, iconWidth: 56, textPrimary: 'text-sm', textSecondary: 'text-[9px]' },
    md: { height: 46, iconHeight: 44, iconWidth: 72, textPrimary: 'text-base sm:text-lg', textSecondary: 'text-[10px] sm:text-[11px]' },
    lg: { height: 60, iconHeight: 56, iconWidth: 92, textPrimary: 'text-xl sm:text-2xl', textSecondary: 'text-xs' },
    xl: { height: 80, iconHeight: 74, iconWidth: 120, textPrimary: 'text-2xl sm:text-3xl', textSecondary: 'text-sm' },
  }[size];

  // SVG Icon element:
  // Large Orange 'S' with Hiker Silhouette + Full, Unclipped Large Teal 'W'
  // viewBox has ample margins (0 0 240 140) to guarantee 0% clipping on all 4 edges!
  const LogoIcon = (
    <svg 
      viewBox="0 0 240 140" 
      className="shrink-0 drop-shadow-sm select-none overflow-visible"
      style={{ height: `${dimensions.iconHeight}px`, width: 'auto' }}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* S Letter in Vibrant Orange */}
      <path 
        d="M 66 18 C 48 18 34 26 26 39 C 22 45 20 52 22 58 C 24 67 33 73 45 77 L 60 82 C 68 85 73 88 73 94 C 73 101 66 106 56 106 C 44 106 35 99 31 89 L 12 96 C 18 114 34 123 56 123 C 79 123 95 111 95 93 C 95 81 86 74 72 69 L 57 64 C 50 61 44 58 44 52 C 44 45 50 40 61 40 C 70 40 78 45 82 53 L 98 44 C 91 28 80 18 66 18 Z" 
        fill={orange}
      />

      {/* Silhouette of Mountain Hiker inside S */}
      <g fill={lightText ? "#FFFFFF" : "#1A1A1A"}>
        {/* Hiker Head & Cap */}
        <circle cx="57" cy="46" r="4.5" />
        <path d="M 56 43 L 64 45 L 63 47 L 56 46 Z" />
        {/* Hiker Backpack */}
        <ellipse cx="48" cy="54" rx="6" ry="8" transform="rotate(-15 48 54)" />
        {/* Hiker Body */}
        <path d="M 52 49 C 54 49 57 52 58 58 L 54 70 L 49 68 L 50 56 Z" />
        {/* Legs Walking */}
        <path d="M 54 69 L 61 82 L 65 98 L 59 99 L 56 85 L 51 72 Z" />
        <path d="M 51 70 L 44 80 L 40 98 L 34 97 L 39 78 L 47 68 Z" />
        {/* Trekking Walking Stick */}
        <line x1="60" y1="58" x2="59" y2="99" stroke={lightText ? "#FFFFFF" : "#1A1A1A"} strokeWidth="1.6" strokeLinecap="round" />
        {/* Ground baseline */}
        <line x1="31" y1="99" x2="67" y2="99" stroke={lightText ? "#FFFFFF" : "#1A1A1A"} strokeWidth="1.2" strokeLinecap="round" />
      </g>

      {/* W Letter in Vibrant Teal - Fully Symmetrical, Perfectly Contained (x: 94 to 226, within 240 width) */}
      <path 
        d="M 94 22 L 116 118 L 135 118 L 152 48 L 169 118 L 188 118 L 210 22 L 189 22 L 178 86 L 161 22 L 143 22 L 126 86 L 115 22 L 94 22 Z" 
        fill={teal}
      />
    </svg>
  );

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {LogoIcon}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="mb-1">
          {LogoIcon}
        </div>
        <div className="flex flex-col items-center">
          <span 
            className={`font-black font-sans tracking-[0.14em] leading-none uppercase ${dimensions.textPrimary}`}
            style={{ 
              color: lightText ? '#38BDF8' : teal,
              fontFamily: "'Montserrat', 'Plus Jakarta Sans', system-ui, sans-serif"
            }}
          >
            SKY WANDER
          </span>
          <span 
            className={`font-black font-sans tracking-[0.38em] leading-none uppercase mt-1 ${dimensions.textSecondary}`}
            style={{ 
              color: orange,
              fontFamily: "'Montserrat', 'Plus Jakarta Sans', system-ui, sans-serif"
            }}
          >
            HOLIDAYS
          </span>
        </div>
      </div>
    );
  }

  // Default 'horizontal' / standard lockup
  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {LogoIcon}
      <div className="flex flex-col justify-center">
        <span 
          className={`font-black font-sans tracking-[0.12em] leading-none uppercase ${dimensions.textPrimary}`}
          style={{ 
            color: lightText ? '#FFFFFF' : teal,
            fontFamily: "'Montserrat', 'Plus Jakarta Sans', system-ui, sans-serif"
          }}
        >
          SKY WANDER
        </span>
        <span 
          className={`font-black font-sans tracking-[0.36em] leading-none uppercase mt-1 ml-0.5 ${dimensions.textSecondary}`}
          style={{ 
            color: orange,
            fontFamily: "'Montserrat', 'Plus Jakarta Sans', system-ui, sans-serif"
          }}
        >
          HOLIDAYS
        </span>
      </div>
    </div>
  );
};
