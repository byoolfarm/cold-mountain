// src/pages/AboutStudioPage.jsx  —  route: /about/studio
// ─────────────────────────────────────────────────────────────────────────────
// About the studio — three sections: About Us, Our Process, Our Aim.
// Content sourced from thecoldmountainstudio.com.
// Design: same system as the rest of the app — Cormorant + Jost,
// clay / earth / charcoal palette, shared ui.jsx primitives.
// ─────────────────────────────────────────────────────────────────────────────
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { SectionLabel } from "../components/ui";
import {
  slide_wheel, 
} from "../assets/img";
import * as IMGS from "../assets/img"

// ── Thin ornamental rule ──────────────────────────────────────────────────────
const Rule = ({ light = false }) => (
  <div className={`w-10 h-px mb-8 ${light ? "bg-clay-light" : "bg-clay"}`} />
);

// ── Section: text left / image right (or reversed) ───────────────────────────
function StudioSection({ id, label, heading, accentWord, body, img, alt, reverse = false, light = false }) {
  const bg = light ? "bg-charcoal" : "bg-warm-white";
  const textCol = light ? "text-cream" : "text-charcoal";
  const bodyCol = light ? "text-white/60" : "text-earth-light";
  const labelColor = light ? "text-clay-light" : undefined;

  return (
    <section id={id} className={`${bg} py-24 px-6 md:px-16`}>
      <div className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>

        {/* Text column */}
        <div>
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
            <p key={i} className={`text-[1rem] leading-[2] ${bodyCol} max-w-[480px] ${i > 0 ? "mt-4" : ""}`}>
              {para.trim()}
            </p>
          ))}
        </div>

        {/* Image column */}
        <div className="overflow-hidden ">
          <img
            src={img}
            alt={alt}
            className="w-full aspect-[4/5] object-cover saturate-75 hover:saturate-100 transition-all duration-700 block"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AboutStudioPage() {
  return (
    <>
      <SEO
        title="About"
        description="About The Cold Mountain Studio — our story, our process, and our aim. A pottery studio rooted in beauty, craft, and the Himalayas."
        path="/about/studio"
      />
      <Navbar /> 

      <main className="bg-warm-white min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <div className="relative h-[20vh] min-h-[440px] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center mt-[4.5rem]"
            style={{ backgroundImage: `url(${IMGS.about_wallpaper})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent" />
          <div className="relative px-6 md:px-16 pb-16 max-w-[700px]">
            <p className="text-[0.68rem] tracking-[0.35em] uppercase text-clay-light mb-4 font-jost">
              The Cold Mountain Studio · Dharamshala
            </p>
            <h1 className="font-cormorant text-[clamp(2.4rem,4.5vw,3.8rem)] font-light text-white leading-[1.1]">
              We make mud<br />
              <em className="italic text-clay-light">into pots.</em>
            </h1>
          </div>
        </div>

        {/* ── PULL QUOTE (Hanshan) ─────────────────────────────────────────── */}
        <div className="bg-cream py-16 px-6 md:px-24 text-center border-b border-black/8">
          <blockquote className="font-cormorant text-[clamp(1.1rem,2vw,1.55rem)] font-light italic text-earth leading-[1.8] max-w-[680px] mx-auto mb-4">
            "I reached Cold Mountain and all cares stopped. No idle thoughts remained in my head.
            Nothing to do I make mud into pots and trust the current like an unmoored boat."
          </blockquote>
          <p className="text-[0.7rem] tracking-[0.2em] uppercase text-stone font-jost">
            — Hanshan, Tang Dynasty hermit (9th century)
          </p>
        </div>

        {/* ── ABOUT US ────────────────────────────────────────────────────── */}
        <StudioSection
          id="about-us"
          label="About Us"
          heading="An immersive"
          accentWord="experience."
body="At The Cold Mountain Studio , we believe in slowing down — in letting our hands and hearts move with the quiet rhythm of clay. Inspired by the spirit of Hanshan, the 9th-century hermit poet who carved his reflections on stones and trees, we seek beauty not for display, but for discovery.

Each piece we make is a small prayer — not for asking, but for appreciating. It’s a meditation on simplicity, imperfection, and the joy of working with the earth itself.

In a world that rewards speed and scale, we choose depth and presence. Our studio is a space for reconnecting — to nature, to creativity, and to one’s own voice. Here, students, artists, and visitors explore clay as both craft and contemplation.
"
          // body="Our effort at the Cold Mountain Studio is to invoke — in the artist and everyone connected: patrons, students, supporters — a truly immersive experience. We believe that deepest intimacy with the world and the Self can be attained by the recognition of beauty and the practice of aesthetics."
          img={IMGS.about1}
          alt="Students at The Cold Mountain Studio"
        />

        {/* ── OUR PROCESS ─────────────────────────────────────────────────── */}
        <StudioSection
          id="our-process"
          label="Our Process"
          heading="Balance between"
          accentWord="craft & self."
          body="At The Cold Mountain Studio, we strive to create an environment where one can nurture a relationship with clay as well as oneself. As a production studio, we must find a balance between efficient and regular output of ceramic functional ware and pursuing our own aesthetic and spiritual goals. In our courses, students are given the opportunity to learn and discover their own voice in an environment of support and discipline."
          img={slide_wheel}
          alt="Wheel throwing at The Cold Mountain Studio"
          reverse
          light
        />

        {/* ── OUR AIM ─────────────────────────────────────────────────────── */}
        <StudioSection
          id="our-aim"
          label="Our Aim"
          heading="Every piece, a prayer"
          // accentWord="a prayer."
          body="Founded in 2017 in the hills of Himachal Pradesh, Cold Mountain Studio began as a shared dream: to create a sanctuary where making becomes a form of being.

 Lakhan Kaushik , our chief innovator and glaze master, continues to explore new forms and finishes — each bowl, cup, or vessel a reflection of his curious dialogue with the wheel.

Nalin Chandra , our co-founder and steady compass, grounds the studio with his vision and support, allowing creativity to flow freely without compromise.

Swapna P , hand-building storyteller, traded a global corporate career for Dharamshala's mountains—shaping organic, imperfect forms that blend discipline with slow living's freedom. 

We invite you to slow down with us — to shape, to breathe, and to rediscover peace in the art of creation."
          // body="Our aim is that every piece that comes from our studio would be like a prayer — not a prayer in the service of asking for something, but rather a prayer of appreciation, a prayer of delight for the beauty and simplicity of natural things. The quiet spirit of the unrefined and the unsophisticated, the art of creating peace."
          img={IMGS?.about3}
          alt="Pottery at Cold Mountain Studio"
        />

        {/* ── CLOSING CTA STRIP ───────────────────────────────────────────── */}
        <div className="bg-cream border-t border-black/8 py-16 px-6 text-center">
          <SectionLabel className="justify-center">Come as you are</SectionLabel>
          <p className="font-cormorant text-[clamp(1.5rem,2.8vw,2.2rem)] font-light text-charcoal mb-6">
            Beginners, artists, wanderers —{" "}
            <em className="italic text-clay-dark">all welcome.</em>
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/#courses"
              className="inline-block px-7 py-3 bg-clay hover:bg-clay-dark text-white text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-colors duration-300 font-jost"
            >
              View Courses
            </a>
            <a
              href="/#contact"
              className="inline-block px-7 py-3 border border-earth hover:border-clay text-earth hover:text-clay text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-colors duration-300 font-jost"
            >
              Get in Touch
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
