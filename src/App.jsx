// src/App.jsx  —  Root Router
// ─────────────────────────────────────────────────────────────────────────────
// All routes are declared here. Adding a new page = one new <Route />.
// Pages are lazy-loaded so the initial bundle stays small.
//
// Routes:
//   /               →  LandingPage
//   /shop           →  ShopPage
//   /work           →  WorkPage   (Our Work gallery)
//   /blog           →  BlogPage
//   /blog/:slug     →  BlogPostPage
//   /about          →  AboutStudioPage
//   /about/lakhan   →  LakhanPage
//   /about/swapna   →  SwapnaPage
//   *               →  redirect   → /
// ─────────────────────────────────────────────────────────────────────────────

import { lazy, Suspense } from "react";
import { IS_SHOP_ENABLED } from "./config";

import { Analytics } from "@vercel/analytics/react"
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-loaded pages — each page (and its images) only loads when navigated to
const LandingPage      = lazy(() => import("./pages/LandingPage"));
const ShopPage         = lazy(() => import("./pages/ShopPage"));
const WorkPage         = lazy(() => import("./pages/WorkPage"));
const BlogPage         = lazy(() => import("./pages/BlogPage"));
const BlogPostPage     = lazy(() => import("./pages/BlogPostPage"));
const LakhanPage       = lazy(() => import("./pages/about/LakhanPage"));
const SwapnaPage       = lazy(() => import("./pages/about/SwapnaPage"));
const ColdMountainStay = lazy(() => import("./pages/Stay"));
const AboutStudioPage  = lazy(() => import("./pages/About"));
const DayAtFarmPage    = lazy(() => import("./pages/DayAtFarmPage"));
const ResidencyPage    = lazy(() => import("./pages/ResidencyPage"));
const CoursesPage      = lazy(() => import("./pages/CoursesPage"));
const CourseDetailPage  = lazy(() => import("./pages/CourseDetailPage"));
const ProductPage      = lazy(() => import("./pages/ProductPage"));
const CheckoutPage     = lazy(() => import("./pages/CheckoutPage"));
const ShopComingSoon   = lazy(() => import("./pages/ShopComingSoon"));


// Minimal loading indicator while a page chunk is fetched
function PageLoader() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f2ee",
    }}>
      <div style={{
        width: 28,
        height: 28,
        border: "2px solid #c9b99a",
        borderTopColor: "transparent",
        borderRadius: "50%",
        animation: "spin 0.7s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Toaster 
        position="top-center"
        containerStyle={{
          top: 80,
        }}
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#1c1c1c',
            border: '1px solid #neutral-200',
            borderRadius: '1rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            padding: '1rem 1.5rem',
          },
          success: {
            iconTheme: {
              primary: '#b87b5a',
              secondary: '#ffffff',
            },
          },
        }}
      />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
      <Analytics/>
        <Routes>
          <Route path="/"                          element={<LandingPage />} />
          <Route path="/shop"                      element={IS_SHOP_ENABLED ? <ShopPage /> : <ShopComingSoon />} />

          <Route path="/work"                      element={<WorkPage />} />
          <Route path="/about"                     element={<AboutStudioPage />} />
          <Route path="/stay/cold-mountain-retreat" element={<ColdMountainStay />} />
          <Route path="/blog"                      element={<BlogPage />} />
          <Route path="/blog/:slug"                element={<BlogPostPage />} />
          <Route path="/about/lakhan"              element={<LakhanPage />} />
          <Route path="/about/swapna"              element={<SwapnaPage />} />
          <Route path="/day-at-byool-farm"         element={<DayAtFarmPage />} />
          <Route path="/residency"                  element={<ResidencyPage />} />
          <Route path="/courses"                    element={<CoursesPage />} />
          <Route path="/courses/:slug"              element={<CourseDetailPage />} />
          <Route path="/shop/:id"                  element={IS_SHOP_ENABLED ? <ProductPage /> : <Navigate to="/shop" replace />} />
          <Route path="/checkout"                  element={IS_SHOP_ENABLED ? <CheckoutPage /> : <Navigate to="/shop" replace />} />

          <Route path="*"                          element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
