import davies from "../assets/background.png";
import vfgt1 from "../assets/vfgt1.jpg";
import vfgt2 from "../assets/vfgt2.jpg";
import vfgt3 from "../assets/vfgt3.jpg";
import vfgt4 from "../assets/vfgt4.jpg";
import vfgt5 from "../assets/vfgt5.jpg";
import vfgt6 from "../assets/vfgt6.jpg";
import heroImage from "../assets/background.png";
import gallery2 from "../assets/background2.png";
import gallery3 from "../assets/background3.png";
import contour from "../assets/contourbg.png";

/* =========================
   HERO
========================= */
export const hero = {
  title: "Adventure starts here",
  subtitle:
    "Safaris, river escapes, and unforgettable experiences across Zambia, Zimbabwe, and beyond.",
  ctaText: null,
  ctaLink: null,
  backgroundImageUrl: davies,
};

/* =========================
   COMPANY INFO
========================= */

export const company = {
  name: "Zazu Adventures",
  tagline: "Tours, transfers, and holiday packages in Southern Africa.",
  summary:
    "Zazu Adventures plans and books practical travel services and curated experiences across Zimbabwe, Zambia, and Botswana - built around trusted local partners and clear, upfront communication.",
  whyUs: [
    "Local-first planning with vetted operators and guides.",
    "Clear inclusions, pickup details, and timing before you pay.",
    "Flexible, human support via WhatsApp and email.",
  ],
  contact: {
    phone: "+263 77 517 9744",
    whatsappLink: "https://wa.me/263775179744",
    email: "info@zazuadventures.com",
    base: "Victoria Falls, Zimbabwe",
  },
  notes: [
    "Prices shown are starting rates and can change based on season, pickup area, and group size.",
    "For multi-day packages, we confirm availability before final payment.",
  ],
};

/* =========================
   COMMON POLICIES
========================= */

export const commonPolicies = {
  cancellation:
    "Free cancellation up to 24 hours before start time. Same-day cancellations may be non-refundable depending on operator terms.",
  payment:
    "A deposit may be required to secure limited-availability activities and accommodation-based packages.",
  whatToBring:
    "Passport/ID, comfortable shoes, sun protection, and a light rain jacket during high-water months at Victoria Falls.",
};

/* =========================
   DESTINATIONS
========================= */

export const destinations = [
  {
    id: "victoria-falls",
    name: "Victoria Falls",
    country: "Zimbabwe",
    description:
      "Iconic waterfall adventures, rainforest walks, helicopter flights, and sunset cruises on the Zambezi.",
    bestTimeToVisit: "High water: March–May. Lower water: August–December.",
    size: "small",
    imageUrl: gallery2,
  },
  {
    id: "hwange",
    name: "Hwange National Park",
    country: "Zimbabwe",
    description:
      "Gateway to Victoria Falls on the Zambian side, with river cruises, cultural visits, and easy connections to national parks.",
    bestTimeToVisit:
      "May to October for drier weather and easier wildlife viewing; March to May for higher water.",
    size: "large",
    imageUrl: gallery3,
  },
  {
    id: "chobe",
    name: "Chobe",
    country: "Botswana",
    description:
      "Riverfront camps, canoe safaris, and game drives with big views of the Zambezi escarpment.",
    bestTimeToVisit:
      "June to October for peak wildlife viewing; shoulder months can be excellent.",
    size: "small",
    imageUrl: davies,
  },
  {
    id: "okavango-delta",
    name: "Okavango Delta",
    country: "Botswana",
    description: "Famous for walking safaris, leopards, and excellent guiding.",
    bestTimeToVisit:
      "June to October for safari season; November is hot and rainy season affects roads.",
    size: "large",
    imageUrl: davies,
  },
  {
    id: "kafue",
    name: "Kafue National Park",
    country: "Zambia",
    description:
      "Huge wilderness with floodplains, forests, and remote safari lodges.",
    bestTimeToVisit:
      "July to October for best access; some camps close in rainy season.",
    size: "large",
    imageUrl: davies,
  },
  {
    id: "zafue",
    name: "Zafue National Park",
    country: "Gambia",
    description:
      "Huge wilderness with floodplains, forests, and remote safari lodges.",
    bestTimeToVisit:
      "July to October for best access; some camps close in rainy season.",
    size: "small",
    imageUrl: davies,
  },
];

/* =========================
   ACTIVITIES
========================= */

