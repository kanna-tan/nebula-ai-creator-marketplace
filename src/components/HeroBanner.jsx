import React from 'react';
import { Sparkles, Shield, Cpu, Award, ArrowUpRight, Search } from 'lucide-react';
import { HERO_CONFIG } from '../constants/marketplaceConfig';

const BADGE_ICON_MAP = {
  cpu: Cpu,
  shield: Shield,
  award: Award,
  sparkles: Sparkles
};

export default function HeroBanner({
  searchQuery,
  setSearchQuery,
  onExploreClick,
  onAiStudioClick
}) {
  return (
    <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Subtle Celestial Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDF9]/10 border border-[#F3EAD8]/30 backdrop-blur-md mb-8 animate-celestial shadow-[0_0_15px_rgba(243,234,216,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-[#FFFDF9]" />
          <span className="text-xs font-medium tracking-widest uppercase text-[#F3EAD8]">
            {HERO_CONFIG.pillBadge}
          </span>
        </div>

        {/* Ethereal Minimal Headline */}
        <h1 className="font-serif-celestial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFDF9] leading-[1.08] mb-6">
          {HERO_CONFIG.headlineLine1} <br className="hidden sm:inline" />
          <span className="italic font-light gold-cream-text">
            {HERO_CONFIG.headlineHighlight}
          </span>
        </h1>

        {/* Minimal Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E2D6C0]/80 font-light leading-relaxed mb-10">
          {HERO_CONFIG.subtitle}
        </p>

        {/* Central Search & Action Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center p-2 rounded-2xl bg-[#120F1D]/80 border border-[#EFE7D8]/20 backdrop-blur-xl shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] focus-within:border-[#FDFBF7]/50 transition-all">
            <Search className="w-5 h-5 text-[#C9B89B] ml-3" />
            <input
              type="text"
              placeholder={HERO_CONFIG.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-[#FDFBF7] placeholder-[#C9B89B]/60 text-sm sm:text-base px-3 py-2 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#C9B89B] hover:text-[#FDFBF7] mr-2 px-2 py-1 rounded bg-[#FDFBF7]/10"
              >
                {HERO_CONFIG.clearBtn}
              </button>
            )}
            <button
              onClick={onExploreClick}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FDFBF7] text-[#08070D] font-medium text-sm hover:bg-white transition-all whitespace-nowrap shadow-sm"
            >
              <span>{HERO_CONFIG.exploreBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-[#C9B89B]/80 font-light">
            <span>{HERO_CONFIG.popularPromptsLabel}</span>
            {HERO_CONFIG.popularPrompts.map((prompt, index) => (
              <React.Fragment key={prompt.query}>
                {index > 0 && <span>&bull;</span>}
                <button
                  onClick={() => setSearchQuery(prompt.query)}
                  className="hover:text-[#FDFBF7] underline decoration-[#C9B89B]/40"
                >
                  {prompt.label}
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Trust & Verification Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-[#EFE7D8]/10 text-left">
          {HERO_CONFIG.trustBadges.map((badge) => {
            const BadgeIcon = BADGE_ICON_MAP[badge.iconKey] || Sparkles;
            return (
              <div
                key={badge.id}
                onClick={badge.isAction ? onAiStudioClick : undefined}
                className={`p-3.5 rounded-xl backdrop-blur-sm flex items-center gap-3 ${
                  badge.isAction
                    ? 'bg-[#FDFBF7]/10 border border-[#EFE7D8]/30 cursor-pointer hover:border-[#FDFBF7]/60 transition-all group'
                    : 'bg-[#120F1D]/40 border border-[#EFE7D8]/10'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    badge.isAction
                      ? 'bg-[#FDFBF7] text-[#08070D] group-hover:scale-105 transition-transform'
                      : 'bg-[#FDFBF7]/10 text-[#FDFBF7]'
                  }`}
                >
                  <BadgeIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#FDFBF7] flex items-center gap-1">
                    {badge.title}
                    {badge.tag && (
                      <span className="text-[9px] text-[#08070D] bg-[#FDFBF7] px-1 rounded font-bold">
                        {badge.tag}
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[11px] font-light ${
                      badge.isAction ? 'text-[#C9B89B]' : 'text-[#C9B89B]/80'
                    }`}
                  >
                    {badge.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
