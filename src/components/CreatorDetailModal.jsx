import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Cpu, 
  Star, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Play, 
  Image as ImageIcon,
  Sparkles,
  Award,
  Send,
  Workflow
} from 'lucide-react';

export default function CreatorDetailModal({
  creator,
  onClose,
  onSelectPortfolioItem,
  onOpenHireCreator
}) {
  if (!creator) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-xl bg-black/75">
      <div 
        className="relative w-full max-w-4xl bg-[#0F0C1B] border border-[#EFE7D8]/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/20 text-[#EFE7D8] hover:text-white flex items-center justify-center transition-all hover:scale-105"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto">
          
          {/* Cover Banner */}
          <div className="relative h-44 sm:h-56 w-full overflow-hidden">
            <img
              src={creator.cover}
              alt={creator.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C1B] via-[#0F0C1B]/40 to-transparent" />
          </div>

          {/* Profile Header Details */}
          <div className="px-6 sm:px-8 pb-6 -mt-16 sm:-mt-20 relative z-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-6">
              
              <div className="flex items-end gap-4">
                <div className="relative">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-[#EFE7D8]/40 shadow-2xl bg-[#08070D]"
                  />
                  {creator.verificationSignals.workflowVerified && (
                    <div 
                      title="Verified Pipeline: ComfyUI node graphs verified by Nebula"
                      className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#08070D] border-2 border-emerald-400 flex items-center justify-center text-emerald-400 shadow-lg"
                    >
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-serif-celestial text-2xl sm:text-3xl font-medium text-[#FDFBF7]">
                      {creator.name}
                    </h2>
                    <span className="text-xs text-[#C9B89B] font-mono-code">{creator.handle}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#EFE7D8]/90 font-light mt-0.5">
                    {creator.title}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-[#C9B89B]">
                    <span className="flex items-center gap-1 text-[#FDFBF7] font-semibold">
                      <Star className="w-3.5 h-3.5 fill-[#DFC08D] text-[#DFC08D]" />
                      {creator.rating}
                    </span>
                    <span>({creator.reviewsCount} verified reviews)</span>
                    <span>&bull;</span>
                    <span>{creator.location}</span>
                  </div>
                </div>
              </div>

              {/* Hire Creator CTA */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="text-right hidden sm:block">
                  <div className="text-base font-semibold text-[#FDFBF7]">{creator.startingProjectRate}</div>
                  <div className="text-xs text-[#C9B89B]/80 font-mono-code">{creator.hourlyRate}</div>
                </div>
                <button
                  onClick={() => onOpenHireCreator(creator)}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FDFBF7] to-[#EFE7D8] text-[#08070D] font-semibold text-xs sm:text-sm hover:from-white hover:to-[#FDFBF7] transition-all shadow-[0_0_20px_rgba(253,251,247,0.2)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Engage Creator</span>
                </button>
              </div>

            </div>

            {/* Verification Signals Banner */}
            <div className="p-4 rounded-2xl bg-[#17142B]/80 border border-[#EFE7D8]/15 mb-6 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C9B89B] mb-2.5">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Nebula Cryptographic & Manual Verification Signals</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2.5 rounded-xl bg-[#08070D]/50 border border-[#EFE7D8]/10">
                  <div className="text-[11px] text-[#C9B89B]">Identity Consistency</div>
                  <div className="text-sm font-semibold text-emerald-400">{creator.verificationSignals.consistencyScore}</div>
                  <div className="text-[10px] text-[#EFE7D8]/60 mt-0.5">10-shot multi-angle facial lock benchmark</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#08070D]/50 border border-[#EFE7D8]/10">
                  <div className="text-[11px] text-[#C9B89B]">Commercial Clearance</div>
                  <div className="text-sm font-semibold text-[#FDFBF7]">100% IP Warrantied</div>
                  <div className="text-[10px] text-[#EFE7D8]/60 mt-0.5">Zero copyright flags, clean base models</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#08070D]/50 border border-[#EFE7D8]/10">
                  <div className="text-[11px] text-[#C9B89B]">Track Record</div>
                  <div className="text-sm font-semibold text-[#FDFBF7]">{creator.verificationSignals.verifiedJobsCompleted} Brand Deliveries</div>
                  <div className="text-[10px] text-[#EFE7D8]/60 mt-0.5">100% on-time milestone release</div>
                </div>
              </div>
            </div>

            {/* Bio & Specializations */}
            <div className="mb-6">
              <h3 className="text-xs uppercase tracking-wider text-[#C9B89B] font-semibold mb-2">
                Creative Vision & Workflow Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-[#EFE7D8]/90 font-light leading-relaxed">
                {creator.bio}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mt-3">
                {creator.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-2.5 py-1 rounded-lg bg-[#FDFBF7]/5 border border-[#EFE7D8]/15 text-xs text-[#FDFBF7]"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Tool Matrix & Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              {/* Verified Tools */}
              <div className="p-4 rounded-2xl bg-[#120F1D]/60 border border-[#EFE7D8]/15">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-[#C9B89B] font-semibold">
                    Verified Toolchain
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono-code">Enterprise API Active</span>
                </div>
                <div className="space-y-2">
                  {creator.tools.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-center justify-between p-2 rounded-xl bg-[#08070D]/60 border border-[#EFE7D8]/10 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-[#C9B89B]" />
                        <span className="font-mono-code text-[#FDFBF7] font-medium">{t.name}</span>
                      </div>
                      <span className="text-[11px] text-[#C9B89B]">{t.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Technical Skills */}
              <div className="p-4 rounded-2xl bg-[#120F1D]/60 border border-[#EFE7D8]/15">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider text-[#C9B89B] font-semibold">
                    Granular AI Competencies
                  </span>
                  <Workflow className="w-3.5 h-3.5 text-[#C9B89B]" />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {creator.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-[#08070D]/60 border border-[#EFE7D8]/10 text-xs text-[#EFE7D8]/90 font-mono-code"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-[#EFE7D8]/10 text-[11px] text-[#C9B89B] space-y-1 font-light">
                  <div className="flex justify-between">
                    <span>Average Revision Rounds:</span>
                    <span className="text-[#FDFBF7] font-medium">{creator.metrics.revisionAverage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Turnaround:</span>
                    <span className="text-[#FDFBF7] font-medium">{creator.metrics.avgTurnaround}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* AI Portfolio Projects (Detailed Showcase) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif-celestial text-xl sm:text-2xl font-medium text-[#FDFBF7]">
                    Verified Portfolio & Workflow Graphs
                  </h3>
                  <p className="text-xs text-[#C9B89B] font-light">
                    Every piece contains verifiable generation seeds, positive/negative prompts, and node graphs.
                  </p>
                </div>
                <span className="text-xs text-[#C9B89B] font-mono-code">
                  {creator.portfolios.length} showcases
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {creator.portfolios.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectPortfolioItem(item, creator)}
                    className="group rounded-2xl bg-[#120F1D]/80 border border-[#EFE7D8]/15 hover:border-[#FDFBF7]/50 p-3 transition-all cursor-pointer backdrop-blur-sm hover:shadow-xl"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-3 bg-black">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                      
                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 border border-white/20 text-[10px] text-white font-mono-code">
                        {item.aspectRatio}
                      </div>

                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                        <span className="text-[10px] text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 font-medium">
                          {item.commercialLicensing}
                        </span>
                        <div className="w-7 h-7 rounded-full bg-[#FDFBF7] text-[#08070D] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                    </div>

                    <h4 className="text-sm font-medium text-[#FDFBF7] group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#C9B89B] mt-0.5">
                      Client: <span className="text-[#EFE7D8]">{item.client}</span> &bull; {item.contentType}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-[#EFE7D8]/10 flex items-center justify-between text-[10px] text-[#C9B89B] font-mono-code">
                      <span>Stack: {item.primaryTools.join(' + ')}</span>
                      <span className="text-[#FDFBF7] underline">Inspect Nodes &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
