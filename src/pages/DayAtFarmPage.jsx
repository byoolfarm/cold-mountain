// src/pages/DayAtFarmPage.jsx
import { useEffect, useRef, useState } from "react";
import SEO    from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageViewer from "../components/ImageViewer";
import { SectionLabel } from "../components/ui";

const img1 = "/images/day_at_farm_1.webp"; // cow
const img2 = "/images/day_at_farm_8.webp"; // clay table (children) - reused in body
const img3 = "/images/day_at_farm_7.webp"; // feast (dining table) - reused in body
const img4 = "/images/day_at_farm_9.webp"; // farm tour (hibiscus) - reused in body
const img5 = "/images/day_at_farm_5.webp"; // goat
const img6 = "/images/day_at_farm_6.webp"; // boy feeding cow
const img10 = "/images/day_at_farm_10.webp"; // children drawing
const img11 = "/images/day_at_farm_2.webp"; // farm landscape / activity

const WORKS = [
  { src: img6, label: "Feeding the Cow" },
  { src: img5, label: "Meet the Goats" },
  { src: img1, label: "Gauri the Cow" },
  { src: img11, label: "Farm Life" },
  { src: img10, label: "Children Drawing" },
];

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

// ── Thin ornamental rule ──────────────────────────────────────────────────────
const Rule = ({ light = false }) => (
  <div className={`w-10 h-px mb-8 ${light ? "bg-clay-light" : "bg-clay"}`} />
);

// ── Section: text left / image right (or reversed) ───────────────────────────
function FarmSection({ id, label, heading, accentWord, body, listItems = [], img, alt, reverse = false, light = false, pyClass = "py-16 md:py-20" }) {
  const bg = light ? "bg-[#1c1a17]" : "bg-warm-white";
  const textCol = light ? "text-cream" : "text-charcoal";
  const bodyCol = light ? "text-white/60" : "text-earth-light";
  const labelColor = light ? "text-clay-light" : undefined;

  return (
    <section id={id} className={`${bg} ${pyClass} px-6 md:px-16`}>
      <div className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        
        {/* Text column */}
        <FadeIn>
          <SectionLabel light={light} className={labelColor ? `!text-clay-light` : ""}>
            {label}
          </SectionLabel>
          <h2 className={`font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] ${textCol} mb-6`}>
            {heading}
            {accentWord && (
              <><br /><em className={`italic ${light ? "text-clay-light" : "text-clay-dark"}`}>{accentWord}</em></>
            )}
          </h2>
          <Rule light={light} />
          {body.split("\n").filter(s => s.trim()).map((para, i) => (
            <p key={i} className={`text-[1rem] leading-[2] ${bodyCol} max-w-[500px] ${i > 0 ? "mt-4" : ""}`}>
              {para.trim()}
            </p>
          ))}
          
          {listItems.length > 0 && (
            <ul className={`list-none mt-6 space-y-4 ${bodyCol}`}>
              {listItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-[1rem] leading-[1.7]">
                   <span className="text-clay mt-1 text-sm">✦</span>
                   <span className="max-w-[460px]">
                     <strong className={`font-normal ${light ? "text-white" : "text-charcoal"}`}>{item.title}:</strong> {item.text}
                   </span>
                </li>
              ))}
            </ul>
          )}
        </FadeIn>

        {/* Image column */}
        <FadeIn className="overflow-hidden">
          <img
            src={img}
            alt={alt}
            className="w-full aspect-[4/5] object-cover saturate-75 hover:saturate-100 transition-all duration-700 block rounded-sm shadow-sm"
            loading="lazy"
          />
        </FadeIn>
      </div>
    </section>
  );
}

