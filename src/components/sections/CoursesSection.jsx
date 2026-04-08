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
// import { useState } from "react";
import * as IMGS from "../../assets/images";
import {SectionLabel,SectionTitle} from "../ui"
import { Link } from "react-router-dom";
// import { room_1, room_2 } from "../../assets/images";
// import { COURSES } from "../../data/courses";
// import { SectionLabel, SectionTitle, DividerLine, BtnPrimary, BtnOutlineDark } from "../ui";
// import { Link } from "react-router-dom";
// import { Home, ChevronDown } from "lucide-react";

// const TAG_CLS = { clay: "bg-clay", dark: "bg-charcoal", earth: "bg-earth-light" };

// const Chevron = ({ open }) => (
//   <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
//     className={`transition-transform duration-300 flex-shrink-0 ${open ? "rotate-180" : ""}`}
//   ><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
// );

// Cold Mountain Retreat: expandable with photos
// function CMRPanel() {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-t border-black/8 pt-3 mt-3">
//       <button
//         onClick={() => setOpen(o => !o)}
//         className="flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase text-stone hover:text-clay transition-colors bg-transparent border-none cursor-pointer font-jost p-0 w-full text-left"
//       >
//         <Chevron open={open} />
//         Cold Mountain Retreat — view rooms
//       </button>
//       <div className={`overflow-hidden transition-all duration-[400ms] ${open ? "max-h-[500px] mt-3" : "max-h-0"}`}>
//         <p className="text-[0.78rem] leading-relaxed text-earth-light mb-2">
//           10-min walk from the studio. Earth-walled rooms, mountain views, shared kitchen, twin beds.
//         </p>
//         <div className="grid grid-cols-2 gap-1.5">
//           <img src={room_1} alt="Cold Mountain Retreat room" className="w-full aspect-[4/3] object-cover block"/>
//           <img src={room_2} alt="Cold Mountain Retreat room" className="w-full aspect-[4/3] object-cover block"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// function NewCMRPanel() {
//   return (
//     <div className="border-t border-black/8 pt-3 mt-3">
//       <p className="text-[0.72rem] tracking-[0.1em] uppercase text-stone mb-2 font-jost">Cold Mountain Retreat</p>
//       <p className="text-[0.78rem] leading-relaxed text-earth-light mb-2">
//         Just 15 mins walk from the studio! This first-floor 2BR apartment features twin beds in each room, a functional kitchen, a cozy living area, and a common bath.
// </p>
//       <Link 
//       to="/stay/cold-mountain-retreat" 
//       className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase text-clay border border-clay px-3 py-1.5 no-underline hover:bg-clay hover:text-white transition-all duration-300 font-jost"
//       >
//       View Cold Mountain Retreat Stay →
//       </Link>
//     </div>
//   );
// }
// Byool Farm BnB: external link only
// function ByoolPanel() {
//   return (
//     <div className="border-t border-black/8 pt-3 mt-3">
//       <p className="text-[0.72rem] tracking-[0.1em] uppercase text-stone mb-2 font-jost">Byool Farm BnB</p>
//       <p className="text-[0.78rem] leading-relaxed text-earth-light mb-2">
// A cozy 3 bedroom cottage on-site at the Byool Farm, featuring three spacious rooms—each with a double bed and its own attached bathroom.      </p>
//       <a href="https://byoolfarmstay.com/" target="_blank" rel="noreferrer"
//         className="inline-flex items-center gap-1.5 text-[0.72rem] tracking-[0.1em] uppercase text-clay border border-clay px-3 py-1.5 no-underline hover:bg-clay hover:text-white transition-all duration-300 font-jost"
//       >View Byool Farm Stay →</a>
//     </div>
//   );
// }

// function CourseCard({ course, onEnquire }) {
//     const goFAQ = () => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
// const [accomOpen, setAccomOpen] = useState(false);

//   const img = IMGS[course.imgKey];
//   return (
//     <div className="bg-warm-white hover:bg-cream transition-colors duration-300 flex flex-col overflow-hidden h-full">
//       <div className="w-full aspect-[4/3] overflow-hidden flex-shrink-0">
//         <img src={img} alt={course.name}
//           className={`w-full h-full ${ course?.img_type=="contain"?"object-contain" :"object-cover"} saturate-80 hover:scale-[1.04] hover:saturate-100 transition-all duration-700`}/>
//       </div>
//       <div className="p-6 flex flex-col flex-1">
//         <div className="font-cormorant text-[1.7rem] font-light text-clay/20 leading-none mb-1">{course.num}</div>
//         <h3 className="font-cormorant text-xl font-normal text-charcoal mb-1">{course.name}</h3>
//         <span className={`inline-block text-[0.73rem] tracking-[0.14em] uppercase text-white px-2 py-0.5 mb-2 self-start ${TAG_CLS[course.tagStyle]}`}>
//           {course.tag}
//         </span>
//         <p className="text-[0.7rem] tracking-[0.12em] uppercase text-clay mb-2">{course.duration}</p>
//         <p className="text-[0.7rem] tracking-[0.12em] uppercase text-clay mb-2">{course?.second_duration}</p>
//         <p className="text-sm leading-relaxed text-earth-light mb-3">{course.desc}</p>
//         <ul className="list-none mb-3 space-y-0.5">
//           {course.features.map((f, i) => (
//             <li key={i} className="text-sm leading-relaxed text-earth-light pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-clay-light before:text-xs">{f}</li>
//           ))}
//         </ul>
//         {/* Pricing */}
//         <div className="border-t border-black/10 pt-3">
//           <div className={`grid gap-2 ${course.pricing.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
//             {course.pricing.map((p, i) => (
//               <div key={i} className="bg-cream p-3">
//                 <span className="block text-[0.73rem] tracking-[0.12em] uppercase text-stone mb-1.5">{p.name}</span>
//                 <div className="flex gap-3 flex-wrap">
//                   {p.options.map((opt, j) => (
//                     <div key={j} className="flex flex-col">
//                       {opt.label && <span className="text-[0.6rem] text-stone tracking-[0.08em] uppercase">{opt.label}</span>}
//                       <span className="font-cormorant text-base text-charcoal">{opt.val}</span>
//                     </div>
//                   ))}
//                 </div>
//                 {p.note && <p className="text-[0.73rem] text-stone mt-1 italic">{p.note}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
      
