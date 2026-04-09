// src/pages/WorkPage.jsx  —  route: /work
// ─────────────────────────────────────────────────────────────────────────────
// Gallery page showing all studio work, filterable by category.
// Data comes from src/data/work.js — edit that file to add/remove pieces.
// Images come from src/assets/images.js.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react";
import Navbar              from "../components/Navbar";
import Footer              from "../components/Footer";
import SEO                 from "../components/SEO";
import { WORK_ITEMS, WORK_CATEGORIES } from "../data/work";
import * as IMGS           from "../assets/img";
import { SectionLabel }    from "../components/ui";

// ── Filter tab bar ────────────────────────────────────────────────────────────
function FilterBar({ active, onChange }) {
  return (
    <div className="flex gap-0 border-b border-black/10 overflow-x-auto no-scrollbar">
      {WORK_CATEGORIES.map(cat => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`text-[0.72rem] tracking-[0.15em] uppercase px-5 py-3 border-none border-b-2 -mb-px bg-transparent cursor-pointer font-jost transition-colors duration-200 whitespace-nowrap flex-shrink-0
            ${active === cat.id
              ? "text-clay border-clay"
              : "text-stone border-transparent hover:text-clay"}`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

// ── Single work item card ─────────────────────────────────────────────────────
function WorkCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const img = IMGS[item.imgKey];

  return (
    <div
      className="relative overflow-hidden cursor-default group h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className=" h-full overflow-hidden bg-cream">
        <img
          src={img}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? "scale-105 saturate-100" : "scale-100 saturate-75"}`}
          loading="lazy"
        />
      </div>

      {/* Hover overlay with title + medium */}
      {/* <div className={`absolute inset-0 bg-charcoal/70 flex flex-col justify-end p-4 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
        <p className="font-cormorant text-cream text-lg font-light leading-snug">{item.title}</p>
        {item.medium && (
          <p className="text-[0.76rem] tracking-[0.12em] uppercase text-clay-light mt-1 font-jost">{item.medium}</p>
        )}
        {item.year && (
          <p className="text-[0.74rem] text-white/50 mt-0.5 font-jost">{item.year}</p>
        )}
      </div> */}

      {/* Featured badge */}
      {/* {item.featured && (
        <span className="absolute top-3 left-3 text-[0.6rem] tracking-[0.14em] uppercase bg-clay text-white px-2 py-0.5 font-jost">
          Featured
        </span>
      )} */}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? WORK_ITEMS
    : WORK_ITEMS.filter(item => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Our Work"
        description="Browse handmade ceramics, functional ware, and studio documentation from The Cold Mountain Studio, Dharamshala."
        path="/work"
      />
      <Navbar />

      <main className="min-h-screen bg-warm-white">
        {/* Page header */}
        <div className="pt-20 pb-8 px-4 md:px-16 bg-charcoal text-center">
          {/* <SectionLabel light className="justify-center">From the kiln</SectionLabel> */}
          <h1 className="font-cormorant text-[clamp(2.2rem,4vw,3.4rem)] font-light text-cream leading-tight">
            Our <em className="italic text-clay-light">Work</em>
          </h1>
          <p className="text-[0.92rem] text-white/60 max-w-[440px] mx-auto mt-4 leading-[1.9]">
            Functional ware, decorative pieces, and studio documentation.
            Every piece made by hand in Dharamshala.
          </p>
        </div>

        {/* Sticky filter bar */}
        <div className="sticky top-[72px] z-30 bg-warm-white border-b border-black/10 px-4 md:px-16">
          <FilterBar active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Gallery grid */}
        <div className="px-4 md:px-16 py-12 max-w-[1400px] mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-stone py-24 text-base">Nothing here yet — check back soon.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch">
              {filtered.map(item => (
                <WorkCard key={item.id} item={item} />
              ))}
            </div>
          )}

          {/* Count */}
          {/* <p className="text-center text-[0.72rem] tracking-[0.14em] uppercase text-stone mt-10 font-jost">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            {activeCategory !== "all" && ` in ${WORK_CATEGORIES.find(c => c.id === activeCategory)?.label}`}
          </p> */}
        </div>

        {/* Commission CTA */}
        <div className="py-16 px-4 md:px-16 bg-cream text-center">
          <SectionLabel>Commission a piece</SectionLabel>
          <h2 className="font-cormorant text-[clamp(1.7rem,3vw,2.4rem)] font-light text-charcoal mb-4">
            Something made <em className="italic text-clay-dark">just for you</em>
          </h2>
          <p className="text-base text-earth-light leading-relaxed max-w-[460px] mx-auto mb-7">
            We take custom orders for functional ware, gift sets, and one-off
            pieces. Get in touch with what you have in mind.
          </p>
          <a
            href="https://wa.me/919805259227?text=Hi%20The%20Cold%20Mountain%20Studio!%20I%20would%20like%20to%20commission%20a%20custom%20piece."
            target="_blank"
            rel="noreferrer"
            className="inline-block px-7 py-3 bg-clay hover:bg-clay-dark text-white text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-300 font-jost no-underline"
          >
            Enquire via WhatsApp
          </a>
          <span className="inline-block w-3" />
          <a
            href="mailto:thecoldmountainstudio@gmail.com?subject=Custom%20Commission%20Enquiry"
            className="inline-block px-7 py-3 border border-earth hover:border-clay text-earth hover:text-clay text-[0.78rem] tracking-[0.14em] uppercase transition-colors duration-300 font-jost no-underline"
          >
            Send an Email
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
