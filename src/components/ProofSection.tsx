import React from "react";
import { brandConfig } from "@/config/brand";

export default function ProofSection() {
  const { stats, broker } = brandConfig;

  return (
    <section className="w-full bg-[#FFFFFF] border-b-2 border-[#0E0E0E] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0E0E0E] pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              AUDITED METRICS · SECTION 06
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
              TRANSACTION PROOF & CAPACITY
            </h2>
          </div>
          <div className="font-mono text-[11px] uppercase text-[#59554F] max-w-xs mt-3 md:mt-0">
            [SAMPLE BENCHMARKS SUBJECT TO BROKER REBRAND]
          </div>
        </div>

        {/* 5-Column Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-2 border-[#0E0E0E] divide-x-2 divide-y-2 md:divide-y-0 divide-[#0E0E0E] bg-[#F4F1EA]">
          {/* Stat 1 */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-4">
              MARKET TENURE
            </span>
            <div>
              <div className="font-mono font-black text-3xl md:text-5xl text-[#0E0E0E] mb-1">
                {stats.yearsInMarket.value}
                <span className="text-[#8C6A2F] text-2xl md:text-3xl">Y</span>
              </div>
              <div className="font-sans text-xs font-bold uppercase text-[#0E0E0E]">
                {stats.yearsInMarket.label}
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-4">
              CAPITAL VOLUME
            </span>
            <div>
              <div className="font-mono font-black text-3xl md:text-5xl text-[#0E0E0E] mb-1">
                3.8B<span className="text-[#8C6A2F] text-2xl md:text-3xl">+</span>
              </div>
              <div className="font-sans text-xs font-bold uppercase text-[#0E0E0E]">
                AED Transacted (Sample)
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-4">
              CLOSED TRANSACTIONS
            </span>
            <div>
              <div className="font-mono font-black text-3xl md:text-5xl text-[#0E0E0E] mb-1">
                {stats.dealsClosed.value}
              </div>
              <div className="font-sans text-xs font-bold uppercase text-[#0E0E0E]">
                {stats.dealsClosed.label}
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-4">
              SPOKEN FLUENCY
            </span>
            <div>
              <div className="font-mono font-black text-3xl md:text-5xl text-[#0E0E0E] mb-1">
                {broker.languages.length}
              </div>
              <div className="font-sans text-xs font-bold uppercase text-[#0E0E0E]">
                {broker.languages.join(", ")}
              </div>
            </div>
          </div>

          {/* Stat 5 */}
          <div className="p-6 md:p-8 flex flex-col justify-between col-span-2 md:col-span-1">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-4">
              RESPONSE COMMITMENT
            </span>
            <div>
              <div className="font-mono font-black text-3xl md:text-5xl text-[#8C6A2F] mb-1">
                {stats.avgResponseMinutes.value}
                <span className="text-[#0E0E0E] text-2xl md:text-3xl">M</span>
              </div>
              <div className="font-sans text-xs font-bold uppercase text-[#0E0E0E]">
                Average Response Time
              </div>
            </div>
          </div>
        </div>

        {/* Developer Trust Wordmarks Strip */}
        <div className="mt-12 pt-8 border-t border-[#0E0E0E] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] shrink-0">
            MASTER DEVELOPER COUNTERPARTIES:
          </span>
          <div className="flex flex-wrap items-center gap-6 md:gap-10 font-mono text-sm tracking-wider font-bold text-[#0E0E0E]">
            <span>EMAAR PROPERTIES</span>
            <span className="text-[#D6D0C4]">/</span>
            <span>OMNIYAT</span>
            <span className="text-[#D6D0C4]">/</span>
            <span>MERAAS</span>
            <span className="text-[#D6D0C4]">/</span>
            <span>SELECT GROUP</span>
            <span className="text-[#D6D0C4]">/</span>
            <span>NAKHEEL</span>
            <span className="text-[#D6D0C4]">/</span>
            <span>BULGARI HOSPITALITY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
