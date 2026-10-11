"use client";

import React from "react";
import { Property } from "@/data/properties";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { useCurrency } from "@/context/CurrencyContext";
import { WhatsAppIcon, PhoneIcon, ArrowUpRightIcon } from "@/components/Icons";

export default function PropertyStickyBar({ property }: { property: Property }) {
  const { formatPrice } = useCurrency();

  const whatsappMessage = `Hi ${brandConfig.broker.firstName},

I am inquiring regarding the private viewing of:
- Title: ${property.title}
- Reference: ${property.reference}
- Listed Offer: AED ${new Intl.NumberFormat('en-AE').format(property.priceAed)}
- Community: ${property.community}

Please share the physical inspection schedule and owner documentation status.`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFFFFF] border-t-2 border-[#0E0E0E] py-3 px-4 md:px-8 shadow-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Left Property Summary */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="font-mono">
            <span className="text-[10px] uppercase text-[#59554F] block">
              {property.reference} · {property.community}
            </span>
            <span className="font-sans font-bold text-base text-[#0E0E0E] line-clamp-1">
              {property.title}
            </span>
          </div>

          <div className="border-l border-[#0E0E0E]/20 pl-6 font-mono">
            <span className="text-[10px] uppercase text-[#59554F] block">OFFER PRICE</span>
            <span className="font-black text-lg text-[#0E0E0E]">
              {formatPrice(property.priceAed)}
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <a
            href={`tel:${brandConfig.contact.phoneRaw}`}
            className="hidden md:flex items-center gap-2 py-3 px-4 border border-[#0E0E0E] bg-[#F4F1EA] hover:bg-[#E8E3D8] text-[#0E0E0E] font-mono text-xs uppercase font-bold transition-colors"
          >
            <PhoneIcon className="w-3.5 h-3.5" />
            <span>CALL DESK</span>
          </a>

          <a
            href="#inquire"
            className="flex-1 sm:flex-none py-2.5 sm:py-3 px-2 sm:px-4 border border-[#0E0E0E] bg-[#FFFFFF] hover:bg-[#0E0E0E] hover:text-[#FFFFFF] text-[#0E0E0E] font-mono text-[10px] sm:text-xs uppercase font-bold transition-colors text-center"
          >
            BOOK VIEWING
          </a>

          <a
            href={buildWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-[2] sm:flex-none py-2.5 sm:py-3 px-3 sm:px-6 bg-[#8C6A2F] text-[#FFFFFF] hover:bg-[#735523] font-mono text-[10px] sm:text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-1.5 border border-[#8C6A2F] transition-colors truncate"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">WHATSAPP REF: {property.reference}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
