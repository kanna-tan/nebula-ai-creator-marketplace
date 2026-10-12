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
  LogOut
} from 'lucide-react';
import {
  BRAND_CONFIG,
  TABS,
  NAV_ITEMS,
  COLOR_GRADES,
  NAVBAR_TEXT,
  AUTH_CONFIG
} from '../constants/marketplaceConfig';
import NebulaLogo from './NebulaLogo';

const ICON_MAP = {
  compass: Compass,
  briefcase: Briefcase,
  sparkles: Sparkles,
  layers: Layers
};

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenCreateBrief,
  onOpenDataModel,
  onOpenDeck,
  colorGrade,
  setColorGrade,
  currentUser,
  onSignOut
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
        <div className="flex items-center justify-between h-20 gap-3">
          
          {/* Celestial Logo & Brand */}
          <div
            className="flex items-center gap-3 cursor-pointer group shrink-0"
            onClick={() => setActiveTab(TABS.CREATORS)}
          >
            <NebulaLogo size="md" />
            <div>
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.22em] text-[#FFFDF9] group-hover:text-white transition-colors block leading-tight">
                {BRAND_CONFIG.name}
              </span>
              <p className="text-[10px] sm:text-[11px] text-[#D4BC92] tracking-wider uppercase font-light whitespace-nowrap">
                {BRAND_CONFIG.tagline}
              </p>
            </div>
          </div>

          {/* Primary Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const IconComponent = ICON_MAP[item.iconKey] || Compass;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all whitespace-nowrap relative ${
                    isActive
                      ? 'bg-[#FFFDF9]/15 text-[#FFFDF9] border border-[#F3EAD8]/40 shadow-[0_0_15px_rgba(243,234,216,0.15)] font-semibold'
                      : 'text-[#E5D7BE]/70 hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/5'
                  }`}
                >
                  <IconComponent
                    className={`w-4 h-4 shrink-0 ${
                      item.badge ? 'text-[#FFFDF9] animate-pulse' : 'text-[#D4BC92]'
                    }`}
                  />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] uppercase px-1.5 py-0.5 rounded-full bg-[#F3EAD8]/20 text-[#FFFDF9] border border-[#F3EAD8]/40">
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
          <div className="flex items-center gap-2 shrink-0">
            
            {/* Color Grading Preset Selector */}
            <button
              onClick={cycleColorGrade}
              title={`${NAVBAR_TEXT.colorGradeTooltipPrefix} ${activePreset.label} ${NAVBAR_TEXT.colorGradeTooltipSuffix}`}
              className="px-2.5 py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/15 text-[#F3EAD8] flex items-center gap-1.5 transition-all shadow-sm whitespace-nowrap"
            >
              <Palette className="w-3.5 h-3.5 text-[#D4BC92] shrink-0" />
              <span className="hidden xl:inline text-[11px] font-mono-code">
                {activePreset.icon} {activePreset.badge}
              </span>
            </button>

            {/* Data Model Spec Button */}
            <button
              onClick={onOpenDataModel}
              title={NAVBAR_TEXT.dataModelTooltip}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/10 text-[#F3EAD8] flex items-center gap-1.5 transition-all whitespace-nowrap"
            >
              <FileCode className="w-3.5 h-3.5 text-[#D4BC92] shrink-0" />
              <span className="hidden lg:inline">{NAVBAR_TEXT.dataModelBtn}</span>
            </button>

            {/* Pitch & Presentation Slides Button */}
            <button
              onClick={onOpenDeck}
              title={NAVBAR_TEXT.pitchSlidesTooltip}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/10 text-[#F3EAD8] flex items-center gap-1.5 transition-all whitespace-nowrap"
            >
              <Presentation className="w-3.5 h-3.5 text-[#D4BC92] shrink-0" />
              <span className="hidden lg:inline">{NAVBAR_TEXT.pitchSlidesBtn}</span>
            </button>

            {/* Post Brief Action Button */}
            <button
              onClick={onOpenCreateBrief}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold special-glow-button whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4 shrink-0" />
              <span>{NAVBAR_TEXT.postBriefBtn}</span>
            </button>

            {/* Signed-In User Pill & Sign Out Button */}
            {currentUser && (
              <div className="flex items-center gap-1.5 pl-1.5 border-l border-[#F3EAD8]/15">
                <div
                  title={`${currentUser.name} (${currentUser.accountType})`}
                  className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-xl bg-[#FFFDF9]/5 border border-[#F3EAD8]/20 text-xs text-[#FFFDF9] whitespace-nowrap"
                >
                  <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#FFFDF9] to-[#D4BC92] text-[#08070D] font-bold text-[10px] flex items-center justify-center shrink-0">
                    {currentUser.initials}
                  </span>
                  <span className="max-w-[90px] truncate font-medium">
                    {currentUser.name}
                  </span>
                </div>

                <button
                  onClick={onSignOut}
                  title={AUTH_CONFIG.labels.signOutTooltip}
                  className="p-2 rounded-xl border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-rose-500/20 hover:border-rose-400/40 text-[#D4BC92] hover:text-rose-200 transition-all flex items-center gap-1 text-xs whitespace-nowrap"
                >
                  <LogOut className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            )}
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
