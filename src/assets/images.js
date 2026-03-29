// src/assets/images.js
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for ALL images used in the app.
// Every image lives in src/assets/images/ as a proper .jpg / .png file.
// Vite handles hashing, lazy-loading, and build optimisation automatically.
//
// NAMING CONVENTION
// ─────────────────
//   logo              — nav + footer logo (PNG, transparent background)
//   slide_*           — hero carousel slides (4 images)
//   course_*          — one image per course card (9 images)
//   room_*            — accommodation room photos
//   retreat_wide      — wide landscape: retreat banner bg + farmstay strip
//   studio_split      — studio split section image
//   footer_bg         — footer background
//   shop_*            — shop product images (teaser section)
//   work_product_*    — Our Work page: product/ceramics shots
//   work_studio_*     — Our Work page: studio process shots
//
// TO SWAP AN IMAGE: replace the .jpg/.png file in src/assets/images/
// and the change propagates everywhere automatically.
// ─────────────────────────────────────────────────────────────────────────────

// ── Brand ────────────────────────────────────────────────────────────────────
export { default as logo }          from "./images/logo.png";

// ── Hero carousel ────────────────────────────────────────────────────────────
export { default as slide_farm }     from "./images/slide_farm.jpg";
export { default as slide_wheel }    from "./images/slide_wheel.jpg";
export { default as slide_students } from "./images/slide_students.jpg";
export { default as slide_studio }   from "./images/slide_studio.jpg";

// ── Course cards ─────────────────────────────────────────────────────────────
export { default as course_retreat }   from "./images/course_retreat.jpg";
export { default as course_fortnight } from "./images/course_fortnight.jpg";
export { default as course_monthly }   from "./images/course_monthly.jpg";
export { default as course_3months }   from "./images/course_3months.jpg";
export { default as course_advanced }  from "./images/course_advanced.jpeg";
export { default as course_glaze }     from "./images/course_glaze.jpeg";
export { default as course_fire }      from "./images/course_fire.jpg";
export { default as course_nrd }       from "./images/course_nrd.jpeg";
export { default as course_nrm }       from "./images/course_nrm.jpg";

// ── Accommodation ────────────────────────────────────────────────────────────
export { default as room_1 }       from "./images/room_1.jpg";
export { default as room_2 }       from "./images/room_2.jpg";
export { default as retreat_wide } from "./images/retreat_wide.jpg";

// ── Studio sections ──────────────────────────────────────────────────────────
export { default as studio_split } from "./images/studio_split.jpg";
export { default as footer_bg }    from "./images/footer_bg.jpg";

// ── Shop teaser (homepage) ───────────────────────────────────────────────────
export { default as shop_knobs }   from "./images/shop_knobs.jpg";
export { default as shop_mugs }    from "./images/shop_mugs.jpg";
export { default as shop_vessels } from "./images/shop_vessels.jpg";
export { default as shop_cups }    from "./images/shop_cups.jpg";
export { default as shop_custom }  from "./images/shop_custom.jpg";
export { default as shop_dinnerware }  from "./images/shop_dinnerware.jpg";
export { default as shop_drinkware }  from "./images/shop_drinkware.png";
export { default as shop_serverware  }  from "./images/shop_serverware.png";




// ── Our Work page — studio process shots ─────────────────────────────────────
export { default as work_studio_1 } from "./images/work_studio_1.jpg";
export { default as work_studio_2 } from "./images/work_studio_2.jpg";
export { default as work_studio_3 } from "./images/work_studio_3.jpg";
export { default as work_studio_4 } from "./images/work_studio_4.jpg";
export { default as work_studio_5 } from "./images/work_studio_5.jpg";

// ── Cold Mountain Retreat Stay — ────────────────────────────────────
export { default as cmr_common_lounge1 } from "./images/cmr_common_lounge1.jpeg";
export { default as cmr_common_lounge2 } from "./images/cmr_common_lounge2.jpeg";
export { default as cmr_coomon_lounge3 } from "./images/cmr_coomon_lounge3.jpeg";
export { default as cmr_single1 } from "./images/cmr_single1.jpeg";
export { default as cmr_single2 } from "./images/cmr_single2.jpeg";
export { default as cmr_single3 } from "./images/cmr_single3.jpeg";
export { default as cmr_view1 } from "./images/cmr_view1.jpeg";
export { default as cmr_view2 } from "./images/cmr_view2.jpeg";

// Byool Farm Stay
export { default as byool_stay1 } from "./images/byool_stay1.jpg";
export { default as byool_stay2 } from "./images/byool_stay2.jpg";
export { default as byool_stay3 } from "./images/byool_stay3.jpg";

//About 
export { default as about1 } from "./images/about1.jpg";
export { default as about2 } from "./images/about2.jpg";
export { default as about3 } from "./images/about3.jpg";
export { default as about_wallpaper } from "./images/about_wallpaper.jpg";

export { default as blog_background } from "./images/blog_background.jpg";
export { default as blog1 } from "./images/blog1.jpg";
export { default as blog2 } from "./images/blog2.jpg";
export { default as blog3 } from "./images/blog3.jpg";

//Work 
export { default as smp_1 } from "./images/smp-1.JPG";
export { default as smp_2 } from "./images/smp-2.jpg";
export { default as smp_3 } from "./images/smp-3.jpg";
export { default as smp_4 } from "./images/smp-4.JPG";
export { default as smp_5 } from "./images/smp-5.jpg";
export { default as smp_6 } from "./images/smp-6.jpg";
export { default as smp_7 } from "./images/smp-7.jpg";
export { default as smp_8 } from "./images/smp-8.jpg";
export { default as smp_9 } from "./images/smp-9.JPG";
export { default as smp_10 } from "./images/smp-10.jpg";
export { default as smp_11 } from "./images/smp-11.JPG";
export { default as smp_12 } from "./images/smp-12.jpg";
export { default as smp_13 } from "./images/smp-13.JPG";
export { default as smp_14 } from "./images/smp-14.jpg";
export { default as smp_15 } from "./images/smp-15.JPG";
export { default as smp_16 } from "./images/smp-16.JPG";

export { default as lakhan_portrait } from "./images/smp-16.JPG";
export { default as swapna_portrait } from "./images/smp-16.JPG";

export { default as lakhan_work2 } from "./images/lakhan_work2.jpg";
export { default as lakhan_work3 } from "./images/lakhan_work3.jpg";
export { default as lakhan_work4 } from "./images/lakhan_work4.jpg";
export { default as lakhan_work5 } from "./images/lakhan_work5.jpg";
export { default as lakhan_work6 } from "./images/lakhan_work6.jpg";
export { default as lakhan_work7 } from "./images/lakhan_work7.jpg";
export { default as lakhan_work8 } from "./images/lakhan_work8.JPG";
export { default as lakhan_work9 } from "./images/lakhan_work9.JPG";
export { default as lakhan_work10 } from "./images/lakhan_work10.jpg";