// src/components/sections/CoursesSection.jsx
// ─────────────────────────────────────────────────────────────────────────────
// ACCOMMODATION DRAWER — design:
//   Cold Mountain Retreat  → expandable inline room photos
//   Byool Farm BnB         → external link only (byoolfarmstay.com)
//
// BUG FIX: Added `items-start` to the grid container so expanding a card's
// AccomDrawer does not push white space into sibling cards on the same row.
// Each accommodation option is its own independent toggle.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from "react";
import * as IMGS from "../../assets/images";
import { room_1, room_2 } from "../../assets/images";
import { COURSES } from "../../data/courses";
import { SectionLabel, SectionTitle, DividerLine, BtnPrimary, BtnOutlineDark } from "../ui";
import { Link } from "react-router-dom";
import { Home, ChevronDown } from "lucide-react";

const TAG_CLS = { clay: "bg-clay", dark: "bg-charcoal", earth: "bg-earth-light" };

const Chevron = ({ open }) => (
  <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
    className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
  ><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
);

// Cold Mountain Retreat: expandable with photos
function CMRPanel() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-black/8 pt-3 mt-3">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase text-stone hover:text-clay transition-colors bg-transparent border-none cursor-pointer font-jost p-0 w-full text-left"
      >
        <Chevron open={open} />
        Cold Mountain Retreat — view rooms
      </button>
      <div className={`overflow-hidden transition-all duration-[400ms] ${open ? "max-h-[500px] mt-3" : "max-h-0"}`}>
        <p className="text-[0.78rem] leading-relaxed text-earth-light mb-2">
          10-min walk from the studio. Earth-walled rooms, mountain views, shared kitchen, twin beds.
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          <img src={room_1} alt="Cold Mountain Retreat room" className="w-full aspect-[4/3] object-cover block"/>
          <img src={room_2} alt="Cold Mountain Retreat room" className="w-full aspect-[4/3] object-cover block"/>
        </div>
      </div>
    </div>
  );
}

function NewCMRPanel() {
  return (
    <div className="border-t border-black/8 pt-3 mt-3">
      <p className="text-[0.72rem] tracking-[0.1em] uppercase text-stone mb-2 font-jost">Cold Mountain Retreat</p>
      <p className="text-[0.78rem] leading-relaxed text-earth-light mb-2">
        Just 15 mins walk from the studio! This first-floor 2BR apartment features twin beds in each room, a functional kitchen, a cozy living area, and a common bath.
</p>
      <Link 
      to="/stay/cold-mountain-retreat" 
      className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase text-clay border border-clay px-3 py-1.5 no-underline hover:bg-clay hover:text-white transition-all duration-300 font-jost"
      >
      View Cold Mountain Retreat Stay →
      </Link>
    </div>
  );
}
// Byool Farm BnB: external link only
function ByoolPanel() {
  return (
    <div className="border-t border-black/8 pt-3 mt-3">
      <p className="text-[0.72rem] tracking-[0.1em] uppercase text-stone mb-2 font-jost">Byool Farm BnB</p>
      <p className="text-[0.78rem] leading-relaxed text-earth-light mb-2">
A cozy 3 bedroom cottage on-site at the Byool Farm, featuring three spacious rooms—each with a double bed and its own attached bathroom.      </p>
      <a href="https://byoolfarmstay.com/" target="_blank" rel="noreferrer"
        className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase text-clay border border-clay px-3 py-1.5 no-underline hover:bg-clay hover:text-white transition-all duration-300 font-jost"
      >View Byool Farm Stay →</a>
    </div>
  );
}

