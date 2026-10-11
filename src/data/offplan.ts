export interface OffPlanMilestone {
  stage: string;
  percentage: number;
  due: string;
}

export interface OffPlanProject {
  id: string;
  slug: string;
  title: string;
  developer: string;
  community: string;
  handover: string;
  paymentPlan: string;
  startingPriceAed: number;
  image: string;
  overview: string;
  unitTypes: string;
  milestones: OffPlanMilestone[];
  escrowVerified: boolean;
  dldPermit: string;
}

export const offPlanProjects: OffPlanProject[] = [
  {
    id: "op-1",
    slug: "bulgari-lighthouse-jumeirah-bay",
    title: "Bulgari Lighthouse",
    developer: "Meraas & Bulgari",
    community: "Jumeirah Bay Island",
    handover: "Q3 2027",
    paymentPlan: "70/30 Construction Linked",
    startingPriceAed: 65000000,
    image: "/images/properties/prop-4.webp",
    overview: "31 penthouses and a supreme three-story Sky Villa on Jumeirah Bay Island, engineered with Italian architectural louvers and private pools.",
    unitTypes: "4 & 5 Bedroom Penthouses, Sky Mansions",
    escrowVerified: true,
    dldPermit: "DLD-ESC-77401",
    milestones: [
      { stage: "Down Payment (Booking)", percentage: 20, due: "On Booking" },
      { stage: "Construction Milestone 1", percentage: 10, due: "6 Months" },
      { stage: "Construction Milestone 2", percentage: 10, due: "12 Months" },
      { stage: "Superstructure Milestone", percentage: 15, due: "18 Months" },
      { stage: "Glazing & MEP Milestone", percentage: 15, due: "24 Months" },
      { stage: "Handover & Title Transfer", percentage: 30, due: "On Handover (Q3 2027)" }
    ]
  },
  {
    id: "op-2",
    slug: "como-residences-palm-jumeirah",
    title: "Como Residences",
    developer: "Nakheel",
    community: "Palm Jumeirah",
    handover: "Q4 2027",
    paymentPlan: "80/20 Construction Linked",
    startingPriceAed: 21000000,
    image: "/images/properties/prop-1.webp",
    overview: "Organic seashell-inspired high-rise towering 71 stories on Palm Jumeirah trunk, with private sandy beach access and rooftop 360 infinity pool.",
    unitTypes: "2 to 7 Bedroom Residences, Duplexes",
    escrowVerified: true,
    dldPermit: "DLD-ESC-88129",
    milestones: [
      { stage: "Booking Deposit", percentage: 20, due: "Immediate" },
      { stage: "Foundation Work", percentage: 10, due: "Q4 2024" },
      { stage: "Podium Completion", percentage: 15, due: "Q2 2025" },
      { stage: "Level 40 Structural", percentage: 20, due: "Q1 2026" },
      { stage: "Façade Completion", percentage: 15, due: "Q1 2027" },
      { stage: "Key Handover", percentage: 20, due: "Q4 2027" }
    ]
  },
  {
    id: "op-3",
    slug: "the-lana-residences-marasi-bay",
    title: "The Lana Residences",
    developer: "Omniyat",
    community: "Business Bay",
    handover: "Q2 2026",
    paymentPlan: "60/40 Milestone Linked",
    startingPriceAed: 35000000,
    image: "/images/properties/prop-11.webp",
    overview: "39 bespoke waterfront residences managed by Dorchester Collection, set on the Marasi Marina canal with private yacht berths and Michelin dining.",
    unitTypes: "3, 4 & 5 Bedroom Waterfront Penthouses",
    escrowVerified: true,
    dldPermit: "DLD-ESC-65203",
    milestones: [
      { stage: "Down Payment", percentage: 25, due: "Upon Contract" },
      { stage: "Interior Fitout Start", percentage: 15, due: "Month 6" },
      { stage: "Cabinetry & Finishes", percentage: 20, due: "Month 12" },
      { stage: "Final Inspection & Keys", percentage: 40, due: "On Handover (Q2 2026)" }
    ]
  },
  {
    id: "op-4",
    slug: "creek-waters-2-creek-island",
    title: "Creek Waters 2",
    developer: "Emaar Properties",
    community: "Dubai Creek Harbour",
    handover: "Q4 2027",
    paymentPlan: "90/10 Flexible Plan",
    startingPriceAed: 4200000,
    image: "/images/properties/prop-9.webp",
    overview: "High-spec waterfront tower positioned on the promenade edge of Creek Island, facing the flamingo sanctuary and futuristic downtown skyline.",
    unitTypes: "1 to 4 Bedroom Apartments, Townhouses",
    escrowVerified: true,
    dldPermit: "DLD-ESC-91044",
    milestones: [
      { stage: "Booking Fee", percentage: 10, due: "Immediate" },
      { stage: "Installment 1 to 7", percentage: 70, due: "10% every 5 months" },
      { stage: "Construction 80%", percentage: 10, due: "Q2 2027" },
      { stage: "Handover Notice", percentage: 10, due: "December 2027" }
    ]
  }
];

export function getOffPlanBySlug(slug: string): OffPlanProject | undefined {
  return offPlanProjects.find(p => p.slug === slug);
}
