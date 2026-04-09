// src/components/sections/FaqSection.jsx
// To edit an FAQ: find the question text below and change it directly.
// To add a new FAQ: copy any <FaqItem> block and paste it inside the grid div.
// To add a bullet point: copy any <li> block inside an answer.
import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
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
      <div className={`overflow-hidden transition-all duration-[400ms] ease-in-out ${open ? "max-h-[1200px] opacity-100 pt-3 pb-5" : "max-h-0 opacity-0"}`}>
        <div className={`${answerText} pb-1`} onClick={e => e.stopPropagation()}>
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
              <span><span className={bulletLabel}>Three-Month Program</span><span className={bulletDesc}> — Our most comprehensive program for students who want to immerse themselves fully in the life of a potter.</span></span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span><span className={bulletLabel}>Advanced Pottery Course/Pottery Intensive</span><span className={bulletDesc}> — Tailored for potters who have mastered the basics and want to push their boundaries.</span></span>
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
              <span>Expert instruction and studio access</span>
            </li>
            <li className={bulletLi}>
              <span className={bulletDot} />
              <span>All materials</span>
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
  Our courses run year-round, with spots offered on a first-come, first-served basis. 
  For our regular programs, please reach out to check availability—our small class sizes 
  are designed to provide personalized attention and tend to fill up quickly. 
  
  Stay updated on upcoming sessions through our Instagram page{" "}
  <a 
    href="https://www.instagram.com/thecoldmountainstudio/" 
    target="_blank" 
    rel="noreferrer" 
    className={link}
  >
    @thecoldmountainstudio
  </a>
  {" "}where we regularly share new dates for specialized courses and events.
</p>
        </FaqItem>

        {/* ── 5 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Where is the studio located?">
          <p className="text-white/55">
  The Cold Mountain Studio is nestled in Lower Dharamshala, set within the peaceful surroundings of Byool Farm. Located in a serene rural setting, the studio is not far from the city, offering the perfect balance of accessibility and quiet retreat. 
  Built by hand using earth-bag construction, the studio rises directly from the land, reflecting a deep connection with nature. Surrounded by the farm, it enjoys stunning views of the Dhauladhar range, creating an inspiring and tranquil environment.
         </p>
        </FaqItem>

        {/* ── 6 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Can I visit the studio without taking a course?">
          <p className="text-white/55">
  Yes, you can visit the studio with a prior appointment if you’d simply like to explore the space, as we’re often engaged with ongoing classes/farm related activities. Alternatively, you can sign up for our half-day or full-day workshops to get a hands-on taste of the experience. 

  You can also visit{" "}
  <a 
    target="_blank" 
    rel="noopener noreferrer" 
    href="https://www.byoolfarmstay.com/dining" 
    className="text-clay-light"
  >
    The Dining Room at Byool Farm
  </a>, 
  our on-site café, where you can purchase our pottery or enjoy a delicious meal.
          </p>
        </FaqItem>

        {/* ── 7 ───────────────────────────────────────────────────────────── */}
        <FaqItem question="Do you sell the pottery made at the studio?">
         <p className="text-white/55">
  Yes! Visit our{" "}
  <Link to="/shop" className={link}>
    online shop
  </Link>
  {" "}for functional ceramic ware — 

  {" "}If you’re in Dharamshala, you can also explore our work in person at  <a 
    href="https://www.byoolfarmstay.com/dining" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={link}
  >
    The Dining Room at Byool Farm
  </a>, our in-house gallery space. 

  {" "}You can also find our pieces at{" "}
  <a 
    href="https://www.instagram.com/the.other.space/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={link}
  >
    The Other Space
  </a>
  {" "}(
  <a 
    href="https://www.google.com/maps/place/The+Other+Space/@32.2313517,76.3242313,17z/data=!3m1!4b1!4m6!3m5!1s0x391b51c61885b575:0xaf3633962d61ac65!8m2!3d32.2313517!4d76.3268062!16s%2Fg%2F11fmg9rsbr?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-clay-light hover:text-clay transition-colors"
    title="View on Google Maps"
  >
    <MapPin size={14} className="" />
  </a>
  ),{" "}
  <a 
    href="https://www.instagram.com/myearthstore/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={link}
  >
    My Earth Store
  </a>
  {" "}(
  <a 
    href="https://www.google.com/maps/place/My+Earth+Store/@32.1850753,76.3650475,17z/data=!3m1!4b1!4m6!3m5!1s0x391b5226c5cea7db:0x22771438a17c76d1!8m2!3d32.1850753!4d76.3676224!16s%2Fg%2F11b7l7b02k?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-clay-light hover:text-clay transition-colors"
    title="View on Google Maps"
  >
    <MapPin size={14} className="" />
  </a>
  ), and{" "}
  <a 
    href="https://www.instagram.com/chura.cafe/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={link}
  >
    Chura Cafe
  </a>
  {" "}(
  <a 
    href="https://www.google.com/maps/place/Chura/@32.2389313,76.3224585,17z/data=!3m1!4b1!4m6!3m5!1s0x391b51f64e539581:0x134b8892053a623d!8m2!3d32.2389313!4d76.3250334!16s%2Fg%2F11ycb7t8n9?entry=ttu&g_ep=EgoyMDI2MDQwNi.0IKXMDSoASAFQAw%3D%3D" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center text-clay-light hover:text-clay transition-colors"
    title="View on Google Maps"
  >
    <MapPin size={14} className="" />
  </a>
  ).
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