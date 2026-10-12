import React, { useState } from 'react';
import { 
  Sparkles, 
  Wand2, 
  Send, 
  CheckCircle2, 
  Copy, 
  Check, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  RotateCcw,
  Sliders,
  DollarSign,
  Cpu
} from 'lucide-react';
import { BRIEF_TEMPLATES } from '../data/briefs';
import confetti from 'canvas-confetti';

export default function AIBriefBuilder({ onPublishBrief }) {
  const [promptInput, setPromptInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedBrief, setGeneratedBrief] = useState(null);
  const [copied, setCopied] = useState(false);
  const [published, setPublished] = useState(false);

  // Quick prompt presets
  const samplePrompts = [
    {
      title: "Celestial Haute Perfume",
      text: "A mystical ethereal luxury perfume commercial featuring a floating crystal quartz bottle in a stardust galaxy with cream silk fluid ribbons and atmospheric ambient chime soundscape."
    },
    {
      title: "Electric Hypercar at Twilight",
      text: "Cinematic 4K teaser for a champagne-cream electric hypercar racing across an icy cosmic lake reflecting starry nebulas, strict CAD lines, high speed aerodynamic trails."
    },
    {
      title: "Virtual Fashion Show with Consistent Muse",
      text: "45-second high-fashion digital runway with a single virtual muse in 5 distinct cream and golden organza outfits with 99%+ facial identity lock and fluid textile physics."
    },
    {
      title: "Constellation High Jewelry Editorial",
      text: "Eight macro still photographs of diamond constellation necklaces on raw travertine cream marble dusted with golden stardust for outdoor billboard campaigns."
    }
  ];

  const handleSynthesize = () => {
    if (!promptInput.trim()) return;

    setIsGenerating(true);
    setGeneratedBrief(null);
    setPublished(false);

    // Simulate multi-step AI reasoning and structured expansion
    setTimeout(() => {
      setIsGenerating(false);

      // Generate a structured brief based on prompt cues
      const isVideo = !promptInput.toLowerCase().includes('still') && !promptInput.toLowerCase().includes('photograph');
      const isAuto = promptInput.toLowerCase().includes('car') || promptInput.toLowerCase().includes('hypercar');
      const isFashion = promptInput.toLowerCase().includes('fashion') || promptInput.toLowerCase().includes('runway') || promptInput.toLowerCase().includes('muse');

      const title = isAuto 
        ? "Apex Solaria: Celestial EV Premiere Commercial"
        : isFashion 
        ? "Nebula Couture: Starlight Fashion Narrative"
        : "Aura Céleste: Mystical Ethereal Perfume Launch";

      const toolStack = isAuto
        ? ["ControlNet CAD Pass", "Flux.1 Pro", "Runway Gen-3", "Topaz Video AI 5"]
        : isFashion
        ? ["Flux.1 Custom LoRA (FaceID)", "Runway Gen-3", "ComfyUI FILM", "DaVinci Resolve"]
        : ["Flux.1 Dev", "Kling 1.5 Pro", "Topaz Video AI 5", "ElevenLabs Neural Audio"];

      const format = isVideo
        ? "16:9 Cinema Master (3840x2160) + 9:16 Social Cutdown (1080x1920 60fps)"
        : "4:5 Portrait Editorial (4000x5000) + 16:9 Billboard Ultrawide";

      const budget = isAuto ? "₹6,50,000 - ₹9,50,000" : isFashion ? "₹4,80,000 - ₹7,20,000" : "₹3,80,000 - ₹5,80,000";

      setGeneratedBrief({
        title,
        brand: "Lumina Visionary Labs",
        rawIdea: promptInput,
        contentType: isVideo ? "Cinematic Video" : "Still Photography",
        styleAesthetic: "Mystical Ethereal, Cream Alabaster, Celestial Galaxy Glow",
        formatAspectRatio: format,
        budget,
        recommendedToolStack: toolStack,
        creativeNarrative: `An ethereal visual odyssey exploring timeless elegance. Through soft cream palettes, fluid micro-stardust particles, and pristine lighting refractions, the composition evokes luxury and cosmic wonder. Strict multi-shot visual coherence is required across all generated scenes.`,
        deliverablesList: [
          isVideo ? "45s Master 4K Film (ProRes 422 HQ)" : "8x 16-bit Master TIFF Editorial Stills",
          isVideo ? "3x 15s High-Energy Vertical Cutdowns for Reels / TikTok" : "Social Format crops (1:1 and 9:16)",
          "Full ComfyUI Workflow JSON + Seed Manifest",
          "Layered 24-bit Audio Soundscape & Voiceover Package",
          "Commercial IP Indemnity Certificate"
        ],
        commercialLicensing: {
          licenseType: "Full Global Perpetual Buyout (Digital & Broadcast)",
          rawAssetsDelivery: "Prompt Logs, Seed Manifest, Model Weights Handoff Required",
          modelTrainingClause: "Strictly prohibited from training public weights on brand geometry",
          indemnity: "Creator warranties 100% commercially cleared training data"
        },
        milestonePlan: [
          { phase: "Phase 1 (Day 1-2)", title: "Keyframe Aesthetics & Seed Lock", payout: "30%" },
          { phase: "Phase 2 (Day 3-5)", title: "Motion Synthesis & Continuity Review", payout: "40%" },
          { phase: "Phase 3 (Day 6-7)", title: "4K Mastering & Asset Vault Delivery", payout: "30%" }
        ]
      });

      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#FDFBF7', '#EFE7D8', '#C9B89B']
      });
    }, 1800);
  };

  const handlePublishNow = () => {
    if (!generatedBrief) return;
    
    // Construct new brief object
    const newBrief = {
      id: `brief-${Date.now()}`,
      title: generatedBrief.title,
      brand: generatedBrief.brand,
      brandLogo: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=150&q=80",
      status: "Open for Proposals",
      postedDate: "Just now",
      deadline: "10 days left",
      budget: generatedBrief.budget,
      proposalsCount: 0,
      contentType: generatedBrief.contentType,
      style: generatedBrief.styleAesthetic,
      formatAspectRatio: generatedBrief.formatAspectRatio,
      commercialRequirements: generatedBrief.commercialLicensing,
      campaignDescription: `${generatedBrief.creativeNarrative} Built from rough prompt: "${generatedBrief.rawIdea}"`,
      deliverables: generatedBrief.deliverablesList,
      requiredTools: generatedBrief.recommendedToolStack,
      tags: ["AI-Synthesized", "Full Buyout", "4K Video", "Ethereal"]
    };

    onPublishBrief(newBrief);
    setPublished(true);
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#FDFBF7', '#DFC08D', '#9AE6B4']
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(generatedBrief, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Studio Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FDFBF7]/10 border border-[#EFE7D8]/30 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#FDFBF7] animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs uppercase tracking-widest font-semibold text-[#FDFBF7]">
            Bonus Feature &bull; AI-Assisted Brief Builder
          </span>
        </div>

        <h2 className="font-serif-celestial text-3xl sm:text-5xl font-normal text-[#FDFBF7] leading-tight mb-3">
          Transform a Rough Idea into a <br />
          <span className="italic font-light bg-gradient-to-r from-[#FDFBF7] via-[#EFE7D8] to-[#C9B89B] bg-clip-text text-transparent">
            Structured Creative Brief
          </span>
        </h2>

        <p className="text-xs sm:text-sm text-[#C9B89B] font-light">
          Type one sentence. Our generative reasoning engine derives toolchains, aspect ratios, 
          milestones, and commercial licensing clauses automatically.
        </p>
      </div>

      {/* Input Console */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#120F1D]/70 border border-[#EFE7D8]/20 backdrop-blur-xl shadow-2xl mb-8">
        
        <label className="block text-xs uppercase tracking-wider text-[#C9B89B] font-semibold mb-2 flex items-center justify-between">
          <span>Enter Rough Creative Concept / Campaign Spark:</span>
          <span className="text-[11px] text-[#EFE7D8]/60 font-mono-code font-normal">Natural language supported</span>
        </label>

        <div className="relative">
          <textarea
            rows={3}
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="e.g. An ethereal perfume commercial set in a stardust galaxy with champagne-cream fluid ribbons and floating quartz crystal..."
            className="w-full bg-[#08070D]/80 border border-[#EFE7D8]/20 focus:border-[#FDFBF7] rounded-2xl p-4 text-[#FDFBF7] placeholder-[#C9B89B]/50 text-sm font-light leading-relaxed resize-none transition-all focus:outline-none"
          />

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-4">
            <div className="text-xs text-[#C9B89B] font-light">
              <span>Need inspiration? Try a preset:</span>
            </div>

            <button
              onClick={handleSynthesize}
              disabled={isGenerating || !promptInput.trim()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FDFBF7] to-[#EFE7D8] text-[#08070D] font-semibold text-sm hover:from-white hover:to-[#FDFBF7] transition-all shadow-[0_0_25px_rgba(253,251,247,0.3)] disabled:opacity-40 disabled:cursor-not-allowed group"
            >
              {isGenerating ? (
                <>
                  <Sparkles className="w-4 h-4 animate-spin text-[#08070D]" />
                  <span>Synthesizing Architecture...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Synthesize Structured Brief</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Inspiration Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#EFE7D8]/10">
          {samplePrompts.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => setPromptInput(preset.text)}
              className="p-2.5 rounded-xl bg-[#08070D]/50 border border-[#EFE7D8]/10 hover:border-[#EFE7D8]/30 text-left transition-all group"
            >
              <div className="text-xs font-medium text-[#FDFBF7] group-hover:text-[#DFC08D] transition-colors flex items-center justify-between">
                <span>{preset.title}</span>
                <span className="text-[10px] text-[#C9B89B]">&rarr;</span>
              </div>
              <p className="text-[11px] text-[#C9B89B]/80 font-light truncate mt-0.5">
                {preset.text}
              </p>
            </button>
          ))}
        </div>

      </div>

      {/* AI Synthesis Result Display */}
      {generatedBrief && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0F0C1B] border border-emerald-500/30 backdrop-blur-xl shadow-2xl relative animate-fade-in">
          
          {/* Badge & Top Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EFE7D8]/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-300 font-medium mb-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Structured Generative Brief Synthesized</span>
              </div>
              <h3 className="font-serif-celestial text-2xl sm:text-3xl font-medium text-[#FDFBF7]">
                {generatedBrief.title}
              </h3>
              <p className="text-xs text-[#C9B89B] font-light">
                Estimated Budget: <span className="text-[#FDFBF7] font-semibold">{generatedBrief.budget}</span> &bull; Medium: {generatedBrief.contentType}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyToClipboard}
                className="px-3.5 py-2 rounded-xl bg-[#17142B] border border-[#EFE7D8]/20 hover:border-[#FDFBF7]/40 text-[#EFE7D8] text-xs font-medium flex items-center gap-1.5 transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#C9B89B]" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>

              <button
                onClick={handlePublishNow}
                disabled={published}
                className="px-5 py-2 rounded-xl bg-[#FDFBF7] text-[#08070D] hover:bg-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(253,251,247,0.3)] disabled:opacity-50"
              >
                {published ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Published to Marketplace!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Publish to Marketplace</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Structured Fields Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
            
            {/* Left Column: Creative Direction & Tools */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-1">
                  Creative Direction & Tone
                </span>
                <p className="text-xs sm:text-sm text-[#E2D6C0] font-light leading-relaxed bg-[#08070D]/60 p-3.5 rounded-2xl border border-[#EFE7D8]/10">
                  {generatedBrief.creativeNarrative}
                </p>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-1.5">
                  Recommended Generative Tool Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {generatedBrief.recommendedToolStack.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-[#17142B] border border-[#EFE7D8]/15 text-xs text-[#FDFBF7] font-mono-code flex items-center gap-1.5"
                    >
                      <Cpu className="w-3 h-3 text-[#C9B89B]" />
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-1">
                  Aspect Ratios & Master Resolutions
                </span>
                <div className="text-xs text-[#FDFBF7] font-mono-code bg-[#08070D]/60 p-2.5 rounded-xl border border-[#EFE7D8]/10">
                  {generatedBrief.formatAspectRatio}
                </div>
              </div>
            </div>

            {/* Right Column: Commercial IP & Deliverables Matrix */}
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block mb-1.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Commercial Use & IP Buyout Terms
                </span>
                <div className="p-3.5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-1.5">
                  <div className="text-[#FDFBF7] font-semibold">
                    {generatedBrief.commercialLicensing.licenseType}
                  </div>
                  <div className="text-[#C9B89B] text-[11px]">
                    &bull; Delivery: {generatedBrief.commercialLicensing.rawAssetsDelivery}
                  </div>
                  <div className="text-[#C9B89B] text-[11px]">
                    &bull; AI Ethics Clause: {generatedBrief.commercialLicensing.modelTrainingClause}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-1.5">
                  Milestone & Deliverable Matrix
                </span>
                <div className="space-y-1.5">
                  {generatedBrief.deliverablesList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[#EFE7D8] bg-[#08070D]/50 p-2 rounded-xl border border-[#EFE7D8]/10"
                    >
                      <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Banner */}
          {published && (
            <div className="mt-6 p-3 rounded-xl bg-emerald-900/40 border border-emerald-400/40 text-emerald-200 text-xs flex items-center justify-between">
              <span>✨ This creative brief is now live in the Brand Briefs Hub! Creators can submit proposals.</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
