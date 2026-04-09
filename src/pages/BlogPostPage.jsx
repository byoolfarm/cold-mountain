// src/pages/BlogPostPage.jsx  —  route: /blog/:slug
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { POSTS } from "../data/blog";
import * as IMGS from "../assets/img";
import { SectionLabel } from "../components/ui";

export default function BlogPostPage() {
  const { slug }  = useParams();
  const post      = POSTS.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Update page meta for this specific post
  if (typeof document !== "undefined") {
    document.title = `${post.title} — The Cold Mountain Studio`;
  }

  const img         = IMGS[post.imgKey];
  const otherPosts  = POSTS.filter(p => p.slug !== slug).slice(0, 3);

  // Render body — paragraphs separated by double newlines, **bold** inline
  const renderBody = (text) => {
    return text.split("\n\n").map((para, i) => {
      // Handle **bold** markdown
      const parts = para.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={j} className="font-medium text-charcoal-dark">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return (
        <p key={i} className="text-[1.05rem] md:text-[1.12rem] leading-[1.8] text-earth-light/95 mb-8 font-light tracking-wide">
          {rendered}
        </p>
      );
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-warm-white pb-20 pt-[4.5rem]">
        <div className="w-full h-[30vh] md:h-[40vh] overflow-hidden">
          <img 
            src={img} 
            alt={post.title} 
            className="w-full h-full object-cover brightness-[0.9]"
            style={{ objectPosition: post.imgPos || "center" }}
          />
        </div>

        {/* Header Block */}
        <header className="max-w-[1100px] mx-auto px-6 pt-12 pb-4 text-center">
          {/* Meta Info */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-clay font-jost font-medium">
              {post.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-stone/30" />
            <span className="text-[0.8rem] tracking-wide text-stone font-jost">{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-stone/30" />
            <span className="text-[0.8rem] tracking-wide text-stone font-jost">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-[clamp(2.2rem,5vw,3.5rem)] font-light text-charcoal leading-[1.1] mb-4 max-w-[900px] mx-auto">
            {post.title}
          </h1>

          {/* Author if exists */}
          {post.author && (
            <div className="flex flex-col items-center gap-1 mt-6">
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-stone/60 font-jost">Written by</span>
              <span className="font-cormorant italic text-[1.1rem] text-charcoal">{post.author}</span>
            </div>
          )}
        </header>

        {/* Article content */}
        <article className="max-w-[760px] mx-auto px-6 pb-16 md:pb-24">
          <div className="prose-custom">
            {renderBody(post.body)}
          </div>

          {/* Back link */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <Link to="/blog"
              className="text-[0.8rem] tracking-[0.14em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
            >← Back to Journal</Link>
          </div>
        </article>

        {/* More posts */}
        {otherPosts.length > 0 && (
          <div className="px-4 md:px-16 pb-20 max-w-[1400px] mx-auto">
            <div className="border-t border-black/10 pt-12 mb-8">
              <SectionLabel>Continue Reading</SectionLabel>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherPosts.map(p => {
                const pImg = IMGS[p.imgKey];
                return (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="group no-underline flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={pImg} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                    </div>
                    <div className="p-5">
                      <span className="text-[0.70rem] tracking-[0.18em] uppercase text-clay font-jost block mb-2">{p.category}</span>
                      <h3 className="font-cormorant text-[1.05rem] text-charcoal leading-snug group-hover:text-clay transition-colors">{p.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
