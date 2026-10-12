import React from 'react';
import { Sparkles, Compass, Briefcase, PlusCircle, Layers, FileCode, Presentation, Palette, UserCheck } from 'lucide-react';

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
    if (colorGrade === 'champagne') setColorGrade('amethyst');
    else if (colorGrade === 'amethyst') setColorGrade('aurora');
    else setColorGrade('champagne');
  };

  const colorGradeLabels = {
    champagne: { label: 'Celestial Champagne', icon: '🌟', badge: 'Warm Cream' },
    amethyst: { label: 'Mystic Amethyst', icon: '🔮', badge: 'Cosmic Violet' },
    aurora: { label: 'Aurora Stardust', icon: '🌌', badge: 'Moonstone Jade' }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-2xl bg-[#06050a]/85 border-b border-[#f3ead8]/15 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Celestial Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('creators')}>
            <div className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-[#FFFDF9]/25 via-[#F5EEDB]/15 to-[#D4BC92]/20 border border-[#F3EAD8]/40 group-hover:border-[#FFFDF9]/80 transition-all shadow-[0_0_20px_rgba(243,234,216,0.25)]">
              <span className="text-xl">✨</span>
              <div className="absolute inset-0 rounded-full animate-ping opacity-25 bg-[#FFFDF9]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#FFFDF9] group-hover:text-white transition-colors">
                  NEBULA
                </span>
                <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border border-[#D4BC92]/40 bg-[#D4BC92]/10 text-[#F3EAD8] font-mono-code hidden sm:inline-block">
                  AI-Native &bull; ₹ INR
                </span>
              </div>
              <p className="text-[11px] text-[#D4BC92] tracking-wider uppercase font-light">
                The Ethereal AI Creator Exchange
              </p>
            </div>
          </div>

          {/* Primary Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => setActiveTab('creators')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all ${
                activeTab === 'creators'
                  ? 'bg-[#FFFDF9]/15 text-[#FFFDF9] border border-[#F3EAD8]/40 shadow-[0_0_15px_rgba(243,234,216,0.15)] font-semibold'
                  : 'text-[#E5D7BE]/70 hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/5'
              }`}
            >
              <Compass className="w-4 h-4 text-[#D4BC92]" />
              Creators & Portfolios
            </button>

            <button
              onClick={() => setActiveTab('briefs')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all ${
                activeTab === 'briefs'
                  ? 'bg-[#FFFDF9]/15 text-[#FFFDF9] border border-[#F3EAD8]/40 shadow-[0_0_15px_rgba(243,234,216,0.15)] font-semibold'
                  : 'text-[#E5D7BE]/70 hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/5'
              }`}
            >
              <Briefcase className="w-4 h-4 text-[#D4BC92]" />
              Brand Briefs
            </button>

            <button
              onClick={() => setActiveTab('ai-builder')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all relative ${
                activeTab === 'ai-builder'
                  ? 'bg-[#FFFDF9]/20 text-[#FFFDF9] border border-[#F3EAD8]/50 shadow-[0_0_20px_rgba(243,234,216,0.25)] font-semibold'
                  : 'text-[#E5D7BE]/70 hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFFDF9] animate-pulse" />
              <span>AI Brief Studio</span>
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded-full bg-[#F3EAD8]/20 text-[#FFFDF9] border border-[#F3EAD8]/40">
                Bonus
              </span>
            </button>

            <button
              onClick={() => setActiveTab('engagements')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all ${
                activeTab === 'engagements'
                  ? 'bg-[#FFFDF9]/15 text-[#FFFDF9] border border-[#F3EAD8]/40 shadow-[0_0_15px_rgba(243,234,216,0.15)] font-semibold'
                  : 'text-[#E5D7BE]/70 hover:text-[#FFFDF9] hover:bg-[#FFFDF9]/5'
              }`}
            >
              <Layers className="w-4 h-4 text-[#D4BC92]" />
              Engagements
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </button>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Color Grading Preset Selector */}
            <button
              onClick={cycleColorGrade}
              title={`Active Atmosphere: ${colorGradeLabels[colorGrade]?.label} (Click to change color grading)`}
              className="px-2.5 py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/15 text-[#F3EAD8] flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Palette className="w-3.5 h-3.5 text-[#D4BC92]" />
              <span className="hidden xl:inline text-[11px] font-mono-code">
                {colorGradeLabels[colorGrade]?.icon} {colorGradeLabels[colorGrade]?.badge}
              </span>
            </button>

            {/* View Mode Switcher (Brand vs Creator) */}
            <div className="hidden lg:flex items-center p-1 rounded-xl bg-[#130E23]/90 border border-[#F3EAD8]/20 text-xs">
              <button
                onClick={() => setUserRole('brand')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                  userRole === 'brand'
                    ? 'bg-[#FFFDF9] text-[#06050a] font-bold shadow-sm'
                    : 'text-[#D4BC92] hover:text-[#FFFDF9]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                Brand
              </button>
              <button
                onClick={() => setUserRole('creator')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all ${
                  userRole === 'creator'
                    ? 'bg-[#FFFDF9] text-[#06050a] font-bold shadow-sm'
                    : 'text-[#D4BC92] hover:text-[#FFFDF9]'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5" />
                Creator
              </button>
            </div>

            {/* Data Model Spec Button */}
            <button
              onClick={onOpenDataModel}
              title="Deliverable: Profile & Brief Data Model Note"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/10 text-[#F3EAD8] flex items-center gap-1.5 transition-all"
            >
              <FileCode className="w-3.5 h-3.5 text-[#D4BC92]" />
              <span className="hidden sm:inline">Data Model</span>
            </button>

            {/* Pitch & Presentation Slides Button */}
            <button
              onClick={onOpenDeck}
              title="Deliverable: Presentation & Demo Slides (10% criteria)"
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl text-xs font-medium border border-[#F3EAD8]/20 bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/10 text-[#F3EAD8] flex items-center gap-1.5 transition-all"
            >
              <Presentation className="w-3.5 h-3.5 text-[#D4BC92]" />
              <span className="hidden sm:inline">Pitch Slides</span>
            </button>

            {/* Post Brief Action Button */}
            <button
              onClick={onOpenCreateBrief}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold special-glow-button whitespace-nowrap"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Post Brief</span>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Bar */}
        <div className="flex md:hidden items-center justify-around py-2.5 border-t border-[#F3EAD8]/10 text-xs">
          <button
            onClick={() => setActiveTab('creators')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'creators' ? 'text-[#FFFDF9]' : 'text-[#D4BC92]'}`}
          >
            <Compass className="w-4 h-4" />
            <span>Creators</span>
          </button>
          <button
            onClick={() => setActiveTab('briefs')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'briefs' ? 'text-[#FFFDF9]' : 'text-[#D4BC92]'}`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Briefs</span>
          </button>
          <button
            onClick={() => setActiveTab('ai-builder')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'ai-builder' ? 'text-[#FFFDF9]' : 'text-[#D4BC92]'}`}
          >
            <Sparkles className="w-4 h-4" />
            <span>AI Studio</span>
          </button>
          <button
            onClick={() => setActiveTab('engagements')}
            className={`flex flex-col items-center gap-1 ${activeTab === 'engagements' ? 'text-[#FFFDF9]' : 'text-[#D4BC92]'}`}
          >
            <Layers className="w-4 h-4" />
            <span>Projects</span>
          </button>
          <button
            onClick={cycleColorGrade}
            className="flex flex-col items-center gap-1 text-[#D4BC92]"
            title="Cycle Atmosphere Color Grade"
          >
            <Palette className="w-4 h-4" />
            <span>Grade</span>
          </button>
        </div>

      </div>
    </header>
  );
}
