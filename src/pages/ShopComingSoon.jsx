// src/pages/ShopComingSoon.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { ArrowLeft, Instagram } from "lucide-react";

export default function ShopComingSoon() {
  return (
    <div className="min-h-screen bg-[#f3f1ee] flex flex-col">
      <SEO 
        title="Shop Coming Soon — The Cold Mountain Studio" 
        description="Our online pottery collection is currently under preparation. Check back soon for handcrafted ceramics."
        path="/shop"
      />
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-24 md:py-32">
        <div className="max-w-3xl w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-[#b87b5a]/10 text-[#b87b5a] text-[0.65rem] font-bold uppercase tracking-[0.25em] rounded-full mb-8">
              Coming Soon
            </span>
            
            <h1 className="font-cormorant text-5xl md:text-7xl text-neutral-900 leading-tight mb-8">
              The Collection is <br />
              <em className="italic text-[#b87b5a]">in the Kiln</em>
            </h1>
            
            <p className="text-lg text-neutral-500 font-jost max-w-xl mx-auto mb-12 leading-relaxed">
              We're carefully preparing our first online drop of handcrafted ceramics. 
              Each piece is being fired, glazed, and finished with the same care we give 
              to our studio practice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/"
                className="flex items-center gap-3 px-8 py-4 bg-[#b87b5a] text-white text-[0.7rem] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-[#a0644a] transition-all shadow-lg shadow-[#b87b5a]/20 group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Return Home
              </Link>
              
              <a 
                href="https://www.instagram.com/thecoldmountainstudio/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white border-2 border-neutral-100 text-neutral-600 text-[0.7rem] font-bold uppercase tracking-[0.2em] rounded-2xl hover:border-[#b87b5a] hover:text-[#b87b5a] transition-all shadow-sm"
              >
                <Instagram size={16} />
                Follow on Instagram
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-20 md:mt-32"
          >
            <div className="h-px w-24 bg-neutral-300 mx-auto mb-8" />
            <p className="text-[0.6rem] uppercase tracking-[0.5em] text-neutral-400 font-bold">
              The Cold Mountain Studio
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