function CourseCard({ course, onEnquire }) {
    const goFAQ = () => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
const [accomOpen, setAccomOpen] = useState(false);

  const img = IMGS[course.imgKey];
  return (
    <div className="bg-warm-white hover:bg-cream transition-colors duration-300 flex flex-col overflow-hidden h-full">
      <div className="w-full aspect-[4/3] overflow-hidden flex-shrink-0">
        <img src={img} alt={course.name}
          className={`w-full h-full ${ course?.img_type=="contain"?"object-contain" :"object-cover"} saturate-80 hover:scale-[1.04] hover:saturate-100 transition-all duration-700`}/>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="font-cormorant text-[1.7rem] font-light text-clay/20 leading-none mb-1">{course.num}</div>
        <h3 className="font-cormorant text-xl font-normal text-charcoal mb-1">{course.name}</h3>
        <span className={`inline-block text-[0.73rem] tracking-[0.14em] uppercase text-white px-2 py-0.5 mb-2 self-start ${TAG_CLS[course.tagStyle]}`}>
          {course.tag}
        </span>
        <p className="text-[0.7rem] tracking-[0.12em] uppercase text-clay mb-2">{course.duration}</p>
        <p className="text-[0.7rem] tracking-[0.12em] uppercase text-clay mb-2">{course?.second_duration}</p>
        <p className="text-sm leading-relaxed text-earth-light mb-3">{course.desc}</p>
        <ul className="list-none mb-3 space-y-0.5">
          {course.features.map((f, i) => (
            <li key={i} className="text-sm leading-relaxed text-earth-light pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-clay-light before:text-xs">{f}</li>
          ))}
        </ul>
        {/* Pricing */}
        <div className="border-t border-black/10 pt-3">
          <div className={`grid gap-2 ${course.pricing.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
            {course.pricing.map((p, i) => (
              <div key={i} className="bg-cream p-3">
                <span className="block text-[0.73rem] tracking-[0.12em] uppercase text-stone mb-1.5">{p.name}</span>
                <div className="flex gap-3 flex-wrap">
                  {p.options.map((opt, j) => (
                    <div key={j} className="flex flex-col">
                      {opt.label && <span className="text-[0.6rem] text-stone tracking-[0.08em] uppercase">{opt.label}</span>}
                      <span className="font-cormorant text-base text-charcoal">{opt.val}</span>
                    </div>
                  ))}
                </div>
                {p.note && <p className="text-[0.73rem] text-stone mt-1 italic">{p.note}</p>}
              </div>
            ))}
          </div>
        </div>
      
        {/* Two independent accommodation panels */}
       {course.hasAccom && (
  <div className="mt-1 border border-[#A0614A]/20 rounded-xl overflow-hidden">
    <button
      onClick={() => setAccomOpen(prev => !prev)}
      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#A0614A]/5 transition-colors duration-150"
    >
      <span className="flex items-center justify-center w-[26px] h-[26px] rounded-lg bg-[#A0614A]/10">
        <Home size={14} color="#A0614A" />
      </span>
      <span className="flex-1 text-left text-[13px] font-medium text-[#A0614A] tracking-wide">
       View Accommodation
      </span>
      <ChevronDown
        size={15}
        color="#A0614A"
        className={`transition-transform duration-200 ${accomOpen ? "rotate-180" : ""}`}
      />
    </button>

    {accomOpen && (
      <div className="px-3 pb-3 pt-1 border-t border-[#A0614A]/15">
        <NewCMRPanel />
        <ByoolPanel />
      </div>
    )}
  </div>
)}
         <div className="text-stone">
        <button className="text-left text-[12px]" onClick={goFAQ} >Firing & shipping charges apply.</button>
        <p className="text-[12px]"> Plus 18% GST</p>
        </div>
        <button onClick={onEnquire}
          className="mt-4 text-[0.72rem] tracking-[0.12em] uppercase text-clay border-b border-clay-light pb-px hover:text-clay-dark transition-colors bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-jost self-start"
        >Enquire & Book →</button>
        <div className="text-[12px]" >
      
      </div>
      
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="courses" className="py-24 px-4 md:px-16 bg-warm-white">
      <DividerLine label="Residential & Non-Residential" />
      <SectionLabel>Courses &amp; Programmes</SectionLabel>
      <SectionTitle className="mb-3">
        Nine ways to find<br /><em className="italic text-clay-dark">your practice</em>
      </SectionTitle>
      <p className="text-base text-earth-light leading-relaxed max-w-[600px] mt-3 mb-12">
        From a weekend retreat to a three-month residency. Residential courses include food and
        accommodation at either <Link target="_blank"
  rel="noopener noreferrer" className=" text-clay-dark" to="/stay/cold-mountain-retreat"> <strong className="text-earth font-normal">Cold Mountain Retreat</strong> </Link> or{" "}
        <a className=" text-clay-dark" href="https://byoolfarmstay.com/" target="_blank" 
  rel="noopener noreferrer"><strong className="text-earth font-normal">Byool Farm BnB</strong></a>.
      </p>
      {/* items-start: prevents grid from stretching cards to match tallest sibling (accom bug fix) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 auto-rows-fr">
        {COURSES.map(c => <CourseCard key={c.num} course={c} onEnquire={goContact} />)}
      </div>
      <div className="mt-10 text-center flex gap-3 justify-center flex-wrap">
        <BtnPrimary onClick={goContact}>Enquire &amp; Book</BtnPrimary>
        <BtnOutlineDark onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}>Read FAQ</BtnOutlineDark>
      </div>
    </section>
  );
}
