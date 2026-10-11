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
          start: "top top",
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
      className="w-full bg-[#E8E3D8] border-b-2 border-[#0E0E0E] overflow-hidden py-16 lg:py-20"
    >
      <div className="px-4 md:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between border-b border-[#0E0E0E] pb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
            DEVELOPER PIPELINE · SECTION 05
          </span>
          <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
            OFF-PLAN RADAR
          </h2>
        </div>
        <div className="flex items-center gap-4 mt-3 md:mt-0 font-mono text-xs uppercase text-[#59554F]">
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
          className="flex gap-6 lg:gap-8 min-w-max pb-4"
        >
          {offPlanProjects.map((project, idx) => {
            const indexNum = String(idx + 1).padStart(2, "0");
            const waInquiry = `Hi ${brandConfig.broker.firstName}, please share the developer brochure and current payment plan for ${project.title} (${project.developer}) in ${project.community}.`;

            return (
              <div
                key={project.id}
                className="w-[320px] sm:w-[420px] lg:w-[460px] bg-[#FFFFFF] border-2 border-[#0E0E0E] flex flex-col shrink-0"
              >
                {/* Header Strip */}
                <div className="p-4 border-b border-[#0E0E0E] flex justify-between items-center bg-[#F4F1EA]">
                  <span className="font-mono font-black text-lg text-[#8C6A2F]">
                    LAUNCH {indexNum}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#0E0E0E] font-bold">
                    {project.developer}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative aspect-[16/10] w-full border-b border-[#0E0E0E] bg-[#E8E3D8]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 320px, 460px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0E0E0E] text-[#FFFFFF] px-2.5 py-1 font-mono text-[10px] uppercase font-bold tracking-wider">
                    HANDOVER: {project.handover}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-1">
                      {project.community} · {project.dldPermit}
                    </div>
                    <h3 className="font-sans font-black text-2xl text-[#0E0E0E] tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-xs text-[#59554F] leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Payment Plan Graphic / Strip */}
                  <div className="bg-[#F4F1EA] border border-[#0E0E0E] p-3 font-mono text-xs">
                    <div className="text-[10px] text-[#59554F] uppercase tracking-wider mb-1">
                      PAYMENT STRUCTURE
                    </div>
                    <div className="font-bold text-sm text-[#0E0E0E] mb-2">
                      {project.paymentPlan}
                    </div>

                    {/* Milestones mini progression */}
                    <div className="grid grid-cols-4 gap-1 text-center text-[10px]">
                      {project.milestones.slice(0, 4).map((m, mIdx) => (
                        <div key={mIdx} className="bg-[#FFFFFF] border border-[#0E0E0E] p-1">
                          <div className="font-bold text-[#8C6A2F]">{m.percentage}%</div>
                          <div className="text-[8px] text-[#59554F] truncate">{m.due}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Starting Price & Action */}
                  <div className="pt-4 border-t border-[#0E0E0E] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-[#59554F] uppercase block">
                        STARTING FROM
                      </span>
                      <span className="font-mono font-black text-xl text-[#0E0E0E]">
                        {formatPrice(project.startingPriceAed)}
                      </span>
                    </div>

                    <a
                      href={buildWhatsAppLink(waInquiry)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-4 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-[11px] uppercase font-bold tracking-wider hover:bg-[#735523] transition-colors flex items-center gap-1.5"
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
