import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { communities } from "@/data/communities";
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communities.map((c) => (
              <div
                key={c.slug}
                className="bg-[#FFFFFF] border-2 border-[#0E0E0E] flex flex-col justify-between hover:bg-[#F4F1EA] transition-colors"
              >
                <div>
                  <div className="p-4 border-b border-[#0E0E0E] flex justify-between items-center bg-[#F4F1EA] font-mono text-xs">
                    <span className="font-black text-lg text-[#8C6A2F]">{c.numeral}</span>
                    <span className="text-[#59554F]">{c.coordinates}</span>
                  </div>

                  <Link href={`/communities/${c.slug}`} className="block relative aspect-[16/9] w-full border-b border-[#0E0E0E] bg-[#E8E3D8] overflow-hidden group">
                    <Image
                      src={c.heroImage}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="p-6">
                    <Link href={`/communities/${c.slug}`}>
                      <h2 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight hover:text-[#8C6A2F] transition-colors mb-2">
                        {c.name}
                      </h2>
                    </Link>
                    <p className="font-sans text-xs text-[#59554F] leading-relaxed mb-6">
                      {c.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-3 p-3 bg-[#F4F1EA] border border-[#0E0E0E] font-mono text-xs">
                      <div>
                        <span className="text-[#59554F] block text-[10px] uppercase">PRIME BENCHMARK</span>
                        <span className="font-bold text-[#0E0E0E]">AED {c.avgPricePerSqftAed} / SQFT</span>
                      </div>
                      <div>
                        <span className="text-[#59554F] block text-[10px] uppercase">ESTIMATED YIELD</span>
                        <span className="font-bold text-[#8C6A2F]">{c.grossRentalYield}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-[#0E0E0E] flex items-center justify-between">
                  <span className="font-mono text-xs text-[#59554F]">
                    WHO IT SUITS: {c.whoItSuits.slice(0, 40)}...
                  </span>
                  <Link
                    href={`/communities/${c.slug}`}
                    className="py-2 px-4 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-xs font-bold uppercase flex items-center gap-1.5 hover:bg-[#8C6A2F] transition-colors shrink-0 ml-4"
                  >
                    <span>DISTRICT DOSSIER</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