//         {/* Two independent accommodation panels */}
//        {course.hasAccom && (
//   <div className="mt-1 border border-[#A0614A]/20 rounded-xl overflow-hidden">
//     <button
//       onClick={() => setAccomOpen(prev => !prev)}
//       className="w-full flex items-center gap-2 px-3 py-2 hover:bg-[#A0614A]/5 transition-colors duration-150"
//     >
//       <span className="flex items-center justify-center w-[26px] h-[26px] rounded-lg bg-[#A0614A]/10">
//         <Home size={14} color="#A0614A" />
//       </span>
//       <span className="flex-1 text-left text-[13px] font-medium text-[#A0614A] tracking-wide">
//        View Accommodation
//       </span>
//       <ChevronDown
//         size={15}
//         color="#A0614A"
//         className={`transition-transform duration-200 ${accomOpen ? "rotate-180" : ""}`}
//       />
//     </button>

//     {accomOpen && (
//       <div className="px-3 pb-3 pt-1 border-t border-[#A0614A]/15">
//         <NewCMRPanel />
//         <ByoolPanel />
//       </div>
//     )}
//   </div>
// )}
//          <div className="text-stone">
//         <button className="text-left text-[12px]" onClick={goFAQ} >Firing & shipping charges apply.</button>
//         <p className="text-[12px]"> Plus 18% GST</p>
//         </div>
//         <button onClick={onEnquire}
//           className="mt-4 text-[0.72rem] tracking-[0.12em] uppercase text-clay border-b border-clay-light pb-px hover:text-clay-dark transition-colors bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-jost self-start"
//         >Enquire & Book →</button>
//         <div className="text-[12px]" >
      
//       </div>
      
//       </div>
//     </div>
//   );
// }

// export default function CoursesSection() {
//   const goContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   return (
//     <section id="courses" className="py-24 px-4 md:px-16 bg-warm-white">
//       <DividerLine label="Residential & Non-Residential" />
//       <SectionLabel>Courses &amp; Programmes</SectionLabel>
//       <SectionTitle className="mb-3">
//         Nine ways to find<br /><em className="italic text-clay-dark">your practice</em>
//       </SectionTitle>
//       <p className="text-base text-earth-light leading-relaxed max-w-[600px] mt-3 mb-12">
//         From a weekend retreat to a three-month residency. Residential courses include food and
//         accommodation at either <Link target="_blank"
//   rel="noopener noreferrer" className=" text-clay-dark" to="/stay/cold-mountain-retreat"> <strong className="text-earth font-normal">Cold Mountain Retreat</strong> </Link> or{" "}
//         <a className=" text-clay-dark" href="https://byoolfarmstay.com/" target="_blank" 
//   rel="noopener noreferrer"><strong className="text-earth font-normal">Byool Farm BnB</strong></a>.
//       </p>
//       {/* items-start: prevents grid from stretching cards to match tallest sibling (accom bug fix) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 auto-rows-fr">
//         {COURSES.map(c => <CourseCard key={c.num} course={c} onEnquire={goContact} />)}
//       </div>
//       <div className="mt-10 text-center flex gap-3 justify-center flex-wrap">
//         <BtnPrimary onClick={goContact}>Enquire &amp; Book</BtnPrimary>
//         <BtnOutlineDark onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}>Read FAQ</BtnOutlineDark>
//       </div>
//     </section>
//   );
// }

// import { useState, useEffect, useRef, useCallback } from "react";

// Google Fonts — the only <style> tag needed
// const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');`;

// Font-family shorthands via style prop (Tailwind can't express multi-word font stacks cleanly)
// const F = {
//   jost:      { fontFamily: "'Jost', sans-serif" },
//   playfair:  { fontFamily: "'Playfair Display', serif" },
//   cormorant: { fontFamily: "'Cormorant Garamond', serif" },
// };

