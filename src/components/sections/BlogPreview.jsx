// src/components/sections/BlogPreview.jsx
import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { POSTS } from "../../data/blog";
import * as IMGS from "../../assets/img";
import { SectionLabel, SectionTitle, DividerLine } from "../ui";

// ─── NUDGE ANIMATION ─────────────────────────────────────────────────────────
const NUDGE_CSS = `
@keyframes nudge-right {
  0%,100% { transform: translateX(0);   }
  40%      { transform: translateX(5px); }
  60%      { transform: translateX(3px); }
}
@keyframes nudge-left {
  0%,100% { transform: translateX(0);    }
  40%      { transform: translateX(-5px); }
  60%      { transform: translateX(-3px); }
}
.nudge-right { animation: nudge-right 2.4s ease-in-out 1.2s 3; }
.nudge-left  { animation: nudge-left  2.4s ease-in-out 1.2s 3; }
`;

// ─── SHARED CAROUSEL HOOK ────────────────────────────────────────────────────
function useCarousel(total, visibleFn) {
  const [idx, setIdx] = useState(0);
  const trackRef      = useRef(null);

  const applyTransform = useCallback((i) => {
    if (!trackRef.current?.children[0]) return;
    const itemW = trackRef.current.children[0].offsetWidth + 24; // gap-6 = 24px
    trackRef.current.style.transform = `translateX(-${i * itemW}px)`;
  }, []);

  const move = useCallback((dir) => {
    const max = total - visibleFn();
    setIdx((prev) => {
      const next = Math.max(0, Math.min(max, prev + dir));
      requestAnimationFrame(() => applyTransform(next));
      return next;
    });
  }, [total, visibleFn, applyTransform]);

  useEffect(() => {
    const onResize = () => {
      const max = Math.max(0, total - visibleFn());
      setIdx((prev) => {
        const clamped = Math.min(prev, max);
        requestAnimationFrame(() => applyTransform(clamped));
        return clamped;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [total, visibleFn, applyTransform]);

  const canGoLeft  = idx > 0;
  const canGoRight = idx < total - visibleFn();

  return { trackRef, move, canGoLeft, canGoRight };
}

// ─── SIDE ARROW ──────────────────────────────────────────────────────────────
function SideArrow({ direction, onClick, visible }) {
  const isLeft = direction === "left";
  const [hinted, setHinted] = useState(false);

  const handleClick = () => { setHinted(true); onClick(); };

  return (
    <>
      <style>{NUDGE_CSS}</style>
      <button
        onClick={handleClick}
        aria-label={isLeft ? "Previous" : "Next"}
        className={`
          absolute top-1/2 -translate-y-1/2
          ${isLeft ? "-left-3" : "-right-3"}
          z-10 w-7 h-20
          flex items-center justify-center
          rounded-full
          border border-[rgba(160,100,74,0.35)]
          bg-[rgba(250,248,244,0.88)] backdrop-blur-[2px]
          cursor-pointer transition-all duration-300 ease-out
          hover:bg-[#a0644a] hover:border-[#a0644a] hover:w-9
          group/arrow
          ${visible
            ? "opacity-100 pointer-events-auto translate-x-0"
            : isLeft
              ? "opacity-0 pointer-events-none -translate-x-2"
              : "opacity-0 pointer-events-none translate-x-2"
          }
        `}
      >
        <svg
          viewBox="0 0 10 18"
          className={`
            w-[10px] h-[18px] shrink-0 fill-none
            transition-all duration-300
            stroke-[#a0644a] group-hover/arrow:stroke-white
            ${!hinted && visible ? (isLeft ? "nudge-left" : "nudge-right") : ""}
          `}
          strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"
        >
          {isLeft
            ? <polyline points="8,2 2,9 8,16" />
            : <polyline points="2,2 8,9 2,16" />
          }
        </svg>
      </button>
    </>
  );
}

// ─── BLOG CARD ───────────────────────────────────────────────────────────────
function BlogCard({ post }) {
  const img = IMGS[post.imgKey];
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group no-underline flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300 shrink-0"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[0.70rem] tracking-[0.18em] uppercase text-clay font-jost">{post.category}</span>
          <span className="text-stone text-[0.6rem]">·</span>
          <span className="text-[0.75rem] text-stone font-jost">{post.readTime}</span>
        </div>
        <h3 className="font-cormorant text-[1.15rem] font-normal text-charcoal leading-snug mb-3 group-hover:text-clay transition-colors">
          {post.title}
        </h3>
        <p className="text-[0.9rem] leading-[1.75] text-earth-light flex-1 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="text-[0.8rem] tracking-[0.1em] uppercase text-clay border-b border-clay-light pb-px self-start group-hover:text-clay-dark transition-colors font-jost">
          read more
        </span>
      </div>
    </Link>
  );
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function BlogPreview() {
  const recent = POSTS.slice(0, 3);

  // sm breakpoint = 640px: tablet shows 2 cards, mobile shows 1
  const visibleFn = useCallback(() => window.innerWidth >= 640 ? 2 : 1, []);
  const { trackRef, move, canGoLeft, canGoRight } = useCarousel(recent.length, visibleFn);

  return (
    <section className="pt-24 px-4 md:px-16 bg-warm-white">
      <DividerLine label="From the studio" />
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <SectionLabel>Journal</SectionLabel>
          <SectionTitle>
            Stories from<br /><em className="italic text-clay-dark">the kiln</em>
          </SectionTitle>
        </div>
        <Link
          to="/blog"
          className="text-[0.8rem] tracking-[0.14em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
        >
          All posts →
        </Link>
      </div>

      {/* ── DESKTOP: static 3-column grid (unchanged) ── */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {recent.map(post => <BlogCard key={post.slug} post={post} />)}
      </div>

      {/* ── TABLET + MOBILE: carousel with side arrows ── */}
      <div className="md:hidden relative px-5">
        <SideArrow direction="left"  onClick={() => move(-1)} visible={canGoLeft}  />
        <SideArrow direction="right" onClick={() => move(1)}  visible={canGoRight} />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            {recent.map(post => (
              <div
                key={post.slug}
                className="
                  shrink-0
                  min-w-full max-w-full
                  sm:min-w-[calc(50%-12px)] sm:max-w-[calc(50%-12px)]
                "
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}