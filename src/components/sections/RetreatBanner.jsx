// src/components/sections/RetreatBanner.jsx
import { retreat_wide } from "../../assets/img";
import { BtnOutlineWhite } from "../ui";

export default function RetreatBanner() {
  return (
    <section className="relative py-28 px-4 md:px-16 text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.3] saturate-[0.6]"
        style={{ backgroundImage: `url(${retreat_wide})` }}
      />
      <div className="relative">
        <span className="block text-[0.75rem] tracking-[0.35em] uppercase text-white/58 mb-3">
          Upcoming · Limited Spots
        </span>
        <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-light text-white mb-3 leading-tight">
          Pottery Retreat<br />in the Himalayas
        </h2>
        <p className="text-base text-white/68 max-w-[450px] mx-auto mb-8 leading-[1.9]">
          Minimum 3 nights. Open to all — beginners, artists, professionals.
          Farm activities, mountain treks, and dairy included.
        </p>
        <BtnOutlineWhite onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Enquire Now
        </BtnOutlineWhite>
      </div>
    </section>
  );
}
