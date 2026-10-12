import React, { useState } from 'react';
import {
  X,
  PlusCircle,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  CREATE_BRIEF_CONFIG,
  buildBriefFromForm
} from '../constants/marketplaceConfig';

export default function CreateBriefModal({
  isOpen,
  onClose,
  onPublishBrief
}) {
  const { labels, placeholders, contentTypes, licenseTypes, defaultFormState } =
    CREATE_BRIEF_CONFIG;

  const [formData, setFormData] = useState(defaultFormState);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBrief = buildBriefFromForm(formData);
    onPublishBrief(newBrief);
    setSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FDFBF7', '#EFE7D8', '#DFC08D']
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData(defaultFormState);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto backdrop-blur-2xl bg-black/80">
      <div
        className="relative w-full max-w-3xl bg-[#0F0C1B] border border-[#EFE7D8]/20 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFE7D8]/10 bg-[#120F1D]">
          <div>
            <h3 className="font-serif-celestial text-xl sm:text-2xl font-medium text-[#FDFBF7]">
              {CREATE_BRIEF_CONFIG.headerTitle}
            </h3>
            <p className="text-xs text-[#C9B89B] font-light">
              {CREATE_BRIEF_CONFIG.headerSubtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/40 border border-white/20 text-[#EFE7D8] hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="overflow-y-auto p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif-celestial text-2xl text-[#FDFBF7] font-normal mb-2">
                {CREATE_BRIEF_CONFIG.successTitle}
              </h3>
              <p className="text-sm text-[#C9B89B] max-w-sm mx-auto">
                {CREATE_BRIEF_CONFIG.successSubtitle}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              
              {/* Campaign Title & Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C9B89B] mb-1 font-semibold">
                    {labels.title}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={placeholders.title}
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2.5 text-[#FDFBF7] focus:outline-none focus:border-[#FDFBF7]"
                  />
                </div>

                <div>
                  <label className="block text-[#C9B89B] mb-1 font-semibold">
                    {labels.brand}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={placeholders.brand}
                    value={formData.brand}
                    onChange={(e) =>
                      setFormData({ ...formData, brand: e.target.value })
                    }
                    className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2.5 text-[#FDFBF7] focus:outline-none focus:border-[#FDFBF7]"
                  />
                </div>
              </div>

              {/* Content Type & Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C9B89B] mb-1 font-semibold">
                    {labels.contentType}
                  </label>
                  <select
                    value={formData.contentType}
                    onChange={(e) =>
                      setFormData({ ...formData, contentType: e.target.value })
                    }
                    className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2.5 text-[#FDFBF7] focus:outline-none focus:border-[#FDFBF7]"
                  >
                    {contentTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#C9B89B] mb-1 font-semibold">
                    {labels.style}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={placeholders.style}
                    value={formData.style}
                    onChange={(e) =>
                      setFormData({ ...formData, style: e.target.value })
                    }
                    className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2.5 text-[#FDFBF7] focus:outline-none focus:border-[#FDFBF7]"
                  />
                </div>
              </div>

              {/* Format / Aspect Ratio & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#C9B89B] mb-1 font-semibold">
                    {labels.formatAspectRatio}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={placeholders.formatAspectRatio}
                    value={formData.formatAspectRatio}
                    onChange={(e) =>
                      setFormData({ ...formData, formatAspectRatio: e.target.value })
                    }
                    className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2.5 text-[#FDFBF7] font-mono-code focus:outline-none focus:border-[#FDFBF7]"
                  />
                </div>

                <div>
                  <label className="block text-[#C9B89B] mb-1 font-semibold">
                    {labels.budgetAndTimeline}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      required
                      placeholder={placeholders.budgetMin}
                      value={formData.budgetMin}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetMin: e.target.value })
                      }
                      className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7]"
                    />
                    <input
                      type="number"
                      required
                      placeholder={placeholders.budgetMax}
                      value={formData.budgetMax}
                      onChange={(e) =>
                        setFormData({ ...formData, budgetMax: e.target.value })
                      }
                      className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3 py-2 text-[#FDFBF7]"
                    />
                  </div>
                </div>
              </div>

              {/* Commercial-Use & Licensing Requirements */}
              <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                <div className="flex items-center gap-2 text-emerald-300 font-semibold uppercase tracking-wider text-[11px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{labels.commercialHeader}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[#C9B89B] mb-1">
                      {labels.licenseType}
                    </label>
                    <select
                      value={formData.licenseType}
                      onChange={(e) =>
                        setFormData({ ...formData, licenseType: e.target.value })
                      }
                      className="w-full bg-[#08070D] border border-emerald-500/20 rounded-xl px-3 py-2 text-[#FDFBF7]"
                    >
                      {licenseTypes.map((lt) => (
                        <option key={lt} value={lt}>
                          {lt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[#C9B89B] mb-1">
                      {labels.rawAssetsDelivery}
                    </label>
                    <input
                      type="text"
                      placeholder={placeholders.rawAssetsDelivery}
                      value={formData.rawAssetsDelivery}
                      onChange={(e) =>
                        setFormData({ ...formData, rawAssetsDelivery: e.target.value })
                      }
                      className="w-full bg-[#08070D] border border-emerald-500/20 rounded-xl px-3 py-2 text-[#FDFBF7]"
                    />
                  </div>
                </div>
              </div>

              {/* Campaign Narrative Description */}
              <div>
                <label className="block text-[#C9B89B] mb-1 font-semibold">
                  {labels.campaignDescription}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={placeholders.campaignDescription}
                  value={formData.campaignDescription}
                  onChange={(e) =>
                    setFormData({ ...formData, campaignDescription: e.target.value })
                  }
                  className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl p-3 text-[#FDFBF7] font-light leading-relaxed resize-none focus:outline-none focus:border-[#FDFBF7]"
                />
              </div>

              {/* Required AI Tools */}
              <div>
                <label className="block text-[#C9B89B] mb-1 font-semibold">
                  {labels.requiredTools}
                </label>
                <input
                  type="text"
                  placeholder={placeholders.requiredTools}
                  value={formData.requiredTools}
                  onChange={(e) =>
                    setFormData({ ...formData, requiredTools: e.target.value })
                  }
                  className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2 text-[#FDFBF7] font-mono-code focus:outline-none focus:border-[#FDFBF7]"
                />
              </div>

              {/* Deliverables Checklist */}
              <div>
                <label className="block text-[#C9B89B] mb-1 font-semibold">
                  {labels.deliverables}
                </label>
                <input
                  type="text"
                  placeholder={placeholders.deliverables}
                  value={formData.deliverables}
                  onChange={(e) =>
                    setFormData({ ...formData, deliverables: e.target.value })
                  }
                  className="w-full bg-[#08070D] border border-[#EFE7D8]/20 rounded-xl px-3.5 py-2 text-[#FDFBF7] focus:outline-none focus:border-[#FDFBF7]"
                />
              </div>

              {/* Footer CTA */}
              <div className="pt-4 border-t border-[#EFE7D8]/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-[#C9B89B] hover:text-white"
                >
                  {labels.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#FDFBF7] to-[#EFE7D8] text-[#08070D] font-semibold text-xs sm:text-sm hover:from-white hover:to-[#FDFBF7] transition-all shadow-[0_0_20px_rgba(253,251,247,0.3)] flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>{labels.submitBtn}</span>
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