export const activities = [
  {
    id: "guided-falls-tour",
    slug: "victoria-falls-guided-tour",

    type: "tour",
    category: "Guided Tours",

    // TITLE
    title: "Guided Tour of Victoria Falls",

    // QUICK INFO ROW
    duration: "2 Hours",
    groupSize: "1–50 People",
    activityType: "Guided Walking Tour",
    departureLocation: "Victoria Falls Rainforest Entrance",
    languages: ["English"],

    // DESTINATION
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",

    // PRICE
    price: 30,
    priceFrom: 30,
    childPriceFrom: 15,
    infantPriceFrom: 0,
    priceUnit: "per person",

    // REVIEWS
    rating: 4.7,
    reviews: 210,

    // SHORT DESCRIPTION
    shortDescription:
      "Discover the breathtaking beauty of Victoria Falls on a professionally guided rainforest walk featuring panoramic viewpoints, fascinating local stories, and unforgettable moments beside one of the world’s greatest natural wonders.",

    // SEO DESCRIPTION
    description:
      "Experience Victoria Falls on a guided walking tour through the rainforest with stunning viewpoints, local insights, and unforgettable scenery beside one of the Seven Natural Wonders of the World.",

    // GALLERY
    imageUrl: davies,
    gallery: [vfgt1, vfgt2, vfgt3, vfgt4, vfgt5, vfgt6],

    companyName: "Zazu Adventures",

    // HIGHLIGHTS
    highlights: [
      "Walk through the rainforest with a knowledgeable local guide who shares the history, legends, and geology behind Victoria Falls.",

      "Stop at several panoramic viewpoints where you can experience the full scale and power of the waterfall from different angles.",

      "Feel the cool spray and hear the thunder of the Zambezi River as millions of litres of water plunge into the gorge below.",

      "Learn about local wildlife, plant life, and the cultural importance of Victoria Falls to nearby communities.",

      "Capture incredible photographs of one of the Seven Natural Wonders of the World during the best viewing opportunities along the trail.",

      "Enjoy a relaxed walking experience suitable for couples, solo travellers, families, and nature lovers visiting Victoria Falls.",
    ],

    // FULL DESCRIPTION
    longDescription:
      "Experience the awe-inspiring beauty of Victoria Falls on a guided walking tour designed to immerse you in the wonder, power, and history of Africa’s most iconic waterfall.\n\nFollow scenic rainforest trails with an experienced local guide who brings the Falls to life through fascinating stories, historical insights, and knowledge of the region’s unique geology and wildlife.\n\nAs the thunder of cascading water echoes around you, stop at spectacular viewpoints offering unforgettable panoramic views and incredible photography moments. Feel the refreshing mist on your skin and witness the dramatic landscapes carved by the mighty Zambezi River.\n\nWhether you are visiting for the first time or returning to experience its beauty again, this tour offers the perfect balance of adventure, discovery, and unforgettable scenery for couples, families, solo travellers, and nature lovers.",

    // START TIMES
    startTimes: [
      "08:00 AM – Morning guided tour with cooler temperatures and lighter crowds.",

      "10:00 AM – Mid-morning departure offering excellent visibility and vibrant rainforest scenery.",

      "02:00 PM – Afternoon experience with dramatic mist, sunlight, and great photography conditions.",
    ],

    // INCLUDED
    includes: [
      "Return hotel transfers within Victoria Falls town.",

      "Professional English-speaking local guide with knowledge of the Falls and surrounding rainforest.",

      "Bottled drinking water during the tour.",

      "Raincoats provided during high-water season when the spray from the Falls is strongest.",
    ],

    // NOT INCLUDED
    excludes: [
      "Victoria Falls National Park entrance fees.",

      "Guide gratuities and optional tips.",

      "Personal purchases, snacks, and additional refreshments.",
    ],

    // ACCESSIBILITY
    accessibility: [
      "The tour follows established rainforest walking paths with regular stops along the route.",

      "Suitable for most fitness levels, although some areas may become slippery during high-water season.",

      "Children are welcome when accompanied by an adult.",

      "Certain sections may be challenging for wheelchairs due to uneven natural pathways.",
    ],

    // WHAT TO BRING
    whatToBring: [
      "Comfortable walking shoes with good grip for rainforest trails.",

      "A waterproof jacket or extra clothing during the rainy season.",

      "Camera or smartphone for photography at the viewpoints.",

      "Passport or identification if required for park entry.",

      "Sunscreen, sunglasses, and a hat during warmer months.",
    ],

    // CANCELLATION
    cancellation: [
      "Free cancellation available up to 24 hours before the scheduled departure time.",

      "Cancellations made within 24 hours of departure may not qualify for a refund.",

      "In cases of severe weather or safety concerns, tours may be rescheduled depending on availability.",
    ],

    // ITINERARY
    itineraryDays: [
      {
        day: 1,
        title: "Arrival & Rainforest Exploration",
        locationId: "victoria-falls",
        details:
          "Meet your professional guide at the rainforest entrance and begin your journey through the scenic walking trails of Victoria Falls. Visit the most spectacular viewpoints while learning about the history, geology, and cultural significance of the Falls.",
        activityIds: [],
      },
    ],

    // POLICIES
    policies: commonPolicies,
  },

  {
    id: "falls-bridge-tour",
    slug: "victoria-falls-bridge-tour",
    type: "tour",
    category: "Guided Tours",
    title: "Victoria Falls Bridge Tour",
    description: "Explore the Falls with a professional guide.",
    shortDescription: "Explore Victoria Falls with a professional local guide.",
    longDescription:
      "Walk through rainforest trails while learning about the geology, history, and seasonal flow of Victoria Falls.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 30,
    priceFrom: 30,
    priceUnit: "per person",
    rating: 4.7,
    reviews: 210,
    duration: "2 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2, contour],
    companyName: "Zazu Adventures",
    highlights: ["Rainforest walk", "Photo stops", "Professional guide"],
    includes: ["Professional guide"],
    excludes: ["Park fees"],
    policies: commonPolicies,
  },

  {
    id: "village-tour",
    slug: "monde-village-cultural-tour",
    type: "tour",
    category: "Cultural Tours",
    title: "Village Cultural Tour",
    description: "Experience local traditions and village life.",
    shortDescription:
      "Experience authentic Zambian culture and local traditions.",
    longDescription:
      "Visit a traditional village and experience local customs, crafts, food, and community life.",
    destinationId: "livingstone",
    destinations: ["livingstone"],
    destination: "Livingstone",
    price: 80,
    priceFrom: 80,
    priceUnit: "per person",
    rating: 4.6,
    reviews: 140,
    duration: "3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "devils-pool",
    slug: "victoria-falls-devils-pool",
    type: "activity",
    category: "Adventure Activities",
    title: "Devil’s Pool Experience",
    description: "Swim at the edge of Victoria Falls (seasonal).",
    shortDescription:
      "Swim at the edge of Victoria Falls during low-water season.",
    longDescription:
      "A thrilling guided experience to Devil’s Pool on Livingstone Island.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 135,
    priceFrom: 135,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    duration: "2–3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "flight-of-angels",
    slug: "17-mins-flight-of-angels",
    type: "activity",
    category: "Adventure Activities",
    title: "17 mins Helicopter Flight",
    description: "Swim at the edge of Victoria Falls (seasonal).",
    shortDescription:
      "Swim at the edge of Victoria Falls during low-water season.",
    longDescription:
      "A thrilling guided experience to Devil’s Pool on Livingstone Island.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 135,
    priceFrom: 135,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    duration: "2–3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "flight-of-angels",
    slug: "25-mins-flight-of-angels",
    type: "activity",
    category: "Adventure Activities",
    title: "25 mins Helicopter Flight",
    description: "Swim at the edge of Victoria Falls (seasonal).",
    shortDescription:
      "Swim at the edge of Victoria Falls during low-water season.",
    longDescription:
      "A thrilling guided experience to Devil’s Pool on Livingstone Island.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 285,
    priceFrom: 285,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    duration: "2–3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "white-water-rafting",
    slug: "half-day-white-water-rafting",
    type: "activity",
    category: "Adventure Activities",
    title: "Half Day White Water Rafting",
    description: "Swim at the edge of Victoria Falls (seasonal).",
    shortDescription:
      "Swim at the edge of Victoria Falls during low-water season.",
    longDescription:
      "A thrilling guided experience to Devil’s Pool on Livingstone Island.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 165,
    priceFrom: 165,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    duration: "2–3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "white-water-rafting",
    slug: "full-day-white-water-rafting",
    type: "activity",
    category: "Adventure Activities",
    title: "Full Day White Water Rafting",
    description: "Swim at the edge of Victoria Falls (seasonal).",
    shortDescription:
      "Swim at the edge of Victoria Falls during low-water season.",
    longDescription:
      "A thrilling guided experience to Devil’s Pool on Livingstone Island.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 235,
    priceFrom: 235,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 300,
    duration: "2–3 Hours",
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "safari ",
    slug: "victoria-falls-bridge-swing",
    type: "activity",
    category: "Adventure Activities",
    title: "Bridge Swing",
    description: "Free-fall swing over the gorge.",
    shortDescription: "Experience a thrilling free-fall bridge swing.",
    longDescription:
      "Leap from the bridge platform and swing across the Batoka Gorge.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 115,
    priceFrom: 115,
    priceUnit: "per person",
    rating: 4.8,
    reviews: 180,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "bridge-swing",
    slug: "victoria-falls-bridge-swing",
    type: "activity",
    category: "Adventure Activities",
    title: "Bridge Swing",
    description: "Free-fall swing over the gorge.",
    shortDescription: "Experience a thrilling free-fall bridge swing.",
    longDescription:
      "Leap from the bridge platform and swing across the Batoka Gorge.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 115,
    priceFrom: 115,
    priceUnit: "per person",
    rating: 4.8,
    reviews: 180,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "bungee-jumping",
    slug: "victoria-falls-bungee-jumping",
    type: "activity",
    category: "Adventure Activities",
    title: "Bungee Jumping",
    description: "111m jump off the Victoria Falls Bridge.",
    shortDescription: "One of the world’s most famous bungee jumps.",
    longDescription:
      "Jump 111 meters from the Victoria Falls Bridge into Batoka Gorge.",
    destinationId: "victoria-falls",
    destinations: ["victoria-falls"],
    destination: "Victoria Falls",
    price: 160,
    priceFrom: 160,
    priceUnit: "per person",
    rating: 4.9,
    reviews: 400,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },

  {
    id: "airport-transfer",
    slug: "livingstone-airport-transfer",
    type: "transfer",
    category: "Airport Transfers",
    title: "Airport Transfers",
    description: "Private transfers to and from airports.",
    shortDescription: "Comfortable and reliable airport transfers.",
    longDescription:
      "Private airport transfers with professional drivers and luggage assistance.",
    destinationId: "livingstone",
    destinations: ["livingstone"],
    destination: "Livingstone",
    price: 30,
    priceFrom: 30,
    priceUnit: "per person",
    rating: 4.5,
    reviews: 90,
    duration: "1 Hour",
    imageUrl: davies,
    gallery: [heroImage],
    companyName: "Zazu Adventures",
    policies: commonPolicies,
  },
];