export default function DayAtFarmPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  
  return (
    <>
      <SEO
        title="A Day at Byool Farm — The Cold Mountain Studio"
        description="Rediscover a slower pace of life with our 11 am – 5 pm mountain immersion."
        path="/day-at-byool-farm"
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
          filter: saturate(0.85);
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.4s ease;
        }
        .work-item {
          cursor: pointer;
        }
        .work-item:hover .work-img {
          transform: scale(1.06);
          filter: saturate(1.1);
        }
      `}</style>

      <main className="min-h-screen bg-warm-white">

        <FadeIn>
          <header className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24 pt-28 pb-4">
             <div className="border-b border-black/8 pb-6 pt-0 text-center">
              <span className="block text-[0.7rem] tracking-[0.3em] uppercase text-clay mb-3 font-jost">
                Rediscover a slower pace of life
              </span>
              <h1 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-charcoal mb-4">
                A Day at Byool Farm <br />
                <span className="text-[clamp(1.6rem,3vw,2.8rem)] italic text-clay">Farm, Feast, &amp; Play with Clay</span>
              </h1>
              <p className="max-w-[650px] mx-auto text-[1.05rem] leading-[1.8] text-earth-light">
                Whether you are a local seeking a weekend reset or a traveller looking for an “off-beat experience” join us for a day where the earth meets art.
              </p>
            </div>
          </header>
        </FadeIn>

        {/* Sections */}
        <FarmSection
          id="farm-tour"
          pyClass="py-8 md:py-12"
          label="1. Rooted in Nature"
          heading="The Guided"
          accentWord="Farm Tour"
          body="Begin with a sensory delight at Byool Farm. This isn't just a walk; it’s a discovery of our no-chemical, natural farming world."
          listItems={[
            { title: "Discover", text: "Meet the seasonal herbs and heirloom vegetables that grow in our mountain soil." },
            { title: "Learn", text: "Understand the 'why' behind our natural farming philosophy." },
            { title: "Play", text: "Engage in a lighthearted treasure hunt to identify the flora of Byool Farm." },
            { title: "Connect", text: "Spend time with our animal family—say hello to Gauri the cow, our mischievous goats Cheenu and Meenu, and our free-roaming chickens." }
          ]}
          img={img4}
          alt="The Guided Farm Tour"
        />

        <FarmSection
          id="farm-feast"
          label="2. From Soil to Plate"
          heading="The Farm-Fresh"
          accentWord="Feast"
          body="After your walk, gather at The Dining Room to indulge in a delicious, freshly prepared meal."
          listItems={[
            { title: "The Meal", text: "Savour the signature Byool Thali or your pre-booked custom order." },
            { title: "The Vibe", text: "Wholesome, seasonal, and authentically Himalayan. It’s food that feels like a hug." }
          ]}
          img={img3}
          alt="Farm Fresh Feast"
          reverse
          light
        />

        <FarmSection
          id="pottery-session"
          label="3. Meditative Creation"
          heading="The Pottery"
          accentWord="Session"
          body="Transition to the quiet hum of The Cold Mountain Studio. No experience is needed—just a willingness to get your hands messy."
          listItems={[
            { title: "The Materials", text: "Get to know different kinds of clay and how their textures and properties shape the final piece." },
            { title: "The Craft", text: "Explore wheel-throwing or hand-building under expert guidance." },
            { title: "The Feeling", text: "Find your flow as you shape raw clay into a unique piece of art." },
            { title: "Take it Home", text: "We provide all materials, tools, and an apron (plus tea and coffee!). You can choose to have your piece fired and shipped to you later." }
          ]}
          img={img2}
          alt="The Pottery Session"
        />

        {/* ── PLAN YOUR VISIT CTA ───────────────────────────────────────────── */}
        <div className="bg-cream border-t border-black/8 py-20 px-6 mt-10">
          <div className="max-w-[900px] mx-auto text-center">
            
            <SectionLabel className="justify-center">Join Us</SectionLabel>
            <h3 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.2rem)] font-light text-charcoal mb-4">
              Plan your <em className="italic text-clay-dark">Visit</em>
            </h3>
            <p className="text-[1.05rem] text-earth-light mb-12 italic">
              Pre-booking is essential to ensure a quiet, intimate experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14 text-left border border-black/5 bg-white shadow-sm rounded-md p-8">
              <div>
                <span className="block text-[0.7rem] tracking-[0.15em] uppercase text-clay mb-2 font-jost">Timings</span>
                <strong className="text-charcoal font-normal text-lg font-cormorant">11:00 am – 4:00 pm</strong>
              </div>
              <div>
                <span className="block text-[0.7rem] tracking-[0.15em] uppercase text-clay mb-2 font-jost">Price</span>
                <strong className="text-charcoal font-normal text-lg font-cormorant">₹2,500 per person</strong>
              </div>
              <div>
                <span className="block text-[0.7rem] tracking-[0.15em] uppercase text-clay mb-2 font-jost">Firing (Optional)</span>
                <span className="text-earth-light text-[0.95rem] leading-[1.4]">₹250 per piece<br/>+ shipping.</span>
              </div>
              <div>
                <span className="block text-[0.7rem] tracking-[0.15em] uppercase text-clay mb-2 font-jost">Inclusions</span>
                <span className="text-earth-light text-[0.95rem] leading-[1.4]">Guided tour, full meal, 2-hour workshop, all materials.</span>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="https://wa.me/918626823139?text=Hi!%20I%20would%20like%20to%20book%20A%20Day%20at%20Byool%20Farm."
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5a] shadow-lg hover:shadow-xl text-white text-[0.8rem] tracking-[0.15em] uppercase no-underline transition-all duration-300 font-jost rounded-full"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat &amp; Book on WhatsApp
              </a>
              <p className="mt-8 font-cormorant text-[1.3rem] italic text-clay-dark">
                Rejuvenate your spirit and take home a piece of the mountains.
              </p>
            </div>
            
          </div>
        </div>

      </main>

      {/* Image Grid Gallery (Smaller section at bottom) */}
      <div className="bg-[#181512] py-4">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {WORKS.map(({ src, label }) => {
              let visibilityClass = "";
              if (src === img6) visibilityClass = "block md:hidden"; // hide on desktop
              if (src === img5) visibilityClass = "hidden md:block"; // hide on mobile

              return (
                <div
                  key={label}
                  className={`work-item ${visibilityClass}`}
                  style={{ position: "relative", overflow: "hidden", aspectRatio: "1/1", background: "#1c1a17" }}
                  onClick={() => setSelectedImg({ src, label })}
                >
                  <img src={src} alt={label} className="work-img opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {selectedImg && (
        <ImageViewer 
          src={selectedImg.src} 
          alt={selectedImg.label} 
          onClose={() => setSelectedImg(null)} 
        />
      )}

      <Footer />
    </>
  );
}
