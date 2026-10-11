import React from "react";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import LeadForm from "./LeadForm";
import { WhatsAppIcon, PhoneIcon } from "./Icons";

export default function FinalCtaBand() {
  const whatsappUrl = buildWhatsAppLink(
    `Hi ${brandConfig.broker.firstName}, I am reaching out to begin an exploratory advisory dialogue for Dubai prime real estate.`
  );

  return (
    <section className="w-full bg-[#E8E3D8] py-16 md:py-24 border-b-2 border-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Hero Statement & Immediate Access (7 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-3">
                PRIVATE MANDATE DISPATCH · SECTION 10
              </span>
              <h2 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-[#0E0E0E] tracking-tight leading-[0.95] mb-6">
                BEGIN YOUR DUBAI MANDATE WITH ZERO NOISE.
              </h2>
              <p className="font-sans text-base text-[#0E0E0E] leading-relaxed max-w-lg mb-8">
                Direct advisory for private family offices, international principals, and institutional capital. Direct lines only. No generic call center.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 py-4 px-8 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-sm font-bold uppercase tracking-wider hover:bg-[#735523] transition-colors border border-[#8C6A2F]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>DIRECT WHATSAPP CONCIERGE</span>
              </a>

              <div className="pt-6 border-t border-[#0E0E0E]/20 space-y-2 font-mono text-xs text-[#59554F]">
                <div>DIRECT DESK: {brandConfig.contact.phoneDisplay}</div>
                <div>RESPONSE COMMITMENT: {brandConfig.contact.responsePromise}</div>
                <div>LOCATION: {brandConfig.contact.officeAddress}</div>
              </div>
            </div>
          </div>

          {/* Right Lead Form Container (6 cols) */}
          <div className="lg:col-span-6">
            <LeadForm
              heading="DISPATCH DIRECT INQUIRY"
              subheading="Encrypted transmission directly to Tariq Al-Mansoor."
              buttonLabel="TRANSMIT VIA WHATSAPP"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