// ─── DATA ─────────────────────────────────────────────────────────────────────
// const CARDS = [
//   {
//     num: "01", name: "Pottery Retreat", badge: "clay", badgeLabel: "Residential",
//     duration: "3–13 Days · Food & Stay Included",
//     desc: "Try pottery without a long commitment — or explore a new craft on a relaxing Himalayan holiday.",
//     features: ["Intro to hand building & wheel throwing", "Finish a cup / bowl / plate", "Daily supervised & unsupervised practice"],
//     pricing: { layout: "double", blocks: [
//       { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹6,500"  }, { label: "Sharing", val: "₹4,500" }], note: "per person per day" },
//       { name: "Byool Farm BnB", opts: [{ label: "Single", val: "₹8,100"  }, { label: "Sharing", val: "₹6,600" }], note: "per person per day" },
//     ]},
//     showAccom: true, imgSrc: IMGS["course_retreat"], imgFallback: "#7a5240",
//   },
//   {
//     num: "02", name: "Fortnight Course", badge: "clay", badgeLabel: "Residential",
//     duration: "14 Days · Food & Stay · 2 Days Off",
//     desc: "For beginners or potters at any level hoping to work on skills with or without supervision.",
//     features: ["Wheel throwing — centering, coning, pulling and trimming", "Hand-building — pinching, coiling, slab", "Daily supervised & unsupervised practice"],
//     pricing: { layout: "double", blocks: [
//       { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹72,800" }, { label: "Sharing", val: "₹63,000" }] },
//       { name: "Byool Farm BnB", opts: [{ label: "Single", val: "₹96,600" }, { label: "Sharing", val: "₹70,000" }] },
//     ]},
//     showAccom: true, imgSrc: IMGS["course_fortnight"], imgFallback: "#5a4830",
//   },
//   {
//     num: "03", name: "Monthly Course", badge: "clay", badgeLabel: "Residential",
//     duration: "30 Days · Food & Stay · 4 Days Off",
//     desc: "Deepen your practice with focus on any technique/s or work on a specific project alongside daily studio sessions.",
//     features: ["Wheel throwing & hand building", "Project and research work", "Glaze & firing access for qualifying pieces"],
//     pricing: { layout: "double", blocks: [
//       { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹1,36,500" }, { label: "Sharing", val: "₹96,000"   }] },
//       { name: "Byool Farm BnB", opts: [{ label: "Single", val: "₹1,80,000" }, { label: "Sharing", val: "₹1,35,000" }] },
//     ]},
//     showAccom: true, imgSrc: IMGS["course_monthly"], imgFallback: "#6a5060",
//   },
//   {
//     num: "04", name: "3 Months Residency", badge: "clay", badgeLabel: "Residential",
//     duration: "90 Days · Food & Stay · 12 Days Off",
//     desc: "For aspirants wanting to seriously improve or pursue pottery as a career.",
//     features: ["Wheel throwing, hand building, sculpture & murals", "Glazes, clay body, different firing styles", "Project, research work & teacher training"],
//     pricing: { layout: "double", blocks: [
//       { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹3,75,500" }, { label: "Sharing", val: "₹2,25,000" }] },
//       { name: "Byool Farm BnB", contact: "Contact us for details." },
//     ]},
//     showAccom: true, imgSrc: IMGS["course_3months"], imgFallback: "#3a5040",
//   },
//   {
//     num: "05", name: "Advanced Pottery / Intensive", badge: "dark", badgeLabel: "Specialised & Residential",
//     duration: "2 Weeks · Customisable for Groups",
//     desc: "A focused intensive for potters ready to push further. Curriculum tailored to the group or an intensive focus on a technique you wish to explore more.",
//     features: ["Surface decoration & texture work", "Building large-scale forms", "Glaze chemistry and application techniques", "Alternate firing methods (Raku, Saggar, Pit Firing, etc.)"],
//     pricing: { layout: "single", blocks: [{ name: "Pricing", contact: "Based on curriculum finalised. Contact for details." }] },
//     showAccom: true, imgSrc:IMGS["course_advanced"], imgFallback: "#604040",
//   },
//   {
//     num: "06", name: "Glaze Course", badge: "dark", badgeLabel: "Specialised",
//     duration: "10 Days · Residential",
//     desc: "Understand the science behind glazes and take full control of your surfaces.",
//     features: ["Basic glaze chemistry & material science", "Formulating & testing your own glazes", "Oxidation and reduction firing outcomes"],
//     pricing: { layout: "single", blocks: [
//       { name: "Byool Farm BnB — Residential", opts: [{ label: "Sharing", val: "₹90,000" }, { label: "Single", val: "₹1,10,000" }] },
//     ]},
//     showAccom: true, imgSrc: IMGS["course_glaze"], imgFallback: "#405060",
//   },
//   {
//     num: "07", name: "Fire Festival", badge: "moss", badgeLabel: "Event",
//     duration: "4 Days · Residential (Sharing)",
//     desc: "A collaborative event, not a formal workshop. A space for potters to share their craft and for curious spectators to witness spectacular clay transformation.",
//     features: ["Low fire techniques — Pit firing, Raku, Obvara & Saggar firings", "Residential on sharing basis"],
//     pricing: { layout: "single", blocks: [{ name: "Pricing", contact: "Contact us for details." }] },
//     showAccom: true, imgSrc: IMGS["course_fire"], imgFallback: "#504028",
//   },
//   {
//     num: "08", name: "Non-Residential Day", badge: "stone", badgeLabel: "Non-Residential",
//     duration: "11am – 5pm Full Day · 2pm – 5pm Half Day",
//     desc: "A half or full day at the studio for those staying off-site.",
//     features: ["Learn pottery techniques with our experienced instructors", "Lunch included for Full Day students", "If you are an experienced potter, work at your own pace with guidance throughout", "Prior booking mandatory"],
//     pricing: { layout: "double", blocks: [
//       { name: "Half Day", opts: [{ val: "₹1,500" }], note: "per person" },
//       { name: "Full Day", opts: [{ val: "₹3,000" }], note: "per person" },
//     ]},
//     showAccom: false, imgSrc: IMGS["course_nrd"], imgFallback: "#284840",
//   },
//   {
//     num: "09", name: "Non-Residential Monthly", badge: "stone", badgeLabel: "Non-Residential",
//     duration: "Mon – Fri · 11am – 5pm",
//     desc: "A full month of studio immersion for local residents.",
//     features: ["Daily studio access Mon–Fri", "All studio materials included", "Guided instruction + open practice"],
//     pricing: { layout: "single", blocks: [{ name: "Per Person", opts: [{ val: "₹40,000" }] }] },
//     showAccom: false, imgSrc: IMGS["course_nrm"], imgFallback: "#483838",
//   },
// ];

// const ACCOM_PANELS = [
//   {
//     name: "Cold Mountain Retreat",
//     desc: "Just 15 mins walk from the studio! First-floor 2BR apartment — twin beds, functional kitchen, cozy living area, common bath.",
//     href: "/stay/cold-mountain-retreat",
//     label: "View Cold Mountain Retreat →",
//     external: false,
//   },
//   {
//     name: "Byool Farm BnB",
//     desc: "A cozy 3-bedroom cottage on-site at Byool Farm — each room with double bed and attached bathroom.",
//     href: "https://byoolfarmstay.com/",
//     label: "View Byool Farm Stay →",
//     external: true,
//   },
// ];

// Badge background map
// const BADGE_BG = {
//   clay:  "bg-[#a0644a]",
//   dark:  "bg-[#3d2e1e]",
//   moss:  "bg-[#6b7c5c]",
//   stone: "bg-[#8a7c6e]",
// };

// ─── ACCOMMODATION DRAWER ─────────────────────────────────────────────────────
// function AccomDrawer() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="mt-3 border border-[rgba(160,100,74,0.2)] rounded-[11px] overflow-hidden">

//       {/* Toggle */}
//       <button
//         className="w-full flex items-center gap-2 px-3 py-2 bg-transparent border-none cursor-pointer transition-colors duration-150 hover:bg-[rgba(160,100,74,0.05)]"
//         style={F.jost}
//         onClick={() => setOpen((o) => !o)}
//       >
//         {/* House icon */}
//         <span className="shrink-0 w-[26px] h-[26px] bg-[rgba(160,100,74,0.1)] rounded-lg flex items-center justify-center">
//           <svg
//             className="w-[14px] h-[14px] fill-none stroke-[#a0644a]"
//             style={{ strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }}
//             viewBox="0 0 24 24"
//           >
//             <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//             <polyline points="9 22 9 12 15 12 15 22" />
//           </svg>
//         </span>

//         <span className="flex-1 text-left text-[15px] font-medium text-[#a0644a] tracking-[0.02em]">
//           View Accommodation
//         </span>

//         {/* Chevron — rotates when open */}
//         <svg
//           className={`w-[15px] h-[15px] fill-none stroke-[#a0644a] shrink-0 transition-transform duration-[250ms] ${open ? "rotate-180" : "rotate-0"}`}
//           style={{ strokeWidth: 1.5, strokeLinecap: "round" }}
//           viewBox="0 0 12 12"
//         >
//           <path d="M2 4l4 4 4-4" />
//         </svg>
//       </button>

