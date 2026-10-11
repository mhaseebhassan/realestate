import React from "react";
import Link from "next/link";
import Image from "next/image";
import { communities } from "@/data/communities";
import { ArrowUpRightIcon } from "./Icons";

export default function CommunitiesGrid() {
  return (
    <section id="communities" className="w-full bg-[#F4F1EA] py-16 md:py-24 border-b border-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0E0E0E] pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              TERRITORY DISPATCH · SECTION 04
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
              PRIME DISTRICTS & ENCLAVES
            </h2>
          </div>
          <p className="font-mono text-xs uppercase text-[#59554F] max-w-sm mt-3 md:mt-0">
            EIGHT RESTRICTED POSTAL CODES ACCOUNTING FOR 82% OF DUBAI ULTRA-PRIME CAPITAL
          </p>
        </div>

        {/* Asymmetric Swiss Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-[#0E0E0E] divide-y-2 md:divide-y-0 md:divide-x-2 lg:divide-x-2 divide-[#0E0E0E]">
          {communities.map((c, idx) => {
            // Give 1st and 4th card special asymmetric span or visual presence
            const isWide = idx === 0 || idx === 3;

            return (
              <Link
                key={c.slug}
                href={`/communities/${c.slug}`}
                className={`group flex flex-col justify-between bg-[#FFFFFF] p-6 hover:bg-[#F4F1EA] transition-colors relative border-b-2 lg:border-b-0 border-[#0E0E0E] ${
                  isWide ? "lg:col-span-2" : "lg:col-span-1"
                }`}
              >
                {/* Image block */}
                <div className="relative aspect-[16/9] w-full border border-[#0E0E0E] mb-6 overflow-hidden bg-[#E8E3D8]">
                  <Image
                    src={c.heroImage}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-xs px-2 py-0.5 font-bold">
                    {c.numeral}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-sans font-black text-2xl text-[#0E0E0E] tracking-tight group-hover:text-[#8C6A2F] transition-colors">
                        {c.name}
                      </h3>
                      <div className="w-8 h-8 border border-[#0E0E0E] flex items-center justify-center shrink-0 group-hover:bg-[#0E0E0E] group-hover:text-[#FFFFFF] transition-colors">
                        <ArrowUpRightIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <p className="font-mono text-xs text-[#59554F] mb-4 line-clamp-2">
                      {c.tagline}
                    </p>
                  </div>

                  {/* Single Data Line */}
                  <div className="pt-4 border-t border-[#0E0E0E]/20 font-mono text-[11px] uppercase space-y-1">
                    <div className="flex justify-between">
                      <span className="text-[#59554F]">PRIME AVG:</span>
                      <span className="font-bold text-[#0E0E0E]">AED {c.avgPricePerSqftAed} / SQFT</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#59554F]">EST. YIELD:</span>
                      <span className="font-bold text-[#8C6A2F]">{c.grossRentalYield}</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
