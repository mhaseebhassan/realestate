import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import LeadForm from "@/components/LeadForm";
import { WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Direct Contact & DIFC Office | Tariq Al-Mansoor",
  description: "Direct contact channels for Tariq Al-Mansoor. WhatsApp, telephone desk, DIFC Gate Precinct office, and operating hours in GST.",
};

export default function ContactPage() {
  const { broker, contact } = brandConfig;
  const whatsappUrl = buildWhatsAppLink(
    `Hi ${broker.firstName}, I am reaching out to begin a private consultation for Dubai prime property.`
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />

      <main className="flex-1">
        {/* Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              DIFC PRIVATE DESK · GST TIMINGS
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
              DIRECT CONTACT
            </h1>
            <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
              ENCRYPTED WHATSAPP, DIRECT TELEPHONE LINES, AND IN-PERSON DIFC APPOINTMENTS.
            </p>
          </div>
        </div>

        {/* 12-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Columns: Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              {/* WhatsApp Card */}
              <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#8C6A2F] text-[#FFFFFF]">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#59554F] uppercase block">PRIMARY CONCIERGE</span>
                    <h3 className="font-sans font-black text-lg text-[#0E0E0E]">ENCRYPTED WHATSAPP</h3>
                  </div>
                </div>
                <p className="font-sans text-xs text-[#59554F] mb-4">
                  Instant response channel for portfolio dossiers, off-market queries, and private viewing schedules.
                </p>
                <div className="text-sm font-bold text-[#0E0E0E] mb-4">
                  {contact.whatsappDisplay}
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#8C6A2F] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#735523] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>START WHATSAPP CONVERSATION</span>
                </a>
              </div>

              {/* Phone Desk Card */}
              <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#0E0E0E] text-[#FFFFFF]">
                    <PhoneIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#59554F] uppercase block">TELEPHONE CONVEYANCING</span>
                    <h3 className="font-sans font-black text-lg text-[#0E0E0E]">DIRECT DESK</h3>
                  </div>
                </div>
                <p className="font-sans text-xs text-[#59554F] mb-4">
                  Direct private telephone desk. Zero automated switchboard routing.
                </p>
                <div className="text-sm font-bold text-[#0E0E0E] mb-4">
                  {contact.phoneDisplay}
                </div>
                <a
                  href={`tel:${contact.phoneRaw}`}
                  className="w-full py-3 border border-[#0E0E0E] bg-[#F4F1EA] hover:bg-[#E8E3D8] text-[#0E0E0E] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>DIAL DIRECT DESK</span>
                </a>
              </div>

              {/* Email Desk Card */}
              <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-[#0E0E0E] text-[#FFFFFF]">
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#59554F] uppercase block">FORMAL CORRESPONDENCE</span>
                    <h3 className="font-sans font-black text-lg text-[#0E0E0E]">EMAIL DOSSIERS</h3>
                  </div>
                </div>
                <div className="text-sm font-bold text-[#0E0E0E] mb-4 break-all">
                  {contact.email}
                </div>
                <a
                  href={`mailto:${contact.email}?subject=Private Representation Inquiry`}
                  className="w-full py-3 border border-[#0E0E0E] bg-[#F4F1EA] hover:bg-[#E8E3D8] text-[#0E0E0E] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MailIcon className="w-4 h-4" />
                  <span>SEND FORMAL INQUIRY</span>
                </a>
              </div>

              {/* Office Location & Timings */}
              <div className="p-6 bg-[#E8E3D8] border-2 border-[#0E0E0E] font-mono text-xs space-y-3">
                <div className="flex items-start gap-2.5">
                  <MapPinIcon className="w-4 h-4 text-[#8C6A2F] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0E0E0E] block">DIFC PHYSICAL OFFICE:</span>
                    <span className="text-[#59554F]">{contact.officeAddress}</span>
                    <span className="text-[10px] text-[#8C6A2F] block mt-1">COORDINATES: {contact.coordinates}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#0E0E0E]/20">
                  <span className="font-bold text-[#0E0E0E] block">OPERATING HOURS (GULF STANDARD TIME):</span>
                  <span className="text-[#59554F]">{contact.workingHoursGst}</span>
                </div>

                <div className="pt-3 border-t border-[#0E0E0E]/20">
                  <span className="font-bold text-[#0E0E0E] block">SLA GUARANTEE:</span>
                  <span className="text-[#8C6A2F] font-bold">{contact.responsePromise}</span>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm
                heading="TRANSMIT PRIVATE CLIENT MANDATE"
                subheading="All submissions are governed by strict bilateral confidentiality."
                buttonLabel="DISPATCH CONFIDENTIAL INQUIRY"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
