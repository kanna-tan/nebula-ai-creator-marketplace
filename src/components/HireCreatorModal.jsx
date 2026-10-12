import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  HIRE_MODAL_CONFIG,
  buildEngagementFromHire
} from '../constants/marketplaceConfig';

export default function HireCreatorModal({
  creator,
  briefs,
  isOpen,
  onClose,
  onEngagementCreated
}) {
  const [selectedBriefId, setSelectedBriefId] = useState(briefs[0]?.id || '');
  const [contractBudget, setContractBudget] = useState(creator?.startingProjectRate || '');
  const [milestoneNotes, setMilestoneNotes] = useState(HIRE_MODAL_CONFIG.defaultScopeNotes);
  const [submitted, setSubmitted] = useState(false);

  // Sync default contract rate whenever a new creator is selected
  useEffect(() => {
    if (creator) {
      setContractBudget(creator.startingProjectRate);
      setSelectedBriefId(briefs[0]?.id || '');
      setMilestoneNotes(HIRE_MODAL_CONFIG.defaultScopeNotes);
    }
  }, [creator, briefs]);

  if (!isOpen || !creator) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedBrief = briefs.find((b) => b.id === selectedBriefId);
    const newEngagement = buildEngagementFromHire({
      creator,
      selectedBrief,
      contractBudget,
      milestoneNotes
    });

    onEngagementCreated(newEngagement);
    setSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FDFBF7', '#EFE7D8', '#48BB78']
    });

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-2xl bg-black/80">
      <div
        className="relative w-full max-w-lg bg-[#0F0C1B] border border-[#EFE7D8]/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFE7D8]/10 bg-[#120F1D]">
          <div>
            <h3 className="font-serif-celestial text-xl text-[#FDFBF7] font-medium">
              {HIRE_MODAL_CONFIG.titlePrefix} {creator.name}
            </h3>
            <p className="text-xs text-[#C9B89B] font-light">
              {HIRE_MODAL_CONFIG.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-[#EFE7D8] hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-celestial text-2xl text-[#FDFBF7] font-normal mb-1">
                {HIRE_MODAL_CONFIG.successTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#C9B89B]">
                {HIRE_MODAL_CONFIG.successSubtitle}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block text-[#C9B89B] mb-1 font-semibold">
                  {HIRE_MODAL_CONFIG.briefSelectLabel}
                </label>
                <select
                  value={selectedBriefId}
                  onChange={(e) => setSelectedBriefId(e.target.value)}
                  className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7] focus:outline-none"
                >
                  {briefs.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.title} ({b.budget})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#C9B89B] mb-1 font-semibold">
                  {HIRE_MODAL_CONFIG.rateLabel}
                </label>
                <input
                  type="text"
                  required
                  value={contractBudget}
                  onChange={(e) => setContractBudget(e.target.value)}
                  className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7] font-semibold"
                  placeholder={HIRE_MODAL_CONFIG.ratePlaceholder}
                />
                <p className="text-[10px] text-[#C9B89B] mt-1 font-light">
                  {HIRE_MODAL_CONFIG.baseRatePrefix} {creator.startingProjectRate} (
                  {creator.hourlyRate})
                </p>
              </div>

              <div>
                <label className="block text-[#C9B89B] mb-1 font-semibold">
                  {HIRE_MODAL_CONFIG.scopeLabel}
                </label>
                <textarea
                  rows={3}
                  value={milestoneNotes}
                  onChange={(e) => setMilestoneNotes(e.target.value)}
                  className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl p-3 text-[#FDFBF7] font-light resize-none leading-relaxed"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-[11px] text-emerald-300 space-y-1">
                <div className="font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{HIRE_MODAL_CONFIG.protectionTitle}</span>
                </div>
                <p className="text-[#C9B89B]">{HIRE_MODAL_CONFIG.protectionBody}</p>
              </div>

              <div className="pt-3 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-[#C9B89B] hover:text-white"
                >
                  {HIRE_MODAL_CONFIG.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#FDFBF7] text-[#08070D] font-semibold hover:bg-white transition-all shadow-sm flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{HIRE_MODAL_CONFIG.submitBtn}</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
