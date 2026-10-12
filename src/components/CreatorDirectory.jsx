import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Star, 
  Video, 
  Image as ImageIcon, 
  Play, 
  SlidersHorizontal, 
  CheckCircle2, 
  RotateCcw,
  Clock,
  ArrowRight
} from 'lucide-react';
import { ALL_TOOLS_LIST, ALL_CONTENT_TYPES, ALL_SPECIALIZATIONS } from '../data/creators';

export default function CreatorDirectory({
  creators,
  searchQuery,
  setSearchQuery,
  onSelectCreator,
  onSelectPortfolioItem
}) {
  const [selectedContentType, setSelectedContentType] = useState('All Types');
  const [selectedTool, setSelectedTool] = useState('All Tools');
  const [selectedSpec, setSelectedSpec] = useState('All Specializations');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('rating'); // 'rating', 'rate_asc', 'jobs'

  // Filter & Search Logic
  const filteredCreators = useMemo(() => {
    return creators.filter((creator) => {
      // Text search match
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        creator.name.toLowerCase().includes(q) ||
        creator.title.toLowerCase().includes(q) ||
        creator.specializations.some((s) => s.toLowerCase().includes(q)) ||
        creator.skills.some((s) => s.toLowerCase().includes(q)) ||
        creator.tools.some((t) => t.name.toLowerCase().includes(q)) ||
        creator.portfolios.some((p) => p.title.toLowerCase().includes(q) || p.promptArchitecture.toLowerCase().includes(q));

      // Content Type match
      const matchesContentType =
        selectedContentType === 'All Types' ||
        creator.portfolios.some((p) => p.contentType === selectedContentType);

      // Tool match
      const matchesTool =
        selectedTool === 'All Tools' ||
        creator.tools.some((t) => t.name.toLowerCase().includes(selectedTool.toLowerCase()));

      // Specialization match
      const matchesSpec =
        selectedSpec === 'All Specializations' ||
        creator.specializations.includes(selectedSpec);

      // Verification filter
      const matchesVerified =
        !verifiedOnly ||
        (creator.verificationSignals.workflowVerified && creator.verificationSignals.toolVerified);

      return matchesSearch && matchesContentType && matchesTool && matchesSpec && matchesVerified;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'jobs') return b.verificationSignals.verifiedJobsCompleted - a.verificationSignals.verifiedJobsCompleted;
      if (sortBy === 'rate_asc') {
        const rateA = parseInt(a.startingProjectRate.replace(/[₹$,]/g, ''), 10);
        const rateB = parseInt(b.startingProjectRate.replace(/[₹$,]/g, ''), 10);
        return rateA - rateB;
      }
      return 0;
    });
  }, [creators, searchQuery, selectedContentType, selectedTool, selectedSpec, verifiedOnly, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedContentType('All Types');
    setSelectedTool('All Tools');
    setSelectedSpec('All Specializations');
    setVerifiedOnly(false);
    setSortBy('rating');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Filter and Control Bar */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#120F1D]/70 border border-[#EFE7D8]/15 backdrop-blur-xl mb-8">
        
        {/* Top Filter Row: Content Types */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#EFE7D8]/10">
          <div className="flex items-center gap-2 text-xs text-[#C9B89B]">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span className="uppercase tracking-wider font-medium">Filter Medium:</span>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {ALL_CONTENT_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedContentType(type)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedContentType === type
                    ? 'bg-[#FDFBF7] text-[#08070D] shadow-sm font-semibold'
                    : 'bg-[#FDFBF7]/5 text-[#EFE7D8]/80 hover:bg-[#FDFBF7]/10 hover:text-[#FDFBF7]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Filter Dropdowns & Toggles */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {/* Tool Filter */}
            <div className="relative">
              <select
                value={selectedTool}
                onChange={(e) => setSelectedTool(e.target.value)}
                className="appearance-none bg-[#08070D]/80 border border-[#EFE7D8]/20 rounded-xl px-3 py-1.5 pr-8 text-xs text-[#EFE7D8] focus:outline-none focus:border-[#FDFBF7]"
              >
                <option value="All Tools">All AI Tools & Models</option>
                {ALL_TOOLS_LIST.map((tool) => (
                  <option key={tool} value={tool} className="bg-[#120F1D]">
                    {tool}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#C9B89B]">
                <span className="text-[10px]">&#9662;</span>
              </div>
            </div>

            {/* Specialization Filter */}
            <div className="relative">
              <select
                value={selectedSpec}
                onChange={(e) => setSelectedSpec(e.target.value)}
                className="appearance-none bg-[#08070D]/80 border border-[#EFE7D8]/20 rounded-xl px-3 py-1.5 pr-8 text-xs text-[#EFE7D8] focus:outline-none focus:border-[#FDFBF7]"
              >
                {ALL_SPECIALIZATIONS.map((spec) => (
                  <option key={spec} value={spec} className="bg-[#120F1D]">
                    {spec}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#C9B89B]">
                <span className="text-[10px]">&#9662;</span>
              </div>
            </div>

            {/* Verified Workflows Only Toggle */}
            <label className="flex items-center gap-2 text-xs text-[#EFE7D8] cursor-pointer select-none px-3 py-1.5 rounded-xl bg-[#FDFBF7]/5 border border-[#EFE7D8]/15 hover:bg-[#FDFBF7]/10 transition-colors">
              <input
                type="checkbox"
                checked={verifiedOnly}
                onChange={(e) => setVerifiedOnly(e.target.checked)}
                className="rounded accent-[#C9B89B] w-3.5 h-3.5"
              />
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Verified Workflows Only
              </span>
            </label>
          </div>

          {/* Right: Sort and Result Count */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#C9B89B]/80 font-mono-code">
              {filteredCreators.length} {filteredCreators.length === 1 ? 'creator' : 'creators'} found
            </span>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#08070D]/80 border border-[#EFE7D8]/20 rounded-xl px-3 py-1.5 pr-7 text-xs text-[#EFE7D8] focus:outline-none"
              >
                <option value="rating" className="bg-[#120F1D]">Highest Rated</option>
                <option value="jobs" className="bg-[#120F1D]">Most Completed Jobs</option>
                <option value="rate_asc" className="bg-[#120F1D]">Starting Rate: Low to High</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#C9B89B]">
                <span className="text-[10px]">&#9662;</span>
              </div>
            </div>

            {(searchQuery || selectedContentType !== 'All Types' || selectedTool !== 'All Tools' || selectedSpec !== 'All Specializations' || verifiedOnly) && (
              <button
                onClick={resetFilters}
                title="Reset all filters"
                className="p-1.5 text-xs text-[#C9B89B] hover:text-[#FDFBF7] rounded-lg bg-[#FDFBF7]/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Sensible Handling of Empty Results */}
      {filteredCreators.length === 0 ? (
        <div className="text-center py-20 px-4 rounded-3xl bg-[#120F1D]/40 border border-[#EFE7D8]/15 max-w-2xl mx-auto backdrop-blur-md">
          <div className="w-16 h-16 rounded-full bg-[#FDFBF7]/5 border border-[#EFE7D8]/20 flex items-center justify-center mx-auto mb-4 text-2xl">
            🌌
          </div>
          <h3 className="font-serif-celestial text-2xl text-[#FDFBF7] font-normal mb-2">
            No Creators Matching Your Cosmic Query
          </h3>
          <p className="text-sm text-[#C9B89B] max-w-md mx-auto mb-6">
            We couldn't find verified AI creators with the exact combination of filters: 
            <span className="text-[#FDFBF7]"> "{searchQuery || selectedTool || selectedContentType}"</span>.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-[#FDFBF7] text-[#08070D] font-medium text-xs hover:bg-white transition-all shadow-sm flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
            <button
              onClick={() => {
                resetFilters();
                setSearchQuery('Flux.1');
              }}
              className="px-4 py-2 rounded-xl bg-[#FDFBF7]/10 text-[#FDFBF7] border border-[#EFE7D8]/20 font-medium text-xs hover:bg-[#FDFBF7]/15 transition-all"
            >
              Search "Flux.1"
            </button>
          </div>
        </div>
      ) : (
        /* Grid of Creator Cards */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredCreators.map((creator) => (
            <div
              key={creator.id}
              className="group rounded-3xl bg-[#120F1D]/60 border border-[#EFE7D8]/15 hover:border-[#EFE7D8]/40 transition-all duration-300 p-6 flex flex-col justify-between backdrop-blur-xl hover:shadow-[0_15px_45px_-10px_rgba(239,231,216,0.08)]"
            >
              {/* Creator Header Info */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  
                  {/* Avatar & Identifiers */}
                  <div className="flex items-start gap-3.5">
                    <div className="relative">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-14 h-14 rounded-2xl object-cover border border-[#EFE7D8]/30 shadow-md"
                      />
                      {creator.verificationSignals.workflowVerified && (
                        <div 
                          title="Verified AI Workflow: ComfyUI & Seed Reproducibility Tested"
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#08070D] border border-emerald-400 flex items-center justify-center text-emerald-400"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 
                          onClick={() => onSelectCreator(creator)}
                          className="font-serif-celestial text-xl font-medium text-[#FDFBF7] group-hover:text-white transition-colors cursor-pointer hover:underline"
                        >
                          {creator.name}
                        </h3>
                        <span className="text-xs text-[#C9B89B] font-mono-code">{creator.handle}</span>
                      </div>
                      
                      <p className="text-xs text-[#EFE7D8]/90 font-light mt-0.5 line-clamp-1">
                        {creator.title}
                      </p>

                      <div className="flex items-center gap-2 mt-1.5 text-[11px] text-[#C9B89B]">
                        <span className="flex items-center gap-1 text-[#FDFBF7] font-semibold">
                          <Star className="w-3 h-3 fill-[#DFC08D] text-[#DFC08D]" />
                          {creator.rating}
                        </span>
                        <span>({creator.reviewsCount} reviews)</span>
                        <span>&bull;</span>
                        <span>{creator.location}</span>
                        <span>&bull;</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {creator.availability}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing Pill */}
                  <div className="text-right shrink-0">
                    <div className="text-sm font-semibold text-[#FDFBF7]">
                      {creator.startingProjectRate}
                    </div>
                    <div className="text-[11px] text-[#C9B89B]/80 font-light">
                      starting project
                    </div>
                    <div className="text-[10px] text-[#C9B89B]/60 font-mono-code mt-0.5">
                      {creator.hourlyRate}
                    </div>
                  </div>

                </div>

                {/* Bio Snippet */}
                <p className="text-xs text-[#E2D6C0]/80 leading-relaxed mb-4 line-clamp-2 font-light">
                  {creator.bio}
                </p>

                {/* Trust & Verification Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[10px] text-emerald-300 font-medium">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{creator.verificationSignals.consistencyScore}</span>
                  </div>

                  {creator.verificationSignals.toolVerified && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FDFBF7]/5 border border-[#EFE7D8]/20 text-[10px] text-[#EFE7D8] font-medium">
                      <Cpu className="w-3 h-3 text-[#C9B89B]" />
                      <span>Verified Toolchain</span>
                    </div>
                  )}

                  {creator.verificationSignals.commercialRightsGuaranteed && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FDFBF7]/5 border border-[#EFE7D8]/20 text-[10px] text-[#EFE7D8] font-medium">
                      <CheckCircle2 className="w-3 h-3 text-[#DFC08D]" />
                      <span>100% Commercial IP Cleared</span>
                    </div>
                  )}
                </div>

                {/* AI Tools & Models Chips */}
                <div className="mb-4">
                  <div className="text-[10px] uppercase tracking-wider text-[#C9B89B]/70 font-semibold mb-1.5">
                    Generative Toolchain & Models:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {creator.tools.map((t) => (
                      <span
                        key={t.name}
                        className="px-2 py-0.5 rounded-md bg-[#08070D]/70 border border-[#EFE7D8]/15 text-[11px] text-[#FDFBF7] font-mono-code flex items-center gap-1"
                      >
                        {t.name}
                        {t.verified && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" title="API Verified" />}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Portfolio Showcase Grid (Thumbnails) */}
                <div className="mb-4">
                  <div className="text-[10px] uppercase tracking-wider text-[#C9B89B]/70 font-semibold mb-2 flex items-center justify-between">
                    <span>Selected AI Generations:</span>
                    <span className="text-[10px] text-[#C9B89B] font-mono-code">Click to inspect workflow & prompts</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {creator.portfolios.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onSelectPortfolioItem(item, creator)}
                        className="group/thumb relative aspect-video rounded-xl overflow-hidden border border-[#EFE7D8]/15 cursor-pointer bg-black/40 hover:border-[#FDFBF7]/60 transition-all"
                      >
                        <img
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/thumb:opacity-90 transition-opacity" />
                        
                        {/* Type Icon */}
                        <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-md bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/90">
                          {item.contentType.includes('Video') ? (
                            <Play className="w-2.5 h-2.5 fill-white" />
                          ) : (
                            <ImageIcon className="w-2.5 h-2.5" />
                          )}
                        </div>

                        {/* Title overlay */}
                        <div className="absolute bottom-1.5 left-1.5 right-1.5">
                          <p className="text-[10px] text-white font-medium line-clamp-1 leading-tight">
                            {item.title}
                          </p>
                          <p className="text-[8px] text-[#C9B89B] font-mono-code truncate">
                            {item.primaryTools.slice(0, 2).join(' + ')}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: View Full Profile & Hire Action */}
              <div className="pt-4 border-t border-[#EFE7D8]/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-[#C9B89B] font-light">
                  <span className="text-[#FDFBF7] font-semibold">{creator.verificationSignals.verifiedJobsCompleted}</span>
                  <span>commercial jobs delivered</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectCreator(creator)}
                    className="px-3.5 py-1.5 rounded-xl border border-[#EFE7D8]/20 bg-[#FDFBF7]/5 hover:bg-[#FDFBF7]/10 text-[#FDFBF7] text-xs font-medium transition-all flex items-center gap-1"
                  >
                    <span>View Profile & Nodes</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}
