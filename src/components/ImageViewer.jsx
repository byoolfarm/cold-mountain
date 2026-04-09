import { useEffect } from "react";
import { X } from "lucide-react";

/**
 * ImageViewer - A minimalist lightbox for viewing images in detail.
 * @param {string} src - The image source URL.
 * @param {string} alt - Alternative text for the image.
 * @param {function} onClose - Callback to close the viewer.
 */
export default function ImageViewer({ src, alt, onClose }) {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Close on Escape key
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

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

      {/* Image Container with Framing */}
      <div 
        className="relative max-w-[95vw] md:max-w-[85vw] max-h-[90vh] flex flex-col items-center justify-center p-6 md:p-12 animate-in zoom-in-95 duration-500"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="relative group p-2 bg-warm-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
          <img 
            src={src} 
            alt={alt || "Studio Piece"} 
            className="max-w-full max-h-[75vh] md:max-h-[80vh] object-contain block transition-transform duration-700"
          />
          
          {/* Subtle Label Overlay */}
          {/* {alt && (
            <div className="mt-6 text-center">
              <span className="text-[0.65rem] tracking-[0.3em] uppercase text-cream/70 font-jost">
                {alt}
              </span>
            </div>
          )} */}
        </div>
      </div>

      {/* Helper text */}
      <div className="absolute bottom-10 text-[0.6rem] tracking-[0.3em] uppercase text-cream/30 font-jost hidden md:block">
        Press ESC or Click anywhere to close
      </div>
    </div>
  );
}
