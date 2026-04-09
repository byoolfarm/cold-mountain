// src/pages/BlogPage.jsx  —  route: /blog
import { useState } from "react";
import { Link } from "react-router-dom";
import SEO      from "../components/SEO";
import Navbar  from "../components/Navbar";
import Footer  from "../components/Footer";
import { POSTS } from "../data/blog";
import * as IMGS from "../assets/img";
import { SectionLabel, SectionTitle } from "../components/ui";

const ALL_CATEGORIES = ["All", ...new Set(POSTS.map(p => p.category))];

function PostCard({ post }) {
  const img = IMGS[post.imgKey];
  return (
    <Link to={`/blog/${post.slug}`} className="group no-underline flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={img} alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[0.70rem] tracking-[0.18em] uppercase text-clay font-jost">{post.category}</span>
          <span className="text-stone text-[0.6rem]">·</span>
          <span className="text-[0.75rem] text-stone font-jost">{post.date}</span>
          <span className="text-stone text-[0.6rem]">·</span>
          <span className="text-[0.75rem] text-stone font-jost">{post.readTime}</span>
        </div>
        <h2 className="font-cormorant text-[1.15rem] font-normal text-charcoal leading-snug mb-3 group-hover:text-clay transition-colors">
          {post.title}
        </h2>
        <p className="text-[0.9rem] leading-[1.75] text-earth-light flex-1 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="text-[0.8rem] tracking-[0.1em] uppercase text-clay border-b border-clay-light pb-px self-start group-hover:text-clay-dark transition-colors font-jost">
          read more
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? POSTS : POSTS.filter(p => p.category === active);

  return (
    <>
      <SEO title="Journal" description="Stories, reflections, and craft notes from The Cold Mountain Studio, Dharamshala." path="/blog" />
      <Navbar />
      <main className="min-h-screen bg-warm-white mt-[4.5rem]">
        {/* Header */}
        <div style={{
    // backgroundImage: `url(${IMGS.blog_background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }} className="py-6 px-4 md:px-16 bg-charcoal text-center">
          <SectionLabel light className="justify-center">From the Studio</SectionLabel>
          <h1 className="font-cormorant text-[clamp(2rem,4vw,3.2rem)] font-light text-cream leading-tight mb-3">
            The <em className="italic text-clay-light">Journal</em>
          </h1>
          <p className="text-base text-white/60 max-w-[420px] md:max-w-[600px] mx-auto leading-[1.9]">
            Stories, reflections, and craft notes from the kiln at Dharamshala.
          </p>
        </div>

        {/* Category filter */}
        <div className="sticky top-[72px] z-30 bg-warm-white border-b border-black/10 px-4 md:px-16">
          <div className="flex gap-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            {ALL_CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`text-[0.88rem] tracking-[0.17em] uppercase px-5 py-3 bg-transparent border-none border-b-2 -mb-px cursor-pointer font-jost transition-colors flex-shrink-0
                  ${active === cat ? "text-clay border-clay" : "text-stone border-transparent hover:text-clay"}`}
              >{cat}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="px-4 md:px-16 py-14 max-w-[1400px] mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-stone py-20 text-base">No posts in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map(post => <PostCard key={post.slug} post={post} />)}
            </div>
          )}

          {/* Older entries link placeholder */}
          <div className="mt-12 border-t border-black/10 pt-8">
            <span className="text-[0.72rem] tracking-[0.1em] text-stone font-jost">« Older Entries</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
