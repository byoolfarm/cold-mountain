// src/components/sections/DualIdentitySection.jsx
import { Link } from "react-router-dom";

export default function DualIdentitySection() {
  return (
    <div className="bg-[#2e2318] flex flex-col md:flex-row">
      
      {/* LEFT — COURSES */}
      <a
        href="#courses"
        className="flex-1 px-[64px] py-[18px]  md:py-[52px]  flex flex-col gap-[12px] relative cursor-pointer transition-all duration-300 hover:bg-white/5 border-b md:border-b-0 md:border-r border-white/10"
      >
        <div className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-[#c8917a]">
          Learn with us
        </div>

        <div className="font-[Playfair Display] text-[1.5rem] text-white leading-[1.2]">
          Nine ways to find <br />
          <em className="text-[#c8917a] italic">your practice</em>
        </div>

        <div className=" text-[13px] md:text-[14px] text-white/55 leading-[1.7] max-w-[360px]">
          From a weekend retreat to a three-month residency. Residential courses include food and accommodation at our Himalayan farm.
        </div>

        <div className="mt-[12px] text-[13px] md:text-[14px] tracking-[0.18em] uppercase text-[#c8917a] flex items-center gap-[8px]">
          View all courses →
        </div>
      </a>

      {/* RIGHT — SHOP */}
      <Link
        to="/shop"
        className="flex-1 px-[64px] py-[18px]  md:py-[52px] flex flex-col gap-[12px] relative cursor-pointer transition-all duration-300 hover:bg-white/5"
      >
        <div className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-[#c8917a]">
          Take one home
        </div>

        <div className="font-[Playfair Display] text-[1.5rem] text-white leading-[1.2]">
          Functional ware, <br />
          <em className="text-[#c8917a] italic">made with care</em>
        </div>

        <div className="text-[13px] md:text-[14px] text-white/55 leading-[1.7] max-w-[360px]">
          Every piece from our kiln is a small prayer — dinnerware, drinkware, and home décor crafted at Cold Mountain.
        </div>

        <div className="mt-[12px] text-[13px] md:text-[14px] tracking-[0.18em] uppercase text-[#c8917a] flex items-center gap-[8px]">
          Shop the kiln →
        </div>
      </Link>
    </div>
  );
}