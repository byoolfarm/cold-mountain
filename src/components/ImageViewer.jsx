import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ImageViewer - A minimalist lightbox for viewing images in detail.
 * @param {string} src - The image source URL.
 * @param {string} alt - Alternative text for the image.
 * @param {function} onClose - Callback to close the viewer.
 * @param {function} onPrev - Callback to go to previous image.
 * @param {function} onNext - Callback to go to next image.
 */
export default function ImageViewer({ src, alt, onClose, onPrev, onNext }) {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Close on Escape key, Navigate on Left/Right
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center text-cream opacity-40 hover:opacity-100 hover:rotate-90 transition-all duration-500 z-[110]"
        aria-label="Close viewer"
      >
        <X size={36} strokeWidth={1} />
      </button>

      {/* Prev Button */}
      {onPrev && (
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream opacity-40 hover:opacity-100 transition-all duration-300 z-[110]"
          aria-label="Previous image"
        >
          <ChevronLeft size={48} strokeWidth={1} />
        </button>
      )}

      {/* Next Button */}
      {onNext && (
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-cream opacity-40 hover:opacity-100 transition-all duration-300 z-[110]"
          aria-label="Next image"
        >
          <ChevronRight size={48} strokeWidth={1} />
        </button>
      )}

      {/* Image Container with Framing */}
      <div 
        className="relative max-w-[85vw] md:max-w-[75vw] max-h-[90vh] flex flex-col items-center justify-center p-6 md:p-12 animate-in zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="relative group p-2 bg-warm-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
          <img 
            src={src} 
            alt={alt || "Studio Piece"} 
            className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain block transition-transform duration-700"
          />
        </div>
      </div>

      {/* Helper text */}
      <div className="absolute bottom-10 text-[0.6rem] tracking-[0.3em] uppercase text-cream/30 font-jost hidden md:block">
        Press ESC to close, Arrows to navigate
      </div>
    </div>
  );
}
