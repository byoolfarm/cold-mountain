// src/data/work.js
// ─────────────────────────────────────────────────────────────────────────────
// Data for the Our Work page (/work).
//
// WORK_CATEGORIES — filter tabs shown at the top of the page.
//
// WORK_ITEMS — each item represents one piece/project in the gallery.
//   imgKey   : must match a named export in src/assets/images.js
//   title    : piece name shown on hover/below image
//   category : must match one of the ids in WORK_CATEGORIES
//   medium   : short material description (optional)
//   year     : production year (optional)
//   featured : true → shown in the "Featured" filter and gets a larger grid cell
//
// TO ADD A PIECE:
//   1. Save the image to src/assets/images/work_*.jpg
//   2. Export it from src/assets/images.js
//   3. Add an entry below
// ─────────────────────────────────────────────────────────────────────────────

export const WORK_CATEGORIES = [
  { id: "all",        label: "All" },
  { id: "dinner", label: "Dinnerware" },
  { id: "drink", label: "Drinkware" },
  { id: "serve",    label: "Serveware" },
  { id: "home",     label: "Home Decor" },
];

export const WORK_ITEMS = [
  {
    id: 1,
    imgKey:   "smp_1",
    title:    "Studio Mugs — Morning Series",
    category: "dinner",
    medium:   "Stoneware, matte celadon glaze",
    year:     "2024",
    featured: true,
  },
  {
    id: 2,
    imgKey:   "smp_2",
    title:    "Vessel Collection",
    category: "dinner",
    medium:   "Stoneware, ash glaze",
    year:     "2024",
    featured: true,
  },
  {
    id: 3,
    imgKey:   "smp_3",
    title:    "Ceramic Cabinet Knobs",
    category: "dinner",
    medium:   "Earthenware, coloured slips",
    year:     "2024",
    featured: false,
  },
  {
    id: 4,
    imgKey:   "smp_4",
    title:    "Tumblers — Natural Series",
    category: "dinner",
    medium:   "Stoneware, soda-fired",
    year:     "2023",
    featured: false,
  },
  {
    id: 5,
    imgKey:   "smp_5",
    title:    "Dinner Plates",
    category: "drink",
    medium:   "Stoneware, tenmoku glaze",
    year:     "2024",
    featured: false,
  },
  {
    id: 6,
    imgKey:   "smp_6",
    title:    "Nesting Bowls",
    category: "drink",
    medium:   "Stoneware, iron-oxide wash",
    year:     "2023",
    featured: true,
  },
  {
    id: 7,
    imgKey:   "smp_7",
    title:    "Large Form — Custom Commission",
    category: "drink",
    medium:   "Stoneware, reduction fired",
    year:     "2024",
    featured: false,
  },
  {
    id: 8,
    imgKey:   "smp_8",
    title:    "Glazing Day",
    category: "drink",
    medium:   "Studio documentation",
    year:     "2024",
    featured: false,
  },
  {
    id: 9,
    imgKey:   "smp_9",
    title:    "Shelf Life",
    category: "serve",
    medium:   "Studio documentation",
    year:     "2024",
    featured: false,
  },
  {
    id: 10,
    imgKey:   "smp_10",
    title:    "On the Wheel",
    category: "serve",
    medium:   "Studio documentation",
    year:     "2023",
    featured: true,
  },
  {
    id: 11,
    imgKey:   "smp_11",
    title:    "Student Work — Monthly Cohort",
    category: "serve",
    medium:   "Studio documentation",
    year:     "2024",
    featured: false,
  },
  {
    id: 12,
    imgKey:   "smp_12",
    title:    "Fire Festival 2024",
    category: "serve",
    medium:   "Raku and pit-firing",
    year:     "2024",
    featured: true,
  },
  {
    id: 13,
    imgKey:   "smp_13",
    title:    "Fire Festival 2024",
    category: "home",
    medium:   "Raku and pit-firing",
    year:     "2024",
    featured: true,
  },
  {
    id: 14,
    imgKey:   "smp_14",
    title:    "Fire Festival 2024",
    category: "home",
    medium:   "Raku and pit-firing",
    year:     "2024",
    featured: true,
  },
  {
    id: 15,
    imgKey:   "smp_15",
    title:    "Fire Festival 2024",
    category: "home",
    medium:   "Raku and pit-firing",
    year:     "2024",
    featured: true,
  },
  {
    id: 16,
    imgKey:   "smp_16",
    title:    "Fire Festival 2024",
    category: "home",
    medium:   "Raku and pit-firing",
    year:     "2024",
    featured: true,
  },
];
