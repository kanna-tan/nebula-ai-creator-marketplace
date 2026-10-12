import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Presentation, 
  Sparkles, 
  CheckCircle2, 
  Maximize2,
  Minimize2,
  Layers,
  Award
} from 'lucide-react';
import { PRESENTATION_SLIDES } from '../data/presentationSlides';

export default function PresentationDeck({ isOpen, onClose }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalSlides = PRESENTATION_SLIDES.length;
  const currentSlide = PRESENTATION_SLIDES[currentSlideIndex];

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, totalSlides, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 backdrop-blur-2xl bg-black/90">
      <div 
        className={`relative w-full max-w-5xl bg-[#090710] border border-[#EFE7D8]/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all ${
          isFullscreen ? 'fixed inset-0 max-w-none rounded-none border-none' : 'h-[85vh]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Deck Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EFE7D8]/10 bg-[#120F1D]/80">
          <div className="flex items-center gap-2.5">
            <Presentation className="w-4 h-4 text-[#DFC08D]" />
            <span className="font-cinzel text-sm font-semibold tracking-wider text-[#FDFBF7]">
              NEBULA &bull; PLATFORM DEMO & PITCH DECK
            </span>
            <span className="text-[10px] text-[#C9B89B] font-mono-code hidden sm:inline">
              (Use Arrow Keys or Space to navigate)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-2 rounded-xl text-[#C9B89B] hover:text-white hover:bg-white/5 transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#C9B89B] hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Display Area */}
        <div className="flex-1 p-6 sm:p-12 overflow-y-auto flex flex-col justify-between relative">
          
          {/* Subtle cosmic background glow for current slide */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #FDFBF7 0%, #8A73B3 60%, transparent 80%)'
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto w-full my-auto">
            
            {/* Slide Category Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDFBF7]/10 border border-[#EFE7D8]/20 text-[11px] font-mono-code text-[#EFE7D8] mb-4">
              <Sparkles className="w-3 h-3 text-[#DFC08D]" />
              <span>{currentSlide.tag}</span>
            </div>

            {/* Slide Title */}
            <h2 className="font-serif-celestial text-3xl sm:text-5xl font-normal text-[#FDFBF7] leading-tight mb-2">
              {currentSlide.title}
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#DFC08D] font-light mb-8">
              {currentSlide.subtitle}
            </p>

            {/* Key Bullet Points */}
            <div className="space-y-4">
              {currentSlide.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#120F1D]/60 border border-[#EFE7D8]/15 hover:border-[#EFE7D8]/30 transition-all flex items-start gap-3.5 backdrop-blur-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FDFBF7]/10 border border-[#EFE7D8]/20 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-[#E2D6C0] font-light leading-relaxed">
                    {pt}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 border-t border-[#EFE7D8]/10 bg-[#0B0914] flex items-center justify-between">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {PRESENTATION_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlideIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlideIndex === idx
                    ? 'w-6 bg-[#FDFBF7]'
                    : 'w-2 bg-[#EFE7D8]/20 hover:bg-[#EFE7D8]/40'
                }`}
                title={`Jump to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#C9B89B] font-mono-code">
              Slide {currentSlideIndex + 1} of {totalSlides}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentSlideIndex === 0}
                className="p-2 rounded-xl border border-[#EFE7D8]/20 bg-[#FDFBF7]/5 hover:bg-[#FDFBF7]/10 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
                disabled={currentSlideIndex === totalSlides - 1}
                className="p-2 rounded-xl border border-[#EFE7D8]/20 bg-[#FDFBF7] text-[#08070D] hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors font-bold"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