/* =========================
   PACKAGES
========================= */

export const packages = [
  {
    id: "victoria-falls-guided-tour-museum-lunch",
    slug: "victoria-falls-tour-museum-lunch-package",
    type: "package",
    category: "Packages",
    title: "Victoria Falls Guided Tour + Museum + Lunch",
    description:
      "Guided tour of Victoria Falls with museum visit and traditional lunch experience in Zimbabwe.",
    shortDescription: "Falls tour, museum visit, and lunch combo experience.",
    longDescription:
      "Explore Victoria Falls, enjoy a cultural museum experience, and traditional Zimbabwean lunch.",
    price: 120,
    priceFrom: 120,
    priceUnit: "per person",
    activities: ["guided-falls-tour"],
    rating: 4.7,
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    destinations: ["victoria-falls"],
    policies: commonPolicies,
  },

  {
    id: "zambezi-sunset-cruise-dinner-boma-show",
    slug: "zambezi-sunset-cruise-boma-dinner-package",
    type: "package",
    category: "Packages",
    title: "Zambezi Sunset Cruise + Boma Dinner & Drum Show",
    description:
      "Sunset cruise on the Zambezi River followed by dinner at The Boma.",
    shortDescription: "Sunset cruise combined with dinner and drum show.",
    longDescription:
      "Enjoy a relaxing sunset cruise before a traditional African dinner experience.",
    price: 175,
    priceFrom: 175,
    priceUnit: "per person",
    activities: ["sunset-cruise"],
    rating: 4.8,
    imageUrl: davies,
    gallery: [heroImage, gallery2],
    destinations: ["livingstone", "victoria-falls"],
    policies: commonPolicies,
  },
];

