import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MarqueeTicker from "@/components/MarqueeTicker";
import PropertyIndexList from "@/components/PropertyIndexList";
import CommunitiesGrid from "@/components/CommunitiesGrid";
import OffPlanRadarScroll from "@/components/OffPlanRadarScroll";
import ProofSection from "@/components/ProofSection";
import ProcessSection from "@/components/ProcessSection";
import MortgageCalculator from "@/components/MortgageCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCtaBand from "@/components/FinalCtaBand";
import { getFeaturedProperties } from "@/data/properties";
import { ArrowUpRightIcon } from "@/components/Icons";

export default function HomePage() {
  const featuredProperties = getFeaturedProperties(6);

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      {/* Sticky Header */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Monospace Marquee Ticker */}
        <MarqueeTicker />

        {/* 3. Selected Properties (01 to 06) */}
        <section className="w-full py-16 md:py-24 border-b border-[#0E0E0E]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0E0E0E] pb-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
                  VERIFIED INVENTORY · SECTION 03
                </span>
                <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
                  SELECTED PROPERTIES
                </h2>
              </div>
              <div className="mt-4 md:mt-0">
                <Link
                  href="/properties"
                  className="font-mono text-xs uppercase tracking-wider font-bold text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center gap-1.5 transition-colors"
                >
                  <span>VIEW ALL 12 VERIFIED LISTINGS</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Property Index List with Desktop Cursor Preview */}
            <PropertyIndexList properties={featuredProperties} />

            <div className="mt-8 text-center">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#8C6A2F] transition-colors"
              >
                <span>OPEN FULL PORTFOLIO DIRECTORY (12 UNITS)</span>
                <ArrowUpRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Communities Grid */}
        <CommunitiesGrid />

        {/* 5. Off-Plan Radar */}
        <OffPlanRadarScroll />

        {/* 6. Proof & Transaction Capacity */}
        <ProofSection />

        {/* 7. Conveyancing & Advisory Process */}
        <ProcessSection />

        {/* 8. Mortgage & DLD Fee Calculator */}
        <MortgageCalculator />

        {/* 9. Representation Testimonials */}
        <TestimonialsSection />

        {/* 10. Final CTA Band */}
        <FinalCtaBand />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
