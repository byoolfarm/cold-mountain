// src/components/sections/FarmstayStrip.jsx
import { room_1, room_2, retreat_wide } from "../../assets/img";
import * as IMGS from "../../assets/img"
import { SectionLabel, SectionTitle, BtnOutlineWhite } from "../ui";

export default function FarmstayStrip() {
  return (
    <section className="bg-charcoal py-8 md:py-20 px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-8">
        <div>
          {/* <SectionLabel light>Where You'll Stay</SectionLabel> */}
          <SectionTitle light className="mb-4">
            Byool Farm Stay —<br /><em className="italic text-clay-light">rest, deeply</em>
          </SectionTitle>
          <p className="text-[0.8rem] leading-[1.9] text-white/65 mb-6 max-w-[440px]">
            Our sister property sits right on the farm where the studio stands. Earthy rooms built with natural materials, farm-fresh meals, and the sound of the mountains — all steps away from the studio.
          </p>
          <BtnOutlineWhite className=" text-[10px] md:text-[14px]" href="https://byoolfarmstay.com/">
            Visit byoolfarmstay.com →
          </BtnOutlineWhite>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <img src={IMGS?.byool_stay2} alt="Byool Farm" className="w-full aspect-[4/3] object-cover block" loading="lazy" />
          <img src={IMGS?.byool_stay3} alt="Byool Farm" className="w-full aspect-[4/3] object-cover block" loading="lazy" />
          <img src={IMGS?.byool_stay1} alt="Byool Farm"
            className="col-span-2 w-full aspect-[16/9] object-cover block brightness-[0.8] saturate-[0.7]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
