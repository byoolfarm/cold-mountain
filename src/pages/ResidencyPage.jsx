// src/pages/ResidencyPage.jsx
import { useEffect, useRef } from "react";
import SEO    from "../components/SEO";
import Navbar from "../components/Navbar";
import { SectionLabel } from "../components/ui";
import { Link } from "react-router-dom";

const heroImg = "/images/residency_hero.webp";

// ── Fade-in on scroll ─────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("fi-vis"); },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fi-wrap ${className}`}>{children}</div>;
}

const Rule = ({ light = false }) => (
  <div className={`w-10 h-px mb-8 ${light ? "bg-clay-light" : "bg-clay"}`} />
);

// ── Reusable two-column section ───────────────────────────────────────────────
function ResSection({
  id, label, heading, accentWord, body, listItems = [],
  img, alt, reverse = false, light = false, pyClass = "py-16 md:py-20",
}) {
  const bg      = light ? "bg-[#1c1a17]" : "bg-warm-white";
  const textCol = light ? "text-cream"   : "text-charcoal";
  const bodyCol = light ? "text-white/60" : "text-earth-light";

  return (
    <section id={id} className={`${bg} ${pyClass} px-6 md:px-16`}>
      <div className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>

        {/* Text */}
        <FadeIn>
          <SectionLabel light={light}>{label}</SectionLabel>
          <h2 className={`font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] ${textCol} mb-6`}>
            {heading}
            {accentWord && <><br /><em className={`italic ${light ? "text-clay-light" : "text-clay-dark"}`}>{accentWord}</em></>}
          </h2>
          <Rule light={light} />
          {body.split("\n").filter(s => s.trim()).map((para, i) => (
            <p key={i} className={`text-[1rem] leading-[2] ${bodyCol} max-w-[500px] ${i > 0 ? "mt-4" : ""}`}>
              {para.trim()}
            </p>
          ))}
          {listItems.length > 0 && (
            <ul className={`list-none mt-6 space-y-4 ${bodyCol}`}>
              {listItems.map((item, i) => (
                <li key={i} className="flex gap-3 text-[1rem] leading-[1.7]">
                  <span className="text-clay mt-1 text-sm">✦</span>
                  <span className="max-w-[460px]">
                    <strong className={`font-normal ${light ? "text-white" : "text-charcoal"}`}>{item.title}:</strong>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </FadeIn>

        {/* Image */}
        <FadeIn className="overflow-hidden">
          <img
            src={img}
            alt={alt}
            className="w-full aspect-[4/5] object-cover saturate-75 hover:saturate-100 transition-all duration-700 block rounded-sm shadow-sm"
            loading="lazy"
          />
        </FadeIn>
      </div>
    </section>
  );
}

// ── Note block ────────────────────────────────────────────────────────────────
function Note({ children }) {
  return (
    <p className="mt-4 pl-4 border-l-2 border-clay/40 text-[0.9rem] leading-[1.8] text-earth-light italic max-w-[460px]">
      {children}
    </p>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function ResidencyPage() {
  return (
    <>
      <SEO
        title="The Cold Mountain Residency 2026 — Apply Now"
        description="A 6-week residency for experienced potters in Dharamshala. Studio access, mentorship, accommodation & meals included. Applications open for July–August 2026."
        path="/residency"
      />
      <Navbar />

      <style>{`
        .fi-wrap {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .fi-vis {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>

      <main className="min-h-screen bg-warm-white">

        {/* ── Hero Header ──────────────────────────────────────────────────── */}
        <FadeIn>
          <header className="max-w-[1180px] mx-auto px-6 md:px-10 lg:px-24 pt-28 pb-4">
            <div className="border-b border-black/8 pb-6 pt-0 text-center">
              <span className="block text-[0.7rem] tracking-[0.3em] uppercase text-clay mb-3 font-jost">
                Cold Mountain Residency Program · 2026
              </span>
              <h1 className="font-cormorant text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.05] text-charcoal mb-4">
                Create, Connect &<br />
                <span className="text-[clamp(1.6rem,3vw,2.8rem)] italic text-clay">Reignite Your Creative Spirit</span>
              </h1>
              <p className="max-w-[650px] mx-auto text-[1.05rem] leading-[1.8] text-earth-light mb-6">
                In the lap of the Dhauladhars.
              </p>
              {/* Quick facts strip */}
              <div className="w-full mt-2 border border-black/8 bg-white shadow-sm rounded-sm px-8 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Duration</span>
                    <strong className="text-charcoal font-normal font-cormorant text-lg">6 Weeks</strong>
                    <span className="block text-earth-light text-[0.85rem]">July 15 – August 26, 2026</span>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Location</span>
                    <strong className="text-charcoal font-normal font-cormorant text-lg">Dharamshala</strong>
                    <span className="block text-earth-light text-[0.85rem]">Cold Mountain Studio &amp; Byool Farm Stay</span>
                  </div>
                  <div>
                    <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Deadline</span>
                    <strong className="text-charcoal font-normal font-cormorant text-lg">May 31st, 2026</strong>
                    <span className="block text-earth-light text-[0.85rem]">Applications close</span>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* ── 1. Philosophy ───────────────────────────────────────────────── */}
        <ResSection
          id="philosophy"
          pyClass="py-8 md:py-12"
          label="The Residency Philosophy"
          heading="Slow Down."
          accentWord="Make with Intention."
          body={`This residency is designed for experienced potters who wish to step away from commercial pressures to focus on the intentionality of the making process. Whether your goal is to master complex hand-building, experiment with local clay bodies, or refine glaze chemistry, we provide the physical and mental space to "slow down."`}
          listItems={[
            { title: "Exploration of Media", text: "We encourage mixing ceramics with allied art forms—woodworking, glass, kiln building, or experimental firings." },
            { title: "Language of Form", text: "Space to explore the narrative of ceramics and its functional boundaries." },
            { title: "Outcome-Focused", text: "Residents are expected to select a specific project to research, develop, and complete during their six-week stay." },
          ]}
          img={heroImg}
          alt="Potter working at Cold Mountain Studio"
        />

        {/* Philosophy note */}
        <div className="bg-warm-white px-6 md:px-16 pb-10">
          <div className="max-w-[1200px] mx-auto pl-0 md:pl-[calc(50%+2rem)]">
            <Note>
              Prior experience in your chosen secondary medium must be showcased in your portfolio. While we provide the space, specialised mentorship in non-ceramic media may be limited.
            </Note>
          </div>
        </div>

        {/* ── 2. What's Included ─────────────────────────────────────────── */}
        <section id="inclusions" className="bg-[#1c1a17] py-16 md:py-20 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel light>What’s Included</SectionLabel>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-cream mb-6">
                Everything You Need<br />
                <em className="italic text-clay-light">to Focus on the Work</em>
              </h2>
              <Rule light />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              {[
                { title: "24/7 Studio Access", text: "Dedicated space at Cold Mountain Studio, including wheels, hand-building tables, and professional tools." },
                { title: "Technical Mentorship", text: "Weekly one-on-one sessions with the Studio Director and Glaze Master to troubleshoot technical hurdles or refine aesthetic direction." },
                { title: "Accommodation", text: "A private room at either Byool Farm Stay or Cold Mountain Retreat, emphasising a sustainable, low-impact lifestyle." },
                { title: "Nourishment", text: "Daily home-cooked, seasonal meals — Breakfast, Lunch, and Dinner." },
                { title: "Firing Package", text: "3 Bisque + 2 Glaze (Electric), 1 Glaze (Gas), plus access to Raku and Saggar firing facilities. All standard materials included." },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="border border-white/8 bg-white/4 p-6 rounded-sm hover:bg-white/7 transition-all duration-300">
                    <span className="text-clay-light text-sm">✦</span>
                    <h3 className="font-cormorant text-[1.3rem] text-white mt-2 mb-2 font-light">{item.title}</h3>
                    <p className="text-white/55 text-[0.93rem] leading-[1.8]">{item.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Weekly Structure ─────────────────────────────────────────── */}
        <section id="rhythm" className="bg-warm-white py-16 md:py-20 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Weekly Structure</SectionLabel>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-charcoal mb-2">
                The Rhythm
              </h2>
              <p className="text-earth-light text-[0.95rem] leading-[1.8] max-w-[540px] mb-8">
                While the residency is largely self-directed, we maintain a light rhythm to support your progress.
              </p>
              <Rule />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { week: "Week 1", title: "Grounding & Testing", text: "Settling into the farm, testing local materials, and finalizing your Project Proposal." },
                { week: "Weeks 2–4", title: "The Making Phase", text: "Intensive, uninterrupted studio time for production and experimentation." },
                { week: "Weeks 5–6", title: "Firing & Refinement", text: "Completing the making cycle, loading kilns, and final glazing." },
                { week: "Closing", title: "Documentation", text: "Time for professional documentation. Finished pieces will be showcased across Cold Mountain Studio's social media platforms." },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="flex gap-5 border border-black/6 bg-white shadow-sm p-6 rounded-sm">
                    <div className="flex-shrink-0 w-[3px] bg-clay rounded-full" />
                    <div>
                      <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-clay mb-1 font-jost">{item.week}</span>
                      <h3 className="font-cormorant text-[1.25rem] text-charcoal font-light mb-1">{item.title}</h3>
                      <p className="text-earth-light text-[0.92rem] leading-[1.7]">{item.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. Eligibility ──────────────────────────────────────────────── */}
        <ResSection
          id="eligibility"
          label="Eligibility &amp; Application"
          heading="Who Should"
          accentWord="Apply?"
          body={`Open to intermediate and advanced potters with a firm grasp of studio safety and independent kiln loading. Applicants must have a clear project goal.`}
          listItems={[
            { title: "Skill Level", text: "Intermediate and advanced potters with independent studio experience." },
            { title: "Intent", text: "A clear, defined project goal for your six-week stay." },
            { title: "Requirements", text: "A brief portfolio (5–10 images), a CV, and a 300-word statement of intent." },
            { title: "Deadline", text: "May 31st, 2026." },
          ]}
          img="/images/slide_students.webp"
          alt="Pottery students at Cold Mountain Studio"
          reverse
          light
        />

        {/* ── 5. Accommodation & Pricing ──────────────────────────────────── */}
        <section id="pricing" className="bg-warm-white py-16 md:py-20 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Accommodation &amp; Pricing</SectionLabel>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-charcoal mb-3">
                Choose Your <em className="italic text-clay-dark">Stay</em>
              </h2>
              <p className="text-earth-light text-[0.95rem] leading-[1.8] max-w-[560px] mb-8">
                Prices include all materials, studio access, all meals, and your residential stay (exclusive of 18% GST).
              </p>
              <Rule />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Option 1 */}
              <FadeIn>
                <div className="border border-black/8 bg-white shadow-sm rounded-sm overflow-hidden">
                  <img
                    src="/images/cmr_view1.webp"
                    alt="The Cold Mountain Retreat"
                    className="w-full aspect-[16/9] object-cover saturate-75"
                    loading="lazy"
                  />
                  <div className="p-7">
                    <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-clay mb-2 font-jost">Option 1</span>
                    <h3 className="font-cormorant text-[1.6rem] text-charcoal font-light mb-2">The Cold Mountain Retreat</h3>
                    <p className="text-earth-light text-[0.92rem] leading-[1.7] mb-4">
                      A short walk from the studio, offering a cozy, communal atmosphere. Features private rooms with twin beds, a shared bathroom, and a common living area.
                    </p>
                    <div className="border-t border-black/6 pt-4 mt-4">
                      <div className="flex flex-wrap gap-x-8 gap-y-3 mb-4">
                        <div>
                          <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Single Occupancy</span>
                          <strong className="font-cormorant text-[1.5rem] text-charcoal font-light">₹1,00,500</strong>
                          <span className="text-earth-light text-[0.75rem] ml-1">+ 18% GST</span>
                        </div>
                        <div>
                          <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Non-Potter Partner</span>
                          <strong className="font-cormorant text-[1.5rem] text-charcoal font-light">₹60,000</strong>
                          <span className="text-earth-light text-[0.75rem] ml-1">+ 18% GST</span>
                        </div>
                      </div>
                      <Link
                        to="/stay/cold-mountain-retreat"
                        className="text-[0.68rem] tracking-[0.15em] uppercase text-clay border-b border-clay/40 hover:border-clay transition-all pb-px"
                      >
                        Retreat Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Option 2 */}
              <FadeIn>
                <div className="border border-black/8 bg-white shadow-sm rounded-sm overflow-hidden">
                  <img
                    src="/images/byool_stay1.webp"
                    alt="Byool Farm Stay"
                    className="w-full aspect-[16/9] object-cover saturate-75"
                    loading="lazy"
                  />
                  <div className="p-7">
                    <span className="block text-[0.65rem] tracking-[0.2em] uppercase text-clay mb-2 font-jost">Option 2 · On-Site</span>
                    <h3 className="font-cormorant text-[1.6rem] text-charcoal font-light mb-2">Byool Farm Stay</h3>
                    <p className="text-earth-light text-[0.92rem] leading-[1.7] mb-4">
                      A charming three-bedroom cottage situated directly on the farm. Each room features a double bed and an attached private bathroom.
                    </p>
                    <div className="border-t border-black/6 pt-4 mt-4">
                      <div className="flex flex-wrap gap-x-8 gap-y-3 mb-4">
                        <div>
                          <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Single Occupancy</span>
                          <strong className="font-cormorant text-[1.5rem] text-charcoal font-light">₹1,36,500</strong>
                          <span className="text-earth-light text-[0.75rem] ml-1">+ 18% GST</span>
                        </div>
                        <div>
                          <span className="block text-[0.65rem] tracking-[0.15em] uppercase text-clay mb-1 font-jost">Non-Potter Partner</span>
                          <strong className="font-cormorant text-[1.5rem] text-charcoal font-light">₹84,000</strong>
                          <span className="text-earth-light text-[0.75rem] ml-1">+ 18% GST</span>
                        </div>
                      </div>
                      <a
                        href="https://byoolfarmstay.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[0.68rem] tracking-[0.15em] uppercase text-clay border-b border-clay/40 hover:border-clay transition-all pb-px"
                      >
                        Farm Stay Details →
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── Important Notes ─────────────────────────────────────────────── */}
        <section className="bg-cream border-t border-black/6 py-14 px-6 md:px-16">
          <div className="max-w-[1200px] mx-auto">
            <FadeIn>
              <SectionLabel>Important Notes</SectionLabel>
              <Rule />
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Pets", text: "We love pets as much as you, but since we already have four friendly dogs on-site, we are unable to host your pets." },
                { title: "Dietary Requirements", text: "Please inform us of any allergies or dietary needs in advance." },
                { title: "Payment", text: "Full payment is required in advance to confirm your residency." },
                { title: "Cancellations", text: "All bookings are final and non-refundable." },
                { title: "Rescheduling", text: "Credit may be applied toward a future date — valid for 6 months (domestic) or 1 year (international)." },
                { title: "Transfer", text: "You may transfer your spot to a qualified friend at no extra cost (48-hour notice required)." },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="flex gap-3 bg-white border border-black/6 rounded-sm p-5 shadow-sm">
                    <span className="text-clay mt-1 text-sm flex-shrink-0">✦</span>
                    <div>
                      <strong className="block text-charcoal font-normal font-cormorant text-[1.05rem] mb-1">{item.title}</strong>
                      <p className="text-earth-light text-[0.88rem] leading-[1.7]">{item.text}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn>
              <p className="mt-8 text-earth-light text-[0.88rem] leading-[1.7] max-w-[600px] italic">
                All rescheduling is subject to studio availability. Please notify us as early as possible to ensure we can find a spot for you.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── FAQs ────────────────────────────────────────────────────────── */}
        <section id="faqs" className="bg-warm-white py-16 md:py-20 px-6 md:px-16">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <SectionLabel>FAQs</SectionLabel>
              <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3rem)] font-light leading-[1.15] text-charcoal mb-3">
                Common <em className="italic text-clay-dark">Questions</em>
              </h2>
              <Rule />
            </FadeIn>
            <div className="space-y-0 divide-y divide-black/6 border border-black/6 bg-white shadow-sm rounded-sm overflow-hidden">
              {[
                {
                  q: "Will it be raining the whole day?",
                  a: "The monsoon brings dramatic, long spells of rain, but it rarely interrupts life at the farm. The studio becomes a cozy sanctuary during these times—perfect for deep focus."
                },
                {
                  q: "Do the roads close due to rainfall?",
                  a: "Unlike other parts of the state, our area (Ramehr/Dharamshala) has very stable terrain with negligible landslides. Access remains open and safe."
                },
                {
                  q: "Can my partner come if they aren't an artist?",
                  a: "Absolutely. We welcome partners (separate cost applicable); please just note this in your application."
                },
                {
                  q: "What is the food like?",
                  a: "We serve a mix of vegetarian and non-vegetarian meals. Tea, coffee, and refreshments are also offered through the day. We prioritise local produce and can accommodate most dietary restrictions with advance notice."
                },
                {
                  q: "How remote is the location?",
                  a: "We are in the quiet village of Ramehr, about 40 minutes from the main Dharamshala town. It is secluded enough for peace, but accessible enough for convenience."
                },
                {
                  q: "Will I have connectivity?",
                  a: "Yes, we have high-speed WiFi. Byool Farm Stay also has power backup for essentials (phones, laptops, and lights)."
                },
              ].map((item, i) => (
                <FadeIn key={i}>
                  <div className="px-7 py-6">
                    <p className="font-cormorant text-[1.15rem] text-charcoal font-light mb-2 flex gap-3">
                      <span className="text-clay flex-shrink-0 mt-0.5">Q.</span>
                      <span>{item.q}</span>
                    </p>
                    <p className="text-earth-light text-[0.93rem] leading-[1.8] pl-6">{item.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── Terms & Conditions ──────────────────────────────────────────── */}
        <section className="bg-cream border-t border-black/6 py-12 px-6 md:px-16">
          <div className="max-w-[800px] mx-auto">
            <FadeIn>
              <SectionLabel>Terms &amp; Conditions</SectionLabel>
              <Rule />
              <ul className="space-y-3">
                <li className="flex gap-3 text-[0.93rem] leading-[1.8] text-earth-light">
                  <span className="text-clay flex-shrink-0">✦</span>
                  <span>Participants must be <strong className="text-charcoal font-normal">18 years of age or older.</strong></span>
                </li>
                <li className="flex gap-3 text-[0.93rem] leading-[1.8] text-earth-light">
                  <span className="text-clay flex-shrink-0">✦</span>
                  <span>You acknowledge that images and photographs of the residency (including you and your work) may be shared by Cold Mountain Studio for <strong className="text-charcoal font-normal">archival and marketing purposes.</strong></span>
                </li>
              </ul>
            </FadeIn>
          </div>
        </section>

        {/* ── Apply CTA ───────────────────────────────────────────────────── */}
        <div className="bg-[#1c1a17] py-20 px-6">
          <div className="max-w-[900px] mx-auto text-center">
            <FadeIn>
              <SectionLabel light className="justify-center">Apply Now</SectionLabel>
              <h3 className="font-cormorant text-[clamp(2.2rem,3.5vw,3.2rem)] font-light text-cream mb-4">
                Ready to <em className="italic text-clay-light">Reignite Your Practice?</em>
              </h3>
              <p className="text-white/55 text-[1rem] leading-[1.8] mb-10 max-w-[520px] mx-auto">
                Send us your portfolio (5–10 images), your CV, and a 300-word statement of intent. Applications close May 31st, 2026.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/918626823139?text=Hi!%20I%20would%20like%20to%20apply%20for%20the%20Cold%20Mountain%20Residency%202026."
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5a] shadow-lg hover:shadow-xl text-white text-[0.75rem] tracking-[0.15em] uppercase no-underline transition-all duration-300 font-jost rounded-full"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Apply via WhatsApp
                </a>
                <a
                  href="mailto:hello@coldmountainstudio.com?subject=Residency%20Application%202026"
                  className="px-8 py-4 border border-white/25 text-white text-[0.75rem] tracking-[0.15em] uppercase hover:border-clay-light hover:text-clay-light hover:bg-white/4 transition-all duration-300 font-jost"
                >
                  Apply via Email
                </a>
              </div>
              <p className="mt-10 font-cormorant text-[1.3rem] italic text-clay-light">
                Six weeks to slow down, go deep, and come home with work that matters.
              </p>
            </FadeIn>
          </div>
        </div>

      </main>
    </>
  );
}
