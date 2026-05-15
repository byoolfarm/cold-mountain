// src/components/sections/CoursesSection.jsx
import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import * as IMGS from "../../assets/img";
import { SectionLabel, SectionTitle } from "../ui";
import { COURSES } from "../../data/courses";

// Google Fonts
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap');`;

const F = {
  jost:      { fontFamily: "'Jost', sans-serif" },
  playfair:  { fontFamily: "'Playfair Display', serif" },
  cormorant: { fontFamily: "'Cormorant Garamond', serif" },
};

<<<<<<< HEAD
// ─── DATA ─────────────────────────────────────────────────────────────────────
const CARDS = [
  {
    num: "01", name: "Pottery Retreat", badge: "clay", badgeLabel: "Residential",
    duration: "3–13 Days · Food & Stay Included",
    desc: "Try pottery without a long commitment — or explore a new craft on a relaxing Himalayan holiday.",
    features: ["Intro to hand building & wheel throwing", "Finish a cup / bowl / plate", "Daily supervised & unsupervised practice"],
    pricing: { layout: "double", blocks: [
      { name: "Cold Mountain Retreat",   opts: [{ label: "Single", val: "₹6,500"  }, { label: "Sharing", val: "₹4,500" }], note: "per person per day" },
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
      { name: "Cold Mountain Retreat",   opts: [{ label: "Single", val: "₹72,800" }, { label: "Sharing", val: "₹63,000" }] },
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
      { name: "Cold Mountain Retreat",   opts: [{ label: "Single", val: "₹1,36,500" }, { label: "Sharing", val: "₹96,000"   }] },
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
      { name: "Cold Mountain Retreat",   opts: [{ label: "Single", val: "₹3,75,500" }, { label: "Sharing", val: "₹2,25,000" }] },
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
      { name: "Half Day", opts: [{ val: "₹1,800" }], note: "per person" },
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

=======
>>>>>>> 08aa5cc (individual course page)
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

// ─── PRICING BLOCK ────────────────────────────────────────────────────────────
// Note: Accommodation drawer removed from card as requested.

// ─── COURSE CARD ──────────────────────────────────────────────────────────────
function CourseCard({ card }) {
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
      <Link to={`/courses/${card.slug}`} className="block w-full aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={IMGS[card.imgKey]}
          alt={card.name}
          width="800"
          height="600"
          className="w-full h-full object-cover block [filter:saturate(0.82)] transition-[transform,filter] duration-[600ms] ease-in-out group-hover:scale-[1.04] group-hover:[filter:saturate(1)]"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <div className="text-[1.5rem] flex items-center gap-2 font-light text-black leading-none mb-2" style={F.cormorant}>
          <p>{card.num}</p>
          <Link to={`/courses/${card.slug}`} className="hover:text-clay transition-colors">
            <h3 className="text-[1.25rem] font-normal text-black leading-[1.25] mt-1" style={F.cormorant}>{card.name}</h3>
          </Link>
          {card.tag && <span className={`inline-block ml-auto mt-1 px-2 py-[6px] text-[10px] tracking-[0.18em] uppercase font-medium text-white ${BADGE_BG[card.tagStyle] || "bg-stone"}`}>
            {card.tag}
          </span>}
        </div>

        <div className="text-[14px] tracking-[0.12em] uppercase text-[#a0644a] mb-1 font-normal">{card.duration}</div>
        <p className="text-[14px] leading-[1.65] text-[#6b5e4e] mb-3 line-clamp-2">{card.desc}</p>

        <ul className="list-none mb-3 space-y-0.5 p-0 m-0 flex-1">
          {card.landingPointers.map((f, i) => (
            <li key={i} className="text-sm leading-relaxed text-earth-light pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-clay-light before:text-xs">{f}</li>
          ))}
        </ul>


        <Link
          to={`/courses/${card.slug}`}
          className="mt-[14px] self-start inline-flex items-center gap-1 bg-transparent p-0 pb-px text-[14px] tracking-[0.16em] uppercase font-normal text-[#a0644a] cursor-pointer transition-[color,border-bottom-color] duration-200 hover:text-[#7d4e38] [border:none] [border-bottom:1px_solid_#c8917a] hover:[border-bottom-color:#7d4e38]"
          style={F.jost}
        >
          Explore Course →
        </Link>
      </div>
    </div>
  );
}

// ─── SIDE ARROW BUTTON ────────────────────────────────────────────────────────
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
    const max = COURSES.length - visibleCount();
    setIdx((prev) => {
      const next = Math.max(0, Math.min(max, prev + dir));
      requestAnimationFrame(() => applyTransform(next));
      return next;
    });
  }, [visibleCount, applyTransform]);

  useEffect(() => {
    const onResize = () => {
      const max = Math.max(0, COURSES.length - visibleCount());
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

  const canGoLeft  = idx > 0;
  const canGoRight = idx < COURSES.length - visibleCount();

  return (
    <div className="bg-[#faf8f4] text-[#2a1f14] font-light tracking-[0.01em]" style={F.jost}>
      <style>{FONTS}</style>

      <section
        id="courses"
        className="bg-[#faf8f4] px-4 py-14 sm:px-10 sm:py-[72px] lg:px-[80px] lg:py-[100px]"
      >
        <div className="flex items-center gap-5 mb-10">
          <div className="flex-1 h-px bg-[#d8cfc3]" />
          <p className="text-[0.72rem] tracking-[0.28em] uppercase whitespace-nowrap text-[#8a7c6e]">
            Programmes &amp; Residency
          </p>
          <div className="flex-1 h-px bg-[#d8cfc3]" />
        </div>

        <div className="flex items-start justify-between gap-5 mb-10 flex-wrap">
          <div className="flex-1 min-w-[260px]">
            <SectionLabel>Courses &amp; Programmes</SectionLabel>
            <SectionTitle className="mb-3">
              Nine ways to find<br /><em className="italic text-clay-dark font-cormorant">your practice</em>
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
        </div>

        <div className="relative px-5 lg:px-14">
          <SideArrow direction="left" onClick={() => move(-1)} visible={canGoLeft} />
          <SideArrow direction="right" onClick={() => move(1)} visible={canGoRight} />

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex items-start gap-6 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              {COURSES.map((card) => (
                <CourseCard key={card.num} card={card} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 flex-wrap mt-10 pt-8 border-t border-[#d8cfc3] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] text-[#6b5e4e]">
            Not sure which course? We'll help you find the right fit.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/courses"
              className="px-6 py-[14px] bg-[#a0644a] text-white text-[14px] tracking-[0.18em] uppercase font-normal cursor-pointer border-none transition-colors duration-200 hover:bg-[#7d4e38] no-underline"
              style={F.jost}
            >
              View All Courses
            </Link>
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
