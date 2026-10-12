import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  FileText, 
  Download, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles,
  ArrowRight,
  Eye,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EngagementsTracker({ engagements, onUpdateEngagement }) {
  const [selectedEngId, setSelectedEngId] = useState(engagements[0]?.id || '');
  const [releasedMilestones, setReleasedMilestones] = useState({});

  const currentEngagement = engagements.find((e) => e.id === selectedEngId) || engagements[0];

  const handleReleaseEscrow = (milestoneId) => {
    setReleasedMilestones((prev) => ({
      ...prev,
      [milestoneId]: true
    }));

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FDFBF7', '#EFE7D8', '#48BB78']
    });
  };

  if (!currentEngagement) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 text-center text-[#C9B89B]">
        No active engagements yet.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Tracker Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7]/5 border border-[#EFE7D8]/20 text-xs text-[#EFE7D8] font-mono-code mb-2">
          <Layers className="w-3.5 h-3.5 text-[#C9B89B]" />
          <span>Active Contracts & Delivery Workspace</span>
        </div>
        <h2 className="font-serif-celestial text-3xl sm:text-4xl font-normal text-[#FDFBF7]">
          Engagement & Delivery Pipeline
        </h2>
        <p className="text-xs sm:text-sm text-[#C9B89B] font-light max-w-xl mt-1">
          Manage engagements from discovery through proposal, keyframe verification, motion review, and final IP transfer.
        </p>
      </div>

      {/* Engagement Switcher Tabs */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
        {engagements.map((eng) => (
          <button
            key={eng.id}
            onClick={() => setSelectedEngId(eng.id)}
            className={`px-4 py-3 rounded-2xl border text-left transition-all min-w-[280px] ${
              selectedEngId === eng.id
                ? 'bg-[#17142B] border-[#FDFBF7]/40 shadow-lg'
                : 'bg-[#120F1D]/60 border-[#EFE7D8]/15 hover:border-[#EFE7D8]/30'
            }`}
          >
            <div className="text-xs font-semibold text-[#FDFBF7] truncate">{eng.campaignTitle}</div>
            <div className="text-[11px] text-[#C9B89B] flex items-center justify-between mt-1">
              <span>{eng.creator.name}</span>
              <span className="font-mono-code text-[#EFE7D8]">{eng.totalBudget}</span>
            </div>
            <div className="w-full bg-[#08070D] h-1.5 rounded-full overflow-hidden mt-2.5">
              <div 
                className="bg-gradient-to-r from-[#FDFBF7] to-[#DFC08D] h-full"
                style={{ width: `${eng.progressPercent}%` }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Main Engagement Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Milestones & Lifecycle Tracker (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Progress Bar Strip */}
          <div className="p-6 rounded-3xl bg-[#120F1D]/70 border border-[#EFE7D8]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-mono-code font-semibold">
                  Stage: {currentEngagement.stage}
                </span>
                <h3 className="font-serif-celestial text-2xl text-[#FDFBF7] font-medium mt-0.5">
                  {currentEngagement.campaignTitle}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30 font-medium">
                  {currentEngagement.escrowStatus}
                </span>
              </div>
            </div>

            {/* Stepper Visualization */}
            <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                <div className="font-semibold">1. Discovery</div>
                <div className="text-[10px] text-emerald-400/80">Matched</div>
              </div>
              <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                <div className="font-semibold">2. Keyframes</div>
                <div className="text-[10px] text-emerald-400/80">Approved</div>
              </div>
              <div className="p-2 rounded-xl bg-[#FDFBF7]/15 border border-[#EFE7D8]/30 text-[#FDFBF7] font-semibold">
                <div>3. Motion Review</div>
                <div className="text-[10px] text-[#DFC08D]">Active Phase</div>
              </div>
              <div className="p-2 rounded-xl bg-[#08070D]/40 border border-[#EFE7D8]/10 text-[#C9B89B]">
                <div>4. IP Transfer</div>
                <div className="text-[10px] text-[#C9B89B]/60">Pending</div>
              </div>
            </div>
          </div>

          {/* Detailed Milestone Escrow Release Cards */}
          <div className="p-6 rounded-3xl bg-[#120F1D]/70 border border-[#EFE7D8]/15 backdrop-blur-xl">
            <h4 className="text-xs uppercase tracking-wider text-[#C9B89B] font-semibold mb-4">
              Milestone Escrow Schedule & Sign-Offs
            </h4>

            <div className="space-y-3">
              {currentEngagement.milestones.map((m, idx) => {
                const isReleased = releasedMilestones[m.id] || m.status.includes('Completed');

                return (
                  <div
                    key={m.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isReleased
                        ? 'bg-[#08070D]/40 border-emerald-500/30'
                        : 'bg-[#17142B]/80 border-[#EFE7D8]/20'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono-code text-xs text-[#DFC08D]">
                            Milestone #{idx + 1}
                          </span>
                          <span className="text-xs font-semibold text-[#FDFBF7]">
                            {m.title}
                          </span>
                        </div>
                        <p className="text-xs text-[#C9B89B] font-light mt-1">
                          {m.notes}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-sm font-semibold text-[#FDFBF7]">{m.payout}</div>
                          <div className="text-[10px] text-[#C9B89B]">{m.date}</div>
                        </div>

                        {isReleased ? (
                          <div className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs font-medium flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" />
                            <span>Escrow Released</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleReleaseEscrow(m.id)}
                            className="px-3.5 py-1.5 rounded-xl bg-[#FDFBF7] text-[#08070D] hover:bg-white text-xs font-semibold shadow-sm transition-all flex items-center gap-1"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Approve & Release</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Asset Delivery Package & Creative Handoff (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Creator Profile Summary */}
          <div className="p-6 rounded-3xl bg-[#120F1D]/70 border border-[#EFE7D8]/15 backdrop-blur-xl">
            <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-3">
              Contracted AI Director
            </span>
            <div className="flex items-center gap-3">
              <img
                src={currentEngagement.creator.avatar}
                alt={currentEngagement.creator.name}
                className="w-12 h-12 rounded-xl object-cover border border-[#EFE7D8]/20"
              />
              <div>
                <h4 className="text-sm font-medium text-[#FDFBF7]">
                  {currentEngagement.creator.name}
                </h4>
                <p className="text-xs text-[#C9B89B] font-mono-code">
                  {currentEngagement.creator.handle}
                </p>
              </div>
            </div>
          </div>

          {/* Deliverables Vault */}
          <div className="p-6 rounded-3xl bg-[#120F1D]/70 border border-[#EFE7D8]/15 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold">
                Submission Artifacts & Vault
              </span>
              <span className="text-[10px] text-emerald-400 font-mono-code">SHA-256 Verified</span>
            </div>

            <div className="space-y-2.5">
              {currentEngagement.submissionAssets.map((asset, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#08070D]/70 border border-[#EFE7D8]/10 text-xs flex items-center justify-between group hover:border-[#FDFBF7]/30 transition-all"
                >
                  <div>
                    <div className="font-mono-code text-[#FDFBF7] font-medium truncate max-w-[170px]">
                      {asset.name}
                    </div>
                    <div className="text-[10px] text-[#C9B89B] mt-0.5">
                      {asset.size} &bull; {asset.modelUsed}
                    </div>
                  </div>

                  <button
                    onClick={() => alert(`Downloading verified asset: ${asset.name}`)}
                    className="p-2 rounded-lg bg-[#FDFBF7]/5 hover:bg-[#FDFBF7]/15 text-[#EFE7D8] transition-colors"
                    title="Download asset"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Commercial IP Certificate Seal */}
            <div className="mt-4 pt-4 border-t border-[#EFE7D8]/10 flex items-center gap-2.5 text-xs text-emerald-300">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <div className="text-[11px] leading-tight">
                <span className="font-semibold block">Commercial IP Warranty</span>
                100% indemnified against model infringement
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
