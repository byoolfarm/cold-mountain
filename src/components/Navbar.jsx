// src/components/Navbar.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Router-aware, scroll-reactive navigation.
//
// isLight: nav gets a solid background on:
//   - scroll > 60px on any page
//   - any non-hero page (shop, blog, about, work)
//
// Mobile: hamburger is conditionally hidden when the overlay is open so the
// two icons never overlap. The overlay sits at z-[60], above the nav (z-50).
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logo } from "../assets/images";

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome   = location.pathname === "/";
  const isLight  = scrolled
    || location.pathname === "/shop"
    || location.pathname === "/work"
    || location.pathname.startsWith("/blog")
    || location.pathname.startsWith("/about");

  // ── Side-effects ────────────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close About dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setAboutOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); setAboutOpen(false); }, [location.pathname]);

  // ── Helpers ─────────────────────────────────────────────────────────────────
  const goToSection = section => {
    setMenuOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ── Shared class strings ────────────────────────────────────────────────────
  const linkCls = [
    "text-[0.72rem] tracking-[0.12em] uppercase font-normal relative cursor-pointer",
    "transition-colors duration-300",
    "after:content-[''] after:absolute after:bottom-[-2px] after:left-0",
    "after:w-0 after:h-px after:bg-clay after:transition-all after:duration-300 hover:after:w-full",
    isLight ? "text-earth hover:text-clay" : "text-white/90 hover:text-white",
  ].join(" ");

  const pillCls = [
    "text-[0.7rem] tracking-[0.1em] uppercase px-4 py-2 border transition-all duration-300 cursor-pointer",
    isLight
      ? "border-clay text-clay hover:bg-clay hover:text-white"
      : "border-white/50 text-white/90 hover:border-white hover:text-white",
  ].join(" ");

  return (
    <>
      {/* ── Desktop / top nav ────────────────────────────────────────────── */}
      <nav className={[
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-4",
        "transition-all duration-300",
        isLight ? "bg-warm-white/97 backdrop-blur-md shadow-[0_1px_0_rgba(90,70,55,0.15)]" : "",
      ].join(" ")}>

        {/* Logo */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="The Cold Mountain Studio"
            className={`h-10 w-auto transition-all duration-300 ${isLight ? "" : "brightness-0 invert"}`}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6 list-none items-center">
          {/* Standard links */}
          {[
            { label: "Courses",  action: () => goToSection("courses") },
            { label: "Our Work", to: "/work" },
            { label: "Blog",     to: "/blog" },
            { label: "FAQ",      action: () => goToSection("faq") },
            { label: "Stay",     href: "https://byoolfarmstay.com/" },
            { label: "Contact",  action: () => goToSection("contact") },
            { label: "About",  to: "/about" }
          ].map(({ label, action, to, href }) => (
            <li key={label}>
              {href  ? <a href={href} target="_blank" rel="noreferrer" className={linkCls}>{label}</a>
             : to    ? <Link to={to} className={linkCls}>{label}</Link>
             :         <span onClick={action} className={linkCls}>{label}</span>}
            </li>
          ))}

          {/* About dropdown */}
          {/* <li className="relative" ref={aboutRef}>
            <button
              onClick={() => setAboutOpen(o => !o)}
              className={`${linkCls} flex items-center gap-1 bg-transparent border-none p-0 font-jost`}
            >
              About
              <svg width="9" height="9" viewBox="0 0 10 10" fill="none"
                className={`transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
              >
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>

            {aboutOpen && (
              <div className="absolute top-full left-0 mt-2 w-36 bg-warm-white shadow-lg border border-black/8 py-1 z-50">
                {[
                  { label: "Lakhan", to: "/about/lakhan" },
                  { label: "Swapna", to: "/about/swapna" },
                ].map(({ label, to }) => (
                  <Link
                    key={to} to={to}
                    onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-[0.72rem] tracking-[0.08em] uppercase text-earth hover:text-clay hover:bg-cream transition-colors no-underline"
                  >{label}</Link>
                ))}
              </div>
            )}
          </li> */}

          {/* Pills */}
          <li><Link to="/shop" className={pillCls}>Shop</Link></li>
          <li>
            <a href="https://www.instagram.com/thecoldmountainstudio/" target="_blank" rel="noreferrer" className={pillCls}>
              Instagram
            </a>
          </li>
        </ul>

        {/* Hamburger — only rendered when mobile menu is CLOSED */}
        {!menuOpen && (
          <button
            className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block w-[22px] h-[1.5px] rounded-full transition-colors duration-300 ${isLight ? "bg-earth" : "bg-white/90"}`}
              />
            ))}
          </button>
        )}

        {/* Width-matching spacer so logo stays left when hamburger is hidden */}
        {menuOpen && <div className="w-[38px] md:hidden flex-shrink-0" aria-hidden />}
      </nav>

      {/* ── Mobile full-screen overlay — z-[60] > nav z-50 ─────────────── */}
      <div
        className={[
          "fixed inset-0 bg-charcoal z-[60] flex flex-col justify-center items-center gap-6",
          "transition-all duration-300",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        {/* Close button — inside overlay, never in nav */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 w-10 h-10 flex items-center justify-center text-cream text-2xl bg-transparent border-none cursor-pointer hover:text-clay-light transition-colors"
          aria-label="Close navigation menu"
        >✕</button>

        {/* Nav items */}
        {[
          { label: "Courses",          action: () => goToSection("courses") },
          { label: "Our Work",         to: "/work" },
          { label: "Blog",             to: "/blog" },
          // { label: "About ",   to: "/about/" },
          // { label: "About — Lakhan",   to: "/about/lakhan" },
          // { label: "About — Swapna",   to: "/about/swapna" },
          { label: "FAQ",              action: () => goToSection("faq") },
          { label: "Stay",             href: "https://byoolfarmstay.com/" },
          { label: "Contact",          action: () => goToSection("contact") },
          { label: "Shop",             to: "/shop" },
          { label: "Instagram",        href: "https://www.instagram.com/thecoldmountainstudio/" },
        ].map(({ label, action, to, href }) => {
          const cls = "font-cormorant text-cream text-2xl tracking-[0.12em] uppercase no-underline hover:text-clay-light transition-colors cursor-pointer";
          return href
            ? <a key={label} href={href} target="_blank" rel="noreferrer" className={cls} onClick={() => setMenuOpen(false)}>{label}</a>
            : to
            ? <Link key={label} to={to} className={cls} onClick={() => setMenuOpen(false)}>{label}</Link>
            : <span key={label} className={cls} onClick={action}>{label}</span>;
        })}
      </div>
    </>
  );
}
