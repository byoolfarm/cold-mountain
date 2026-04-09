// src/components/Footer.jsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import { logo, footer_bg } from "../assets/img";

export default function Footer() {
  const navigate  = useNavigate();
  const location  = useLocation();
  const isHome    = location.pathname === "/";

  const goToSection = (section) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 150);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkCls = "text-white/55 text-[0.75rem] tracking-[0.15em] uppercase hover:text-clay-light transition-colors cursor-pointer";

  return (
    <footer className="relative overflow-hidden text-cream px-16 py-14 flex flex-col md:flex-row justify-between items-end md:items-center gap-6 min-h-[180px]">
      {/* BG image */}
      <div className="absolute inset-0 -z-0">
        <img src={footer_bg} alt="" className="w-full h-full object-cover brightness-[0.15] saturate-[0.4] block" loading="lazy" />
      </div>

      {/* Logo + tagline */}
      <div className="relative">
        <img src={logo} alt="The Cold Mountain Studio" className="h-9 w-auto brightness-0 invert opacity-80" />
        <p className="text-[0.77rem] text-white/50 tracking-[0.08em] mt-1 italic">We make mud into pots</p>
      </div>

      {/* Links */}
      <ul className="relative flex flex-wrap gap-7 list-none">
        <li><span onClick={() => goToSection("courses")} className={linkCls}>Courses</span></li>
        <li><Link to="/shop" className={linkCls}>Shop</Link></li>
        <li><Link to="/work" className={linkCls}>Our Work</Link></li>
        <li><Link to="/blog" className={linkCls}>Blog</Link></li>
        <li><a href="https://byoolfarmstay.com/" target="_blank" rel="noreferrer" className={linkCls}>Stay</a></li>
        <li><span onClick={() => goToSection("faq")} className={linkCls}>FAQ</span></li>
        <li><span onClick={() => goToSection("contact")} className={linkCls}>Contact</span></li>
        <li><a href="https://www.instagram.com/thecoldmountainstudio/" target="_blank" rel="noreferrer" className={linkCls}>Instagram</a></li>
      </ul>

      <p className="relative text-[0.75rem] text-white/30">©2025 The Cold Mountain Studio · Dharamshala</p>
    </footer>
  );
}
