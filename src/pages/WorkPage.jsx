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
import ImageViewer         from "../components/ImageViewer";

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
function WorkCard({ item, onClick }) {
  const [hovered, setHovered] = useState(false);
  const img = IMGS[item.imgKey];

  return (
    <div
      className="relative overflow-hidden cursor-pointer group h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(img, item.title)}
    >
      <div className=" h-full overflow-hidden bg-cream">
        <img
          src={img}
          alt={item.title}
          className={`w-full h-full object-cover transition-all duration-700 ${hovered ? "scale-105 saturate-100" : "scale-100 saturate-75"}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);

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
                <WorkCard 
                  key={item.id} 
                  item={item} 
                  onClick={(src, title) => setSelectedImg({ src, title })} 
                />
              ))}
            </div>
          )}
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

      {selectedImg && (
        <ImageViewer 
          src={selectedImg.src} 
          alt={selectedImg.title} 
          onClose={() => setSelectedImg(null)} 
        />
      )}

      <Footer />
    </>
  );
}
