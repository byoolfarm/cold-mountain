// src/pages/about/SwapnaPage.jsx  —  route: /about/swapna
import { useEffect, useRef } from "react";
import SEO    from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { swapna_portrait } from "../../assets/img";

// Work images — string paths to public/images/ (WebP)
const work1  = "/images/smp-1.webp";
const work2  = "/images/smp-2.webp";
const work3  = "/images/smp-3.webp";
const work4  = "/images/smp-4.webp";
const work5  = "/images/smp-5.webp";
const work6  = "/images/smp-6.webp";
const work7  = "/images/smp-7.webp";
const work8  = "/images/smp-8.webp";
const work9  = "/images/smp-9.webp";

const WORKS = [
  { src: work1,  label: "Hand-built Vessel" },
  { src: work2,  label: "Stoneware Bowl" },
  { src: work3,  label: "Textured Platter" },
  { src: work4,  label: "Studio Process" },
  { src: work5,  label: "Organic Form" },
  { src: work6,  label: "Sculptural Piece" },
  { src: work7,  label: "Earth & Ash" },
  { src: work8,  label: "Narrative Series" },
  { src: work9,  label: "Wheel-thrown Set" },
];

// Fade-in on scroll hook
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("fi-vis"); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className={`fi-wrap ${className}`}>
      {children}
    </div>
  );
}