//       {/* Collapsible body — max-height animation */}
//       <div
//         className={`overflow-hidden transition-[max-height] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
//           open ? "max-h-[600px] border-t border-[rgba(160,100,74,0.15)]" : "max-h-0"
//         }`}
//       >
//         <div className="px-3 pt-3 pb-[14px]">
//           {ACCOM_PANELS.map((p, i) => (
//             <div
//               key={p.name}
//               className={i === 0 ? "pb-[10px]" : "py-[10px] border-t border-[#ece6de]"}
//             >
//               <div className="text-[9px] tracking-[0.22em] uppercase text-[#8a7c6e] mb-[5px] font-normal">
//                 {p.name}
//               </div>
//               <p className="text-[12px] leading-[1.65] text-[#6b5e4e] mb-2">
//                 {p.desc}
//               </p>
//               <a
//                 href={p.href}
//                 className="inline-flex items-center gap-1 text-[10px] tracking-[0.14em] uppercase text-[#a0644a] border border-[#a0644a] px-3 py-[5px] no-underline font-normal transition-all duration-[250ms] hover:bg-[#a0644a] hover:text-white"
//                 style={F.jost}
//                 {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
//               >
//                 {p.label}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// ─── PRICING BLOCK ────────────────────────────────────────────────────────────
// function PricingBlock({ block }) {
//   return (
//     <div className="bg-[#f5f0e8] px-3 py-[10px]">
//       <span className="block text-[9px] tracking-[0.18em] uppercase text-[#8a7c6e] mb-[6px]">
//         {block.name}
//       </span>

//       {block.contact ? (
//         <p className="text-[12px] text-[#6b5e4e] leading-[1.5] mt-[2px]">
//           {block.contact}
//         </p>
//       ) : (
//         <>
//           <div className="flex gap-[14px] flex-wrap">
//             {block.opts.map((o, i) => (
//               <div key={i} className="flex flex-col">
//                 {o.label && (
//                   <span className="text-[9px] tracking-[0.1em] uppercase text-[#8a7c6e] mb-[2px]">
//                     {o.label}
//                   </span>
//                 )}
//                 <span className="text-[1rem] text-[#3d2e1e]" style={F.cormorant}>
//                   {o.val}
//                 </span>
//               </div>
//             ))}
//           </div>
//           {block.note && (
//             <p className="text-[11px] text-[#8a7c6e] italic mt-[5px]">
//               {block.note}
//             </p>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
// function CourseCard({ card, onScrollTo }) {
//   return (
//     // `group` lets child image react to card hover via group-hover:*
//     <div
//       className="
//         group shrink-0 flex flex-col overflow-hidden
//         bg-[#faf8f4] hover:bg-[#f5f0e8] transition-colors duration-300
//         min-w-[90%] max-w-[90%]
//         sm:min-w-[calc(50%_-_12px)] sm:max-w-[calc(50%_-_12px)]
//         lg:min-w-[calc(33.333%_-_16px)] lg:max-w-[calc(33.333%_-_16px)]
//       "
//       style={F.jost}
//     >
//       {/* Image */}
//       <div className="w-full aspect-[4/3] overflow-hidden shrink-0 ">
//         <img
//           src={card.imgSrc}
//           alt={card.name}
//           className="
//             w-full h-full object-cover block
//             [filter:saturate(0.82)]
//             transition-[transform,filter] duration-[600ms] ease-in-out
//             group-hover:scale-[1.04] group-hover:[filter:saturate(1)]
//           "
//           onError={(e) => {
//             e.currentTarget.parentElement.style.cssText =
//               `background:${card.imgFallback};aspect-ratio:4/3`;
//           }}
//         />
//       </div>

//       {/* Card body */}
//       <div className="p-4 flex flex-col ">

//         {/* Number */}
//         <div
//           className="text-[1.5rem] flex items-center gap-2 font-light text-black leading-none mb-2"
//           style={F.cormorant}
//         >
//          <p> {card.num}</p>
//           <h3
//           className="text-[1.25rem] font-normal text-black  leading-[1.25] mt-1"
//           style={F.cormorant}
//         >
//           {card.name}
//         </h3>
//         {/* Badge */}

//          <span
//           className={`inline-block ml-auto mt-1 px-2 py-[6px] text-[14px] tracking-[0.18em] uppercase font-medium text-white  ${BADGE_BG[card.badge]}`}
//         >
//           {card.badgeLabel}
//         </span>
//         </div>

        

       

//         {/* Duration */}
//         <div className="text-[16px] tracking-[0.12em] uppercase text-[#a0644a] mb-1 font-normal">
//           {card.duration}
//         </div>

//         {/* Description */}
//         <p className="text-[16px] leading-[1.65] text-[#6b5e4e] mb-3">
//           {card.desc}
//         </p>

//        {/* Features — all always visible */}
// <ul className="list-none mb-3 space-y-0.5 p-0 m-0">
//   {card.features.map((f, i) => (
//     <li
//       key={i}
//       className="
//         text-sm leading-relaxed text-earth-light
//         pl-5 relative
//         before:content-['—']
//         before:absolute before:left-0
//         before:text-clay-light before:text-xs
//       "
//     >
//       {f}
//     </li>
//   ))}
// </ul>

//         {/* Pricing */}
//         <div className="border-t border-[#ece6de] pt-[8px] mt-2">
//           <div className={`grid gap-2 ${card.pricing.layout === "single" ? "grid-cols-1" : "grid-cols-2"}`}>
//             {card.pricing.blocks.map((b, i) => (
//               <PricingBlock key={i} block={b} />
//             ))}
//           </div>
//         </div>

//         {/* Accommodation drawer */}
//         {card.showAccom && <AccomDrawer />}

//         {/* Charges note */}
//         <div className="mt-[10px] text-[12px] text-[#8a7c6e] leading-[1.5]">
//           <button
//             className="bg-transparent border-none p-0 text-[12px] text-[#8a7c6e] cursor-pointer font-light"
//             style={F.jost}
//             onClick={() => onScrollTo("faq")}
//           >
//             Firing &amp; shipping charges apply.
//           </button>
//           <p>Plus 18% GST</p>
//         </div>

//         {/* Enquire CTA */}
//         <button
//           className="
//             mt-[14px] self-start inline-flex items-center gap-1
//             bg-transparent p-0 pb-px text-[14px]
//             tracking-[0.16em] uppercase font-normal
//             text-[#a0644a] cursor-pointer
//             transition-[color,border-bottom-color] duration-200
//             hover:text-[#7d4e38]
//             [border:none] [border-bottom:1px_solid_#c8917a]
//             hover:[border-bottom-color:#7d4e38]
//           "
//           style={F.jost}
//           onClick={() => onScrollTo("contact")}
//         >
//           Enquire &amp; Book →
//         </button>
//       </div>
//     </div>
//   );
// }

// ─── COURSES SECTION ──────────────────────────────────────────────────────────
// export default function CoursesSection() {
//   const [idx, setIdx] = useState(0);
//   const trackRef = useRef(null);

