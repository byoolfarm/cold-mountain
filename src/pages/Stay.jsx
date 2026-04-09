// RetreatPage.jsx — Simple, crisp Cold Mountain Retreat Stay page
// Stack: Tailwind CSS + Lucide React

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MapPin, Clock, Utensils, Wifi, Coffee, Mountain, Flame,
  Waves, Sun, TreePine, BedDouble, Users, ChevronDown, MessageCircle
} from "lucide-react";
import Navbar from "../components/Navbar";

// ── Replace these with your actual imported image paths ──────────────────────

import * as IMGS         from "../assets/img";

// ────────────────────────────────────────────────────────────────────────────

const AMENITIES = [
  { icon: Utensils,  text: "Twin beds in each room" },
  { icon: Coffee,    text: "High Speed Wifi" },
  { icon: Mountain,  text: "Stunning mountain vistas from a spacious verandah" },
  { icon: Sun,       text: "Common lounge area & shared bathroom Service" },
  { icon: Waves,     text: "Weekly cleaning and linen change" },
  { icon: Users,     text: " Fully equipped Shared kitchen and Washing Machine" },
];

function EnquireForm() {
  const [form, setForm] = useState({ name: "", email: "", dates: "", guests: "1", note: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const base = "w-full border border-stone-300 bg-white px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 rounded-none outline-none focus:border-stone-700 transition-colors";

  const send = () => {
    const msg = `Hi! I'd like to enquire about a stay at Cold Mountain Retreat.\n\nName: ${form.name}\nEmail: ${form.email}\nDates: ${form.dates}\nGuests: ${form.guests}\nNote: ${form.note}`;
    window.open(`https://wa.me/919805259227?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  if (sent) return (
    <div className="text-center py-8">
      <p className="text-stone-800 font-light text-xl mb-2" style={{ fontFamily: "Cormorant Garamond, serif" }}>
        Enquiry sent — thank you.
      </p>
      <p className="text-sm text-stone-500">We'll be in touch within 24 hours.</p>
      <button onClick={() => setSent(false)} className="mt-4 text-xs text-stone-400 underline underline-offset-4 hover:text-stone-700 transition-colors">
        Send another
      </button>
    </div>
  );

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <input placeholder="Your Name"          className={base} value={form.name}   onChange={set("name")} />
      <input placeholder="Email"  type="email" className={base} value={form.email}  onChange={set("email")} />
      <input placeholder="Preferred Dates (e.g. 10–14 Apr)" className={base} value={form.dates} onChange={set("dates")} />
      <select className={base} value={form.guests} onChange={set("guests")}>
        {[1,2,3,4].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? "s" : ""}</option>)}
      </select>
      <textarea placeholder="Anything else?" rows={3} className={`${base} col-span-full resize-none`} value={form.note} onChange={set("note")} />
      <div className="col-span-full">
        <button onClick={send}
          className="flex items-center gap-2 bg-stone-800 text-white text-sm px-7 py-3.5 hover:bg-stone-700 transition-colors tracking-wide">
          <MessageCircle size={15} />
          Send via WhatsApp
        </button>
      </div>
    </div>
    </>
  );
}

export default function RetreatPage() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="bg-[#f8f6f2] min-h-screen" style={{ fontFamily: "Jost, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-[100vh] min-h-[560px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover h-full w-full bg-center "
          style={{ backgroundImage: `url(${IMGS.cmr_view2})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        <div className="relative px-6 md:px-16 pb-14 max-w-2xl">
          <p className="text-xs tracking-[0.35em] uppercase text-white/55 mb-3">Cold Mountain · Dharamshala, H.P.</p>
          <h1 className="font-light text-white leading-[1.1] mb-5"
            style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,5vw,3.8rem)" }}>
            A place to rest,<br />
            <em className="italic text-amber-200">high in the mountains.</em>
          </h1>
          <p className="text-sm text-white/65 leading-relaxed mb-8 max-w-md">
           Simple rooms, spacious verandah with sweeping mountain views          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate("/#contact")}
              className="border border-white text-white text-xs tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
              Enquire Now
            </button>
            <button onClick={() => document.getElementById("stay")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-1.5 text-white/60 text-xs tracking-widest uppercase hover:text-white transition-colors">
              See Rooms <ChevronDown size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* ── QUICK FACTS ─────────────────────────────────────────────── */}
      <div className="bg-stone-800 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto divide-x divide-white/10">
          {[
            { label: "Location", value: "Dharamshala, H.P." },
            { label: "Min. Stay", value: "3 Nights" },
            { label: "Meals", value: "Breakfast Included" },
            { label: "Open to", value: "All — Beginners Welcome" },
          ].map(({ label, value }) => (
            <div key={label} className="px-6 md:px-10 py-5 text-center">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/40 mb-1">{label}</p>
              <p className="text-sm font-light">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── THE VIEW ────────────────────────────────────────────────── */}
      <section className="py-6 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="flex items-end gap-4 mb-8">
          <div>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-amber-600 mb-1">What You'll Wake Up To</p>
            <h2 className="font-light text-stone-800" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.7rem,3vw,2.4rem)" }}>
              The <em className="italic">view</em>
            </h2>
          </div>
          {/* Subtle "VIEW" label badge */}
          <span className="mb-1.5 ml-auto inline-flex items-center gap-1.5 border border-amber-300 text-amber-700 text-[0.6rem] tracking-[0.3em] uppercase px-3 py-1.5 bg-amber-50">
            <Mountain size={10} /> Outside
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
          {[IMGS.cmr_view1, IMGS.cmr_view2].map((src, i) => (
            <div key={i} className={`overflow-hidden ${i === 1 ? "md:col-span-1 row-span-1" : ""}`}>
              <img src={src} alt="View from Cold Mountain Retreat"
                className="w-full h-52 md:h-64 object-cover saturate-90 hover:saturate-100 hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
            </div>
          ))}
        </div>
        <p className="text-xs text-stone-400 mt-3 tracking-wide">Terraced Himalayan fields · Snow-capped Dhauladhars · Valley at dawn</p>
      </section>

      {/* ── THE STAY ────────────────────────────────────────────────── */}
      <section id="stay" className="py-20 px-6 md:px-16 bg-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end gap-4 mb-8">
            <div>
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-stone-500 mb-1">Accommodation</p>
              {/* <h2 className="font-light text-stone-800" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.7rem,3vw,2.4rem)" }}>
              </h2> */}
            </div>
            {/* Subtle "STAY" label badge */}
            <span className="mb-1.5 ml-auto inline-flex items-center gap-1.5 border border-stone-400 text-stone-600 text-[0.6rem] tracking-[0.3em] uppercase px-3 py-1.5 bg-white">
              <BedDouble size={10} /> Inside
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {/* Twin Room — spans 2 cols */}
            <div className="group overflow-hidden relative">
              <img src={IMGS.cmr_single1} alt="Twin room"
                className="w-full h-72 md:h-80 object-cover saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                {/* <p className="font-light text-white text-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>Twin Room</p> */}
                {/* <p className="text-xs text-white/60">For two · ₹2,500 / night</p> */}
              </div>
            </div>
            {/* Single Room */}
            <div className="group overflow-hidden relative">
              <img src={IMGS.cmr_single2} alt="Single room"
                className="w-full h-72 md:h-80 object-cover saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                {/* <p className="font-light text-white text-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>Single Room</p> */}
                {/* <p className="text-xs text-white/60">For one · ₹1,800 / night</p> */}
              </div>
            </div>
            <div className="group overflow-hidden relative">
              <img src={IMGS.cmr_single3} alt="Single room"
                className="w-full h-72 md:h-80 object-cover saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                {/* <p className="font-light text-white text-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>Single Room</p> */}
                {/* <p className="text-xs text-white/60">For one · ₹1,800 / night</p> */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {/* Twin Room — spans 2 cols */}
            <div className="md:col-span-1 group overflow-hidden relative">
              <img src={IMGS.cmr_common_lounge1} alt="Twin room"
                className="w-full h-72 md:h-80 object-cover saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                {/* <p className="font-light text-white text-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>Twin Room</p> */}
                {/* <p className="text-xs text-white/60">For two · ₹2,500 / night</p> */}
              </div>
            </div>
            {/* Single Room */}
            <div className="group overflow-hidden relative">
              <img src={IMGS.cmr_common_lounge2} alt="Single room"
                className="w-full h-72 md:h-80 object-cover saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                {/* <p className="font-light text-white text-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>Single Room</p> */}
                {/* <p className="text-xs text-white/60">For one · ₹1,800 / night</p> */}
              </div>
            </div>
             <div className="group overflow-hidden relative">
              <img src={IMGS.cmr_coomon_lounge3} alt="Single room"
                className="w-full h-72 md:h-80 object-cover saturate-75 group-hover:saturate-100 group-hover:scale-[1.03] transition-all duration-500 block" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                {/* <p className="font-light text-white text-lg" style={{ fontFamily: "Cormorant Garamond, serif" }}>Single Room</p> */}
                {/* <p className="text-xs text-white/60">For one · ₹1,800 / night</p> */}
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* ── AMENITIES ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-stone-500 mb-1">What's included</p>
        <h2 className="font-light text-stone-800 mb-10" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.7rem,3vw,2.4rem)" }}>
          Everything you <em className="italic">need</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {AMENITIES.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3">
              <div className="mt-0.5 flex-shrink-0 text-amber-600"><Icon size={15} /></div>
              <p className="text-sm text-stone-600 leading-snug">{text}</p>
            </div>
          ))}
        </div>

    
      </section>

      {/* ── ENQUIRE ─────────────────────────────────────────────────── */}
      {/* <section id="enquire" className="py-20 px-6 md:px-16 bg-stone-800">
        <div className="max-w-2xl mx-auto">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/40 mb-1">Book Your Stay</p>
          <h2 className="font-light text-white mb-2" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.7rem,3vw,2.4rem)" }}>
            Write to <em className="italic text-amber-300">us</em>
          </h2>
          <p className="text-sm text-white/50 mb-10 leading-relaxed">
            All stays confirmed personally. We respond within 24 hrs via WhatsApp or email.
          </p>
           

          <div className="[&_input]:bg-stone-700 [&_input]:border-stone-600 [&_input]:text-white [&_input]:placeholder:text-stone-400
                          [&_select]:bg-stone-700 [&_select]:border-stone-600 [&_select]:text-white
                          [&_textarea]:bg-stone-700 [&_textarea]:border-stone-600 [&_textarea]:text-white [&_textarea]:placeholder:text-stone-400
                          [&_input:focus]:border-amber-400 [&_select:focus]:border-amber-400 [&_textarea:focus]:border-amber-400
                          [&_button]:bg-amber-500 [&_button]:hover:bg-amber-400 [&_button]:text-stone-900">
            <EnquireForm />
          </div>

          <p className="text-xs text-stone-500 mt-8">
            Or reach us directly —{" "}
            <a href="https://wa.me/919805259227" target="_blank" rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4 transition-colors">
              WhatsApp +91 98052 59227
            </a>
          </p>
        </div>
      </section> */}

    </div>
    </>
  );
}