export default function SwapnaPage() {
  return (
    <>
      <SEO
        title="Swapna P — Co-founder"
        description="Journalist turned potter, co-founder of The Cold Mountain Studio, Dharamshala."
        path="/about/swapna"
      />
      <Navbar />

      <style>{`
        .fi-wrap {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .fi-vis {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .work-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.8);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
        }
        .work-item:hover .work-img {
          transform: scale(1.06);
          filter: saturate(1.1);
        }
        .work-caption {
          position: absolute;
          inset: 0;
          background: rgba(28, 26, 23, 0);
          display: flex;
          align-items: flex-end;
          padding: 1rem;
          transition: background 0.4s;
        }
        .work-item:hover .work-caption {
          background: rgba(28, 26, 23, 0.5);
        }
        .work-caption span {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245, 242, 238, 0);
          transition: color 0.3s 0.05s;
        }
        .work-item:hover .work-caption span {
          color: rgba(245, 242, 238, 0.9);
        }
        .portrait-sticky {
          position: sticky;
          top: 3rem;
        }
        @media (max-width: 768px) {
          .portrait-sticky { position: static; }
        }
      `}</style>

      <main className="min-h-screen bg-warm-white">

        {/* ── Text-only page header — no images ── */}
        <FadeIn>
          <header className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24 pt-16 md:pt-20">
            <div className="border-b border-black/8 pb-2 md:pb-2 pt-4">
              <h1 className="font-cormorant text-[clamp(2rem,4vw,4rem)] font-light leading-[0.95] text-charcoal mb-4">
                Swapna <em className="italic text-clay not-italic" style={{ fontStyle: "italic" }}>P</em>
              </h1>
              <span className="block text-[0.65rem] tracking-[0.3em] uppercase text-clay mb-4 font-jost">
                Co-founder · The Cold Mountain Studio · Est. 2017
              </span>
            </div>
          </header>
        </FadeIn>

        {/* ── Intro: portrait + bio ── */}
        <FadeIn>
          <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24">
            <div
              className="border-b border-black/8 pt-6 pb-14 md:pt-6 md:pb-14"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.75fr",
                gap: "clamp(3rem, 5vw, 6rem)",
                alignItems: "start",
              }}
            >
              {/* Portrait */}
              <div className="portrait-sticky flex flex-col gap-6">
                {swapna_portrait ? (
                  <img
                    src={swapna_portrait}
                    alt="Swapna P"
                    className="w-full object-cover object-top"
                    style={{ aspectRatio: "3/4", filter: "saturate(0.85) sepia(0.05)" }}
                  />
                ) : (
                  <div
                    className="w-full flex flex-col items-center justify-center gap-4"
                    style={{
                      aspectRatio: "3/4",
                      background: "linear-gradient(145deg, #cfc8be, #968d84)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <svg width="56" height="56" viewBox="0 0 64 64" fill="none" style={{ opacity: 0.5 }}>
                      <circle cx="32" cy="22" r="12" fill="white" fillOpacity="0.5" />
                      <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" fill="white" fillOpacity="0.4" />
                    </svg>
                    <span className="text-[0.6rem] tracking-[0.22em] uppercase" style={{ opacity: 0.75 }}>
                      Artist portrait
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-cormorant text-[1.1rem] text-charcoal">Swapna P</p>
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-stone mt-1 font-jost">
                    Potter · Storyteller · Teacher
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-8 pt-2">
                {/* Pull quote */}
                <div className="border-l-2 border-clay pl-6">
                  <p className="font-cormorant text-[clamp(1.1rem,1.8vw,1.35rem)] italic font-light leading-[1.75] text-charcoal">
                    "Pottery is the unlearning of a structured, corporate-trained mind — each piece
                    a sanctuary where the structure of the past meets the fluid freedom of the present."
                  </p>
                  <cite className="block mt-4 text-[0.62rem] tracking-[0.22em] uppercase text-clay not-italic font-jost">
                    — Swapna P
                  </cite>
                </div>

                {/* Bio paragraphs */}
                <div className="flex flex-col gap-5">
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    Swapna's path to the wheel wasn't a straight line — it was a conscious detour.
                    After twenty years of navigating a successful corporate career across various
                    countries, she moved to the mountains of Dharamshala in 2014, choosing to trade
                    a comfortable paycheck for a life of intentionality.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    At the studio, she continues her lifelong relationship with storytelling — now
                    translating the narratives once captured in words as a journalist into the tactile
                    language of earth and fire.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    While she values the discipline of the wheel, Swapna finds her truest expression
                    in hand-building techniques. She embraces the organic imperfections and the
                    distinctively handmade look and feel these methods allow — treating each piece as
                    a sanctuary for exploration.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    Her work is a testament to the beauty of a second chapter. Each piece she creates
                    is part of an ongoing exploration of slow living — a journey that isn't about
                    reaching a destination, but about embracing the rhythmic, messy, and beautiful
                    process of starting over.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    Outside of her studio practice, Swapna offers The Listening Ear — a space for
                    judgment-free reflection. Much like working with clay, this process is about
                    untangling complex thoughts and finding fresh perspectives. It isn't about
                    providing fixes, but about enabling others to break through thinking loops and
                    find their own path forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ── Breakout quote ── */}
        <FadeIn>
          <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24">
            <div className="text-center py-16 md:py-20 border-b border-black/8">
              <p className="font-cormorant text-[clamp(1.4rem,3vw,2.1rem)] font-light italic leading-[1.5] text-clay-dark">
                A journey that isn't about reaching<br />
                a destination — but about embracing<br />
                the beauty of starting over.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* ── Selected Works grid ── */}
        <FadeIn>
          <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24 py-14 md:py-20">
            <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-black/8">
              <span className="font-cormorant text-[clamp(1.1rem,2vw,1.5rem)] font-light text-charcoal">
                Selected Works
              </span>
              <span className="text-[0.62rem] tracking-[0.22em] uppercase text-stone font-jost">
                {WORKS.length} pieces
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "3px",
              }}
            >
              {WORKS.map(({ src, label }) => (
                <div
                  key={label}
                  className="work-item"
                  style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1", background: "#1c1a17" }}
                >
                  <img src={src} alt={label} className="work-img" loading="lazy" />
                  <div className="work-caption">
                    <span className="font-jost">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Footer links ── */}
        <FadeIn>
          <div className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24 pb-16 md:pb-24">
            <div className="pt-8 border-t border-black/8 flex gap-5 flex-wrap">
              <a
                href="https://www.instagram.com/thecoldmountainstudio/"
                target="_blank"
                rel="noreferrer"
                className="text-[0.68rem] tracking-[0.12em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
              >
                Follow on Instagram →
              </a>
            </div>
          </div>
        </FadeIn>

      </main>

      <Footer />
    </>
  );
}
