// src/pages/CoursesPage.jsx
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SectionLabel, SectionTitle, DividerLine } from "../components/ui";
import { COURSES } from "../data/courses";
import * as IMGS from "../assets/img";
import BackButton from "../components/BackButton";

const F = {
  jost: { fontFamily: "'Jost', sans-serif" },
  cormorant: { fontFamily: "'Cormorant Garamond', serif" },
};

function CourseCard({ course, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col bg-white border border-black/5 hover:border-clay/20 transition-all duration-500 shadow-sm hover:shadow-md overflow-hidden h-full"
      style={F.jost}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={IMGS[course.imgKey]}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-[0.85] group-hover:saturate-100"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-medium text-white ${
            course.tagStyle === 'clay' ? 'bg-clay' : course.tagStyle === 'dark' ? 'bg-charcoal' : 'bg-stone'
          }`}>
            {course.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col flex-1">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="text-clay font-cormorant text-xl italic">{course.num}</span>
          <h3 className="font-cormorant text-2xl text-charcoal font-light leading-tight">
            {course.name}
          </h3>
        </div>

        <div className="text-[13px] tracking-[0.1em] uppercase text-clay-dark mb-4 font-medium">
          {course.duration}
        </div>

        <p className="text-[15px] leading-relaxed text-earth-light mb-6 line-clamp-2">
          {course.desc}
        </p>

        {/* Pointers - Uniform height container */}
        <ul className="space-y-2 mb-8 flex-1">
          {course.landingPointers.map((ptr, i) => (
            <li key={i} className="flex gap-2 text-[13px] text-earth-light">
              <span className="text-clay/60">•</span>
              <span>{ptr}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/courses/${course.slug}`}
          className="mt-auto inline-flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-charcoal font-medium border-b border-black/10 pb-1 hover:border-clay hover:text-clay transition-all duration-300"
        >
          Explore Course <span className="text-lg leading-none">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

export default function CoursesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Pottery Courses & Residencies — The Cold Mountain Studio"
        description="Explore our range of pottery courses in the Himalayas. From weekend retreats to three-month intensive residencies, find your practice at The Cold Mountain Studio."
        path="/courses"
      />
      <Navbar />

      <main className="min-h-screen bg-warm-white pt-32 pb-20 relative">
        <div className="absolute top-24 left-4 md:left-12 z-10 hidden md:block">
           <BackButton light={false} /> 
        </div>
        <div className="absolute top-24 w-full flex justify-center z-10 md:hidden">
           <BackButton light={false} /> 
        </div>
        {/* Header Section */}
        <section className="px-6 md:px-12 lg:px-24 mb-16 pt-8 md:pt-0">
          <div className="max-w-[1200px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Programmes & Residency</SectionLabel>
              <SectionTitle className="text-[clamp(2.5rem,5vw,4rem)] mb-6">
                Nine ways to find<br />
                <em className="italic text-clay-dark font-cormorant">your practice</em>
              </SectionTitle>
              <p className="text-lg text-earth-light leading-relaxed max-w-[700px] font-light" style={F.jost}>
                From the meditative rhythm of a weekend retreat to the career-defining intensity of a three-month residency. 
                All residential courses include accommodation and wholesome farm-to-table meals in the heart of the Dhauladhars.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px] mx-auto">
            <DividerLine label="Explore our Courses" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COURSES.map((course, idx) => (
                <CourseCard key={course.slug} course={course} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1200px] mx-auto bg-charcoal p-12 md:p-16 text-center rounded-sm">
            <SectionLabel light className="justify-center">Not sure which one?</SectionLabel>
            <h3 className="font-cormorant text-3xl md:text-4xl text-cream mb-8 font-light italic">
              "We help you find the right fit for your creative journey."
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919805259227?text=Hi!%20I'm%20interested%20in%20learning%20more%20about%20your%20courses."
                target="_blank"

                rel="noreferrer"
                className="px-8 py-4 bg-clay hover:bg-clay-dark text-white text-[12px] tracking-[0.2em] uppercase transition-all duration-300 font-jost"
              >
                Chat via WhatsApp
              </a>
              <a
                href="mailto:hello@coldmountainstudio.com"
                className="px-8 py-4 border border-white/20 hover:border-white text-white text-[12px] tracking-[0.2em] uppercase transition-all duration-300 font-jost"
              >
                Send an Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
