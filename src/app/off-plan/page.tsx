import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { offPlanProjects } from "@/data/offplan";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import LeadForm from "@/components/LeadForm";
import CurrencyPrice from "@/components/CurrencyPrice";
import { WhatsAppIcon, ShieldVerifiedIcon, ArrowUpRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Dubai Off-Plan Radar | Direct Developer Allocations",
  description: "Audited Dubai off-plan developments with verified DLD Escrow accounts. Bulgari Lighthouse, Como Residences, The Lana, and Creek Waters 2.",
};

export default function OffPlanPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />

      <main className="flex-1">
        {/* Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              DEVELOPER ALLOCATION RADAR · DLD ESCROW VERIFIED
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
              OFF-PLAN LAUNCH RADAR
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
              EARLY ACCESS TO ULTRA-PRIME WATERFRONT AND GOLF DEVELOPMENTS BEFORE PUBLIC AGENT PORTAL SYNDICATION.
            </p>
          </div>
        </div>

        {/* Regulatory Escrow Notice Strip */}
        <div className="bg-[#FFFFFF] border-b-2 border-[#0E0E0E] px-4 md:px-8 py-4 font-mono text-xs">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 text-[#59554F]">
            <div className="flex items-center gap-2 text-[#0E0E0E]">
              <ShieldVerifiedIcon className="w-4 h-4 text-[#8C6A2F]" />
              <span className="font-bold">UAE LAW NO. 8 OF 2007 (ESCROW ACCOUNTS MANDATE):</span>
            </div>
            <div>
              100% of buyer payments are deposited directly into Dubai Land Department (DLD) regulated escrow bank accounts.
            </div>
          </div>
        </div>

        {/* Projects List Container */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 space-y-12">
          {offPlanProjects.map((project, idx) => {
            const indexNum = String(idx + 1).padStart(2, "0");
            const whatsappMessage = `Hi ${brandConfig.broker.firstName}, please send me the official developer price list, unit layouts, and escrow schedule for ${project.title} (${project.developer}) in ${project.community}.`;

            return (
              <div
                key={project.id}
                className="bg-[#FFFFFF] border-2 border-[#0E0E0E] overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="bg-[#F4F1EA] border-b-2 border-[#0E0E0E] p-4 md:p-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-black text-xl text-[#8C6A2F]">
                      RADAR {indexNum}
                    </span>
                    <span className="font-bold text-[#0E0E0E] uppercase text-sm">
                      {project.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-[#59554F]">
                    <span>DEVELOPER: <strong className="text-[#0E0E0E]">{project.developer}</strong></span>
                    <span>·</span>
                    <span>HANDOVER: <strong className="text-[#0E0E0E]">{project.handover}</strong></span>
                    <span>·</span>
                    <span className="text-[#8C6A2F] font-bold">{project.dldPermit}</span>
                  </div>
                </div>

                {/* 12-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-[#0E0E0E]">
                  {/* Image (5 cols) */}
                  <div className="lg:col-span-5 relative aspect-[16/11] lg:aspect-auto w-full bg-[#E8E3D8]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[10px] uppercase font-bold px-2.5 py-1">
                      {project.community}
                    </div>
                  </div>

                  {/* Details and Payment Plan Graphic (7 cols) */}
                  <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="font-mono text-xs uppercase text-[#59554F] mb-1">
                        UNIT TYPES: {project.unitTypes}
                      </div>
                      <h2 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight mb-3">
                        {project.title}
                      </h2>
                      <p className="font-sans text-sm text-[#0E0E0E] leading-relaxed mb-6">
                        {project.overview}
                      </p>

                      {/* Payment Plan Timeline Graphic */}
                      <div className="bg-[#F4F1EA] border border-[#0E0E0E] p-4 font-mono">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] uppercase text-[#59554F]">
                            PAYMENT PLAN STRUCTURE & ESCROW MILESTONES
                          </span>
                          <span className="text-xs font-bold text-[#8C6A2F]">
                            {project.paymentPlan}
                          </span>
                        </div>

                        {/* Visual timeline bar */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5 text-center">
                          {project.milestones.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="bg-[#FFFFFF] border border-[#0E0E0E] p-2 flex flex-col justify-between"
                            >
                              <div className="text-sm font-black text-[#0E0E0E]">{m.percentage}%</div>
                              <div className="text-[9px] text-[#59554F] uppercase mt-1 leading-tight">{m.stage}</div>
                              <div className="text-[8px] text-[#8C6A2F] mt-1 font-bold">{m.due}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom CTA Bar */}
                    <div className="pt-6 border-t-2 border-[#0E0E0E] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
                      <div>
                        <span className="text-[10px] uppercase text-[#59554F] block">
                          STARTING ACQUISITION
                        </span>
                        <div className="font-black text-2xl text-[#0E0E0E]">
                          <CurrencyPrice aedAmount={project.startingPriceAed} showOriginalAed />
                        </div>
                      </div>

                      <a
                        href={buildWhatsAppLink(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 bg-[#8C6A2F] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider hover:bg-[#735523] transition-colors flex items-center justify-center gap-2 border border-[#8C6A2F]"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>GET PRICE LIST VIA WHATSAPP</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tail Allocation Intake Section */}
        <section className="bg-[#E8E3D8] border-t-2 border-[#0E0E0E] py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <LeadForm
              heading="REQUEST SPECIFIC DEVELOPER ALLOCATION"
              subheading="Looking for unreleased penthouse floorplates or direct developer VIP allocations? Dispatch your criteria."
              buttonLabel="TRANSMIT DEVELOPER MANDATE"
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
