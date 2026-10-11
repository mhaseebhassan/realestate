"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { offPlanProjects } from "@/data/offplan";
import { useCurrency } from "@/context/CurrencyContext";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { ArrowUpRightIcon, WhatsAppIcon, ShieldVerifiedIcon } from "./Icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function OffPlanRadarScroll() {
  const { formatPrice } = useCurrency();
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Only apply pinned horizontal scroll on large desktop screens
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const scrollWidth = track.scrollWidth - window.innerWidth + 120;

      const tween = gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: "top 64px",
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#E8E3D8] border-b-2 border-[#0E0E0E] overflow-hidden py-8 lg:py-10"
    >
      <div className="px-4 md:px-8 mb-5 flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E0E0E] pb-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-1">
            DEVELOPER PIPELINE · SECTION 05
          </span>
          <h2 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl tracking-tight text-[#0E0E0E]">
            OFF-PLAN RADAR
          </h2>
        </div>
        <div className="flex items-center gap-4 mt-2 md:mt-0 font-mono text-xs uppercase text-[#59554F]">
          <span className="flex items-center gap-1 text-[#0E0E0E]">
            <ShieldVerifiedIcon className="w-4 h-4 text-[#8C6A2F]" />
            DLD ESCROW VERIFIED ONLY
          </span>
          <span className="hidden sm:inline">·</span>
          <Link href="/off-plan" className="hover:text-[#8C6A2F] underline hidden sm:inline">
            VIEW FULL ALLOCATION DIRECTORY
          </Link>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div className="w-full overflow-x-auto lg:overflow-visible no-scrollbar px-4 md:px-8">
        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-8 min-w-max pb-2"
        >
          {offPlanProjects.map((project, idx) => {
            const indexNum = String(idx + 1).padStart(2, "0");
            const waInquiry = `Hi ${brandConfig.broker.firstName}, please share the developer brochure and current payment plan for ${project.title} (${project.developer}) in ${project.community}.`;

            return (
              <div
                key={project.id}
                className="w-[320px] sm:w-[400px] lg:w-[680px] bg-[#FFFFFF] border-2 border-[#0E0E0E] flex flex-col lg:flex-row shrink-0 overflow-hidden"
              >
                {/* Image block (Left col on desktop) */}
                <div className="relative aspect-[16/10] lg:aspect-auto lg:w-[280px] border-b-2 lg:border-b-0 lg:border-r-2 border-[#0E0E0E] bg-[#E8E3D8] shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 400px, 280px"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-[#0E0E0E] text-[#FFFFFF] px-2 py-0.5 font-mono text-[9px] uppercase font-bold tracking-wider">
                    HANDOVER: {project.handover}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 bg-[#FFFFFF]/95 border border-[#0E0E0E] px-2 py-0.5 font-mono text-[9px] uppercase font-bold text-[#0E0E0E]">
                    {project.community}
                  </div>
                </div>

                {/* Details block (Right col on desktop) */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex justify-between items-center font-mono text-xs border-b border-[#0E0E0E]/20 pb-2 mb-2">
                      <span className="font-black text-[#8C6A2F]">LAUNCH {indexNum}</span>
                      <span className="text-[10px] text-[#59554F] font-bold uppercase">{project.developer}</span>
                    </div>

                    <h3 className="font-sans font-black text-lg sm:text-xl text-[#0E0E0E] tracking-tight mb-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-[#59554F] leading-snug line-clamp-2">
                      {project.overview}
                    </p>
                  </div>

                  {/* Payment Structure timeline strip */}
                  <div className="bg-[#F4F1EA] border border-[#0E0E0E] p-2.5 font-mono text-[10px]">
                    <div className="flex justify-between items-center mb-1.5 text-[9px] uppercase text-[#59554F]">
                      <span>PAYMENT STRUCTURE</span>
                      <span className="font-bold text-[#0E0E0E]">{project.paymentPlan}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-1 text-center">
                      {project.milestones.slice(0, 4).map((m, mIdx) => (
                        <div key={mIdx} className="bg-[#FFFFFF] border border-[#0E0E0E] p-1">
                          <div className="font-bold text-[#8C6A2F] text-[10px]">{m.percentage}%</div>
                          <div className="text-[7.5px] text-[#59554F] truncate">{m.due}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Starting Price & Action */}
                  <div className="pt-2 border-t border-[#0E0E0E]/20 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[9px] text-[#59554F] uppercase block">
                        STARTING ACQUISITION
                      </span>
                      <span className="font-mono font-black text-base sm:text-lg text-[#0E0E0E]">
                        {formatPrice(project.startingPriceAed)}
                      </span>
                    </div>

                    <a
                      href={buildWhatsAppLink(waInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 sm:px-4 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-[10px] sm:text-[11px] uppercase font-bold tracking-wider hover:bg-[#735523] transition-colors flex items-center gap-1.5 border border-[#8C6A2F]"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>PRICE LIST</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
