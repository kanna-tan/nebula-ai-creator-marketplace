import React, { useState } from 'react';
import { 
  X, 
  FileCode, 
  Copy, 
  Check, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { DATA_MODEL_SPEC } from '../data/dataModelSpec';

export default function DataModelModal({ isOpen, onClose }) {
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentModel = DATA_MODEL_SPEC.models[activeModelIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentModel.sampleJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 backdrop-blur-2xl bg-black/80">
      <div 
        className="relative w-full max-w-4xl bg-[#0B0914] border border-[#EFE7D8]/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFE7D8]/10 bg-[#120F1D]">
          <div className="flex items-center gap-2.5">
            <FileCode className="w-4 h-4 text-[#DFC08D]" />
            <div>
              <h3 className="font-serif-celestial text-xl font-medium text-[#FDFBF7]">
                Nebula Data Model Architecture Spec
              </h3>
              <p className="text-xs text-[#C9B89B] font-light">
                Deliverable Note: Profile & Brief Data Model (Tools, Skills, Formats & Commercial-Use)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-[#EFE7D8] hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Overview Banner */}
        <div className="px-6 py-4 bg-[#17142B]/70 border-b border-[#EFE7D8]/10 text-xs text-[#E2D6C0] font-light leading-relaxed flex items-start gap-3">
          <BookOpen className="w-4 h-4 text-[#DFC08D] shrink-0 mt-0.5" />
          <p>
            {DATA_MODEL_SPEC.overview.description}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#EFE7D8]/10 bg-[#08070D] px-6 overflow-x-auto gap-2 py-2">
          {DATA_MODEL_SPEC.models.map((model, idx) => (
            <button
              key={model.name}
              onClick={() => setActiveModelIndex(idx)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all whitespace-nowrap ${
                activeModelIndex === idx
                  ? 'bg-[#FDFBF7] text-[#08070D] font-bold shadow-sm'
                  : 'text-[#C9B89B] hover:text-white hover:bg-white/5'
              }`}
            >
              {model.name}
            </button>
          ))}
        </div>

        {/* Model Content Area */}
        <div className="overflow-y-auto p-6 flex-1 space-y-6">
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-mono-code text-base font-semibold text-[#FDFBF7]">
                Schema: {currentModel.name}
              </h4>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-[#C9B89B] hover:text-white px-2.5 py-1 rounded-lg bg-[#120F1D] border border-[#EFE7D8]/15"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy JSON Sample'}</span>
              </button>
            </div>
            <p className="text-xs text-[#C9B89B] font-light">
              {currentModel.purpose}
            </p>
          </div>

          {/* Fields Table */}
          <div className="rounded-2xl border border-[#EFE7D8]/15 overflow-hidden bg-[#120F1D]/50 text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#EFE7D8]/10 bg-[#08070D]/80 text-[#C9B89B] font-mono-code text-[11px]">
                  <th className="p-3">Field Key</th>
                  <th className="p-3">Data Type</th>
                  <th className="p-3">Required</th>
                  <th className="p-3">Description & Rationale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE7D8]/5">
                {currentModel.fields.map((f) => (
                  <tr key={f.key} className="hover:bg-white/5 transition-colors">
                    <td className="p-3 font-mono-code text-[#FDFBF7] font-medium">{f.key}</td>
                    <td className="p-3 font-mono-code text-[#DFC08D]">{f.type}</td>
                    <td className="p-3">
                      {f.required ? (
                        <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-500/30">
                          Required
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#C9B89B]">Optional</span>
                      )}
                    </td>
                    <td className="p-3 text-[#E2D6C0] font-light">{f.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sample JSON snippet */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#C9B89B] font-semibold block mb-2">
              Canonical JSON Implementation:
            </span>
            <pre className="p-4 rounded-2xl bg-[#08070D] border border-[#EFE7D8]/15 font-mono-code text-xs text-[#EFE7D8] overflow-x-auto leading-relaxed">
              {JSON.stringify(currentModel.sampleJson, null, 2)}
            </pre>
          </div>

        </div>

      </div>
    </div>
  );
}
