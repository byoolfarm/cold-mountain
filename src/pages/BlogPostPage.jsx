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
          return <strong key={j} className="font-medium text-charcoal">{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      return (
        <p key={i} className="text-[0.88rem] leading-[1.9] text-earth-light mb-5">
          {rendered}
        </p>
      );
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-warm-white mt-[4.5rem]">
        {/* Hero image */}
        <div className="w-full h-[100vh] aspect-[21/9] overflow-hidden">
          <img src={img} alt={post.title} className="w-full h-full object-cover brightness-[0.75]" />
        </div>

        {/* Article */}
        <article className="max-w-[720px] mx-auto px-6 py-16">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[0.6rem] tracking-[0.2em] uppercase text-clay font-jost">{post.category}</span>
            <span className="text-stone">·</span>
            <span className="text-[0.9rem] text-stone font-jost">{post.date}</span>
            <span className="text-stone">·</span>
            <span className="text-[0.9rem] text-stone font-jost">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1 className="font-cormorant text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-charcoal leading-tight mb-8">
            {post.title}
          </h1>

          {/* Divider */}
          <div className="w-12 h-px bg-clay mb-8" />

          {/* Body */}
          <div>{renderBody(post.body)}</div>

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
