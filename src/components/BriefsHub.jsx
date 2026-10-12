import React, { useState } from 'react';
import {
  Briefcase,
  Clock,
  ShieldCheck,
  Send,
  Sparkles,
  PlusCircle,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRIEFS_HUB_CONFIG, buildDefaultProposal } from '../constants/marketplaceConfig';

export default function BriefsHub({
  briefs,
  creators,
  onOpenCreateBrief,
  onOpenAiStudio
}) {
  const { modal } = BRIEFS_HUB_CONFIG;
  const defaultCreator = creators?.[0];

  const [selectedBrief, setSelectedBrief] = useState(null);
  const [proposalModalOpen, setProposalModalOpen] = useState(false);
  const [proposalData, setProposalData] = useState(() =>
    buildDefaultProposal(briefs?.[0], defaultCreator)
  );
  const [proposalSubmitted, setProposalSubmitted] = useState(false);

  // Content type filter
  const [typeFilter, setTypeFilter] = useState(BRIEFS_HUB_CONFIG.defaultFilter);

  const filteredBriefs = briefs.filter((b) => {
    if (typeFilter === BRIEFS_HUB_CONFIG.defaultFilter) return true;
    return b.contentType.toLowerCase().includes(typeFilter.toLowerCase());
  });

  const handleOpenProposal = (brief) => {
    setSelectedBrief(brief);
    setProposalData(buildDefaultProposal(brief, defaultCreator));
    setProposalSubmitted(false);
    setProposalModalOpen(true);
  };

  const handleSubmitProposal = (e) => {
    e.preventDefault();
    setProposalSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#FDFBF7', '#EFE7D8', '#C9B89B']
    });
    setTimeout(() => {
      setProposalModalOpen(false);
    }, 2200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Briefs Header Strip */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7]/5 border border-[#EFE7D8]/20 text-xs text-[#EFE7D8] font-mono-code mb-2">
            <Briefcase className="w-3.5 h-3.5 text-[#C9B89B]" />
            <span>{BRIEFS_HUB_CONFIG.badge}</span>
          </div>
          <h2 className="font-serif-celestial text-3xl sm:text-4xl font-normal text-[#FDFBF7]">
            {BRIEFS_HUB_CONFIG.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#C9B89B] font-light max-w-xl mt-1">
            {BRIEFS_HUB_CONFIG.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenAiStudio}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#EFE7D8]/30 bg-[#FDFBF7]/10 hover:bg-[#FDFBF7]/20 text-[#FDFBF7] text-xs sm:text-sm font-medium transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#DFC08D]" />
            <span>{BRIEFS_HUB_CONFIG.aiBuilderBtn}</span>
          </button>

          <button
            onClick={onOpenCreateBrief}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FDFBF7] to-[#EFE7D8] text-[#08070D] font-semibold text-xs sm:text-sm hover:from-white hover:to-[#FDFBF7] transition-all shadow-[0_0_20px_rgba(253,251,247,0.25)]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{BRIEFS_HUB_CONFIG.publishBtn}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[#120F1D]/70 border border-[#EFE7D8]/15 backdrop-blur-md mb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {BRIEFS_HUB_CONFIG.filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setTypeFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                typeFilter === cat
                  ? 'bg-[#FDFBF7] text-[#08070D] font-semibold shadow-sm'
                  : 'text-[#EFE7D8]/80 hover:bg-[#FDFBF7]/10 hover:text-[#FDFBF7]'
              }`}
            >
              {cat === BRIEFS_HUB_CONFIG.defaultFilter
                ? BRIEFS_HUB_CONFIG.allCategoryLabel
                : cat}
            </button>
          ))}
        </div>

        <span className="text-xs text-[#C9B89B] font-mono-code hidden sm:inline">
          {filteredBriefs.length} {BRIEFS_HUB_CONFIG.openBriefsSuffix}
        </span>
      </div>

      {/* Briefs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredBriefs.map((brief) => (
          <div
            key={brief.id}
            className="p-6 rounded-3xl bg-[#120F1D]/60 border border-[#EFE7D8]/15 hover:border-[#EFE7D8]/40 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group hover:shadow-[0_15px_45px_-10px_rgba(239,231,216,0.08)]"
          >
            <div>
              {/* Top Meta: Brand & Status */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={brief.brandLogo}
                    alt={brief.brand}
                    className="w-10 h-10 rounded-xl object-cover border border-[#EFE7D8]/20 bg-black"
                  />
                  <div>
                    <h4 className="text-xs font-semibold text-[#FDFBF7]">{brief.brand}</h4>
                    <div className="flex items-center gap-2 text-[11px] text-[#C9B89B]">
                      <span>{brief.postedDate}</span>
                      <span>&bull;</span>
                      <span className="text-amber-300/90 flex items-center gap-0.5">
                        <Clock className="w-3 h-3" />
                        {brief.deadline}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-base font-semibold text-[#FDFBF7]">{brief.budget}</div>
                  <div className="text-[10px] text-[#C9B89B] font-mono-code">
                    {brief.proposalsCount} {BRIEFS_HUB_CONFIG.proposalsSuffix}
                  </div>
                </div>
              </div>

              {/* Campaign Title */}
              <h3 className="font-serif-celestial text-xl sm:text-2xl font-normal text-[#FDFBF7] group-hover:text-white transition-colors mb-2">
                {brief.title}
              </h3>

              {/* Campaign Description */}
              <p className="text-xs sm:text-sm text-[#E2D6C0]/85 font-light leading-relaxed mb-4 line-clamp-3">
                {brief.campaignDescription}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 rounded-2xl bg-[#08070D]/60 border border-[#EFE7D8]/10 text-xs mb-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold">
                    {BRIEFS_HUB_CONFIG.formatLabel}
                  </div>
                  <div className="text-xs text-[#FDFBF7] font-mono-code mt-0.5">
                    {brief.formatAspectRatio}
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold">
                    {BRIEFS_HUB_CONFIG.typeStyleLabel}
                  </div>
                  <div className="text-xs text-[#FDFBF7] mt-0.5">
                    {brief.contentType} &bull; {brief.style}
                  </div>
                </div>

                <div className="sm:col-span-2 pt-2 border-t border-[#EFE7D8]/10">
                  <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {BRIEFS_HUB_CONFIG.licensingLabel}
                  </div>
                  <div className="text-[11px] text-[#EFE7D8] mt-0.5">
                    {brief.commercialRequirements.licenseType}
                  </div>
                  <div className="text-[10px] text-[#C9B89B] font-mono-code mt-0.5">
                    {BRIEFS_HUB_CONFIG.requirementPrefix}{' '}
                    {brief.commercialRequirements.rawAssetsDelivery}
                  </div>
                </div>
              </div>

              {/* Required Tools Chips */}
              <div className="flex flex-wrap items-center gap-1.5 mb-4">
                <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-medium mr-1">
                  {BRIEFS_HUB_CONFIG.toolStackLabel}
                </span>
                {brief.requiredTools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded-md bg-[#17142B] border border-[#EFE7D8]/15 text-[11px] text-[#FDFBF7] font-mono-code"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="pt-4 border-t border-[#EFE7D8]/10 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1">
                {brief.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] text-[#C9B89B] bg-[#08070D]/40 px-2 py-0.5 rounded"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleOpenProposal(brief)}
                className="px-4 py-2 rounded-xl bg-[#FDFBF7] text-[#08070D] font-semibold text-xs hover:bg-white transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{BRIEFS_HUB_CONFIG.submitProposalBtn}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Proposal Submission Modal */}
      {proposalModalOpen && selectedBrief && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/80">
          <div
            className="w-full max-w-lg bg-[#0F0C1B] border border-[#EFE7D8]/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {proposalSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-celestial text-2xl text-[#FDFBF7] font-normal mb-2">
                  {modal.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#C9B89B] max-w-sm mx-auto">
                  {modal.successSubtitlePrefix} {selectedBrief.brand}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitProposal}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono-code font-semibold">
                      {modal.headerBadge}
                    </span>
                    <h3 className="font-serif-celestial text-xl text-[#FDFBF7] font-medium">
                      {selectedBrief.title}
                    </h3>
                    <p className="text-xs text-[#C9B89B]">
                      {modal.brandPrefix} {selectedBrief.brand} &bull; {modal.budgetPrefix}{' '}
                      {selectedBrief.budget}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setProposalModalOpen(false)}
                    className="text-[#C9B89B] hover:text-white"
                  >
                    &times;
                  </button>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[#C9B89B] mb-1 font-medium">
                      {modal.bidTurnaroundLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={proposalData.bidAmount}
                        onChange={(e) =>
                          setProposalData({ ...proposalData, bidAmount: e.target.value })
                        }
                        className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7]"
                        placeholder={modal.bidPlaceholder}
                        required
                      />
                      <input
                        type="text"
                        value={proposalData.turnaroundDays}
                        onChange={(e) =>
                          setProposalData({ ...proposalData, turnaroundDays: e.target.value })
                        }
                        className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7]"
                        placeholder={modal.turnaroundPlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#C9B89B] mb-1 font-medium">
                      {modal.toolchainLabel}
                    </label>
                    <input
                      type="text"
                      value={proposalData.toolPipeline}
                      onChange={(e) =>
                        setProposalData({ ...proposalData, toolPipeline: e.target.value })
                      }
                      className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7] font-mono-code"
                      placeholder={modal.toolchainPlaceholder}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#C9B89B] mb-1 font-medium">
                      {modal.pitchLabel}
                    </label>
                    <textarea
                      rows={4}
                      value={proposalData.pitchMessage}
                      onChange={(e) =>
                        setProposalData({ ...proposalData, pitchMessage: e.target.value })
                      }
                      className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7] font-light leading-relaxed resize-none"
                      placeholder={modal.pitchPlaceholder}
                      required
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300">
                    <ShieldCheck className="w-4 h-4 inline mr-1" />
                    {modal.escrowNotice}
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setProposalModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-xs text-[#C9B89B] hover:text-white"
                  >
                    {modal.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#FDFBF7] text-[#08070D] font-semibold text-xs hover:bg-white transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{modal.sendBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
