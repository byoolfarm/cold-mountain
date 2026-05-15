// src/pages/CourseDetailPage.jsx
import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SectionLabel, SectionTitle, DividerLine, BtnPrimary } from "../components/ui";
import { COURSES } from "../data/courses";
import * as IMGS from "../assets/img";

const F = {
  jost: { fontFamily: "'Jost', sans-serif" },
  cormorant: { fontFamily: "'Cormorant Garamond', serif" },
};

const ACCOM_PANELS = [
  {
    name: "Cold Mountain Retreat",
    desc: "Just 15 mins walk from the studio! First-floor 2BR apartment — twin beds, functional kitchen, cozy living area, common bath.",
    href: "/stay/cold-mountain-retreat",
    label: "View Cold Mountain Retreat →",
    external: false,
  },
  {
    name: "Byool Farm BnB",
    desc: "A cozy 3-bedroom cottage on-site at Byool Farm — each room with double bed and attached bathroom.",
    href: "https://byoolfarmstay.com/",
    label: "View Byool Farm Stay →",
    external: true,
  },
];



export default function CourseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = useMemo(() => COURSES.find((c) => c.slug === slug), [slug]);

  // Recommendations: Get 3 other courses
  const otherCourses = useMemo(() => {
    return COURSES.filter((c) => c.slug !== slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  }, [slug]);

  useEffect(() => {
    if (!course) {
      navigate("/courses");
    }
    window.scrollTo(0, 0);
  }, [course, navigate]);

  if (!course) return null;

  const content = course.fullContent;

  return (
    <>
      <SEO
        title={`${course.name} — The Cold Mountain Studio`}
        description={course.desc}
        path={`/courses/${course.slug}`}
      />
      <Navbar />

      <main className="min-h-screen bg-warm-white">
        {/* Hero Section */}
        <header className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">
          <img
            src={IMGS[course.imgKey]}
            alt={course.name}
            className="w-full h-full object-cover saturate-[0.8]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent" />
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24">
            <div className="max-w-[1200px] mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-block px-3 py-1 bg-clay text-white text-[10px] tracking-[0.2em] uppercase mb-4">
                  {course.tag}
                </span>
                <h1 className="font-cormorant text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] text-white font-light mb-4">
                  {course.name}
                </h1>
                <p className="text-white/90 text-lg md:text-xl font-light max-w-[800px]" style={F.jost}>
                  {course.desc}
                </p>
              </motion.div>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="py-16 md:pb-12 md:pt-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Overview */}
            <div className="lg:col-span-7">
              <SectionLabel>The Programme</SectionLabel>
              <h2 className="font-cormorant text-4xl text-charcoal mb-8 font-light italic">
                Overview
              </h2>
              <p className="text-lg leading-[1.8] text-earth-light mb-12 font-light" style={F.jost}>
                {content.overview}
              </p>

              {/* Experience Details */}
              <div className="space-y-12">
                <h3 className="font-cormorant text-3xl text-charcoal font-light border-b border-black/5 pb-4">
                  {content.experience.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {content.experience.details.map((detail, i) => (
                    <div key={i} className="space-y-3">
                      <h4 className="text-clay text-[12px] tracking-[0.2em] uppercase font-bold">
                        {detail.title}
                      </h4>
                      <p className="text-[15px] leading-relaxed text-earth-light font-light">
                        {detail.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Sidebar Inclusions */}
            <div className="lg:col-span-4 lg:col-start-9">
              <div className="sticky top-32 bg-white border border-black/5 p-8 shadow-sm">
                <h3 className="font-cormorant text-2xl text-charcoal mb-6 border-b border-black/5 pb-4">
                  What’s Included
                </h3>
                <ul className="space-y-4 mb-8">
                  {content.inclusions.map((item, i) => (
                    <li key={i} className="flex gap-3 text-[14px] text-earth-light">
                      <span className="text-clay">✦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  <BtnPrimary
                    className="w-full"
                    onClick={() => {
                      const el = document.getElementById("pricing-section");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Investment
                  </BtnPrimary>
                  
                  {/* Removed AccomDrawer as it is now clubbed with Pricing */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing/Investment Section */}
        <section id="pricing-section" className="py-8 md:pt-8 md:pb-16 px-6 md:px-12 lg:px-24 bg-cream/30">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <SectionLabel className="justify-center text-center">Investment</SectionLabel>
              <SectionTitle className="text-4xl">Pricing & Stay Options</SectionTitle>
              <div className="w-12 h-px bg-clay mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
              {content.pricing.map((p, i) => {
                const accom = p.name.toLowerCase().includes("cold mountain retreat") 
                  ? ACCOM_PANELS[0] 
                  : p.name.toLowerCase().includes("byool farm") 
                    ? ACCOM_PANELS[1] 
                    : null;

                return (
                  <div key={i} className="bg-white p-8 border border-black/5 flex flex-col shadow-sm">
                    <h4 className="font-cormorant text-2xl text-charcoal mb-3 font-light">{p.name}</h4>
                    
                    {((accom && accom.desc) || p.desc) && (
                      <p className="text-[13px] leading-relaxed text-earth-light mb-6 italic">
                        {accom ? accom.desc : p.desc}
                      </p>
                    )}

                    {accom && (
                      <div className="mb-8">
                        <a
                          href={accom.href}
                          className="inline-flex items-center gap-2 text-[11px] tracking-[0.1em] uppercase text-clay font-medium hover:text-clay-dark transition-colors border-b border-clay/20 pb-1"
                          {...(accom.external ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          {accom.label}
                        </a>
                      </div>
                    )}
                    
                    <div className="space-y-6 mt-auto">
                      {p.options.map((opt, j) => (
                        <div key={j} className="flex justify-between items-baseline border-b border-black/5 pb-3">
                          <span className="text-[12px] tracking-[0.1em] uppercase text-earth-light">
                            {opt.label}
                          </span>
                          <span className="font-cormorant text-2xl text-charcoal">{opt.val}</span>
                        </div>
                      ))}
                      {p.note && (
                        <p className="text-[11px] text-earth-light/60 mt-2">
                          {p.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <p className="text-earth-light mb-8 max-w-[600px] mx-auto font-light" style={F.jost}>
                Ready to begin your journey with clay? Reach out to us to check availability or to ask any specific questions about the curriculum.
              </p>
              <a
                href={`https://wa.me/919805259227?text=Hi!%20I'm%20interested%20in%20the%20${course.name}.`}
                target="_blank"

                rel="noreferrer"
                className="inline-block px-10 py-4 bg-charcoal text-white text-[12px] tracking-[0.2em] uppercase hover:bg-clay transition-all duration-300 font-jost"
              >
                Enquire & Book via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Explore More Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px] mx-auto">
            <DividerLine label="Explore Other Courses" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherCourses.map((c, i) => (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}`}
                  className="group block space-y-4"
                >
                  <div className="aspect-[3/2] overflow-hidden transition-all duration-700">
                    <img
                      src={IMGS[c.imgKey]}
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <span className="text-clay text-[10px] tracking-[0.2em] uppercase font-bold">
                      {c.tag}
                    </span>
                    <h4 className="font-cormorant text-xl text-charcoal group-hover:text-clay transition-colors">
                      {c.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