//   const visibleCount = useCallback(() => {
//     if (window.innerWidth < 640)  return 1;
//     if (window.innerWidth < 1024) return 2;
//     return 3;
//   }, []);

//   const applyTransform = useCallback((currentIdx) => {
//     if (!trackRef.current) return;
//     const card = trackRef.current.children[0];
//     if (!card) return;
//     const itemW = card.offsetWidth + 24; // card + gap-6 (24px)
//     trackRef.current.style.transform = `translateX(-${currentIdx * itemW}px)`;
//   }, []);

//   const move = useCallback((dir) => {
//     const max = CARDS.length - visibleCount();
//     setIdx((prev) => {
//       const next = Math.max(0, Math.min(max, prev + dir));
//       requestAnimationFrame(() => applyTransform(next));
//       return next;
//     });
//   }, [visibleCount, applyTransform]);

//   useEffect(() => {
//     const onResize = () => {
//       const max = Math.max(0, CARDS.length - visibleCount());
//       setIdx((prev) => {
//         const clamped = Math.min(prev, max);
//         requestAnimationFrame(() => applyTransform(clamped));
//         return clamped;
//       });
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, [visibleCount, applyTransform]);

//   const scrollTo = (id) =>
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

//   return (
//     <div className="bg-[#faf8f4] text-[#2a1f14] font-light tracking-[0.01em]" style={F.jost}>
//       <style>{FONTS}</style>

//       <section
//         id="courses"
//         className="bg-[#faf8f4] px-4 py-14 sm:px-10 sm:py-[72px] lg:px-[80px] lg:py-[100px]"
//       >

//         {/* ── Divider ── */}
//         <div className="flex items-baseline gap-5 mb-2">
//           <div className="flex-1 h-[2px] md:h-px bg-[#d8cfc3]" />
//           <div className={`flex items-center gap-6 mb-10 ${false ? "opacity-30" : ""}`}>
//     <div className={` flex-1 h-px ${false ? "bg-white/20" : "bg-black/10"}`} />
//     <p className={`text-[0.72rem] tracking-[0.28em] uppercase whitespace-nowrap ${false ? "text-white/50" : "text-stone"}`}>
//      Residential & Non-Residential    
//      </p>
//     </div>
//         </div>

//         {/* ── Section Header ── */}
//         <div className="flex flex-col gap-4 mb-6 flex-wrap ">

//           {/* Left */}
//           <div className="flex-1 min-w-[260px]">
//             <SectionLabel>Courses &amp; Programmes</SectionLabel>
//        <SectionTitle className="mb-3">
//          Nine ways to find<br /><em className="italic text-clay-dark">your practice</em>
//        </SectionTitle>
//        <p className="text-base text-earth-light leading-relaxed max-w-[600px] mt-3 mb-2 md:mb-6">
//          From a weekend retreat to a three-month residency. Residential courses include food and
//          accommodation at either <Link target="_blank"
//    rel="noopener noreferrer" className=" text-clay-dark" to="/stay/cold-mountain-retreat"> <strong className="text-earth font-normal">Cold Mountain Retreat</strong> </Link> or{" "}
//          <a className=" text-clay-dark" href="https://byoolfarmstay.com/" target="_blank" 
//    rel="noopener noreferrer"><strong className="text-earth font-normal">Byool Farm BnB</strong></a>.
//        </p>
//           </div>

//           {/* Right */}
//           <div className="ml-auto flex flex-row items-center gap-4 shrink-0 sm:flex-col sm:items-end sm:gap-3">
//             <div className="flex gap-2 items-center">
//               {[{ dir: -1, label: "Previous", arrow: "←" }, { dir: 1, label: "Next", arrow: "→" }].map(
//                 ({ dir, label, arrow }) => (
//                   <button
//                     key={label}
//                     className="w-[40px] h-[40px] flex items-center justify-center border border-[#d8cfc3] bg-transparent text-[18px] text-[#2a1f14] cursor-pointer transition-all duration-200 hover:bg-[#2e2318] hover:text-white hover:border-[#2e2318]"
//                     style={F.jost}
//                     onClick={() => move(dir)}
//                     aria-label={label}
//                   >
//                     {arrow}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>
//         </div>

//         {/* ── Carousel ── */}
//         <div className="">
//           <div
//             ref={trackRef}
//             className="flex items-start gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
//           >
//             {CARDS.map((card) => (
//               <CourseCard key={card.num} card={card} onScrollTo={scrollTo} />
//             ))}
//           </div>
//         </div>

//         {/* ── CTA Row ── */}
//         <div className="flex flex-col items-start gap-4 flex-wrap mt-10 pt-8 border-t border-[#d8cfc3] sm:flex-row sm:items-center sm:justify-between">
//           <p className="text-[14px] text-[#6b5e4e]">
//             Not sure which course? We'll help you find the right fit.
//           </p>
//           <div className="flex gap-3 flex-wrap">
//             <button
//               className="px-6 py-[14px] bg-[#a0644a] text-white text-[14px] tracking-[0.18em] uppercase font-normal cursor-pointer border-none transition-colors duration-200 hover:bg-[#7d4e38]"
//               style={F.jost}
//               onClick={() => scrollTo("contact")}
//             >
//               Enquire &amp; Book
//             </button>
//             <button
//               className="px-6 py-[14px] bg-transparent text-[#2a1f14] text-[14px] tracking-[0.18em] uppercase font-normal cursor-pointer border border-[#d8cfc3] transition-[border-color] duration-200 hover:border-[#2a1f14]"
//               style={F.jost}
//               onClick={() => scrollTo("faq")}
//             >
//               Read FAQ
//             </button>
//           </div>
//         </div>

//       </section>
//     </div>
//   );
// }

import { useState, useEffect, useRef, useCallback } from "react";

// Google Fonts
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');`;

