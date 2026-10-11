"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { WhatsAppIcon, PhoneIcon, MailIcon } from "./Icons";

export default function MobileConciergeBar() {
  const pathname = usePathname();

  // If on a specific property detail page, let PropertyStickyBar take over
  if (pathname && pathname.startsWith("/properties/") && pathname.length > "/properties/".length) {
    return null;
  }

  const whatsappUrl = buildWhatsAppLink(
    `Hi ${brandConfig.broker.firstName}, I would like to inquire about your available Dubai portfolio listings.`
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#F4F1EA] border-t-2 border-[#0E0E0E] p-1.5 flex items-center gap-1.5">
      <a
        href={`tel:${brandConfig.contact.phoneRaw}`}
        className="flex-1 py-2.5 px-1.5 border border-[#0E0E0E] bg-[#FFFFFF] text-[#0E0E0E] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 active:bg-[#E8E3D8]"
        aria-label="Direct Phone Call"
      >
        <PhoneIcon className="w-3 h-3 shrink-0" />
        <span>CALL</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[2] py-2.5 px-2 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 active:bg-[#735523] border border-[#8C6A2F] truncate"
        aria-label="Instant WhatsApp Consultation"
      >
        <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
        <span className="truncate">WHATSAPP {brandConfig.broker.firstName.toUpperCase()}</span>
      </a>

      <a
        href="/contact"
        className="flex-1 py-2.5 px-1.5 border border-[#0E0E0E] bg-[#FFFFFF] text-[#0E0E0E] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1 active:bg-[#E8E3D8]"
        aria-label="Direct Inquiry Form"
      >
        <MailIcon className="w-3 h-3 shrink-0" />
        <span>ENQUIRE</span>
      </a>
    </div>
  );
}
