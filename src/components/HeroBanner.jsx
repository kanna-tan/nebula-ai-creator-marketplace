import React from 'react';
import { Sparkles, Shield, Cpu, Award, ArrowUpRight, Search } from 'lucide-react';

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
            AI-Native Creative Economy &bull; ₹ INR Settlements
          </span>
        </div>

        {/* Ethereal Minimal Headline */}
        <h1 className="font-serif-celestial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#FFFDF9] leading-[1.08] mb-6">
          Where Generative Vision <br className="hidden sm:inline" />
          <span className="italic font-light gold-cream-text">
            Meets Celestial Craft
          </span>
        </h1>

        {/* Minimal Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E2D6C0]/80 font-light leading-relaxed mb-10">
          Discover vetted AI filmmakers, virtual fashion creators, and procedural artists. 
          Inspect multi-model ComfyUI pipelines, verify generation seeds, and license commercial-ready IP.
        </p>

        {/* Central Search & Action Bar */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="relative flex items-center p-2 rounded-2xl bg-[#120F1D]/80 border border-[#EFE7D8]/20 backdrop-blur-xl shadow-[0_10px_35px_-5px_rgba(0,0,0,0.5)] focus-within:border-[#FDFBF7]/50 transition-all">
            <Search className="w-5 h-5 text-[#C9B89B] ml-3" />
            <input
              type="text"
              placeholder="Search by model (e.g. Flux.1, Runway Gen-3), skill, or style (e.g. Celestial, Fashion)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-none text-[#FDFBF7] placeholder-[#C9B89B]/60 text-sm sm:text-base px-3 py-2 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#C9B89B] hover:text-[#FDFBF7] mr-2 px-2 py-1 rounded bg-[#FDFBF7]/10"
              >
                Clear
              </button>
            )}
            <button
              onClick={onExploreClick}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FDFBF7] text-[#08070D] font-medium text-sm hover:bg-white transition-all whitespace-nowrap shadow-sm"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-[#C9B89B]/80 font-light">
            <span>Popular prompts:</span>
            <button 
              onClick={() => setSearchQuery('Flux.1 Pro')} 
              className="hover:text-[#FDFBF7] underline decoration-[#C9B89B]/40"
            >
              Flux.1 Pro
            </button>
            &bull;
            <button 
              onClick={() => setSearchQuery('Runway Gen-3')} 
              className="hover:text-[#FDFBF7] underline decoration-[#C9B89B]/40"
            >
              Runway Gen-3
            </button>
            &bull;
            <button 
              onClick={() => setSearchQuery('ComfyUI')} 
              className="hover:text-[#FDFBF7] underline decoration-[#C9B89B]/40"
            >
              ComfyUI Workflows
            </button>
            &bull;
            <button 
              onClick={() => setSearchQuery('Haute Couture')} 
              className="hover:text-[#FDFBF7] underline decoration-[#C9B89B]/40"
            >
              Haute Couture
            </button>
          </div>
        </div>

        {/* Trust & Verification Badges Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 border-t border-[#EFE7D8]/10 text-left">
          
          <div className="p-3.5 rounded-xl bg-[#120F1D]/40 border border-[#EFE7D8]/10 backdrop-blur-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FDFBF7]/10 flex items-center justify-center text-[#FDFBF7] shrink-0">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#FDFBF7]">Reproducible Nodes</div>
              <div className="text-[11px] text-[#C9B89B]/80 font-light">ComfyUI Graph Verified</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#120F1D]/40 border border-[#EFE7D8]/10 backdrop-blur-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FDFBF7]/10 flex items-center justify-center text-[#FDFBF7] shrink-0">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#FDFBF7]">Commercial Clearance</div>
              <div className="text-[11px] text-[#C9B89B]/80 font-light">100% IP Warrantied</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#120F1D]/40 border border-[#EFE7D8]/10 backdrop-blur-sm flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FDFBF7]/10 flex items-center justify-center text-[#FDFBF7] shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#FDFBF7]">Identity Consistency</div>
              <div className="text-[11px] text-[#C9B89B]/80 font-light">99%+ 10-Shot Benchmark</div>
            </div>
          </div>

          <div 
            onClick={onAiStudioClick}
            className="p-3.5 rounded-xl bg-[#FDFBF7]/10 border border-[#EFE7D8]/30 backdrop-blur-sm flex items-center gap-3 cursor-pointer hover:border-[#FDFBF7]/60 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#FDFBF7] text-[#08070D] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-semibold text-[#FDFBF7] flex items-center gap-1">
                AI Brief Studio
                <span className="text-[9px] text-[#08070D] bg-[#FDFBF7] px-1 rounded font-bold">New</span>
              </div>
              <div className="text-[11px] text-[#C9B89B] font-light">Generate Brief in 10s &rarr;</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
