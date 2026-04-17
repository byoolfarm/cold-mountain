import { useState, useEffect, useRef, useCallback } from "react";
import { slide_farm, slide_wheel, slide_students, slide_studio1, slide_studio1_mobile } from "../../assets/img";
import { Link } from "react-router-dom";
const SLIDES = [
  {
    img: slide_farm,
    eyebrow: "Byool Farm · Dharamshala, Himachal Pradesh",
    title: <>Where <em className="italic text-clay-light">clay meets<br />the mountain</em></>,
    sub: "Nestled at the foot of the Dhauladhars — a studio, a school, and a slow way of being.",
  },
  {
    img: "/images/day_at_farm_6.webp",
    eyebrow: "A Day at Byool Farm",
    title: <>Farm, Feast,<br /><em className="italic text-clay-light">&amp; Play with Clay</em></>,
    sub: "Rediscover a slower pace of life with our 11 am – 5 pm mountain immersion.",
    link: "/day-at-byool-farm",
    linkText: "View Details",
  },
  {
    img: slide_students,
    eyebrow: "Residential Pottery Courses · Bookings Open",
    title: <>Come,<br /><em className="italic text-clay-light">learn by doing</em></>,
    sub: "Beginners and seekers welcome. Food, stay, and studio time — all included.",
  },
  {
    img: slide_studio1,
    mobileImg: slide_studio1_mobile,
    eyebrow: "Custom Productions",
    title: <>Handmade,<br /><em className="italic text-clay-light">Honest . Yours</em></>,
    // sub: "Not objects to admire — ware to be used, touched, and loved daily.",
    sub:"Browse our selection of pottery and find your next favourite piece."
  },
];

export default function HeroCarousel() {
  const [cur, setCur] = useState(0);
  const timerRef = useRef(null);
  const touchX = useRef(0);
  const total = SLIDES.length;

  const go = useCallback((n) => {
    setCur(((n % total) + total) % total);
  }, [total]);

  const startAuto = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCur((c) => (c + 1) % total);
    }, 5800);
  }, [total]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [startAuto]);

  return (
    <section className="relative w-full h-screen min-h-[500px] overflow-hidden bg-[#18100c]">
      
      {/* Track */}
      <div
        className="flex h-full transition-transform duration-[1500ms] ease-[cubic-bezier(.77,0,.18,1)]"
        style={{ transform: `translateX(-${cur * 100}%)` }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 44) {
            go(dx < 0 ? cur + 1 : cur - 1);
            startAuto();
          }
        }}
      >
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className="relative w-full flex-shrink-0 h-full overflow-hidden"
          >
            {/* Image */}
            <picture className="block w-full h-full">
              {s.mobileImg && (
                <source media="(max-width: 768px)" srcSet={s.mobileImg} />
              )}
              <img
                src={s.img}
                alt={`slide-${i}`}
                className="w-full h-full object-cover brightness-[0.65] saturate-80"
              />
            </picture>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,10,6,0.72)] via-[rgba(18,10,6,0.2)] to-transparent pointer-events-none" />

            {/* Content */}
            <div
              className={`absolute bottom-[11%] left-4 md:left-16 max-w-[520px] text-white transition-all duration-700
              ${i === cur ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <span className="block text-[0.75rem] tracking-[0.3em] uppercase text-clay-light mb-4">
                {s.eyebrow}
              </span>

              <h1 className="font-cormorant text-[clamp(2.2rem,5.5vw,4rem)] font-light leading-[1.1] mb-3">
                {s.title}
              </h1>

              <p className="text-base leading-[1.9] text-white/75 max-w-[360px] mb-4">
                {s.sub}
              </p>

              {/* 🔥 NEW CTA SECTION */}
              <div className="flex flex-wrap gap-3">
                {s.link ? (
                  <Link
                    to={s.link}
                    className="px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase bg-[#a0644a] text-white 
                    hover:bg-[#7d4e38] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {s.linkText}
                  </Link>
                ) : (
                  <a
                    href="#courses"
                    className="px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase bg-[#a0644a] text-white 
                    hover:bg-[#7d4e38] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Explore Courses
                  </a>
                )}

               <Link to="/shop" className="px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase border border-white/40 text-white
                  hover:border-clay-light hover:text-clay-light hover:bg-white/5 transition-all duration-300"
               > 
                  Shop Pottery
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-8 right-6 md:right-12 flex items-center gap-3 z-10">
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                go(i);
                startAuto();
              }}
              className={`h-[2px] transition-all duration-300 ${
                i === cur ? "w-[34px] bg-white" : "w-5 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            go(cur - 1);
            startAuto();
          }}
          className="w-[34px] h-[34px] border border-white/30 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
        >
          ←
        </button>

        <button
          onClick={() => {
            go(cur + 1);
            startAuto();
          }}
          className="w-[34px] h-[34px] border border-white/30 text-white flex items-center justify-center hover:border-white hover:bg-white/10 transition-all"
        >
          →
        </button>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-6 md:left-12 hidden md:flex items-center gap-3 text-white/45 text-[0.6rem] tracking-[0.22em] uppercase">
        <div className="w-[26px] h-px bg-white/30 animate-pulse" />
        Scroll
      </div>
    </section>
  );
}