const F = {
  jost:      { fontFamily: "'Jost', sans-serif" },
  playfair:  { fontFamily: "'Playfair Display', serif" },
  cormorant: { fontFamily: "'Cormorant Garamond', serif" },
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CARDS = [
  {
    num: "01", name: "Pottery Retreat", badge: "clay", badgeLabel: "Residential",
    duration: "3–13 Days · Food & Stay Included",
    desc: "Try pottery without a long commitment — or explore a new craft on a relaxing Himalayan holiday.",
    features: ["Intro to hand building & wheel throwing", "Finish a cup / bowl / plate", "Daily supervised & unsupervised practice"],
    pricing: { layout: "double", blocks: [
      { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹6,500"  }, { label: "Sharing", val: "₹4,500" }], note: "per person per day" },
      { name: "Byool Farm BnB", opts: [{ label: "Single", val: "₹8,100"  }, { label: "Sharing", val: "₹6,600" }], note: "per person per day" },
    ]},
    showAccom: true, imgSrc: IMGS["course_retreat"], imgFallback: "#7a5240",
  },
  {
    num: "02", name: "Fortnight Course", badge: "clay", badgeLabel: "Residential",
    duration: "14 Days · Food & Stay · 2 Days Off",
    desc: "For beginners or potters at any level hoping to work on skills with or without supervision.",
    features: ["Wheel throwing — centering, coning, pulling and trimming", "Hand-building — pinching, coiling, slab", "Daily supervised & unsupervised practice"],
    pricing: { layout: "double", blocks: [
      { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹72,800" }, { label: "Sharing", val: "₹63,000" }] },
      { name: "Byool Farm BnB", opts: [{ label: "Single", val: "₹96,600" }, { label: "Sharing", val: "₹70,000" }] },
    ]},
    showAccom: true, imgSrc: IMGS["course_fortnight"], imgFallback: "#5a4830",
  },
  {
    num: "03", name: "Monthly Course", badge: "clay", badgeLabel: "Residential",
    duration: "30 Days · Food & Stay · 4 Days Off",
    desc: "Deepen your practice with focus on any technique/s or work on a specific project alongside daily studio sessions.",
    features: ["Wheel throwing & hand building", "Project and research work", "Glaze & firing access for qualifying pieces"],
    pricing: { layout: "double", blocks: [
      { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹1,36,500" }, { label: "Sharing", val: "₹96,000"   }] },
      { name: "Byool Farm BnB", opts: [{ label: "Single", val: "₹1,80,000" }, { label: "Sharing", val: "₹1,35,000" }] },
    ]},
    showAccom: true, imgSrc: IMGS["course_monthly"], imgFallback: "#6a5060",
  },
  {
    num: "04", name: "3 Months Residency", badge: "clay", badgeLabel: "Residential",
    duration: "90 Days · Food & Stay · 12 Days Off",
    desc: "For aspirants wanting to seriously improve or pursue pottery as a career.",
    features: ["Wheel throwing, hand building, sculpture & murals", "Glazes, clay body, different firing styles", "Project, research work & teacher training"],
    pricing: { layout: "double", blocks: [
      { name: "Cold Mountain",   opts: [{ label: "Single", val: "₹3,75,500" }, { label: "Sharing", val: "₹2,25,000" }] },
      { name: "Byool Farm BnB", contact: "Contact us for details." },
    ]},
    showAccom: true, imgSrc: IMGS["course_3months"], imgFallback: "#3a5040",
  },
  {
    num: "05", name: "Advanced Pottery / Intensive", badge: "dark", badgeLabel: "Specialised & Residential",
    duration: "2 Weeks · Customisable for Groups",
    desc: "A focused intensive for potters ready to push further. Curriculum tailored to the group or an intensive focus on a technique you wish to explore more.",
    features: ["Surface decoration & texture work", "Building large-scale forms", "Glaze chemistry and application techniques", "Alternate firing methods (Raku, Saggar, Pit Firing, etc.)"],
    pricing: { layout: "single", blocks: [{ name: "Pricing", contact: "Based on curriculum finalised. Contact for details." }] },
    showAccom: true, imgSrc: IMGS["course_advanced"], imgFallback: "#604040",
  },
  {
    num: "06", name: "Glaze Course", badge: "dark", badgeLabel: "Specialised",
    duration: "10 Days · Residential",
    desc: "Understand the science behind glazes and take full control of your surfaces.",
    features: ["Basic glaze chemistry & material science", "Formulating & testing your own glazes", "Oxidation and reduction firing outcomes"],
    pricing: { layout: "single", blocks: [
      { name: "Residential", opts: [{ label: "Sharing", val: "₹90,000" }, { label: "Single", val: "₹1,10,000" }] },
    ]},
    showAccom: true, imgSrc: IMGS["course_glaze"], imgFallback: "#405060",
  },
  {
    num: "07", name: "Fire Festival", badge: "moss", badgeLabel: "Event",
    duration: "4 Days · Residential (Sharing)",
    desc: "A collaborative event, not a formal workshop. A space for potters to share their craft and for curious spectators to witness spectacular clay transformation.",
    features: ["Low fire techniques — Pit firing, Raku, Obvara & Saggar firings", "Residential on sharing basis"],
    pricing: { layout: "single", blocks: [{ name: "Pricing", contact: "Contact us for details." }] },
    showAccom: true, imgSrc: IMGS["course_fire"], imgFallback: "#504028",
  },
  {
    num: "08", name: "Non-Residential Day", badge: "stone", badgeLabel: "",
    duration: "11am – 5pm Full Day · 2pm – 5pm Half Day",
    desc: "A half or full day at the studio for those staying off-site.",
    features: ["Learn pottery techniques with our experienced instructors", "Lunch included for Full Day students", "If you are an experienced potter, work at your own pace with guidance throughout", "Prior booking mandatory"],
    pricing: { layout: "double", blocks: [
      { name: "Half Day", opts: [{ val: "₹1,500" }], note: "per person" },
      { name: "Full Day", opts: [{ val: "₹3,000" }], note: "per person" },
    ]},
    showAccom: false, imgSrc: IMGS["course_nrd"], imgFallback: "#284840",
  },
  {
    num: "09", name: "Non-Residential Monthly", badge: "stone", badgeLabel: "",
    duration: "Mon – Fri · 11am – 5pm",
    desc: "A full month of studio immersion for local residents.",
    features: ["Daily studio access Mon–Fri", "All studio materials included", "Guided instruction + open practice"],
    pricing: { layout: "single", blocks: [{ name: "Per Person", opts: [{ val: "₹40,000" }] }] },
    showAccom: false, imgSrc: IMGS["course_nrm"], imgFallback: "#483838",
  },
];

const ACCOM_PANELS = [
  {
    name: "Cold Mountain Retreat",
    desc: "Just 15 mins walk from the studio! First-floor 2BR apartment — twin beds, functional kitchen, cozy living area, common bath.",
    href: "/stay/cold-mountain-retreat",
    label: "View Cold Mountain Retreat →",
    external: false,
  },
  {
    name: "Byool Farm BnB",
    desc: "A cozy 3-bedroom cottage on-site at Byool Farm — each room with double bed and attached bathroom.",
    href: "https://byoolfarmstay.com/",
    label: "View Byool Farm Stay →",
    external: true,
  },
];

const BADGE_BG = {
  clay:  "bg-[#a0644a]",
  dark:  "bg-[#3d2e1e]",
  moss:  "bg-[#6b7c5c]",
  stone: "bg-[#8a7c6e]",
};

// ─── ACCOMMODATION DRAWER ─────────────────────────────────────────────────────
function AccomDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 border border-[rgba(160,100,74,0.2)] rounded-[11px] overflow-hidden">
      <button
        className="w-full flex items-center gap-2 px-3 py-2 bg-transparent border-none cursor-pointer transition-colors duration-150 hover:bg-[rgba(160,100,74,0.05)]"
        style={F.jost}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="shrink-0 w-[26px] h-[26px] bg-[rgba(160,100,74,0.1)] rounded-lg flex items-center justify-center">
          <svg className="w-[14px] h-[14px] fill-none stroke-[#a0644a]" style={{ strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }} viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </span>
        <span className="flex-1 text-left text-[15px] font-medium text-[#a0644a] tracking-[0.02em]">
          View Accommodation
        </span>
        <svg
          className={`w-[15px] h-[15px] fill-none stroke-[#a0644a] shrink-0 transition-transform duration-[250ms] ${open ? "rotate-180" : "rotate-0"}`}
          style={{ strokeWidth: 1.5, strokeLinecap: "round" }}
          viewBox="0 0 12 12"
        >
          <path d="M2 4l4 4 4-4" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-[max-height] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? "max-h-[600px] border-t border-[rgba(160,100,74,0.15)]" : "max-h-0"}`}>
        <div className="px-3 pt-3 pb-[14px]">
          {ACCOM_PANELS.map((p, i) => (
            <div key={p.name} className={i === 0 ? "pb-[10px]" : "py-[10px] border-t border-[#ece6de]"}>
              <div className="text-[9px] tracking-[0.22em] uppercase text-[#8a7c6e] mb-[5px] font-normal">{p.name}</div>
              <p className="text-[12px] leading-[1.65] text-[#6b5e4e] mb-2">{p.desc}</p>
              <a
                href={p.href}
                className="inline-flex items-center gap-1 text-[10px] tracking-[0.14em] uppercase text-[#a0644a] border border-[#a0644a] px-3 py-[5px] no-underline font-normal transition-all duration-[250ms] hover:bg-[#a0644a] hover:text-white"
                style={F.jost}
                {...(p.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {p.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PRICING BLOCK ────────────────────────────────────────────────────────────
function PricingBlock({ block }) {
  return (
    <div className="bg-[#f5f0e8] px-3 py-[10px]">
      <span className="block text-[9px] tracking-[0.18em] uppercase text-[#8a7c6e] mb-[6px]">{block.name}</span>
      {block.contact ? (
        <p className="text-[12px] text-[#6b5e4e] leading-[1.5] mt-[2px]">{block.contact}</p>
      ) : (
        <>
          <div className="flex gap-[14px] flex-wrap">
            {block.opts.map((o, i) => (
              <div key={i} className="flex flex-col">
                {o.label && <span className="text-[9px] tracking-[0.1em] uppercase text-[#8a7c6e] mb-[2px]">{o.label}</span>}
                <span className="text-[1rem] text-[#3d2e1e]" style={F.cormorant}>{o.val}</span>
              </div>
            ))}
          </div>
          {block.note && <p className="text-[11px] text-[#8a7c6e] italic mt-[5px]">{block.note}</p>}
        </>
      )}
    </div>
  );
}

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
function CourseCard({ card, onScrollTo }) {
  return (
    <div
      className="
        group shrink-0 flex flex-col overflow-hidden
        bg-[#faf8f4] hover:bg-[#f5f0e8] transition-colors duration-300
        min-w-[90%] max-w-[90%]
        sm:min-w-[calc(50%_-_12px)] sm:max-w-[calc(50%_-_12px)]
        lg:min-w-[calc(33.333%_-_16px)] lg:max-w-[calc(33.333%_-_16px)]
      "
      style={F.jost}
    >
      <div className="w-full aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={card.imgSrc}
          alt={card.name}
          className="w-full h-full object-cover block [filter:saturate(0.82)] transition-[transform,filter] duration-[600ms] ease-in-out group-hover:scale-[1.04] group-hover:[filter:saturate(1)]"
          onError={(e) => { e.currentTarget.parentElement.style.cssText = `background:${card.imgFallback};aspect-ratio:4/3`; }}
        />
      </div>

      <div className="p-4 flex flex-col">
        <div className="text-[1.5rem] flex items-center gap-2 font-light text-black leading-none mb-2" style={F.cormorant}>
          <p>{card.num}</p>
          <h3 className="text-[1.25rem] font-normal text-black leading-[1.25] mt-1" style={F.cormorant}>{card.name}</h3>
          {card.badgeLabel && <span className={`inline-block ml-auto mt-1 px-2 py-[6px] text-[14px] tracking-[0.18em] uppercase font-medium text-white ${BADGE_BG[card.badge]}`}>
            {card.badgeLabel}
          </span>}
        </div>

        <div className="text-[14px] tracking-[0.12em] uppercase text-[#a0644a] mb-1 font-normal">{card.duration}</div>
        <p className="text-[14px] leading-[1.65] text-[#6b5e4e] mb-3">{card.desc}</p>

        <ul className="list-none mb-3 space-y-0.5 p-0 m-0">
          {card.features.map((f, i) => (
            <li key={i} className="text-sm leading-relaxed text-earth-light pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-clay-light before:text-xs">{f}</li>
          ))}
        </ul>

        <div className="border-t border-[#ece6de] pt-[8px] mt-2">
          <div className={`grid gap-2 ${card.pricing.layout === "single" ? "grid-cols-1" : "grid-cols-2"}`}>
            {card.pricing.blocks.map((b, i) => <PricingBlock key={i} block={b} />)}
          </div>
        </div>

        {card.showAccom && <AccomDrawer />}

        <div className="mt-[10px] text-[12px] text-[#8a7c6e] leading-[1.5]">
          <button className="bg-transparent border-none p-0 text-[12px] text-[#8a7c6e] cursor-pointer font-light" style={F.jost} onClick={() => onScrollTo("faq")}>
            Firing &amp; shipping charges apply.
          </button>
          <p>Plus 18% GST</p>
        </div>

        <button
          className="mt-[14px] self-start inline-flex items-center gap-1 bg-transparent p-0 pb-px text-[14px] tracking-[0.16em] uppercase font-normal text-[#a0644a] cursor-pointer transition-[color,border-bottom-color] duration-200 hover:text-[#7d4e38] [border:none] [border-bottom:1px_solid_#c8917a] hover:[border-bottom-color:#7d4e38]"
          style={F.jost}
          onClick={() => onScrollTo("contact")}
        >
          Enquire &amp; Book →
        </button>
      </div>
    </div>
  );
}

// ─── SIDE ARROW BUTTON ────────────────────────────────────────────────────────
// Floats on the left or right edge of the carousel, centred vertically.
// Fades in/out based on whether there are cards in that direction.

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
function SideArrow({ direction, onClick, visible }) {
  const isLeft = direction === "left";
  const [hinted, setHinted] = useState(false);

  const handleClick = () => {
    setHinted(true);
    onClick();
  };

  return (
    <>
      <style>{NUDGE_CSS}</style>
      <button
        onClick={handleClick}
        aria-label={isLeft ? "Previous course" : "Next course"}
        className={`
          absolute top-1/2 -translate-y-1/2
          ${isLeft ? "-left-3 lg:-left-12" : "-right-3 lg:-right-12"}
          z-10 w-7 lg:w-9 h-24 lg:h-32
          flex items-center justify-center
          rounded-full
          border border-[rgba(160,100,74,0.35)]
          bg-[rgba(250,248,244,0.85)] backdrop-blur-[2px]
          cursor-pointer transition-all duration-300 ease-out
          hover:bg-[#a0644a] hover:border-[#a0644a] hover:w-9 lg:hover:w-11
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
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
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

// ─── COURSES SECTION ──────────────────────────────────────────────────────────
export default function CoursesSection() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef(null);

  const visibleCount = useCallback(() => {
    if (window.innerWidth < 640)  return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }, []);

  const applyTransform = useCallback((currentIdx) => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0];
    if (!card) return;
    const itemW = card.offsetWidth + 24;
    trackRef.current.style.transform = `translateX(-${currentIdx * itemW}px)`;
  }, []);

  const move = useCallback((dir) => {
    const max = CARDS.length - visibleCount();
    setIdx((prev) => {
      const next = Math.max(0, Math.min(max, prev + dir));
      requestAnimationFrame(() => applyTransform(next));
      return next;
    });
  }, [visibleCount, applyTransform]);

  useEffect(() => {
    const onResize = () => {
      const max = Math.max(0, CARDS.length - visibleCount());
      setIdx((prev) => {
        const clamped = Math.min(prev, max);
        requestAnimationFrame(() => applyTransform(clamped));
        return clamped;
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [visibleCount, applyTransform]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  // Derived visibility — used by both side arrows AND the header arrows
  const canGoLeft  = idx > 0;
  const canGoRight = idx < CARDS.length - visibleCount();

  return (
    <div className="bg-[#faf8f4] text-[#2a1f14] font-light tracking-[0.01em]" style={F.jost}>
      <style>{FONTS}</style>

      <section
        id="courses"
        className="bg-[#faf8f4] px-4 py-14 sm:px-10 sm:py-[72px] lg:px-[80px] lg:py-[100px]"
      >
        {/* ── Divider ── */}
        <div className="flex items-center gap-5 mb-10">
          <div className="flex-1 h-px bg-[#d8cfc3]" />
          <p className="text-[0.72rem] tracking-[0.28em] uppercase whitespace-nowrap text-[#8a7c6e]">
            Residential &amp; Non-Residential
          </p>
          <div className="flex-1 h-px bg-[#d8cfc3]" />
        </div>

        {/* ── Section Header ── */}
        <div className="flex items-start justify-between gap-5 mb-10 flex-wrap">

          {/* Left: title + intro */}
          <div className="flex-1 min-w-[260px]">
            <SectionLabel>Courses &amp; Programmes</SectionLabel>
            <SectionTitle className="mb-3">
              Nine ways to find<br /><em className="italic text-clay-dark">your practice</em>
            </SectionTitle>
            <p className="text-base text-earth-light leading-relaxed max-w-[600px] mt-3 mb-2 md:mb-6">
              From a weekend retreat to a three-month residency. Residential courses include food and
              accommodation at either{" "}
              <Link target="_blank" rel="noopener noreferrer" className="text-clay-dark" to="/stay/cold-mountain-retreat">
                <strong className="text-earth font-normal">Cold Mountain Retreat</strong>
              </Link>{" "}or{" "}
              <a className="text-clay-dark" href="https://byoolfarmstay.com/" target="_blank" rel="noopener noreferrer">
                <strong className="text-earth font-normal">Byool Farm BnB</strong>
              </a>.
            </p>
          </div>

          {/* Right: label only (arrows moved to carousel sides) */}
          <div className="shrink-0 self-start pt-1">
            <p className="text-[9px] tracking-[0.25em] uppercase text-[#8a7c6e]">
              Residential &amp; Non-Residential
            </p>
          </div>
        </div>

        {/* ── Carousel with floating side arrows ── */}
        {/*
          LAYOUT:
          - outer: relative, adds horizontal space (px-5 lg:px-14) so arrows
            sit just outside the card strip without overlapping content
          - arrows: absolute, top-1/2, -left / -right, fade in/out by canGoLeft/Right
          - inner: overflow-hidden, clips the scrolling track
        */}
        <div className="relative px-5 lg:px-14">

          {/* LEFT arrow — appears only when idx > 0 */}
          <SideArrow
            direction="left"
            onClick={() => move(-1)}
            visible={canGoLeft}
          />

          {/* RIGHT arrow — appears only when more cards remain */}
          <SideArrow
            direction="right"
            onClick={() => move(1)}
            visible={canGoRight}
          />

          {/* Overflow clip */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-start gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              {CARDS.map((card) => (
                <CourseCard key={card.num} card={card} onScrollTo={scrollTo} />
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA Row ── */}
        <div className="flex flex-col items-start gap-4 flex-wrap mt-10 pt-8 border-t border-[#d8cfc3] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-[#6b5e4e]">
            Not sure which course? We'll help you find the right fit.
          </p>
          <div className="flex gap-3 flex-wrap">
            <button
              className="px-6 py-[14px] bg-[#a0644a] text-white text-[14px] tracking-[0.18em] uppercase font-normal cursor-pointer border-none transition-colors duration-200 hover:bg-[#7d4e38]"
              style={F.jost}
              onClick={() => scrollTo("contact")}
            >
              Enquire &amp; Book
            </button>
            <button
              className="px-6 py-[14px] bg-transparent text-[#2a1f14] text-[14px] tracking-[0.18em] uppercase font-normal cursor-pointer border border-[#d8cfc3] transition-[border-color] duration-200 hover:border-[#2a1f14]"
              style={F.jost}
              onClick={() => scrollTo("faq")}
            >
              Read FAQ
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}