// src/pages/about/LakhanPage.jsx  —  route: /about/lakhan
import { useEffect, useRef } from "react";
import SEO    from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { lakhan_portrait } from "../../assets/images";

// Work images — add these to your assets/images index
import work2  from "../../assets/images/lakhan_work2.jpg";
import work3  from "../../assets/images/lakhan_work3.jpg";
import work4  from "../../assets/images/lakhan_work4.jpg";
import work5  from "../../assets/images/lakhan_work5.jpg";
import work6  from "../../assets/images/lakhan_work6.jpg";
import work7  from "../../assets/images/lakhan_work7.jpg";
import work8  from "../../assets/images/lakhan_work8.JPG";
import work9  from "../../assets/images/lakhan_work9.JPG";
import work10 from "../../assets/images/lakhan_work10.jpg";

const WORKS = [
  { src: work5,  label: "Gallery Installation" },
  { src: work6,  label: "Chawan · Volcanic Glaze" },
  { src: work3,  label: "Kintsugi Bowl" },
  { src: work4,  label: "Tile Installation" },
  { src: work8,  label: "Celadon · Oxblood" },
  { src: work9,  label: "Pair · Oxblood Celadon" },
  { src: work7,  label: "Wall Piece · Mixed Media" },
  { src: work10, label: "Raku Bowl" },
  { src: work2,  label: "Exhibition Display" },
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

export default function LakhanPage() {
  return (
    <>
      <SEO
        title="Lakhan Kaushik — Co-founder"
        description="Reiki Grandmaster, potter, and co-founder of The Cold Mountain Studio, Dharamshala."
        path="/about/lakhan"
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
           
              <h1 className="font-cormorant text-[clamp(2rem,4vw,4rem)] font-light leading-[0.95] text-charcoal">
                Lakhan <em className="italic text-clay not-italic" style={{ fontStyle: "italic" }}>Kaushik</em>
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
                {lakhan_portrait ? (
                  <img
                    src={lakhan_portrait}
                    alt="Lakhan Kaushik"
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
                  <p className="font-cormorant text-[1.1rem] text-charcoal">Lakhan Kaushik</p>
                  <p className="text-[0.62rem] tracking-[0.22em] uppercase text-stone mt-1 font-jost">
                    Reiki Grandmaster · Potter · Teacher
                  </p>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-8 pt-2">
                {/* Pull quote */}
                <div className="border-l-2 border-clay pl-6">
                  <p className="font-cormorant text-[clamp(1.1rem,1.8vw,1.35rem)] italic font-light leading-[1.75] text-charcoal">
                    "Art talks to those who take the time to listen. My goal is to help others
                    build a sense of wonder and find a oneness with all that is beautiful around us."
                  </p>
                  <cite className="block mt-4 text-[0.62rem] tracking-[0.22em] uppercase text-clay not-italic font-jost">
                    — Lakhan Kaushik
                  </cite>
                </div>

                {/* Bio paragraphs */}
                <div className="flex flex-col gap-5">
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    In 2011, Lakhan Kaushik traded the predictable bustle of Bangalore for the raw,
                    quiet rhythms of the mountains in Dharamshala. A Reiki Grandmaster and certified
                    hypnotherapist, he founded the Maitreya Study Centre — establishing himself as a
                    guide in the realms of healing and spiritual growth.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    His life is a deliberate tapestry of esoteric mastery — ranging from astrology and
                    alchemy to the rigorous study of Kashmir Shaivism and Tarot. This spiritual inquiry
                    eventually demanded a physical anchor, leading him to the tactile world of clay.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    In 2017, Lakhan launched The Cold Mountain Studio. Choosing to bypass the traditional
                    constraints of formal ceramic schooling, he instead forged a sophisticated craft through
                    deep immersion and collaboration with accomplished artists.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    His work is characterised by a sophisticated and scholarly curiosity. He approaches the
                    studio as a living laboratory, integrating local materials into his practice to bridge
                    the gap between ancient tradition and modern expression.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    Far from mere experimentation, he is dedicated to the study and construction of diverse
                    kiln designs from around the globe — reviving ancestral firing techniques that have
                    connected humanity to earth and fire across centuries.
                  </p>
                  <p className="text-[0.95rem] leading-[1.9] text-earth-light">
                    Today, Lakhan resides at Byool Farm, a self-sufficient sanctuary where he balances the
                    demands of natural farming with the companionship of his cows, goats, chickens, and
                    four dogs. Every piece is more than a vessel; it carries the grounded, intentional
                    energy of the Himalayan foothills.
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
                Every piece that leaves the studio carries<br />
                the grounded, intentional energy<br />
                of the Himalayan foothills.
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
                  <img src={src} alt={label} className="work-img" />
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
