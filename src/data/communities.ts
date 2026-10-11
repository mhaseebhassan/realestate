export interface Community {
  slug: string;
  name: string;
  numeral: string;
  tagline: string;
  coordinates: string;
  avgPricePerSqftAed: number;
  grossRentalYield: string;
  whoItSuits: string;
  vibe: string;
  overview: string;
  keyFeatures: string[];
  heroImage: string;
  notableDevelopers: string[];
}

export const communities: Community[] = [
  {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    numeral: "01",
    tagline: "The global benchmark for private island beachfront living.",
    coordinates: "25.1124° N, 55.1389° E",
    avgPricePerSqftAed: 4680,
    grossRentalYield: "5.5% to 7.2%",
    whoItSuits: "International high-net-worth families, yacht owners, and capital seeking blue-chip capital preservation.",
    vibe: "Sun-drenched, private, beachfront, world-renowned.",
    overview: "Palm Jumeirah remains Dubai's most globally liquid real estate asset class. Frond villas command private beaches with direct ocean access, while trunk penthouses deliver full hotel-serviced luxury. Supply on the island is strictly capped, underpinning sustained capital appreciation.",
    keyFeatures: [
      "Strictly finite island supply with zero reclaimable additions",
      "Private beachfronts with deep-water mooring options",
      "Home to Dorchester One Palm, Atlantis The Royal, and Six Senses",
      "Ten minutes from Dubai Marina and Sheikh Zayed Road"
    ],
    heroImage: "/images/communities/palm-jumeirah.webp",
    notableDevelopers: ["Omniyat", "Nakheel", "Select Group", "Kerzner"]
  },
  {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    numeral: "02",
    tagline: "The civic core of culture, finance, and iconic skyline vistas.",
    coordinates: "25.1972° N, 55.2744° E",
    avgPricePerSqftAed: 3250,
    grossRentalYield: "6.2% to 7.8%",
    whoItSuits: "Corporate executives, global art collectors, and investors prioritizing premier rental occupancy.",
    vibe: "High-density urban energy, architectural grandeur, 24/7 dynamism.",
    overview: "Anchored by Burj Khalifa, Dubai Opera, and the world's highest-grossing shopping promenade, Downtown Dubai represents prime urban density. Trophy penthouses in the Opera District offer front-row views of the Dubai Fountain.",
    keyFeatures: [
      "Direct pedestrian proximity to Dubai Opera and Burj Khalifa",
      "Premier institutional tenant base and immediate short-term yield potential",
      "Continuous capital improvements by master developer Emaar",
      "Central access to DIFC financial hub within 5 minutes"
    ],
    heroImage: "/images/communities/downtown-dubai.webp",
    notableDevelopers: ["Emaar Properties", "Sobha", "Ellington"]
  },
  {
    slug: "emirates-hills",
    name: "Emirates Hills",
    numeral: "03",
    tagline: "The Beverly Hills of Dubai. Strictly gated, ultra-private estates.",
    coordinates: "25.0678° N, 55.1689° E",
    avgPricePerSqftAed: 5290,
    grossRentalYield: "4.2% to 5.5%",
    whoItSuits: "Family offices, diplomatic principals, and ultra-high-net-worth families demanding absolute privacy and perimeter security.",
    vibe: "Discreet, leafy, expansive, private, generational.",
    overview: "Developed as Dubai's original prime gated golf community, Emirates Hills surrounds the 18-hole Montgomerie Championship Course. Plot sizes range up to 45,000 square feet, accommodating custom-built mansions with multi-car garages and private botanical parks.",
    keyFeatures: [
      "Rigid 24/7 security perimeter with controlled checkpoint access",
      "Unobstructed views over Montgomerie Championship golf greens",
      "Maximum plot density freedom for custom architectural estates",
      "Established generational neighborhood with stable valuation"
    ],
    heroImage: "/images/communities/emirates-hills.webp",
    notableDevelopers: ["Emaar Master Plan", "Custom Private Architects"]
  },
  {
    slug: "jumeirah-bay",
    name: "Jumeirah Bay Island",
    numeral: "04",
    tagline: "The billionaire seahorse island. The highest price per square foot in the region.",
    coordinates: "25.2081° N, 55.2394° E",
    avgPricePerSqftAed: 11800,
    grossRentalYield: "4.0% to 5.2%",
    whoItSuits: "Bespoke collectors of ultra-trophy real estate and principals requiring direct marina slipway for megayachts.",
    vibe: "Ultra-exclusive, Mediterranean private club, secluded, peerless.",
    overview: "Sculpted in the shape of a seahorse off the coast of Jumeirah 2, this private island is connected to the mainland via a private bridge. Dominated by the Bulgari Resort, Yacht Club, and Bulgari Lighthouse, Jumeirah Bay consistently sets the record for highest transactions in the UAE.",
    keyFeatures: [
      "Private island connected by a single private bridge checkpoint",
      "Bespoke marina hosting 46 private yacht berths",
      "Home to Bulgari Resort, private spa, and Michelin-starred dining",
      "Highest concentration of billionaire homeowners in the GCC"
    ],
    heroImage: "/images/communities/jumeirah-bay.webp",
    notableDevelopers: ["Meraas", "Bulgari Hotels & Resorts"]
  },
  {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    numeral: "05",
    tagline: "The green heart of Dubai. Master-planned family luxury and championship golf.",
    coordinates: "25.1112° N, 55.2450° E",
    avgPricePerSqftAed: 2890,
    grossRentalYield: "6.0% to 7.4%",
    whoItSuits: "Families with school-age children, golf enthusiasts, and long-term residents seeking community infrastructure.",
    vibe: "Spacious, manicured, healthy, balanced, family-centric.",
    overview: "Spanning 2,700 acres, Dubai Hills Estate combines championship golf, Dubai Hills Mall, international schools (King's College Hospital, GEMS Wellington), and expansive green parks. Fairway Vistas and Parkway Vistas contain prime custom villas overlooking the golf course.",
    keyFeatures: [
      "18-hole championship golf course managed by Troon Golf",
      "2 million square foot regional park with running trails and sports courts",
      "International schools and King's College Hospital within the community",
      "15 minutes from both Downtown Dubai and Dubai Marina"
    ],
    heroImage: "/images/communities/dubai-hills-estate.webp",
    notableDevelopers: ["Emaar Properties", "Meraas"]
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina & Bluewaters",
    numeral: "06",
    tagline: "The world's largest man-made marina paired with contemporary island dining.",
    coordinates: "25.0864° N, 55.1432° E",
    avgPricePerSqftAed: 2450,
    grossRentalYield: "6.8% to 8.2%",
    whoItSuits: "Active international investors seeking high yields, yacht enthusiasts, and seaside lifestyle buyers.",
    vibe: "Vibrant, nautical, cosmopolitan, high-rise luxury.",
    overview: "Dubai Marina wraps around a 3.5-kilometer canal lined with luxury towers, fine dining, and yacht berths. Directly adjacent, Bluewaters Island features Ain Dubai, Caesars Palace heritage, and clean low-density seaside apartments.",
    keyFeatures: [
      "Over 7 kilometers of continuous waterfront promenade",
      "Direct yacht club berths and superyacht charters",
      "Consistently top 3 in Dubai for annual gross rental yields",
      "Connected to Bluewaters Island via pedestrian bridge"
    ],
    heroImage: "/images/communities/dubai-marina.webp",
    notableDevelopers: ["Select Group", "Meraas", "Emaar"]
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    numeral: "07",
    tagline: "The Marasi Canal luxury corridor and branded hospitality epicenter.",
    coordinates: "25.1878° N, 55.2789° E",
    avgPricePerSqftAed: 2650,
    grossRentalYield: "6.5% to 8.0%",
    whoItSuits: "Investors seeking strong capital appreciation along the Dubai Water Canal and branded hospitality buyers.",
    vibe: "Architectural, fast-paced, canal-front, high-growth.",
    overview: "Business Bay has evolved from a commercial cluster into Dubai's most exciting residential transformation. The Marasi Bay district now hosts Dorchester Collection's The Lana, Franck Muller, and Pagani towers along the Dubai Water Canal.",
    keyFeatures: [
      "Direct access to Dubai Water Canal navigable to the Arabian Gulf",
      "Highest concentration of upcoming ultra-luxury branded residences",
      "Immediate adjacent connectivity to DIFC and Downtown Dubai",
      "Marasi Marina superyacht slips and boardwalk dining"
    ],
    heroImage: "/images/communities/business-bay.webp",
    notableDevelopers: ["Omniyat", "Deyaar", "Damac Luxury", "Select Group"]
  },
  {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    numeral: "08",
    tagline: "The future waterfront horizon. Twice the size of Downtown Dubai.",
    coordinates: "25.2010° N, 55.3522° E",
    avgPricePerSqftAed: 2350,
    grossRentalYield: "6.4% to 7.9%",
    whoItSuits: "Forward-thinking investors seeking long-term capital compounding and pristine waterfront lifestyle.",
    vibe: "Futuristic, serene, expansive, nature-bordered.",
    overview: "Positioned along the historic Dubai Creek and adjacent to the Ras Al Khor Wildlife Sanctuary, Dubai Creek Harbour is Emaar's next flagship mega-development. Creek Island offers ready waterfront living, while the upcoming metro line and infrastructure will drive capital gains.",
    keyFeatures: [
      "Direct views of protected Ras Al Khor flamingo sanctuary",
      "Extensive waterfront parks, marina, and yacht club promenade",
      "Fully integrated master plan by Emaar with dedicated upcoming metro line",
      "Significantly lower entry price per sqft compared to Downtown"
    ],
    heroImage: "/images/communities/dubai-creek-harbour.webp",
    notableDevelopers: ["Emaar Properties"]
  }
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find(c => c.slug === slug);
}