/* =========================
   ABOUT
========================= */

export const aboutCards = [
  {
    id: "mission",
    icon: "target",
    title: "Our mission",
    description:
      "Make exploring Southern Africa simple, safe, and unforgettable.",
  },
  {
    id: "vision",
    icon: "eye",
    title: "Our vision",
    description:
      "Build a trusted adventure brand connecting travelers to authentic experiences.",
  },
  {
    id: "values",
    icon: "leaf",
    title: "Responsible travel",
    description:
      "We prioritize ethical wildlife encounters and community-first tourism.",
  },
  {
    id: "partners",
    icon: "handshake",
    title: "Curated partners",
    description: "We work with vetted guides and operators only.",
  },
];

/* =========================
   CATALOG
========================= */

export const catalog = {
  transfers: [
    {
      id: "vfa-airport-to-victoria-falls-hotel",
      slug: "vfa-airport-to-victoria-falls-hotel",
      type: "transfer",
      category: "Airport Transfers",
      title: "Victoria Falls Airport (VFA) to Town Hotels",
      shortDescription:
        "Private airport pickup or drop-off between VFA and town hotels.",
      longDescription:
        "Reliable private airport transfers with meet-and-greet service.",
      imageUrl: heroImage,
      gallery: [heroImage, gallery2, contour],
      priceFrom: 25,
      priceUnit: "per person",
      duration: "25-40 mins",
      pickup: "VFA airport arrivals or your hotel reception",
      route: "Victoria Falls Airport to Victoria Falls town",
      destinations: ["victoria-falls"],
      includes: ["Private vehicle", "Meet-and-greet", "Bottled water"],
      excludes: ["Visa fees", "Tips"],
      policies: commonPolicies,
    },
  ],

  tours: [
    {
      slug: "victoria-falls-guided-tour",
      type: "tour",
      category: "Guided Tours",
      title: "Guided Tour of Victoria Falls",
      shortDescription:
        "Explore Victoria Falls with a professional local guide.",
      longDescription:
        "Experience one of the Seven Natural Wonders of the World with a guided rainforest walk covering the best viewpoints, history, geology, and photography spots around Victoria Falls.",
      imageUrl: heroImage,
      gallery: [heroImage, gallery2, gallery3, contour],
      priceFrom: 30,
      childPriceFrom: 15,
      infantPriceFrom: 0,
      priceUnit: "per person",
      duration: "2 Hours",
      pickup: "Victoria Falls hotels or rainforest entrance",
      route: "Victoria Falls Rainforest",
      destinations: ["victoria-falls"],
      highlights: [
        "Professional local guide",
        "Best waterfall viewpoints",
        "Photography stops",
        "Rainforest walk",
      ],
      includes: ["Guided tour", "Local guide assistance"],
      excludes: ["Park fees", "Raincoats", "Tips"],
      policies: commonPolicies,
    },
  ],

  packages: [
    {
      id: "victoria-falls-3-day-classic",
      slug: "victoria-falls-3-day-classic",
      type: "package",
      category: "Victoria Falls Packages",
      title: "Victoria Falls 3 Day Classic",
      shortDescription: "A balanced short break with tours and sunset cruise.",
      longDescription:
        "A clean itinerary combining transfers, Falls tour, and cruise experiences.",
      imageUrl: heroImage,
      gallery: [heroImage, gallery2, contour],
      priceFrom: 320,
      priceUnit: "per person",
      duration: "3 days / 2 nights",
      pickup: "Airport pickup optional",
      destinations: ["victoria-falls"],
      itineraryDays: [
        {
          day: 1,
          title: "Arrival",
          location: "Victoria Falls",
          details: "Transfer and check-in.",
        },
      ],
      includes: ["Guided Falls visit", "Sunset cruise"],
      excludes: ["Accommodation", "Park fees"],
      policies: commonPolicies,
    },
  ],
};

/* =========================
   UNIVERSAL PRODUCTS
========================= */

export const products = [
  ...activities,
  ...packages,
  ...catalog.transfers,
  ...catalog.tours,
  ...catalog.packages,
];

/* =========================
   HELPERS
========================= */

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return (
    products.find(
      (product) => product.slug?.toLowerCase() === slug?.toLowerCase(),
    ) || null
  );
}

export function getProductsByCategory(category) {
  return products.filter((product) => product.category === category);
}

export function getProductsForDestination(destinationId) {
  return products.filter(
    (product) =>
      Array.isArray(product.destinations) &&
      product.destinations.includes(destinationId),
  );
}

export function getProductsByType(type) {
  return products.filter((product) => product.type === type);
}

export function getRelatedProducts(destinationId, currentSlug) {
  return products.filter(
    (product) =>
      product.slug !== currentSlug &&
      product.destinations?.includes(destinationId),
  );
}
