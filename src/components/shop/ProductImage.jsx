import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { optimizeSupabaseImage } from '../../lib/supabase';

export default function ProductImage({ src, alt, className, width = 800 }) {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const optimizedSrc = optimizeSupabaseImage(src, width);

  useEffect(() => {
    if (!src) {
      setError(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-neutral-100 ${className}`}>
      {/* 1. THE SKELETON SHIMMER */}
      <AnimatePresence>
        {!loaded && !error && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10"
          >
             <div className="w-full h-full bg-neutral-200 animate-pulse relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. THE CLEAN PLACEHOLDER */}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#f5f3f0]">
           <span className="text-[0.75rem] md:text-xs uppercase tracking-[0.4em] text-neutral-400 font-bold text-center leading-relaxed">
             Visual Pending
           </span>
        </div>
      ) : (
        /* 3. THE IMAGE */
        <img 
          src={optimizedSrc} 
          alt={alt} 
          onError={() => setError(true)}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
