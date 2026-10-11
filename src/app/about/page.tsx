import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import LeadForm from "@/components/LeadForm";
import { WhatsAppIcon, PhoneIcon, ShieldVerifiedIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Tariq Al-Mansoor | Private Broker Advisory",
  description: "Direct representation for sovereign capital, family offices, and private principals acquiring prime Dubai real estate. DIFC Private Office.",
};

export default function AboutPage() {
  const { broker, contact, stats } = brandConfig;
  const whatsappUrl = buildWhatsAppLink(
    `Hi ${broker.firstName}, I am reaching out to discuss private representation for Dubai property acquisitions.`
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />

      <main className="flex-1">
        {/* Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              MANAGING BROKER · PRIVATE PRACTICE
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
              THE BROKER & ADVISORY
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
              ZERO JUNIOR HANDOFFS. ZERO PORTAL MASS-LISTINGS. DIRECT CONVEYANCING WITH TARIQ AL-MANSOOR.
            </p>
          </div>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 5 Columns: Portrait & Accreditations */}
            <div className="lg:col-span-5 space-y-8">
              <div className="border-2 border-[#0E0E0E] bg-[#FFFFFF] p-2">
                <div className="relative aspect-[3/4] w-full bg-[#E8E3D8] overflow-hidden">
                  <Image
                    src={broker.portraitImage}
                    alt={broker.fullName}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0E0E0E]/90 p-4 text-[#F4F1EA] font-mono text-xs flex justify-between items-center">
                    <span>{broker.fullName}</span>
                    <span className="text-[#8C6A2F]">{broker.license.brn}</span>
                  </div>
                </div>
              </div>

              {/* Verified Credentials Box */}
              <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#59554F] block mb-3 border-b border-[#0E0E0E] pb-2">
                  VERIFIED LICENSES & CREDENTIALS
                </span>
                <ul className="space-y-3">
                  {broker.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ShieldVerifiedIcon className="w-4 h-4 text-[#8C6A2F] shrink-0 mt-0.5" />
                      <span className="text-[#0E0E0E]">{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spoken Languages */}
              <div className="p-6 bg-[#E8E3D8] border-2 border-[#0E0E0E] font-mono text-xs">
                <span className="text-[10px] uppercase tracking-widest text-[#59554F] block mb-3">
                  LANGUAGES OF NEGOTIATION
                </span>
                <div className="flex flex-wrap gap-2">
                  {broker.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FFFFFF] border border-[#0E0E0E] text-[#0E0E0E] font-bold"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Story, Ethos, Lead Form */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
                  OPERATIONAL DOCTRINE
                </span>
                <h2 className="font-sans font-black text-3xl md:text-4xl text-[#0E0E0E] tracking-tight mb-6">
                  WHY ULTRA-HIGH-NET-WORTH CAPITAL WORKS DIRECTLY WITH TARIQ AL-MANSOOR
                </h2>

                <div className="space-y-4 font-sans text-base text-[#0E0E0E] leading-relaxed">
                  {broker.bioLong.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>

              {/* Audited Capacity Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-2 border-[#0E0E0E] p-6 bg-[#FFFFFF] font-mono text-xs">
                <div>
                  <span className="text-[10px] text-[#59554F] uppercase block">TOTAL VOLUME</span>
                  <span className="font-black text-2xl text-[#0E0E0E] block my-1">
                    {stats.aedTransacted.value}
                  </span>
                  <span className="text-[10px] text-[#8C6A2F]">Verified DLD Comps</span>
                </div>

                <div>
                  <span className="text-[10px] text-[#59554F] uppercase block">TRANSACTIONS</span>
                  <span className="font-black text-2xl text-[#0E0E0E] block my-1">
                    {stats.dealsClosed.value} DEALS
                  </span>
                  <span className="text-[10px] text-[#8C6A2F]">Private Acquisitions</span>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-[#59554F] uppercase block">COMMUNICATION SLA</span>
                  <span className="font-black text-2xl text-[#8C6A2F] block my-1">
                    {stats.avgResponseMinutes.value} MINS
                  </span>
                  <span className="text-[10px] text-[#0E0E0E]">Direct WhatsApp Desk</span>
                </div>
              </div>

              {/* Direct Actions Strip */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 border border-[#8C6A2F] hover:bg-[#735523] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>DIRECT WHATSAPP CONCIERGE</span>
                </a>

                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="py-4 px-8 bg-[#FFFFFF] border-2 border-[#0E0E0E] text-[#0E0E0E] font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#0E0E0E] hover:text-[#FFFFFF] transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>CALL {contact.phoneDisplay}</span>
                </a>
              </div>

              {/* Lead Intake Form */}
              <div className="pt-8 border-t-2 border-[#0E0E0E]">
                <LeadForm
                  heading="SUBMIT CONFIDENTIAL MANDATE"
                  subheading="Direct transmission into Tariq Al-Mansoor's private inbox."
                  buttonLabel="DISPATCH PRIVATE MANDATE"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
