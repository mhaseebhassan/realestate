import React from "react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 border-b border-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0E0E0E] pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              REPRESENTATION TESTIMONIALS · SECTION 09
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
              CLIENT DISPATCHES
            </h2>
          </div>
          <p className="font-mono text-xs uppercase text-[#59554F] max-w-sm mt-3 md:mt-0">
            CONFIDENTIAL ACQUISITIONS EXECUTED FOR PRIVATE CAPITAL
          </p>
        </div>

        {/* 3 Text-forward Cards in Hard Ruled Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-[#0E0E0E] divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0E0E0E] bg-[#F4F1EA]">
          {testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 md:p-10 flex flex-col justify-between bg-[#FFFFFF] hover:bg-[#F4F1EA] transition-colors"
            >
              <div>
                <div className="flex justify-between items-center font-mono text-[10px] uppercase text-[#59554F] mb-6 border-b border-[#0E0E0E]/20 pb-3">
                  <span>DISPATCH {String(idx + 1).padStart(2, "0")}</span>
                  <span>{item.location} · {item.year}</span>
                </div>

                <blockquote className="font-serif italic text-lg md:text-xl text-[#0E0E0E] leading-relaxed mb-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#0E0E0E]">
                <div className="font-mono text-xs font-bold text-[#0E0E0E] uppercase mb-0.5">
                  {item.clientIdentifier}
                </div>
                <div className="font-mono text-[11px] text-[#59554F] uppercase">
                  {item.role}
                </div>
                <div className="font-mono text-[10px] text-[#8C6A2F] uppercase mt-2">
                  {item.transactionContext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
