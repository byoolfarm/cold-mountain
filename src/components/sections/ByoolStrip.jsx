// src/components/sections/ByoolStrip.jsx

export default function ByoolStrip() {
  return (
    <div className="bg-[#a0644a] px-[24px] md:px-[80px] py-[14px] flex flex-col md:flex-row items-center justify-center gap-[20px] text-center md:text-left">
      
      <span className="text-[11px] tracking-[0.18em] uppercase text-white/90">
        Also planning to stay? Byool Farm Stay — earthy rooms, farm-fresh meals, mountain views.
      </span>

      <a
        href="https://byoolfarmstay.com/"
        target="_blank" rel="noreferrer"
        className="text-[11px] tracking-[0.18em] uppercase text-white font-medium border-b border-white/50 pb-[1px] hover:border-white transition-all"
      >
        Explore Byool Farm Stay →
      </a>
    </div>
  );
}