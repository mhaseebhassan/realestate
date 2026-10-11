"use client";

import React from "react";
import { tickerMetrics, sampleDataDisclaimer } from "@/data/marketStats";

export default function MarqueeTicker() {
  // Duplicate for continuous infinite loop
  const displayMetrics = [...tickerMetrics, ...tickerMetrics];

  return (
    <div className="w-full bg-[#0E0E0E] text-[#F4F1EA] border-b border-[#0E0E0E] overflow-hidden py-2.5 relative select-none">
      <div className="flex items-center">
        <div className="shrink-0 px-4 font-mono text-[10px] tracking-widest text-[#8C6A2F] border-r border-[#333333] hidden sm:block uppercase">
          MARKET RADAR [SAMPLE]
        </div>

        <div className="overflow-hidden flex-1 relative flex">
          <div className="animate-marquee flex items-center whitespace-nowrap">
            {displayMetrics.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="inline-flex items-center gap-2.5 px-6 font-mono text-[11px] uppercase tracking-wider"
              >
                <span className="text-[#A39E93]">{item.label}:</span>
                <span className="font-bold text-[#FFFFFF]">{item.value}</span>
                {item.change && (
                  <span className="text-[#8C6A2F] text-[10px]">({item.change})</span>
                )}
                <span className="text-[#444444] ml-4">/</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
