export interface Testimonial {
  id: string;
  clientIdentifier: string; // Clearly marked placeholder as required
  location: string;
  role: string;
  transactionContext: string;
  quote: string;
  year: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    clientIdentifier: "[Client Name - Geneva Family Office]",
    location: "Geneva, Switzerland",
    role: "Single Family Office Principal",
    transactionContext: "AED 95M Acquisition across Palm Jumeirah & Jumeirah Bay",
    quote: "Tariq operates with the discretion of a private banker and the precision of an engineer. When our mandate required off-market land on Jumeirah Bay Island, he secured the title directly from the seller within five business days without public disclosure. Outstanding advisory.",
    year: "2024"
  },
  {
    id: "test-2",
    clientIdentifier: "[Client Name - London Private Equity Partner]",
    location: "London, United Kingdom",
    role: "Managing Partner, Growth Equity",
    transactionContext: "AED 44.5M Penthouse Acquisition in Downtown Dubai",
    quote: "Most Dubai agents push developer marketing brochures. Tariq sent me a clean 3-page financial memorandum detailing historical price per square foot comps, actual net service charges, and DLD escrow account milestones. That direct clarity made the decision instantaneous.",
    year: "2025"
  },
  {
    id: "test-3",
    clientIdentifier: "[Client Name - Singapore Tech Founder]",
    location: "Singapore",
    role: "Technology Founder & Angel Investor",
    transactionContext: "AED 52M Estate Acquisition in Emirates Hills",
    quote: "Relocating family office assets to the UAE requires rigorous legal and conveyancing navigation. Tariq handled the power of attorney, DLD bank manager escrow clearance, and Golden Visa processing end-to-end. Truly exceptional execution.",
    year: "2025"
  }
];
