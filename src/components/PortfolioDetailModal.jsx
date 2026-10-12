import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Maximize2, 
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function PortfolioDetailModal({
  item,
  creator,
  onClose,
  onOpenHireCreator
}) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState('workflow'); // 'workflow', 'prompt', 'specs'

  if (!item) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(item.promptArchitecture);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/80">
      <div 
        className="relative w-full max-w-5xl bg-[#0B0914] border border-[#EFE7D8]/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFE7D8]/10 bg-[#120F1D]/80">
          <div className="flex items-center gap-3">
            <span className="text-xl">✨</span>
            <div>
              <h3 className="font-serif-celestial text-lg sm:text-xl font-medium text-[#FDFBF7]">
                {item.title}
              </h3>
              <p className="text-xs text-[#C9B89B] font-light">
                Created by <span className="text-[#FDFBF7] font-medium">{creator?.name}</span> for {item.client}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-black/40 border border-white/20 text-[#EFE7D8] hover:text-white flex items-center justify-center transition-all hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content Grid */}
        <div className="overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Media Player / Preview */}
          <div className="lg:col-span-7 p-6 flex flex-col justify-between bg-[#08070D] border-b lg:border-b-0 lg:border-r border-[#EFE7D8]/10">
            <div>
              {/* Media Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#EFE7D8]/20 bg-black aspect-video flex items-center justify-center group shadow-2xl">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
                />

                {/* Simulated Ethereal Scanline / Ambient Cosmic Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Floating Media Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 text-[10px] text-white font-mono-code">
                    {item.aspectRatio}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md border border-emerald-500/40 text-[10px] text-emerald-300 font-medium">
                    {item.commercialLicensing}
                  </span>
                </div>

                {/* Video Playback Controls Simulation */}
                {item.videoSimulated && (
                  <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-white">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-8 h-8 rounded-lg bg-[#FDFBF7] text-[#08070D] flex items-center justify-center hover:scale-105 transition-transform"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                      </button>

                      <div className="flex items-center gap-2 text-[11px] font-mono-code text-[#EFE7D8]">
                        <span>0:18</span>
                        <span>/</span>
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Timeline Bar */}
                      <div className="w-32 sm:w-48 h-1.5 rounded-full bg-white/20 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#FDFBF7] to-[#C9B89B] w-2/5 rounded-full" />
                      </div>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-1.5 hover:text-[#DFC08D] text-white transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Stack & Metadata Pills */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[#C9B89B] font-light">Stack:</span>
                  {item.primaryTools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-[#120F1D] border border-[#EFE7D8]/15 text-[#FDFBF7] font-mono-code text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-[11px] text-[#C9B89B]">
                  <span>❤️ {item.likes} saves</span>
                  <span>&bull;</span>
                  <span className="text-emerald-400 font-mono-code">Reproducible Graph</span>
                </div>
              </div>
            </div>

            {/* Bottom CTA to Hire for similar output */}
            <div className="mt-6 pt-4 border-t border-[#EFE7D8]/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#EFE7D8] font-medium">Want similar aesthetic for your campaign?</p>
                <p className="text-[11px] text-[#C9B89B] font-light">Engage {creator?.name} through Nebula Escrow</p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (onOpenHireCreator && creator) onOpenHireCreator(creator);
                }}
                className="px-4 py-2 rounded-xl bg-[#FDFBF7] text-[#08070D] font-semibold text-xs hover:bg-white transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Hire This Creator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Workflow Graph & Prompt Inspector */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-[#0F0C1B]">
            <div>
              {/* Inspection Tabs */}
              <div className="flex items-center p-1 rounded-xl bg-[#08070D]/80 border border-[#EFE7D8]/15 text-xs mb-5">
                <button
                  onClick={() => setActiveTab('workflow')}
                  className={`flex-1 py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'workflow'
                      ? 'bg-[#FDFBF7] text-[#08070D] font-semibold shadow-sm'
                      : 'text-[#C9B89B] hover:text-[#FDFBF7]'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Workflow Pipeline</span>
                </button>
                <button
                  onClick={() => setActiveTab('prompt')}
                  className={`flex-1 py-1.5 rounded-lg font-medium transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'prompt'
                      ? 'bg-[#FDFBF7] text-[#08070D] font-semibold shadow-sm'
                      : 'text-[#C9B89B] hover:text-[#FDFBF7]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prompt Architecture</span>
                </button>
              </div>

              {/* Tab 1: Step-by-Step Workflow Pipeline Nodes */}
              {activeTab === 'workflow' && (
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs text-[#C9B89B] mb-1">
                    <span className="uppercase tracking-wider font-semibold">Multi-Model Node Sequence:</span>
                    <span className="font-mono-code text-[11px] text-emerald-400">ComfyUI Graph Verified</span>
                  </div>

                  {item.workflowBreakdown.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#17142B]/70 border border-[#EFE7D8]/15 hover:border-[#EFE7D8]/30 transition-all text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-[#FDFBF7] font-mono-code">
                          {step.step}
                        </span>
                        <span className="text-[10px] text-[#DFC08D] bg-[#DFC08D]/10 px-2 py-0.5 rounded border border-[#DFC08D]/20">
                          Node #{idx + 1}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#E2D6C0] font-mono-code mb-1">
                        {step.model}
                      </div>
                      <p className="text-[11px] text-[#C9B89B]/90 font-light">
                        {step.notes}
                      </p>
                    </div>
                  ))}

                  {/* Seed & Generation Parameters Box */}
                  <div className="p-3 rounded-xl bg-[#08070D]/60 border border-[#EFE7D8]/10 text-xs">
                    <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-2">
                      Generation Parameters & Seeds
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-code text-[#EFE7D8]">
                      <div>Seed: <span className="text-[#FDFBF7]">#94821037</span></div>
                      <div>Sampler: <span className="text-[#FDFBF7]">Euler a</span></div>
                      <div>CFG Scale: <span className="text-[#FDFBF7]">7.5</span></div>
                      <div>Steps: <span className="text-[#FDFBF7]">38</span></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Exact Prompt Architecture */}
              {activeTab === 'prompt' && (
                <div className="space-y-4">
                  {/* Positive Prompt */}
                  <div className="p-3.5 rounded-xl bg-[#08070D]/80 border border-[#EFE7D8]/15 text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                        Positive Prompt Engineering:
                      </span>
                      <button
                        onClick={handleCopyPrompt}
                        className="flex items-center gap-1 text-[11px] text-[#C9B89B] hover:text-[#FDFBF7] transition-colors"
                      >
                        {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedPrompt ? 'Copied!' : 'Copy Prompt'}</span>
                      </button>
                    </div>
                    <p className="text-xs text-[#FDFBF7] font-mono-code leading-relaxed bg-[#120F1D]/60 p-2.5 rounded-lg border border-[#EFE7D8]/10 select-all">
                      {item.promptArchitecture}
                    </p>
                  </div>

                  {/* Negative Prompt */}
                  <div className="p-3.5 rounded-xl bg-[#08070D]/80 border border-[#EFE7D8]/15 text-xs">
                    <div className="text-[10px] uppercase tracking-wider text-rose-300 font-semibold mb-2">
                      Negative Tokens (Artifact Pruning):
                    </div>
                    <p className="text-xs text-[#E2D6C0]/80 font-mono-code leading-relaxed bg-[#120F1D]/60 p-2.5 rounded-lg border border-[#EFE7D8]/10 select-all">
                      {item.negativePrompt}
                    </p>
                  </div>

                  {/* Licensing and Commercial Clause */}
                  <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-medium mb-1">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Commercial IP Clearance Verified</span>
                    </div>
                    <p className="text-[11px] text-[#C9B89B] leading-relaxed">
                      Generated using commercially licensed base models. The client received full intellectual property buyout with indemnified copyright representations.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Tags Strip */}
            <div className="mt-5 pt-3 border-t border-[#EFE7D8]/10 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-[#08070D] border border-[#EFE7D8]/10 text-[10px] text-[#C9B89B]"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
