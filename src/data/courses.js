// ─────────────────────────────────────────────────────────────────────────────
// src/data/courses.js
// All course data. Images imported in the consuming component via images.js.
// ─────────────────────────────────────────────────────────────────────────────

export const COURSES = [
  {
    num: "01", 
    slug: "pottery-retreat",
    imgKey: "course_retreat",
    name: "The Pottery Retreat: A Prayer of Appreciation", 
    tag: "Residential", 
    tagStyle: "clay",
    duration: "3 – 13 Days · Food & Stay Included",
    desc: "A quiet interval between the mountains and the clay, where time slows down to the speed of your own hands.",
    landingPointers: [
      "Slow mountain living",
      "Short-stay flexibility (3-13 days)",
      "Wheel throwing & hand-building",
      "Finished pieces (cups, bowls, plates)"
    ],
    fullContent: {
      overview: "The Pottery Retreat at The Cold Mountain Studio is designed for those who seek a creative sanctuary without the pressure of a long-term commitment. Whether you are an absolute beginner wanting to touch clay for the first time, or a seasoned potter looking for a silent space to breathe, this retreat acts as a \"prayer of appreciation\" for the craft and the landscape.",
      experience: {
        title: "The Experience",
        details: [
          { title: "Instruction", text: "A gentle introduction to both wheel throwing and hand-building techniques." },
          { title: "The Daily Rhythm", text: "Studio hours are from 11:00 am to 5:00 pm. We balance supervised instruction with unsupervised practice to let your intuition lead. You are expected to spend a minimum of four hours each day practising pottery, while the remaining hours are yours to use for personal reflection or exploration." },
          { title: "The Project", text: "Depending on the length of your stay, we help guide you through specific pieces—such as a cup, bowl, or plate—taking them from raw clay to finished form." },
          { title: "The Result", text: "We will fire any of your chosen pieces at ₹250 per piece (up to six pieces) and ₹800 per kilo for orders above six pieces." }
        ]
      },
      inclusions: ["All professional instruction", "All clay, materials, tools", "Homemade fresh meals", "High-speed Wi-Fi", "On-site or near-site stay"],
      pricing: [
        { 
          name: "Option 1: The Cold Mountain Retreat", 
          desc: "A short walk from the studio, offering a cosy, communal atmosphere.",
          options: [{ label: "Single Occupancy", val: "₹6,500" }, { label: "Sharing Basis", val: "₹4,500" }], 
          note: "per person per day (+18% GST)" 
        },
        { 
          name: "Option 2: Byool Farm Stay (On-Site)", 
          desc: "A premium cottage directly on the farm heartbeat.",
          options: [{ label: "Single Occupancy", val: "₹8,100" }, { label: "Sharing Basis", val: "₹6,600" }], 
          note: "per person per day (+18% GST)" 
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "02", 
    slug: "fortnight-course",
    imgKey: "course_fortnight",
    name: "A Fortnight with Clay: Beginner’s Course", 
    tag: "Residential", 
    tagStyle: "clay",
    duration: "14 Days · Food & Stay Included",
    desc: "Two weeks of rhythm and mud—a transition from curiosity to creation in the heart of the mountains.",
    landingPointers: [
      "Foundations of the wheel ",
      "Hand-building techniques",
      "Understanding types of clay",
      "Cosy mountain stay"
    ],
    fullContent: {
      overview: "Situated amidst the beautiful Byool Farm, we offer you an authentic mountain experience as you explore your creative side at The Cold Mountain Studio. This course is designed for the curious. Whether you wish to learn the foundations of the wheel or experiment with hand-building, our instructors guide you through the entire lifecycle of a pottery studio—from raw clay to finished, fired pieces.",
      experience: {
        title: "The Experience",
        details: [
          { title: "The Daily Rhythm", text: "Studio hours are from 11:00 am to 5:00 pm. We balance supervised instruction with unsupervised practice. Minimum of six hours daily practice expected." },
          { title: "Instruction", text: "Comprehensive guidance on wheel throwing and hand-building." },
          { title: "The Result", text: "Students may choose to fire their own work at a rate of ₹800 per kg." }
        ]
      },
      inclusions: ["Professional instruction", "All clay & materials", "Three homemade meals daily", "High-speed Wi-Fi & Laundry", "On-site accommodation"],
      pricing: [
        { 
          name: "Option 1: The Cold Mountain Retreat", 
          options: [{ label: "Single", val: "₹72,800" }, { label: "Sharing", val: "₹63,000" }],
          note: "+18% GST"
        },
        { 
          name: "Option 2: Byool Farm Stay (On-Site)", 
          options: [{ label: "Single", val: "₹96,600" }, { label: "Sharing", val: "₹70,000" }],
          note: "+18% GST"
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "03", 
    slug: "monthly-course",
    imgKey: "course_monthly",
    name: "Monthly Course: Deepen Your Practice", 
    tag: "Residential", 
    tagStyle: "clay",
    duration: "30 Days · Food & Stay Included",
    desc: "A thirty-day immersion designed to transform your relationship with clay through dedicated research and technical mastery.",
    landingPointers: [
      "30-day dedicated research",
      "Technical mastery focus",
      "Project-based mentorship",
      "Himalayan landscape exploration"
    ],
    fullContent: {
      overview: "Our Monthly Course is an invitation to go deeper. Whether you are a beginner looking for a solid foundation or an intermediate potter seeking to refine specific techniques, this 30-day residency provides the time and space necessary for true growth.",
      experience: {
        title: "The Experience",
        details: [
          { title: "The Daily Rhythm", text: "Studio hours 11:00 am to 5:00 pm. Balance of supervised instruction and unsupervised practice (minimum 6 hours daily)." },
          { title: "Curriculum", text: "Tailored guidance on wheel throwing, hand-building, and project-based research." },
          { title: "The Result", text: "Fire your selected works at a rate of ₹800 per kg." }
        ]
      },
      inclusions: ["Full studio access", "Mentorship guidance", "All meals included", "High-speed Wi-Fi", "Accommodation"],
      pricing: [
        { 
          name: "Option 1: The Cold Mountain Retreat", 
          options: [{ label: "Single", val: "₹1,36,500" }, { label: "Sharing", val: "₹96,000" }],
          note: "+18% GST"
        },
        { 
          name: "Option 2: Byool Farm Stay (On-Site)", 
          options: [{ label: "Single", val: "₹1,80,000" }, { label: "Sharing", val: "₹1,35,000" }],
          note: "+18% GST"
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "04", 
    slug: "three-month-course",
    imgKey: "course_3months",
    name: "Three-Month Course: The Potter’s Journey", 
    tag: "Residential", 
    tagStyle: "clay",
    duration: "90 Days · Full Immersion",
    desc: "A ninety-day seasonal immersion designed to bridge the gap between student and practitioner through technical discipline.",
    landingPointers: [
      "90-day seasonal residency",
      "Career-focused training",
      "Alchemy of glazes & structural integrity",
      "Teacher training & portfolio development"
    ],
    fullContent: {
      overview: "The Three-Month Course is our most intensive residency, specifically designed for those wishing to pursue pottery as a career or significantly elevate their artistic practice. This 90-day journey is suitable for absolute beginners as it starts from basic forms, diving into the alchemy of glazes, the structural integrity of clay, and the nuances of various firing styles.",
      experience: {
        title: "The Experience",
        details: [
          { title: "Duration", text: "90 days including 12 optional days off for rest or exploration." },
          { title: "Curriculum", text: "Advanced Wheel Throwing, Hand-building & Sculpture, Technical Science (Glazes/Kilns), and Teacher training." },
          { title: "Daily Rhythm", text: "Intensive practice sessions allowing for complete immersion in the medium." }
        ]
      },
      inclusions: ["Professional instruction", "All clay, materials, tools", "Fresh homemade meals", "Laundry & Wi-Fi", "Premium accommodation"],
      pricing: [
        { 
          name: "Option 1: The Cold Mountain Retreat", 
          options: [{ label: "Single", val: "₹3,75,500" }, { label: "Sharing", val: "₹2,25,000" }],
          note: "+18% GST"
        },
        { 
          name: "Option 2: Byool Farm Stay (On-Site)", 
          options: [{ label: "Enquire", val: "Contact for Pricing" }],
          note: "Premium cottage stay"
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "05", 
    slug: "advanced-intensive",
    imgKey: "course_advanced",
    name: "Advanced Pottery Intensive", 
    tag: "Specialised", 
    tagStyle: "dark",
    duration: "14 Days · Customisable",
    desc: "A technical deep dive designed for the seasoned potter to challenge boundaries and master elemental forces.",
    landingPointers: [
      "Highly customisable curriculum",
      "Large-scale form assembly",
      "Advanced surface & texture techniques",
      "Alternative firing (Raku, Saggar, Pit)"
    ],
    fullContent: {
      overview: "The Advanced Pottery Intensive at The Cold Mountain Studio is a rigorous, two-week programme created for practitioners who have moved past the basics and are ready to push the physical and conceptual limits of clay. It is highly customisable for individuals or small groups.",
      experience: {
        title: "The Experience",
        details: [
          { title: "Duration", text: "14 Days (Customisable for groups)." },
          { title: "Curriculum Focus", text: "Large-Scale Forms, Surface & Texture (sgraffito, slip-trailing), Glaze Chemistry, and Alternative Firing." },
          { title: "Instruction", text: "All professional instruction tailored to your specific focus." }
        ]
      },
      inclusions: ["Tailored instruction", "Full studio access", "Specialised raw materials", "Three meals daily", "Accommodation included"],
      pricing: [
        { 
          name: "Base Fee", 
          options: [{ label: "Enquiry", val: "Available upon request" }],
          note: "+18% GST. Firing & Shipping charged separately."
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "06", 
    slug: "glaze-course",
    imgKey: "course_glaze",
    name: "Glaze Course: The Science of Surface", 
    tag: "Specialised", 
    tagStyle: "dark",
    duration: "10 Days · Specialised",
    desc: "Take full control of your ceramic practice by mastering the alchemy of the kiln and glaze chemistry.",
    landingPointers: [
      "Master glaze alchemy from scratch",
      "Identify minerals and oxides",
      "Cone 10 (1300°C) firings",
      "Oxidation & Reduction atmospheres"
    ],
    fullContent: {
      overview: "This intensive 10-day residency is designed to demystify glaze chemistry, moving you away from commercial \"bottled\" solutions and toward a deep, technical understanding of your own surfaces. In collaboration with guest instructor Tinni Arora.",
      experience: {
        title: "The Experience",
        details: [
          { title: "The Chemistry", text: "Identify minerals and oxides, and understand their interactions at high temperatures." },
          { title: "The Environment", text: "Gain rare experience with Cone 10 firings in both Oxidation and Reduction atmospheres." },
          { title: "The Practicality", text: "Develop a personal library of recipes and learn to troubleshoot surface defects." }
        ]
      },
      inclusions: ["8 Hours Daily Instruction", "All glaze materials", "Stoneware test tiles", "Meals & Accommodation", "Professional analysis"],
      pricing: [
        { 
          name: "Investment", 
          options: [{ label: "Shared Room", val: "₹90,000" }, { label: "Single Occupancy", val: "₹1,10,000" }],
          note: "+18% GST"
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "07", 
    slug: "fire-festival",
    imgKey: "course_fire",
    name: "Fire Festival: A Celebration of Clay & Flame", 
    tag: "Event", 
    tagStyle: "dark",
    duration: "4 Days · Residential Event",
    desc: "A collective gathering of artists exploring the raw magic of alternative low-firing techniques.",
    landingPointers: [
      "Collaborative elemental event",
      "Raku, Obvara, Pit & Saggar firing",
      "Spectacular real-time transformation",
      "Community of craft celebration"
    ],
    fullContent: {
      overview: "The Fire Festival is not a formal workshop—it is a collective gathering of artists and enthusiasts coming together to explore the raw magic of fire. Together, we will explore the raw beauty of alternative low-firing techniques including Raku, Obvara, Pit, and Saggar firing.",
      experience: {
        title: "The Experience",
        details: [
          { title: "Techniques", text: "Dive deep into Raku, Obvara (Baltic Raku), Pit, and Foil Saggar firing." },
          { title: "For Potters", text: "Experiment & Shared Craft. Bring burnished bisque-fired pieces." },
          { title: "For Enthusiasts", text: "Witness the dramatic \"unveiling\" as pieces are pulled glowing from the kilns." }
        ]
      },
      inclusions: ["Seasonal meals site-prepared", "Alternative firing glazes", "Equipment access", "Community energy"],
      pricing: [
        { 
          name: "Participation", 
          options: [{ label: "Enquire", val: "DM or Email for slots" }],
          note: "Stay options at Byool Farm or CMR"
        },
      ]
    },
    hasAccom: true,
  },
  {
    num: "08", 
    slug: "day-sessions",
    imgKey: "course_nrd",
    name: "Hands in Clay: Day Pottery Sessions", 
    tag: "Non-Residential", 
    tagStyle: "earth",
    duration: "Full Day or Half Day",
    desc: "From the meditative rhythm of the wheel to the structural art of hand-building, spend your day shaping clay.",
    landingPointers: [
      "Meditative wheel rhythm",
      "Structural hand-building art",
      "Professional finishing service",
      "Includes wholesome studio lunch"
    ],
    fullContent: {
      overview: "Whether you’re a local resident or just passing through, our studio doors are open for a day of tactile creativity. Spend your day shaping clay in a serene, professional environment.",
      experience: {
        title: "The Experience",
        details: [
          { title: "Expert Guidance", text: "Our instructors teach fundamental techniques to beginners or provide technical advice to seasoned potters." },
          { title: "Flexible Pace", text: "Experienced artists are welcome to use the space and equipment for independent projects." },
          { title: "Professional Finishing", text: "Once your pieces are dry, we offer firing services and can arrange shipping." }
        ]
      },
      inclusions: ["All clay & tools", "Apron provided", "Relaxed farm-to-table lunch", "Technical advice"],
      pricing: [
        { 
          name: "Full Day (11 AM – 5 PM)", 
          options: [{ label: "Investment", val: "₹3,000" }],
          note: "Includes lunch (+18% GST)"
        },
        { 
          name: "Half Day (2 PM – 5 PM)", 
          options: [{ label: "Investment", val: "₹1,800" }],
          note: "Afternoon reset (+18% GST)"
        },
      ]
    },
    hasAccom: false,
  },
  {
    num: "09", 
    slug: "monthly-membership",
    imgKey: "course_nrm",
    name: "The Potter’s Immersion: Monthly Studio Membership", 
    tag: "Non-Residential", 
    tagStyle: "earth",
    duration: "Mon – Fri · 11 AM – 5 PM",
    desc: "Transform your passion into a daily practice with consistent access to our professional space and mentorship.",
    landingPointers: [
      "Daily studio access (Mon-Fri)",
      "25 kg clay included monthly",
      "Balanced guided & open practice",
      "Professional studio environment"
    ],
    fullContent: {
      overview: "Designed specifically for local residents and dedicated creators, our monthly membership offers the ultimate deep dive into the world of ceramics. Transform your passion into a daily practice with consistent access to our professional space and expert mentorship.",
      experience: {
        title: "Membership Details",
        details: [
          { title: "Access", text: "Full daily studio access (11 AM – 5 PM) throughout the month." },
          { title: "Instruction", text: "Unlimited access with a balanced blend of guided instruction and open practice time." },
          { title: "Self-Management", text: "Members are responsible for recycling and managing their clay to foster a professional environment." }
        ]
      },
      inclusions: ["Daily wheel access", "25 kg clay included", "Glazing guidance", "Storage shelf", "Studio mentorship"],
      pricing: [
        { 
          name: "Membership Fee", 
          options: [{ label: "Per Person", val: "₹40,000" }],
          note: "+18% GST. Firing charges apply separately at ₹800/kg."
        },
      ]
    },
    hasAccom: false,
  },
];
