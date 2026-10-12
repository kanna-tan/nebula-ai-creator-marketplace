import React from 'react';
import {
  Sparkles,
  Compass,
  Briefcase,
  PlusCircle,
  Layers,
  FileCode,
  Presentation,
  Palette,
  UserCheck
} from 'lucide-react';
import {
  BRAND_CONFIG,
  TABS,
  NAV_ITEMS,
  ROLE_OPTIONS,
  COLOR_GRADES,
  NAVBAR_TEXT
} from '../constants/marketplaceConfig';
import NebulaLogo from './NebulaLogo';

const ICON_MAP = {
  compass: Compass,
  briefcase: Briefcase,
  sparkles: Sparkles,
  layers: Layers,
  userCheck: UserCheck
};

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenCreateBrief,
  onOpenDataModel,
  onOpenDeck,
  userRole,
  setUserRole,
  colorGrade,
  setColorGrade
}) {
  const cycleColorGrade = () => {
    const currentIndex = COLOR_GRADES.ORDER.indexOf(colorGrade);
    const nextIndex = (currentIndex + 1) % COLOR_GRADES.ORDER.length;
    setColorGrade(COLOR_GRADES.ORDER[nextIndex]);
  };

  const activePreset = COLOR_GRADES.PRESETS[colorGrade] || COLOR_GRADES.PRESETS.champagne;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#06050a]/85 border-b border-[#f3ead8]/15 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Celestial Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab(TABS.CREATORS)}>
            <NebulaLogo size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#FFFDF9] group-hover:text-white transition-colors">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border border-[#D4BC92]/40 bg-[#D4BC92]/10 text-[#F3EAD8] font-mono-code hidden sm:inline-block">
                  {BRAND_CONFIG.headerBadge}
                </span>
              </div>
              <p className="text-[11px] text-[#D4BC92] tracking-wider uppercase font-light">
                {BRAND_CONFIG.tagline}
              </p>
            </div>
          </div>

          {/* Primary Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => {
              const IconComponent = ICON_MAP[item.iconKey] || Compass;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all relative ${
                    isActive
                      ? 'bg-[#FFFDF9]/15 text-[#FFFDF9] border border-[#F3EAD8]/40 shadow-[0_0_15px_rgba(243,234,216,0.15)] font-semibold'
                      : 'text-[#E5D7BE]/70 hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/5'
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 ${
                      item.badge ? 'text-[#FFFDF9] animate-pulse' : 'text-[#D4BC92]'
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] uppercase px-1.5 py-0.2 rounded-full bg-[#F3EAD8]/20 text-[#FFFDF9] border border-[#F3EAD8]/40">
                      {item.badge}
                    </span>
                  )}
                  {item.showPulse && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Color Grading Preset Selector */}
            <button
              onClick={cycleColorGrade}
              title={`${NAVBAR_TEXT.colorGradeTooltipPrefix} ${activePreset.label} ${NAVBAR_TEXT.colorGradeTooltipSuffix}`}
              className="px-2.5 py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/15 text-[#F3EAD8] flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Palette className="w-3.5 h-3.5 text-[#D4BC92]" />
              <span className="hidden xl:inline text-[11px] font-mono-code">
                {activePreset.icon} {activePreset.badge}
              </span>
            </button>

            {/* View Mode Switcher (Brand vs Creator) */}
            <div className="hidden lg:flex items-center p-1 rounded-xl bg-[#130E23]/90 border border-[#F3EAD8]/20 text-xs">
              {ROLE_OPTIONS.map((role) => {
                const RoleIcon = ICON_MAP[role.iconKey] || Briefcase;
                const isSelected = userRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setUserRole(role.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                      isSelected
                        ? 'bg-[#FFFDF9] text-[#06050a] font-bold shadow-sm'
                        : 'text-[#D4BC92] hover:text-[#FFFDF9]'
                    }`}
                  >
                    <RoleIcon className="w-3.5 h-3.5" />
                    {role.label}
                  </button>
                );
              })}
            </div>

            {/* Data Model Spec Button */}
            <button
              onClick={onOpenDataModel}
              title={NAVBAR_TEXT.dataModelTooltip}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/10 text-[#F3EAD8] flex items-center gap-1.5 transition-all"
            >
              <FileCode className="w-3.5 h-3.5 text-[#D4BC92]" />
              <span className="hidden sm:inline">{NAVBAR_TEXT.dataModelBtn}</span>
            </button>

            {/* Pitch & Presentation Slides Button */}
            <button
              onClick={onOpenDeck}
              title={NAVBAR_TEXT.pitchSlidesTooltip}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/10 text-[#F3EAD8] flex items-center gap-1.5 transition-all"
            >
              <Presentation className="w-3.5 h-3.5 text-[#D4BC92]" />
              <span className="hidden sm:inline">{NAVBAR_TEXT.pitchSlidesBtn}</span>
            </button>

            {/* Post Brief Action Button */}
            <button
              onClick={onOpenCreateBrief}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold special-glow-button whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{NAVBAR_TEXT.postBriefBtn}</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2.5 border-t border-[#F3EAD8]/10 text-xs">
          {NAV_ITEMS.map((item) => {
            const IconComponent = ICON_MAP[item.iconKey] || Compass;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 ${
                  activeTab === item.id ? 'text-[#FFFDF9]' : 'text-[#D4BC92]'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.mobileLabel}</span>
              </button>
            );
          })}
          <button
            onClick={cycleColorGrade}
            className="flex flex-col items-center gap-1 text-[#D4BC92]"
            title={NAVBAR_TEXT.mobileGradeTooltip}
          >
            <Palette className="w-4 h-4" />
            <span>{NAVBAR_TEXT.mobileGradeLabel}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
