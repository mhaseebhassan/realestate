export interface Property {
  id: string;
  slug: string;
  reference: string;
  title: string;
  headline: string;
  community: string;
  communitySlug: string;
  type: 'Penthouse' | 'Villa' | 'Mansion' | 'Apartment' | 'Sky Villa';
  status: 'Ready' | 'Off-Plan';
  priceAed: number;
  sqft: number;
  pricePerSqft: number;
  bedrooms: number;
  bathrooms: number;
  developer: string;
  handoverDate: string;
  paymentPlan: string;
  serviceChargeAedPerSqft: number;
  coordinates: string;
  heroImage: string;
  gallery: string[];
  description: string;
  keyFeatures: string[];
  keyFacts: { label: string; value: string }[];
}

export const properties: Property[] = [
  {
    id: "prop-1",
    slug: "one-palm-beachfront-penthouse",
    reference: "PJ-OP-104",
    title: "One Palm Beachfront Penthouse",
    headline: "Full floor penthouse with 360-degree Arabian Gulf and Marina skyline views.",
    community: "Palm Jumeirah",
    communitySlug: "palm-jumeirah",
    type: "Penthouse",
    status: "Ready",
    priceAed: 82000000,
    sqft: 14200,
    pricePerSqft: 5774,
    bedrooms: 5,
    bathrooms: 7,
    developer: "Omniyat",
    handoverDate: "Ready to occupy",
    paymentPlan: "Immediate transfer via DLD",
    serviceChargeAedPerSqft: 38,
    coordinates: "25.1124° N, 55.1389° E",
    heroImage: "/images/properties/prop-1.webp",
    gallery: [
      "/images/properties/prop-1.webp",
      "/images/properties/prop-2.webp",
      "/images/properties/prop-3.webp",
      "/images/properties/prop-4.webp"
    ],
    description: "Architectural masterpiece managed by Dorchester Collection. Double-height 6.5-meter ceilings, private 25-meter lap pool on the terrace, and direct private berth access. Finished in hand-selected Italian travertine and dark Belgian granite.",
    keyFeatures: [
      "Private 25m infinity pool on private sky terrace",
      "Managed exclusively by Dorchester Collection with 24/7 concierge",
      "Direct private beach access and superyacht mooring rights",
      "Show kitchen by Poliform and separate heavy industrial catering back-kitchen",
      "Six dedicated underground secure parking bays"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "PJ-OP-104" },
      { label: "Community", value: "Palm Jumeirah (West Trunk)" },
      { label: "Built-Up Area", value: "14,200 sqft (1,319 sqm)" },
      { label: "Balcony / Terrace Area", value: "3,850 sqft" },
      { label: "Furnishing Status", value: "Turnkey Designer Furnished (Superkül)" },
      { label: "Service Charge", value: "AED 38 / sqft per annum" },
      { label: "Title Deed", value: "Clean title deed in hand" }
    ]
  },
  {
    id: "prop-2",
    slug: "amali-island-private-sea-estate",
    reference: "WI-AM-08",
    title: "Amali Island Private Sea Estate",
    headline: "Ultra-prime bespoke villa on private beachfront with private yacht slipway.",
    community: "Palm Jumeirah",
    communitySlug: "palm-jumeirah",
    type: "Villa",
    status: "Off-Plan",
    priceAed: 115000000,
    sqft: 18500,
    pricePerSqft: 6216,
    bedrooms: 6,
    bathrooms: 8,
    developer: "Amali Properties",
    handoverDate: "Q1 2027",
    paymentPlan: "60% during construction / 40% on handover",
    serviceChargeAedPerSqft: 32,
    coordinates: "25.2155° N, 55.1680° E",
    heroImage: "/images/properties/prop-2.webp",
    gallery: [
      "/images/properties/prop-2.webp",
      "/images/properties/prop-4.webp",
      "/images/properties/prop-5.webp",
      "/images/properties/prop-1.webp"
    ],
    description: "An isolated private island sanctuary minutes from mainland Dubai. Designed by Elastic Architects with interiors by Hirsch Bedner Associates. Features 50 meters of uninterrupted private white-sand beach and private helipad access.",
    keyFeatures: [
      "50-meter private beachfront facing the Dubai skyline",
      "Subterranean wellness center with Turkish hammam and cryotherapy",
      "Private boat berth accommodating craft up to 110 feet",
      "Dual infinity pools across ground and master terrace levels",
      "Independent staff quarters for up to 6 personnel"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "WI-AM-08" },
      { label: "Community", value: "Amali Island (The World)" },
      { label: "Plot Size", value: "24,800 sqft" },
      { label: "Built-Up Area", value: "18,500 sqft" },
      { label: "Handover Date", value: "March 2027" },
      { label: "Escrow Account", value: "DLD Verified Escrow No. 89201" }
    ]
  },
  {
    id: "prop-3",
    slug: "il-primo-opera-district-sky-villa",
    reference: "DT-IP-66",
    title: "Il Primo Opera District Sky Villa",
    headline: "Full floor sky mansion with direct unobstructed views of the Dubai Fountain.",
    community: "Downtown Dubai",
    communitySlug: "downtown-dubai",
    type: "Sky Villa",
    status: "Ready",
    priceAed: 44500000,
    sqft: 7850,
    pricePerSqft: 5668,
    bedrooms: 4,
    bathrooms: 6,
    developer: "Emaar Properties",
    handoverDate: "Immediate transfer",
    paymentPlan: "100% at transfer (Clean Title)",
    serviceChargeAedPerSqft: 42,
    coordinates: "25.1950° N, 55.2750° E",
    heroImage: "/images/properties/prop-3.webp",
    gallery: [
      "/images/properties/prop-3.webp",
      "/images/properties/prop-8.webp",
      "/images/properties/prop-10.webp",
      "/images/properties/prop-11.webp"
    ],
    description: "Positioned directly opposite the Dubai Opera, Il Primo is the premier address in Downtown Dubai. This sky villa occupies an entire high floor with 360-degree glass facades, staff quarters, and high-speed private elevator access directly into your foyer.",
    keyFeatures: [
      "Direct front-row vista of Burj Khalifa and Dubai Fountain",
      "Private elevator lobby opening directly into the apartment",
      "Dedicated cinema room, cigar lounge, and private office",
      "Comprehensive Smart Home automation by Crestron",
      "Four secure basement parking spaces"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "DT-IP-66" },
      { label: "Floor Level", value: "66th Floor (Full Floor Plate)" },
      { label: "Internal Area", value: "7,100 sqft" },
      { label: "Terrace Area", value: "750 sqft" },
      { label: "Service Charge", value: "AED 42 / sqft per annum" },
      { label: "Title Deed", value: "Available for immediate registration" }
    ]
  },
  {
    id: "prop-4",
    slug: "bulgari-lighthouse-sea-view-mansion",
    reference: "JB-BL-18",
    title: "Bulgari Lighthouse Sea View Mansion",
    headline: "Sublime architectural trophy residence on ultra-exclusive Jumeirah Bay Island.",
    community: "Jumeirah Bay Island",
    communitySlug: "jumeirah-bay",
    type: "Mansion",
    status: "Off-Plan",
    priceAed: 138000000,
    sqft: 11600,
    pricePerSqft: 11896,
    bedrooms: 5,
    bathrooms: 7,
    developer: "Meraas & Bulgari",
    handoverDate: "Q3 2027",
    paymentPlan: "70% during construction / 30% on completion",
    serviceChargeAedPerSqft: 55,
    coordinates: "25.2081° N, 55.2394° E",
    heroImage: "/images/properties/prop-4.webp",
    gallery: [
      "/images/properties/prop-4.webp",
      "/images/properties/prop-1.webp",
      "/images/properties/prop-2.webp",
      "/images/properties/prop-6.webp"
    ],
    description: "Designed by Antonio Citterio Patricia Viel, Bulgari Lighthouse rises as a beacon of understated luxury. Horizontal layers of architectural coral louvers filter the Arabian sun while providing complete privacy. The most exclusive residential community in the Middle East.",
    keyFeatures: [
      "Exclusive Bulgari hospitality and 24-hour private dining",
      "Expansive wrap-around sky gardens with temperature-controlled plunge pool",
      "Subterranean multi-car showroom gallery",
      "Exclusive yacht club membership and berth privileges",
      "Unobstructed sea horizon and Downtown skyline perspectives"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "JB-BL-18" },
      { label: "Community", value: "Jumeirah Bay Island" },
      { label: "Architect", value: "Antonio Citterio Patricia Viel" },
      { label: "Built-Up Area", value: "11,600 sqft" },
      { label: "Anticipated Handover", value: "September 2027" },
      { label: "Payment Status", value: "30% paid to DLD Escrow" }
    ]
  },
  {
    id: "prop-5",
    slug: "lanai-islands-lagoon-mega-mansion",
    reference: "TA-LI-03",
    title: "Lanai Islands Lagoon Mega Mansion",
    headline: "Palatial 7-bedroom island estate surrounded by crystal recreational lagoons.",
    community: "Dubai Hills Estate",
    communitySlug: "dubai-hills-estate",
    type: "Mansion",
    status: "Off-Plan",
    priceAed: 98000000,
    sqft: 23600,
    pricePerSqft: 4152,
    bedrooms: 7,
    bathrooms: 10,
    developer: "Majid Al Futtaim",
    handoverDate: "Q2 2026",
    paymentPlan: "50% during construction / 50% on handover",
    serviceChargeAedPerSqft: 22,
    coordinates: "25.0255° N, 55.2289° E",
    heroImage: "/images/properties/prop-5.webp",
    gallery: [
      "/images/properties/prop-5.webp",
      "/images/properties/prop-6.webp",
      "/images/properties/prop-7.webp",
      "/images/properties/prop-2.webp"
    ],
    description: "Designed in collaboration with South African studio SAOTA and interior maestro Kelly Hoppen. Located on an isolated private island within Tilal Al Ghaf with private sandy beaches, triple-height atrium, and 12-car subterranean gallery.",
    keyFeatures: [
      "SAOTA architectural blueprint with Kelly Hoppen bespoke interior palettes",
      "Crystal lagoon frontage with private water access",
      "Air-conditioned 12-car showcase underground garage",
      "Private wellness spa with sauna, steam, and Himalayan salt room",
      "Guest villa pavilion completely independent from main residence"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "TA-LI-03" },
      { label: "Plot Area", value: "31,000 sqft" },
      { label: "Built-Up Area", value: "23,600 sqft" },
      { label: "Handover Date", value: "June 2026" },
      { label: "Current Construction", value: "72% Completed (Verified)" }
    ]
  },
  {
    id: "prop-6",
    slug: "emirates-hills-sector-e-fairway-residence",
    reference: "EH-SE-12",
    title: "Emirates Hills Sector E Fairway Residence",
    headline: "Classic bespoke contemporary villa on the championship Montgomerie golf course.",
    community: "Emirates Hills",
    communitySlug: "emirates-hills",
    type: "Villa",
    status: "Ready",
    priceAed: 89000000,
    sqft: 16800,
    pricePerSqft: 5297,
    bedrooms: 6,
    bathrooms: 8,
    developer: "Private Bespoke Build",
    handoverDate: "Ready to occupy",
    paymentPlan: "Immediate transfer via DLD",
    serviceChargeAedPerSqft: 18,
    coordinates: "25.0678° N, 55.1689° E",
    heroImage: "/images/properties/prop-6.webp",
    gallery: [
      "/images/properties/prop-6.webp",
      "/images/properties/prop-7.webp",
      "/images/properties/prop-1.webp",
      "/images/properties/prop-5.webp"
    ],
    description: "Located within the gated billionaire enclave of Emirates Hills Sector E. Completely rebuilt in 2024 to international museum standards. Features a private landscaped estate backing directly onto the 14th green, with heated swimming pool and elevator.",
    keyFeatures: [
      "Direct front-line frontage on the Montgomerie Championship Course",
      "Full perimeter smart security with biometric access control",
      "Temperature-controlled 800-bottle glass wine gallery",
      "Commercial-grade backup power generator and water filtration",
      "Elevator serving all three levels including roof terrace"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "EH-SE-12" },
      { label: "Plot Area", value: "22,500 sqft" },
      { label: "Built-Up Area", value: "16,800 sqft" },
      { label: "Golf Course View", value: "Direct 180-degree unobstructed" },
      { label: "Ownership", value: "Freehold Clean Title" }
    ]
  },
  {
    id: "prop-7",
    slug: "dubai-hills-fairway-vistas-contemporary-estate",
    reference: "DH-FV-44",
    title: "Dubai Hills Fairway Vistas Contemporary Estate",
    headline: "Minimalist modern villa overlooking the 18-hole golf course and Downtown skyline.",
    community: "Dubai Hills Estate",
    communitySlug: "dubai-hills-estate",
    type: "Villa",
    status: "Ready",
    priceAed: 42000000,
    sqft: 12400,
    pricePerSqft: 3387,
    bedrooms: 6,
    bathrooms: 7,
    developer: "Emaar Properties",
    handoverDate: "Ready to occupy",
    paymentPlan: "Immediate transfer via DLD",
    serviceChargeAedPerSqft: 20,
    coordinates: "25.1112° N, 55.2450° E",
    heroImage: "/images/properties/prop-7.webp",
    gallery: [
      "/images/properties/prop-7.webp",
      "/images/properties/prop-5.webp",
      "/images/properties/prop-6.webp",
      "/images/properties/prop-12.webp"
    ],
    description: "A striking modern villa in Fairway Vistas, the premier enclave of Dubai Hills Estate. Double-height reception spaces with full-height floor-to-ceiling Schuco glazing, marble bathrooms, sunken outdoor firepit, and rooftop lounge.",
    keyFeatures: [
      "Unmatched views pairing lush golf greens with distant Burj Khalifa",
      "German engineering Schuco minimalist aluminum glazing system",
      "Outdoor entertaining pavilion with sunken lounge and firepit",
      "Walk-in dressing rooms custom made in Italy",
      "Covered parking for 4 vehicles plus visitor bays"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "DH-FV-44" },
      { label: "Plot Size", value: "14,500 sqft" },
      { label: "Built-Up Area", value: "12,400 sqft" },
      { label: "Service Charge", value: "AED 20 / sqft per annum" },
      { label: "Title Deed", value: "Ready for immediate transfer" }
    ]
  },
  {
    id: "prop-8",
    slug: "bluewaters-bay-sky-residence",
    reference: "BW-BB-2201",
    title: "Bluewaters Bay Sky Residence",
    headline: "High-floor seaside residence looking directly at Ain Dubai and open Arabian Gulf.",
    community: "Bluewaters",
    communitySlug: "dubai-marina",
    type: "Apartment",
    status: "Off-Plan",
    priceAed: 29800000,
    sqft: 5900,
    pricePerSqft: 5050,
    bedrooms: 4,
    bathrooms: 5,
    developer: "Meraas",
    handoverDate: "Q3 2027",
    paymentPlan: "80% during construction / 20% on completion",
    serviceChargeAedPerSqft: 34,
    coordinates: "25.0792° N, 55.1221° E",
    heroImage: "/images/properties/prop-8.webp",
    gallery: [
      "/images/properties/prop-8.webp",
      "/images/properties/prop-10.webp",
      "/images/properties/prop-11.webp",
      "/images/properties/prop-3.webp"
    ],
    description: "Situated on the prestigious Bluewaters Island promenade. Engineered for direct indoor-outdoor coastal living with deep covered terraces, resort infinity pools, private tennis courts, and pedestrian footbridge access to JBR.",
    keyFeatures: [
      "Front-facing view of Ain Dubai and panoramic open ocean sunsets",
      "Direct pedestrian connection to Bluewaters dining and beach clubs",
      "Spacious family living area plus separate helper's quarter",
      "Infinity edge podium pool cantilevered over the bay",
      "Three allocated basement parking spots"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "BW-BB-2201" },
      { label: "Community", value: "Bluewaters Island" },
      { label: "Built-Up Area", value: "5,900 sqft" },
      { label: "Completion Date", value: "September 2027" },
      { label: "DLD Registration", value: "4% fee pre-registered" }
    ]
  },
  {
    id: "prop-9",
    slug: "creek-waters-waterfront-residence",
    reference: "CH-CW-3902",
    title: "Creek Waters Waterfront Residence",
    headline: "Ultra-luxury high floor waterfront residence overlooking Ras Al Khor sanctuary.",
    community: "Dubai Creek Harbour",
    communitySlug: "dubai-creek-harbour",
    type: "Apartment",
    status: "Off-Plan",
    priceAed: 12900000,
    sqft: 3450,
    pricePerSqft: 3739,
    bedrooms: 3,
    bathrooms: 4,
    developer: "Emaar Properties",
    handoverDate: "Q4 2027",
    paymentPlan: "90% during construction / 10% on handover",
    serviceChargeAedPerSqft: 26,
    coordinates: "25.2010° N, 55.3522° E",
    heroImage: "/images/properties/prop-9.webp",
    gallery: [
      "/images/properties/prop-9.webp",
      "/images/properties/prop-3.webp",
      "/images/properties/prop-8.webp",
      "/images/properties/prop-10.webp"
    ],
    description: "Creek Waters sets a prime benchmark on Creek Island. Direct canal frontage with spectacular vistas of the pink flamingo sanctuary at Ras Al Khor and the Downtown Dubai skyline horizon.",
    keyFeatures: [
      "Protected views over Ras Al Khor Wildlife Sanctuary",
      "Fine dining promenade and marina at doorstep",
      "Residents private club lounge and executive co-working suites",
      "Infinity pool with skyline backdrop",
      "High capital growth projection driven by Creek infrastructure"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "CH-CW-3902" },
      { label: "Community", value: "Dubai Creek Harbour (Creek Island)" },
      { label: "Built-Up Area", value: "3,450 sqft" },
      { label: "Handover Date", value: "December 2027" },
      { label: "Developer", value: "Emaar Properties PJSC" }
    ]
  },
  {
    id: "prop-10",
    slug: "the-crest-marina-gate-penthouse",
    reference: "DM-MG-PH02",
    title: "The Crest Marina Gate Penthouse",
    headline: "Triplex penthouse perched at the pinnacle of Dubai Marina with 360-degree glass.",
    community: "Dubai Marina",
    communitySlug: "dubai-marina",
    type: "Penthouse",
    status: "Ready",
    priceAed: 26500000,
    sqft: 6200,
    pricePerSqft: 4274,
    bedrooms: 4,
    bathrooms: 5,
    developer: "Select Group",
    handoverDate: "Ready to occupy",
    paymentPlan: "Immediate transfer via DLD",
    serviceChargeAedPerSqft: 28,
    coordinates: "25.0864° N, 55.1432° E",
    heroImage: "/images/properties/prop-10.webp",
    gallery: [
      "/images/properties/prop-10.webp",
      "/images/properties/prop-8.webp",
      "/images/properties/prop-11.webp",
      "/images/properties/prop-1.webp"
    ],
    description: "The pinnacle residence of Marina Gate. Spanning three interconnected glass levels with private internal elevator, outdoor rooftop swimming pool, and private glass garage inside the apartment for luxury automotive display.",
    keyFeatures: [
      "Private internal elevator and private rooftop sky pool",
      "Direct frontage overlooking the entire Dubai Marina waterway",
      "State-of-the-art gym and sauna suite inside penthouse",
      "Jumeirah Living concierge access and 5-star hotel services",
      "Four dedicated secure parking spots"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "DM-MG-PH02" },
      { label: "Floors", value: "Triplex (Levels 49, 50, 51)" },
      { label: "Built-Up Area", value: "6,200 sqft" },
      { label: "Tenure", value: "Vacant on transfer" },
      { label: "Title Deed", value: "Verified DLD Deed" }
    ]
  },
  {
    id: "prop-11",
    slug: "the-lana-residences-dorchester-collection",
    reference: "BB-LN-16",
    title: "The Lana Residences, Dorchester Collection",
    headline: "Rare branded residence directly on the Marasi Marina canal in Business Bay.",
    community: "Business Bay",
    communitySlug: "business-bay",
    type: "Apartment",
    status: "Ready",
    priceAed: 54000000,
    sqft: 8100,
    pricePerSqft: 6666,
    bedrooms: 4,
    bathrooms: 6,
    developer: "Omniyat",
    handoverDate: "Ready to occupy",
    paymentPlan: "Immediate transfer via DLD",
    serviceChargeAedPerSqft: 46,
    coordinates: "25.1878° N, 55.2789° E",
    heroImage: "/images/properties/prop-11.webp",
    gallery: [
      "/images/properties/prop-11.webp",
      "/images/properties/prop-3.webp",
      "/images/properties/prop-1.webp",
      "/images/properties/prop-10.webp"
    ],
    description: "Only 39 bespoke residences managed by Dorchester Collection. Gilles & Boissier French architecture, dark oak chevron parquetry, marble slabs sourced directly from Carrara, and personal butler service.",
    keyFeatures: [
      "Dorchester Collection 5-star management with 24/7 in-residence dining",
      "Exclusive private access to rooftop pool and spa",
      "Direct private yacht berth at Marasi Marina",
      "French bespoke cabinetry and Dornbracht brushed brass fittings",
      "Four allocated private valet parking stalls"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "BB-LN-16" },
      { label: "Community", value: "Business Bay (Marasi Bay)" },
      { label: "Built-Up Area", value: "8,100 sqft" },
      { label: "Management", value: "Dorchester Collection UK" },
      { label: "Title Deed", value: "Ready for immediate conveyance" }
    ]
  },
  {
    id: "prop-12",
    slug: "palm-jumeirah-frond-n-signature-villa",
    reference: "PJ-FN-29",
    title: "Palm Jumeirah Frond N Signature Villa",
    headline: "Custom contemporary villa with 120 feet of private beachfront on elite Frond N.",
    community: "Palm Jumeirah",
    communitySlug: "palm-jumeirah",
    type: "Villa",
    status: "Ready",
    priceAed: 76000000,
    sqft: 9800,
    pricePerSqft: 7755,
    bedrooms: 5,
    bathrooms: 7,
    developer: "Nakheel & Bespoke Architect",
    handoverDate: "Ready to occupy",
    paymentPlan: "Immediate transfer via DLD",
    serviceChargeAedPerSqft: 24,
    coordinates: "25.1289° N, 55.1322° E",
    heroImage: "/images/properties/prop-12.webp",
    gallery: [
      "/images/properties/prop-12.webp",
      "/images/properties/prop-1.webp",
      "/images/properties/prop-6.webp",
      "/images/properties/prop-7.webp"
    ],
    description: "Architectural purity meets prime water frontage. Completed in late 2024 with zero expenses spared. Massive open-concept living pavilion opening to private palm-fringed beach and 18-meter heated saline swimming pool.",
    keyFeatures: [
      "120 feet of private beachfront on peaceful high-security Frond N",
      "18-meter heated saline swimming pool with sunken daybeds",
      "Italian custom Rimadesio walk-in wardrobes and glass partitions",
      "Automated solar tracking louvers and integrated sound system",
      "Separate staff quarters and security post"
    ],
    keyFacts: [
      { label: "Unit Reference", value: "PJ-FN-29" },
      { label: "Plot Area", value: "14,800 sqft" },
      { label: "Built-Up Area", value: "9,800 sqft" },
      { label: "Orientation", value: "Sunset West Facing" },
      { label: "Status", value: "Vacant and ready for key handover" }
    ]
  }
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find(p => p.slug === slug);
}

export function getFeaturedProperties(limit: number = 6): Property[] {
  return properties.slice(0, limit);
}
