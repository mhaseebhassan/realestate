"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { useCurrency } from "@/context/CurrencyContext";
import { WhatsAppIcon, PhoneIcon, ArrowUpRightIcon } from "./Icons";

export default function Header() {
  const { currency, setCurrency } = useCurrency();
  const [gstTime, setGstTime] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Dubai is UTC+4
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setGstTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const whatsappMessage = `Hi ${brandConfig.broker.firstName}, I would like to request an introductory portfolio consultation.`;

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
          scrolled ? "bg-[#F4F1EA]/95 backdrop-blur-none border-b border-[#0E0E0E]" : "bg-[#F4F1EA] border-b border-[#0E0E0E]"
        }`}
      >
        {/* Top utility strip */}
        <div className="w-full border-b border-[#0E0E0E]/20 px-3 md:px-8 py-1 flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#59554F]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#0E0E0E]">
              <span className="inline-block w-1.5 h-1.5 rounded-none bg-[#8C6A2F]"></span>
              DUBAI GST {gstTime || "14:00"}
            </span>
            <span className="hidden sm:inline border-l border-[#0E0E0E]/20 pl-4">
              {brandConfig.contact.coordinates}
            </span>
            <span className="hidden lg:inline border-l border-[#0E0E0E]/20 pl-4">
              {brandConfig.broker.license.orn} · {brandConfig.broker.license.brn}
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden md:inline">{brandConfig.contact.responsePromise}</span>

            {/* Currency selector */}
            <div className="flex items-center border border-[#0E0E0E] bg-[#FFFFFF] divide-x divide-[#0E0E0E]">
              {(['AED', 'USD', 'EUR', 'GBP'] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCurrency(c)}
                  className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-mono transition-colors ${
                    currency === c
                      ? "bg-[#0E0E0E] text-[#FFFFFF] font-bold"
                      : "text-[#0E0E0E] hover:bg-[#E8E3D8]"
                  }`}
                  aria-label={`Switch currency to ${c}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="px-4 md:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Logo Wordmark */}
          <Link href="/" className="group flex flex-col">
            <span className="font-sans font-black text-xl sm:text-2xl tracking-tighter text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors">
              {brandConfig.visuals.logoWordmark}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#59554F]">
              {brandConfig.visuals.logoSubmark}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono uppercase tracking-wider font-medium text-[#0E0E0E]">
            <Link href="/properties" className="hover:text-[#8C6A2F] transition-colors py-1">
              Properties
            </Link>
            <Link href="/communities" className="hover:text-[#8C6A2F] transition-colors py-1">
              Districts
            </Link>
            <Link href="/off-plan" className="hover:text-[#8C6A2F] transition-colors py-1">
              Off-Plan Radar
            </Link>
            <Link href="/#calculator" className="hover:text-[#8C6A2F] transition-colors py-1">
              Mortgage & DLD
            </Link>
            <Link href="/about" className="hover:text-[#8C6A2F] transition-colors py-1">
              Private Office
            </Link>
            <Link href="/contact" className="hover:text-[#8C6A2F] transition-colors py-1">
              Direct Contact
            </Link>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${brandConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 px-3 py-2 border border-[#0E0E0E] text-xs font-mono uppercase tracking-wider hover:bg-[#FFFFFF] transition-colors"
            >
              <PhoneIcon className="w-3.5 h-3.5 text-[#0E0E0E]" />
              <span className="hidden xl:inline">{brandConfig.contact.phoneDisplay}</span>
              <span className="xl:hidden">Call</span>
            </a>

            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#8C6A2F] text-[#FFFFFF] text-xs font-mono uppercase tracking-wider hover:bg-[#735523] transition-colors border border-[#8C6A2F]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp {brandConfig.broker.firstName}</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 border border-[#0E0E0E] bg-[#FFFFFF] text-[#0E0E0E]"
            aria-label="Toggle navigation drawer"
          >
            <span className="font-mono text-xs font-bold uppercase">
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F4F1EA] flex flex-col pt-24 px-6 pb-8 lg:hidden overflow-y-auto border-t border-[#0E0E0E]">
          <div className="flex flex-col gap-6 font-mono uppercase text-sm">
            <span className="text-[10px] text-[#59554F] tracking-widest border-b border-[#0E0E0E] pb-2">
              NAVIGATION DIRECTORY
            </span>

            <Link
              href="/properties"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black font-sans tracking-tight text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3"
            >
              <span>SELECTED PROPERTIES</span>
              <span className="font-mono text-xs text-[#59554F]">[12 LISTINGS]</span>
            </Link>

            <Link
              href="/communities"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black font-sans tracking-tight text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3"
            >
              <span>PRIME DISTRICTS</span>
              <span className="font-mono text-xs text-[#59554F]">[08 CODES]</span>
            </Link>

            <Link
              href="/off-plan"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black font-sans tracking-tight text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3"
            >
              <span>OFF-PLAN RADAR</span>
              <span className="font-mono text-xs text-[#59554F]">[ESCROW VERIFIED]</span>
            </Link>

            <Link
              href="/#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black font-sans tracking-tight text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3"
            >
              <span>MORTGAGE & DLD CALCULATOR</span>
              <span className="font-mono text-xs text-[#59554F]">[FINANCIAL DESK]</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black font-sans tracking-tight text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3"
            >
              <span>THE BROKER & ADVISORY</span>
              <span className="font-mono text-xs text-[#59554F]">[DIFC OFFICE]</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black font-sans tracking-tight text-[#0E0E0E] hover:text-[#8C6A2F] flex items-center justify-between border-b border-[#0E0E0E]/20 pb-3"
            >
              <span>DIRECT CONTACT</span>
              <span className="font-mono text-xs text-[#59554F]">[GST 09-22]</span>
            </Link>
          </div>

          <div className="mt-auto pt-8 flex flex-col gap-3 font-mono text-xs">
            <a
              href={buildWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#8C6A2F] text-[#FFFFFF] text-center uppercase tracking-widest font-bold flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp {brandConfig.broker.fullName}</span>
            </a>

            <a
              href={`tel:${brandConfig.contact.phoneRaw}`}
              className="w-full py-3.5 border border-[#0E0E0E] bg-[#FFFFFF] text-[#0E0E0E] text-center uppercase tracking-widest font-bold flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>Direct Call {brandConfig.contact.phoneDisplay}</span>
            </a>

            <div className="mt-4 pt-4 border-t border-[#0E0E0E]/20 flex justify-between items-center text-[10px] text-[#59554F]">
              <span>{brandConfig.broker.license.orn} · {brandConfig.broker.license.brn}</span>
              <span>DIFC, DUBAI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
