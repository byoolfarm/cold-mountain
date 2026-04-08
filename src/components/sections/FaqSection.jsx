// src/components/sections/FaqSection.jsx
// To edit an FAQ: find the question text below and change it directly.
// To add a new FAQ: copy any <FaqItem> block and paste it inside the grid div.
// To add a bullet point: copy any <li> block inside an answer.
import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionLabel, SectionTitle, DividerLine, BtnOutlineWhite } from "../ui";

// Shared class strings used across answers
const answerText  = "text-[0.9rem] leading-[1.85] text-white/62";
const bulletLi    = "flex items-start gap-2.5 mt-1.5";
const bulletDot   = "mt-1.5 w-2 h-2 rounded-full bg-clay-light flex-shrink-0";
const bulletLabel = "text-cream/80 font-normal";
const bulletDesc  = "text-white/55";
const link        = "text-clay-light underline hover:text-clay transition-colors";

// Single accordion item — completely self-contained open/close state
function FaqItem({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(o => !o)}
      className="border-t border-white/8 py-5 cursor-pointer last:border-b last:border-white/8"
    >
      <div className="flex justify-between items-start gap-4">
        <span className="text-base text-cream font-normal leading-snug flex-1">
          {question}
        </span>
        <span className={`text-clay-light text-lg leading-none flex-shrink-0 transition-transform duration-300 select-none ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </div>
      <div className={`overflow-hidden transition-all duration-[400ms] ${open ? "max-h-[700px] pt-3" : "max-h-0"}`}>
        <div className={answerText} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 px-4 md:px-16 bg-charcoal">
      <DividerLine label="Courses · Studio · Orders · Logistics" light />
      <SectionLabel light>FAQ's</SectionLabel>
      <SectionTitle light className="mb-12">
        Common <em className="italic text-clay-light">questions</em>
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">

        {/* ── 1 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="What types of courses do you offer?">
          <p className="!text-white/55">We offer a range of immersive pottery experiences tailored to different schedules and skill levels:</p>
          <ul className="mt-2 space-y-1.5 list-none">
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Pottery Retreats</span><span className={bulletDesc}> — Short-term immersive stays (minimum 3 days) focusing on the practice of aesthetics and mindful creation.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Beginner's Course (2 Weeks)</span><span className={bulletDesc}> — A foundational intensive course designed to introduce you to the world of clay.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Monthly Courses</span><span className={bulletDesc}> — Longer-form programs for those looking to deepen their practice and develop their own artistic voice.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Three-Month Intensive</span><span className={bulletDesc}> — Our most comprehensive program for students who want to immerse themselves fully in the life of a potter.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Advanced Pottery Course</span><span className={bulletDesc}> — Tailored for potters who have mastered the basics and want to push their boundaries.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Residential Glaze Course</span><span className={bulletDesc}> — Conducted by renowned visiting facilitator Tinni Arora. A deep dive into the alchemy of glaze chemistry. Dates announced in advance.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Fire Festival</span><span className={bulletDesc}> — A weekend event where the pottery community comes together for an elemental celebration of Raku, Obvara, Pit, and Saggar firing.</span></span>
            </li>
          </ul>
          {/* <p className="mt-3">
            Check our{" "}
            <a href="https://www.thecoldmountainstudio.com/courses" target="_blank" rel="noreferrer" className={link}>
              Upcoming Classes
            </a>
            {" "}page for any newly announced courses or events.
          </p> */}
        </FaqItem>

        {/* ── 2 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Do I need prior experience to join a course?">
          <p className="text-white/55">
            No! Our Pottery Retreat and Beginner's Course are specifically designed for those who have never touched clay before. All levels are welcome.
          </p>
        </FaqItem>

        {/* ── 3 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="What is included in the course fee?">
          <p className="text-white/55">Our course fees are all-inclusive. This generally covers:</p>
          <ul className="mt-2 space-y-1.5 list-none text-white/55">
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span>Expert instruction and full studio access</span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span>All materials — clay and glazes</span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span>Accommodation and wholesome meals (for residential courses in Dharamshala)</span>
            </li>
          </ul>
          <p className="mt-2 text-white/50 italic">
            Note: Firing charges are separate, and shipping of fired pieces is charged at actuals. Please check the specific booking page for your chosen course to confirm exact inclusions.
          </p>
        </FaqItem>

        {/* ── 4 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="How do I book a spot?">
          <p className="text-white/55">
            Slots are available on a first-come, first-served basis. Since we keep class sizes small to ensure personal attention, they fill up quickly. Check upcoming dates on our{" "}
            {/* <a href="https://www.thecoldmountainstudio.com/courses" target="_blank" rel="noreferrer" className={link}>
              Upcoming Classes
            </a> */}
            {" "} Instagram page <a href="https://www.instagram.com/thecoldmountainstudio/" target="_blank" rel="noreferrer" className={link}>
                @thecoldmountainstudio
            </a>
            {" "}on where we announce new dates first.
          </p>
        </FaqItem>

        {/* ── 5 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Where is the studio located?">
          <p className="text-white/55">
            The Cold Mountain Studio is nestled in the quiet hill town of Dharamshala, on the beautiful Byool Farm. Our studio is built by hand from earth-bags, rising directly from the land to reflect our connection with nature.
          </p>
        </FaqItem>

        {/* ── 6 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Can I visit the studio without taking a course?">
          <p className="text-white/55">
            Yes — you can sign up for our half-day or full-day workshops if you just want to try your hand at pottery or spend meaningful time while in Dharamshala. You can also visit <span className="text-clay-light">The Dining Room at Byool Farm</span>, our on-site café.
          </p>
        </FaqItem>

        {/* ── 7 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Do you sell the pottery made at the studio?">
          <p className="text-white/55">
            Yes! Visit our{" "}
            <Link to="/shop" className={link}>
              Shop
            </Link>
            {" "}for functional ceramic ware — each piece is a balance between efficient production and our own spiritual and aesthetic goals.
          </p>
        </FaqItem>

        {/* ── 8 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Can I request a custom commission?">
          <p className="text-white/55">
            We do take on custom productions and commissions. If you have a specific project in mind, reach out via{" "}
            <a href="mailto:thecoldmountainstudio@gmail.com" className={link}>
              thecoldmountainstudio@gmail.com
            </a>
            {" "}or WhatsApp{" "}
            <a href="https://wa.me/919805259227" target="_blank" rel="noreferrer" className={link}>
              +91 98052 59227
            </a>.
          </p>
        </FaqItem>

        {/* ── 9 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="What is your cancellation/refund policy?">
          <p className="text-white/55">
           To maintain our small class sizes and personalised instruction, all bookings are final and non-refundable. However, we understand that life happens! If you are unable to attend your booked session, we offer the following flexible options:
     <br/> 1. Rescheduling <br/>
      You may credit your booking toward a future date, subject to availability:
      Students within India: Credits are valid for 6 months from your original course date.
      International Students: Credits are valid for 1 year from your original course date.
     <br/> 2. Transfer Your Seat  <br/>
      If you cannot attend, you are welcome to transfer your spot to a friend or another student at no additional cost. Just let us know their name and contact details at least 48 hours before the course begins.
          
         <br/> 
           <span className="italic"> All rescheduling is subject to studio availability. Please notify us as early as possible to ensure we can find a spot for you.</span> 
           </p>
        </FaqItem>

        {/* ── 10 ──────────────────────────────────────────────────────────── */}
        <FaqItem question="How can I stay updated on new workshops?">
          <p className="text-white/55">
            Follow us on{" "}
            <a href="https://www.instagram.com/thecoldmountainstudio/" target="_blank" rel="noreferrer" className={link}>
              @thecoldmountainstudio
            </a>
            {" "}— we post updates about new course dates and studio news there first.
          </p>
        </FaqItem>

      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-base text-white/50 mb-2">Still have questions?</p>
        <div className="flex items-center justify-center gap-4 flex-wrap mb-6">
          <a
            href="mailto:thecoldmountainstudio@gmail.com"
            className="text-[0.78rem] tracking-[0.1em] uppercase text-clay-light hover:text-clay transition-colors font-jost"
          >
            thecoldmountainstudio@gmail.com
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://wa.me/919805259227"
            target="_blank"
            rel="noreferrer"
            className="text-[0.78rem] tracking-[0.1em] uppercase text-clay-light hover:text-clay transition-colors font-jost"
          >
            +91 98052 59227
          </a>
        </div>
        <BtnOutlineWhite
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Send a Message
        </BtnOutlineWhite>
      </div>
    </section>
  );
}