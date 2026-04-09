// src/components/sections/ShopTeaser.jsx
import { useState, useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { about_wallpaper, shop_dinnerware, shop_drinkware, shop_serverware } from "../../assets/img";
import { SectionLabel, SectionTitle, DividerLine, BtnPrimary } from "../ui";

const ITEMS = [
  { img: shop_dinnerware, name: "Dinnerware",  type: "" },
  { img: shop_drinkware,  name: "DrinkWare",   type: "" },
  { img: shop_serverware, name: "Serveware",  type: "" },
  { img: about_wallpaper, name: "Home Decor",  type: "" },
];

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
// visibleFn: () => number of cards visible at current breakpoint
function useCarousel(total, visibleFn) {
  const [idx, setIdx]   = useState(0);
  const trackRef        = useRef(null);

  const applyTransform = useCallback((i) => {
    if (!trackRef.current?.children[0]) return;
    const itemW = trackRef.current.children[0].offsetWidth + 16; // gap-4 = 16px
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

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function ShopTeaser() {
  // tablet = 2 visible (md breakpoint = 768px), mobile = 1
  // sm breakpoint = 640px: tablet shows 2 cards, mobile shows 1
  const visibleFn = useCallback(() => window.innerWidth >= 640 ? 2 : 1, []);
  const { trackRef, move, canGoLeft, canGoRight } = useCarousel(ITEMS.length, visibleFn);

  return (
    <section className="pb-6 px-4 md:px-16 bg-warm-white mb-24">
      <DividerLine label="From the kiln" />
      <SectionLabel>Shop</SectionLabel>
      <SectionTitle className="mb-10">
        Functional ware,<br /><em className="italic text-clay-dark">made with care</em>
      </SectionTitle>

      {/* ── DESKTOP: static 4-column grid (unchanged) ── */}
      <div className="hidden md:grid md:grid-cols-4 gap-5">
        {ITEMS.map(item => (
          <Link key={item.name} to="/shop" className="group no-underline">
            <div className="aspect-square overflow-hidden bg-cream mb-3">
              <img
                src={item.img} alt={item.name}
                className="w-full h-full object-cover saturate-75 group-hover:scale-[1.05] group-hover:saturate-100 transition-all duration-500 block"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <p className="font-cormorant text-[1.25rem] text-earth-dark mb-1 relative inline-block transition-colors duration-500 group-hover:text-clay-dark">
                {item.name}
                <span className="absolute -bottom-0.5 left-1/2 w-0 h-[1px] bg-clay-dark transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
              </p>
              <p className="text-[0.68rem] tracking-[0.15em] uppercase text-stone">{item.type}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ── TABLET + MOBILE: carousel with side arrows ── */}
      <div className="md:hidden relative px-5">
        <SideArrow direction="left"  onClick={() => move(-1)} visible={canGoLeft}  />
        <SideArrow direction="right" onClick={() => move(1)}  visible={canGoRight} />

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            {ITEMS.map(item => (
              <Link
                key={item.name} to="/shop"
                className="
                  group no-underline shrink-0
                  min-w-full max-w-full
                  sm:min-w-[calc(50%-8px)] sm:max-w-[calc(50%-8px)]
                "
              >
                <div className="aspect-square overflow-hidden bg-cream mb-3">
                  <img
                    src={item.img} alt={item.name}
                    className="w-full h-full object-cover saturate-75 group-hover:scale-[1.05] group-hover:saturate-100 transition-all duration-500 block"
                  />
                </div>
                <div className="text-center">
                  <p className="font-cormorant text-[1.25rem] text-earth-dark mb-1 relative inline-block transition-colors duration-500 group-hover:text-clay-dark">
                    {item.name}
                    <span className="absolute -bottom-0.5 left-1/2 w-0 h-[1px] bg-clay-dark transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                  </p>
                  <p className="text-[0.68rem] tracking-[0.15em] uppercase text-stone">{item.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Link to="/shop"><BtnPrimary>Shop Now</BtnPrimary></Link>
      </div>
    </section>
  );
}