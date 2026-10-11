import React from "react";

const processSteps = [
  {
    numeral: "01",
    phase: "BRIEF & MANDATE",
    subtitle: "Capital allocation & structural criteria",
    description: "Initial 20-minute consultation to define postal code preference, yield threshold, private berth or security requirements, and residency or tax structuring objectives. We execute a mutual non-disclosure agreement before reviewing confidential listings.",
    deliverable: "Custom 1-page Investor Mandate Memorandum"
  },
  {
    numeral: "02",
    phase: "OFF-MARKET SHORTLIST",
    subtitle: "DLD historical comps & physical inspection",
    description: "Filtering through 300+ private listings down to 3 to 4 viable candidates. Every property is vetted with certified DLD transaction history, building service charge audits, and direct ownership confirmation. Private chauffeur viewings arranged discreetly.",
    deliverable: "Comparative Valuation Dossier with net yield models"
  },
  {
    numeral: "03",
    phase: "HARD NEGOTIATION",
    subtitle: "Form F Unified Contract & price defense",
    description: "Direct negotiation with the principal or developer board. We structure payment schedules, enforce snagging allowances, and prepare the RERA Unified Contract (Form F) with certified manager escrow checks to lock terms firmly in your favor.",
    deliverable: "Executed Form F and DLD Escrow Clearance"
  },
  {
    numeral: "04",
    phase: "HANDOVER & TRUSTEE CONVEYANCING",
    subtitle: "DLD Trustee transfer & post-closing care",
    description: "In-person representation at an authorized Dubai Land Department Trustee Office for deed issuance and title transfer. Complete post-closing service including DEWA utilities connection, luxury leasing placement, and Golden Visa processing.",
    deliverable: "Original Title Deed & Golden Visa Application"
  }
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-[#F4F1EA] py-16 md:py-24 border-b border-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0E0E0E] pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              ACQUISITION FRAMEWORK · SECTION 07
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
              CONVEYANCING & ADVISORY PROCESS
            </h2>
          </div>
          <p className="font-mono text-xs uppercase text-[#59554F] max-w-sm mt-3 md:mt-0">
            RIGID 4-STAGE METHODOLOGY GOVERNING EVERY PRIVATE TRANSACTION
          </p>
        </div>

        {/* 4-Step Hard Ruled Table */}
        <div className="border-2 border-[#0E0E0E] divide-y-2 divide-[#0E0E0E] bg-[#FFFFFF]">
          {processSteps.map((step) => (
            <div
              key={step.numeral}
              className="grid grid-cols-1 lg:grid-cols-12 p-6 md:p-8 hover:bg-[#F4F1EA] transition-colors"
            >
              {/* Numeral */}
              <div className="lg:col-span-2 mb-4 lg:mb-0">
                <span className="font-mono font-black text-4xl md:text-5xl text-[#8C6A2F] block">
                  {step.numeral}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F]">
                  STAGE {step.numeral}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="lg:col-span-4 mb-4 lg:mb-0 pr-4">
                <h3 className="font-sans font-black text-xl md:text-2xl text-[#0E0E0E] tracking-tight mb-1">
                  {step.phase}
                </h3>
                <p className="font-mono text-xs uppercase text-[#8C6A2F]">
                  {step.subtitle}
                </p>
              </div>

              {/* Description & Deliverable */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <p className="font-sans text-sm text-[#0E0E0E] leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-[#0E0E0E]/20 flex items-center justify-between font-mono text-[11px] uppercase">
                  <span className="text-[#59554F]">DELIVERABLE:</span>
                  <span className="font-bold text-[#0E0E0E]">{step.deliverable}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
