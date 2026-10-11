import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { communities } from "@/data/communities";
import CurrencyPrice from "@/components/CurrencyPrice";
import { ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Prime Dubai Districts & Enclaves Guide",
  description: "Comprehensive capital analysis of Dubai's eight premier residential districts: Palm Jumeirah, Emirates Hills, Jumeirah Bay, and Downtown Dubai.",
};

export default function CommunitiesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />

      <main className="flex-1">
        {/* Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              TERRITORY GUIDE & INFRASTRUCTURE
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
              PRIME DISTRICTS
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
              EIGHT HIGH-CONVICTION POSTAL CODES DEFINING DUBAI ULTRA-PRIME CAPITAL ALLOCATION.
            </p>
          </div>
        </div>

        {/* Districts Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((c) => (
              <Link
                key={c.slug}
                href={`/communities/${c.slug}`}
                className="group bg-[#FFFFFF] border-2 border-[#0E0E0E] p-4 flex flex-col justify-between hover:bg-[#F4F1EA] transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full border border-[#0E0E0E] mb-3 overflow-hidden bg-[#E8E3D8]">
                    <Image
                      src={c.heroImage}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[10px] px-2 py-0.5 font-bold">
                      {c.numeral}
                    </span>
                    <span className="absolute top-2 right-2 bg-[#F4F1EA]/95 border border-[#0E0E0E] text-[#0E0E0E] font-mono text-[9px] px-1.5 py-0.5">
                      {c.coordinates}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-lg text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors line-clamp-1 mb-1">
                    {c.name}
                  </h3>
                  <p className="font-mono text-[11px] text-[#59554F] line-clamp-2 mb-3">
                    {c.tagline}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-[#0E0E0E]/20 font-mono text-xs flex justify-between items-baseline">
                  <div>
                    <span className="text-[10px] text-[#59554F] uppercase block">BENCHMARK</span>
                    <span className="font-black text-[#0E0E0E]">
                      <CurrencyPrice aedAmount={c.avgPricePerSqftAed} isSqft />
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-[#59554F] uppercase block">YIELD</span>
                    <span className="font-bold text-[#8C6A2F]">{c.grossRentalYield}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
