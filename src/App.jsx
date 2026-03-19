// src/App.jsx  —  Root Router
// ─────────────────────────────────────────────────────────────────────────────
// All routes are declared here. Adding a new page = one new <Route />.
//
// Routes:
//   /               →  LandingPage
//   /shop           →  ShopPage
//   /work           →  WorkPage   (Our Work gallery)
//   /blog           →  BlogPage
//   /blog/:slug     →  BlogPostPage
//   /about          →  redirect   → /about/lakhan
//   /about/lakhan   →  LakhanPage
//   /about/swapna   →  SwapnaPage
//   *               →  redirect   → /
// ─────────────────────────────────────────────────────────────────────────────

import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage  from "./pages/LandingPage";
import ShopPage     from "./pages/ShopPage";
import WorkPage     from "./pages/WorkPage";
import BlogPage     from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import LakhanPage   from "./pages/about/LakhanPage";
import SwapnaPage   from "./pages/about/SwapnaPage";
import ColdMountainStay from "./pages/stay"
import AboutStudioPage from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
export default function App() {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      
      <Route path="/"               element={<LandingPage />} />
      <Route path="/shop"           element={<ShopPage />} />
      <Route path="/work"           element={<WorkPage />} />
      <Route path="/about"           element={<AboutStudioPage />} />
      <Route path="/stay/cold-mountain-retreat"   element={<ColdMountainStay/>} />
      <Route path="/blog"           element={<BlogPage />} />
      <Route path="/blog/:slug"     element={<BlogPostPage />} />
      <Route path="/about"          element={<Navigate to="/about/lakhan" replace />} />
      <Route path="/about/lakhan"   element={<LakhanPage />} />
      <Route path="/about/swapna"   element={<SwapnaPage />} />
      <Route path="*"               element={<Navigate to="/" replace />} />

    </Routes>
  </>

  );
}
