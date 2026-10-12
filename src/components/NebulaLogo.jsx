import React, { useId } from 'react';
import { BRAND_CONFIG } from '../constants/marketplaceConfig';

const SIZE_CLASSES = {
  sm: 'w-8 h-8',
  md: 'w-11 h-11',
  lg: 'w-14 h-14'
};

export default function NebulaLogo({ size = 'md', className = '' }) {
  const uid = useId().replace(/:/g, '');
  const sizeClass = SIZE_CLASSES[size] || SIZE_CLASSES.md;

  return (
    <div
      className={`relative ${sizeClass} rounded-full flex items-center justify-center select-none group/logo ${className}`}
      aria-label={BRAND_CONFIG.logoMark}
    >
      {/* Ambient Starlight Halo */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#D4BC92]/30 via-[#FFFDF9]/25 to-[#9D7FEA]/25 blur-sm opacity-75 group-hover/logo:opacity-100 transition-opacity duration-500" />

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-full h-full drop-shadow-[0_0_12px_rgba(243,234,216,0.3)]"
      >
        <defs>
          {/* Deep Obsidian & Nebula Core Gradient */}
          <radialGradient id={`nebulaCore-${uid}`} cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#211A36" />
            <stop offset="55%" stopColor="#0D0A18" />
            <stop offset="100%" stopColor="#06050A" />
          </radialGradient>

          {/* Warm Pearl Cream to Champagne Gold Metallic Gradient for the 'N' */}
          <linearGradient id={`nebulaGold-${uid}`} x1="18%" y1="15%" x2="85%" y2="88%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="45%" stopColor="#F5EEDB" />
            <stop offset="80%" stopColor="#D4BC92" />
            <stop offset="100%" stopColor="#B89B6A" />
          </linearGradient>

          {/* Subtle Orbital Ring Gradient */}
          <linearGradient id={`nebulaOrbit-${uid}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#D4BC92" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFFDF9" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Outer Medallion Base */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill={`url(#nebulaCore-${uid})`}
          stroke={`url(#nebulaGold-${uid})`}
          strokeWidth="2.2"
        />

        {/* Inner Fine Celestial Ring */}
        <circle
          cx="50"
          cy="50"
          r="40.5"
          stroke="#F3EAD8"
          strokeOpacity="0.22"
          strokeWidth="0.9"
          strokeDasharray="3 3"
        />

        {/* Tilted Planetary / Galaxy Orbital Ring */}
        <ellipse
          cx="50"
          cy="50"
          rx="42"
          ry="14.5"
          transform="rotate(-28 50 50)"
          stroke={`url(#nebulaOrbit-${uid})`}
          strokeWidth="1.4"
        />

        {/* Sculptural Celestial 'N' Monogram */}
        {/* Top & Bottom Serifs + Left Vertical Stem + Right Vertical Stem + Constellation Diagonal */}
        <path
          d="
            M 25 28
            H 38.5
            L 64.5 63.5
            V 33
            C 64.5 30 62.5 28 59.5 28
            H 75
            C 72 28 70.5 30 70.5 33
            V 73
            H 61.5
            L 34.5 36.5
            V 67
            C 34.5 70 36.5 72 39.5 72
            H 24
            C 27 72 28.5 70 28.5 67
            V 33
            C 28.5 30 27 28 25 28
            Z
          "
          fill={`url(#nebulaGold-${uid})`}
        />

        {/* Inner Highlight Stroke along the 'N' Diagonal for Depth */}
        <line
          x1="34"
          y1="30.5"
          x2="65"
          y2="70.5"
          stroke="#FFFDF9"
          strokeWidth="1.2"
          strokeOpacity="0.7"
        />

        {/* North Star Sparkle at Upper-Right Apex of 'N' */}
        <path
          d="M 74 17 L 75.8 22.2 L 81 24 L 75.8 25.8 L 74 31 L 72.2 25.8 L 67 24 L 72.2 22.2 Z"
          fill="#FFFDF9"
        />

        {/* Micro Stardust Nodes */}
        <circle cx="22" cy="54" r="1.4" fill="#FFFDF9" fillOpacity="0.85" />
        <circle cx="50" cy="50" r="1.8" fill="#FFFDF9" />
        <circle cx="79" cy="48" r="1.2" fill="#D4BC92" fillOpacity="0.8" />
      </svg>
    </div>
  );
}
