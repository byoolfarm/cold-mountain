// ─────────────────────────────────────────────────────────────────────────────
// src/data/reviews.js
// Real Google reviews sourced from Byool Farm Stay / The Cold Mountain Studio.
// The testimonials section mirrors the layout in the screenshot:
//   - left panel:  aggregate rating + "powered by Google" + review button
//   - right panel: scrollable individual review cards
// ─────────────────────────────────────────────────────────────────────────────

// Aggregate from Google (as shown in the screenshot)
export const AGGREGATE = {
  name: "Cold Mountain Studio",
  rating: 5,
  total: 23,
  googleReviewUrl:
    "https://www.google.com/maps/place/The+Cold+Mountain+Studio/@32.1513949,76.38598,17z/data=!4m8!3m7!1s0x391b518d9bb8db8f:0xd25aa870873a0de1!8m2!3d32.1513949!4d76.3885549!9m1!1b1!16s%2Fg%2F11rf6m6p25?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D",
};

// Individual reviews — 5-star reviews with a url for redirection
export const REVIEWS = [
  {
    id: 1,
    name: "Francesca Eyre",
    initials: "FE",
    color: "#b87b5a",
    rating: 5,
    timestamp: "2026-03-19",
    text: "We gave Lakhan a huge challenge and he rose to it!                        2 friends with their own studios, desperate to learn and achieve bigger goals.  We went on a month's AWFUL course last year in the south of India, near Bangalore and we were determined not to repeat the experience.  We really researched Cold Mountain.  We wanted an enamel course, learn to be confident throwing bigger weights (9kgs total),Raku, Obvarra, to laugh and enjoy the new challenges that we don't dare do in our own studios.  Every day we were ready for the tasks.  We headed to the studio straight after breakfast, right through to the early evenings.  We were never ushered out of the studio, instead we could finish our work in peace, whilst we were serenaded by the cows, chickens and goats living next door- before heading back to our spacious bedrooms.  A quick shower and then into the dining room for a really yummy supper.  I'm a chef and the food is really good at Cold Mountain.  Varied and lots of home grown vegetables and herbs.  The chefs are also a delight... in fact all the team were smily, friendly and very helpful. So yes, as a confident potter, I loved this school - Sorry Lakhan, I think we exhausted you!!!!",
    url: "https://maps.app.goo.gl/tMcYxD81nQ5bbLWZ8",
  },
  {
    id: 2,
    name: "Nupur DeTar",
    initials: "ND",
    color: "#5c4a3a",
    rating: 5,
    timestamp: "2026-03-12",
    text: "Absolutely loved my 2 weeks at Cold Mountain. Lakhan is an excellent, patient and well informed teacher. It was a huge learning curve for me. Byool farm, is a very comfortable cottage, the meals are all well prepared and delicious, the staff is welcoming and helpful. I also loved the 4 gorgeous dogs, the constant banter of chickens, goats and cows next to the pottery studio. The stunning peaks are a treat to see everyday. 10/10 in every way. 😊",
    url: "https://maps.app.goo.gl/fqv24AYjxwv2wKSJA",
  },
  {
    id: 3,
    name: "Arvind Kangotra (Happy)",
    initials: "AK",
    color: "#8a7060",
    rating: 5,
    timestamp: "2026-03-09",
    text: "This café is truly a hidden gem nestled in a peaceful location with a breathtaking view of the majestic Dhauladhar Range. The serene mountain backdrop creates the perfect atmosphere to relax, unwind, and enjoy quality time with friends or family.\n\nThe coffee deserves a special mention — rich, aromatic, and perfectly brewed. Every cup is fresh, flavorful, and comforting, perfectly complementing the cool mountain breeze and peaceful surroundings.\n\nOne of the most unique and beautiful aspects of this place is the pottery institute inside the café. It adds a creative and artistic charm to the entire experience. Seeing handcrafted pottery and the artistic vibe around makes the visit even more special. It’s not just a café; it’s a space where art, nature, and comfort come together.\n\nIf you’re looking for a peaceful mountain-view café with amazing coffee, artistic vibes, and heartfelt hospitality, this place is a must-visit. Highly recommended! ☕🏔️✨",
    url: "https://maps.app.goo.gl/b2KoLNt8uXBCoRt4A",
  },
  {
    id: 4,
    name: "Tihany Sengupta",
    initials: "TS",
    color: "#2a2420",
    rating: 5,
    timestamp: "2024-04-09",
    text: "The Glaze workshop conducted by Tinni Arora and facilitated by The cold mountain studio has been so fulfilling. Highly recommend it to all budding and full time potters to explore the in-depth and detailed course. It's going to change the way we think about your art and build on your artistry.",
    url: "https://maps.app.goo.gl/p1SssckseCWsdYEz9",
  },
  {
    id: 5,
    name: "Álvaro Jacobo Casas",
    initials: "ÁJ",
    color: "#b87b5a",
    rating: 5,
    timestamp: "2022-04-09",
    text: "I was lucky to find this place when I got interested into pottery. I didn't just learned from people with different points of view but I also got to live in the quiet Byool Farm and enjoy homegrown vegetables for my meals.\nGood people, good food and good environment!",
    url: "https://maps.app.goo.gl/dwMnSxRhdEYSzguz5",
  },
  {
    id: 6,
    name: "Cynthia Lewis",
    initials: "CL",
    color: "#8c5a3c",
    rating: 5,
    timestamp: "2023-04-09",
    text: "Cold Mountain Studio is the best possible place you could start your journey into ceramics. Whether you're just trying it out or looking to discover your own creative voice, here you'll be given everything you need. A beautiful setting, wonderful and interesting people and most of all a wealth of knowledge and experience in the craft itself. I spent three months here just soaking it all in and left with a strong foundation in wheel throwing and handbuilding, and friends for life 💜",
    url: "https://maps.app.goo.gl/baSD5N6YHAacQe5W8",
  },
];
