"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { WhatsAppIcon, ArrowRightIcon } from "./Icons";

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppLink(
    `Hi ${brandConfig.broker.firstName}, I am contacting you to discuss acquiring a prime property in Dubai.`
  );

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-[92vh] flex flex-col justify-between border-b-2 border-[#0E0E0E] bg-[#F4F1EA] overflow-hidden">
      {/* Background Architectural Image with Crisp Daylight Filter */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/dubai-hero.webp"
          alt="Dubai prime architectural skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35"
        />
        {/* Architectural grid overlay lines */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA] via-transparent to-transparent"></div>
        <div className="absolute inset-0 pointer-events-none border-b border-[#0E0E0E]/10"></div>
      </div>

      {/* Top Meta Bar */}
      <div className="relative z-10 w-full px-4 md:px-8 pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-[#0E0E0E]">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 bg-[#FFFFFF] border border-[#0E0E0E] font-bold">
            {brandConfig.broker.license.orn} · {brandConfig.broker.license.brn}
          </span>
          <span className="hidden sm:inline text-[#59554F]">
            RERA REGISTERED PRIVATE ADVISORY
          </span>
        </div>

        <div className="flex items-center gap-4 text-[#59554F]">
          <span>{brandConfig.contact.coordinates}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline text-[#0E0E0E] font-bold">
            DIFC GATE PRECINCT
          </span>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="relative z-10 w-full px-4 md:px-8 py-12 md:py-16 max-w-6xl">
        <div className="inline-block px-3 py-1 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[11px] uppercase font-bold tracking-widest mb-6">
          PRIVATE CLIENT REPRESENTATION · ULTRA PRIME ONLY
        </div>

        {/* 6 to 9 word giant headline with serif italic accent */}
        <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-8xl tracking-tight text-[#0E0E0E] leading-[0.98] mb-6">
          DUBAI&apos;S BEST <br className="sm:hidden" />ADDRESSES. <br />
          NEGOTIATED <span className="font-serif italic font-normal text-[#8C6A2F]">PROPERLY.</span>
        </h1>

        {/* One-sentence proof line */}
        <p className="font-sans text-base sm:text-xl text-[#0E0E0E] max-w-2xl font-medium leading-relaxed mb-8">
          Over AED 3.8B in verified private transactions across Palm Jumeirah, Emirates Hills, and Jumeirah Bay. Direct representation without junior handoffs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          {/* Primary: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#735523] transition-colors flex items-center justify-center gap-2.5 border border-[#8C6A2F]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>WHATSAPP {brandConfig.broker.firstName.toUpperCase()}</span>
          </a>

          {/* Outlined: Request viewing */}
          <Link
            href="/#calculator"
            className="px-8 py-4 bg-[#FFFFFF] text-[#0E0E0E] border-2 border-[#0E0E0E] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#0E0E0E] hover:text-[#FFFFFF] transition-colors flex items-center justify-center gap-2"
          >
            <span>MORTGAGE & DLD CALCULATOR</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom Ticker / Stat Pillars */}
      <div className="relative z-10 w-full border-t-2 border-[#0E0E0E] bg-[#FFFFFF]/90 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#0E0E0E]">
        <div className="p-4 md:p-6 font-mono">
          <span className="text-[10px] uppercase text-[#59554F] block">BROKER TENURE</span>
          <span className="text-xl md:text-2xl font-black text-[#0E0E0E]">14 YEARS DUBAI PRIME</span>
        </div>
        <div className="p-4 md:p-6 font-mono">
          <span className="text-[10px] uppercase text-[#59554F] block">CAPITAL DEPLOYED</span>
          <span className="text-xl md:text-2xl font-black text-[#0E0E0E]">AED 3.8B+ TRANSACTED</span>
        </div>
        <div className="p-4 md:p-6 font-mono">
          <span className="text-[10px] uppercase text-[#59554F] block">ESCROW & TITLE</span>
          <span className="text-xl md:text-2xl font-black text-[#0E0E0E]">DLD VERIFIED TRUSTEE</span>
        </div>
        <div className="p-4 md:p-6 font-mono">
          <span className="text-[10px] uppercase text-[#59554F] block">RESPONSE SLA</span>
          <span className="text-xl md:text-2xl font-black text-[#8C6A2F]">WITHIN 15 MINUTES</span>
        </div>
      </div>
    </section>
  );
}
