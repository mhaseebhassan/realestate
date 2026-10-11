import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig } from "@/config/brand";

export const metadata: Metadata = {
  title: "Regulatory Disclosure & Legal Framework",
  description: "RERA broker accreditation, privacy policy, terms of representation, and Dubai Land Department escrow compliance framework.",
};

export default function LegalPage() {
  const { broker, contact } = brandConfig;

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />

      <main className="flex-1">
        {/* Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              STATUTORY COMPLIANCE & LEGAL FRAMEWORK
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
              REGULATORY & LEGAL TERMS
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
              RERA BROKER ACCREDITATION, DLD CONVEYANCING MANDATES, PRIVACY POLICY, AND COOKIE FRAMEWORK.
            </p>
          </div>
        </div>

        {/* Legal Text Sections */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 space-y-12">
          {/* Section 1: RERA & DLD Regulatory Accreditations */}
          <div className="p-8 bg-[#FFFFFF] border-2 border-[#0E0E0E]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              SECTION 01 · REGULATORY STANDING
            </span>
            <h2 className="font-sans font-black text-2xl text-[#0E0E0E] mb-4">
              DUBAI REAL ESTATE REGULATORY AGENCY (RERA) DISCLOSURE
            </h2>
            <div className="space-y-3 font-sans text-sm text-[#0E0E0E] leading-relaxed">
              <p>
                <strong>{broker.fullName}</strong> operates under authorized corporate license <strong>{broker.license.orn}</strong> issued by the Dubai Department of Economy and Tourism (DET) and registered with the Real Estate Regulatory Agency (RERA). Personal broker accreditation card: <strong>{broker.license.brn}</strong>. Official RERA advertising permit placeholder: <strong>{broker.license.reraPermit}</strong>.
              </p>
              <p>
                All conveyancing, title deed issuances, and official sales contracts are executed strictly in accordance with Dubai Law No. 7 of 2006 (Concerning Real Property Registration in the Emirate of Dubai) through authorized Dubai Land Department (DLD) Trustee Offices.
              </p>
            </div>
          </div>

          {/* Section 2: Escrow Accounts Law */}
          <div className="p-8 bg-[#FFFFFF] border-2 border-[#0E0E0E]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              SECTION 02 · OFF-PLAN DEPOSITS
            </span>
            <h2 className="font-sans font-black text-2xl text-[#0E0E0E] mb-4">
              UAE LAW NO. 8 OF 2007 (ESCROW ACCOUNTS COMPLIANCE)
            </h2>
            <div className="space-y-3 font-sans text-sm text-[#0E0E0E] leading-relaxed">
              <p>
                All payments for off-plan property developments are directed exclusively to certified escrow accounts monitored by the Dubai Land Department. Neither {broker.fullName} nor the brokerage maintains or accepts off-plan purchase deposits into corporate operating accounts. Every off-plan transaction referenced on this portal is verified against active DLD Escrow registration records.
              </p>
            </div>
          </div>

          {/* Section 3: Privacy & Data Protection */}
          <div className="p-8 bg-[#FFFFFF] border-2 border-[#0E0E0E]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              SECTION 03 · CONFIDENTIALITY
            </span>
            <h2 className="font-sans font-black text-2xl text-[#0E0E0E] mb-4">
              DATA PRIVACY & PERSONAL DATA PROTECTION LAW
            </h2>
            <div className="space-y-3 font-sans text-sm text-[#0E0E0E] leading-relaxed">
              <p>
                In compliance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection, all client communications, contact numbers, and investment criteria submitted via WhatsApp, email, or telephone are maintained under strict bilateral confidentiality.
              </p>
              <p>
                We do not sell, rent, monetize, or syndicate client information to third-party telemarketing portals or unaffiliated agencies.
              </p>
            </div>
          </div>

          {/* Section 4: Cookie Policy */}
          <div className="p-8 bg-[#FFFFFF] border-2 border-[#0E0E0E]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              SECTION 04 · ANALYTICS
            </span>
            <h2 className="font-sans font-black text-2xl text-[#0E0E0E] mb-4">
              COOKIE USAGE & ANALYTICS PREFERENCE
            </h2>
            <div className="space-y-3 font-sans text-sm text-[#0E0E0E] leading-relaxed">
              <p>
                This website employs minimal performance and engagement cookies strictly to monitor portfolio visits and optimize conversion flows. Analytical scripts (Google Analytics GA4 and Meta Pixel) execute solely after user acceptance via our consent banner. Users may decline analytics without impacting website access or inquiry transmission.
              </p>
            </div>
          </div>

          {/* Section 5: Master Template Disclaimer */}
          <div className="p-8 bg-[#E8E3D8] border-2 border-[#0E0E0E] font-mono text-xs text-[#59554F]">
            <span className="font-bold text-[#0E0E0E] uppercase block mb-2">
              MASTER TEMPLATE DEMO NOTICE:
            </span>
            <p className="leading-relaxed">
              This digital platform is a master production template built for luxury Dubai real estate advisory rebranding. Numbers, property references, and historical transaction volumes represent sample benchmarks for architectural presentation purposes.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
