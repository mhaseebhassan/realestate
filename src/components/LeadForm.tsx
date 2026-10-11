"use client";

import React, { useState } from "react";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { WhatsAppIcon, ArrowUpRightIcon, CheckIcon } from "./Icons";

interface LeadFormProps {
  propertyRef?: string;
  propertyTitle?: string;
  heading?: string;
  subheading?: string;
  buttonLabel?: string;
}

export default function LeadForm({
  propertyRef,
  propertyTitle,
  heading = "REQUEST CONFIDENTIAL DISPATCH",
  subheading = "Direct advisory handshake with Tariq Al-Mansoor. Zero brokerage solicitation.",
  buttonLabel = "DISPATCH VIA WHATSAPP"
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("AED 25M - 50M");
  const [interest, setInterest] = useState(
    propertyTitle ? `Acquisition of ${propertyTitle} (${propertyRef})` : "Prime Residential Acquisition"
  );
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);

    const messageText = `Hi ${brandConfig.broker.firstName},

I am inquiring via the private client portfolio:
- Name: ${name}
- Phone: ${phone}
- Budget Bracket: ${budget}
- Interest: ${interest}
${propertyRef ? `- Unit Reference: ${propertyRef}` : ""}
${note ? `- Confidential Note: ${note}` : ""}

Please confirm your availability for a private consultation.`;

    const waUrl = buildWhatsAppLink(messageText);

    // Optional POST to Formspree or Web3Forms
    if (brandConfig.integrations.formEndpoint) {
      try {
        await fetch(brandConfig.integrations.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            budget,
            interest,
            propertyRef,
            note,
            source: window.location.href,
          }),
        });
      } catch {
        // Continue even if endpoint fails
      }
    }

    setIsSubmitting(false);
    setSubmitted(true);

    // Instant handoff to WhatsApp
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="w-full bg-[#FFFFFF] border-2 border-[#0E0E0E] p-6 md:p-10">
      <div className="border-b border-[#0E0E0E] pb-4 mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-1">
          CONFIDENTIAL INTAKE · {brandConfig.contact.responsePromise.toUpperCase()}
        </span>
        <h3 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight">
          {heading}
        </h3>
        <p className="font-mono text-xs text-[#59554F] mt-1">
          {subheading}
        </p>
      </div>

      {submitted ? (
        <div className="bg-[#F4F1EA] border border-[#0E0E0E] p-6 text-center">
          <div className="inline-flex p-3 bg-[#8C6A2F] text-[#FFFFFF] mb-3">
            <CheckIcon className="w-6 h-6" />
          </div>
          <h4 className="font-sans font-bold text-xl text-[#0E0E0E] mb-2">
            Inquiry Dispatched Successfully
          </h4>
          <p className="font-mono text-xs text-[#59554F] max-w-md mx-auto mb-6 leading-relaxed">
            WhatsApp conversation opened. If your browser blocked popups, please tap the direct button below or use our verified telephone desk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center font-mono text-xs">
            <a
              href={buildWhatsAppLink(`Hi ${brandConfig.broker.firstName}, my name is ${name} (${phone}). Following up on my portfolio inquiry.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#8C6A2F] text-[#FFFFFF] font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Continue in WhatsApp</span>
            </a>
            <a
              href={`mailto:${brandConfig.contact.email}?subject=Private Acquisition Inquiry - ${name}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0ABudget: ${budget}`}
              className="py-3 px-6 border border-[#0E0E0E] bg-[#FFFFFF] text-[#0E0E0E] uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Dispatch via Email Fallback</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs uppercase text-[#59554F] mb-1.5">
                Principal Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lord / Sheikh / Dr / Full Name"
                className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] placeholder:text-[#59554F]/50 outline-none focus:border-[#8C6A2F]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs uppercase text-[#59554F] mb-1.5">
                Phone with Country Code *
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+971 50 ... / +44 7... / +1 ..."
                className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] placeholder:text-[#59554F]/50 outline-none focus:border-[#8C6A2F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs uppercase text-[#59554F] mb-1.5">
                Capital Budget Bracket
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] outline-none focus:border-[#8C6A2F]"
              >
                <option value="AED 10M - 25M">AED 10M - 25M (Prime Luxury)</option>
                <option value="AED 25M - 50M">AED 25M - 50M (Ultra Prime)</option>
                <option value="AED 50M - 100M">AED 50M - 100M (Trophy Residences)</option>
                <option value="AED 100M+">AED 100M+ (Mega Mansions & Islands)</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase text-[#59554F] mb-1.5">
                Mandate Type
              </label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] outline-none focus:border-[#8C6A2F]"
              >
                {propertyTitle ? (
                  <option value={`Acquisition of ${propertyTitle} (${propertyRef})`}>
                    This Property: {propertyRef}
                  </option>
                ) : null}
                <option value="Prime Ready Residential Acquisition">Prime Ready Residential Acquisition</option>
                <option value="Off-Market Penthouse or Villa Search">Off-Market Penthouse or Villa Search</option>
                <option value="Off-Plan Early Developer Allocation">Off-Plan Early Developer Allocation</option>
                <option value="UAE Golden Visa Portfolio Structuring">UAE Golden Visa Portfolio Structuring</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs uppercase text-[#59554F] mb-1.5">
              Confidential Note or Timeline (Optional)
            </label>
            <input
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="e.g. Arriving in Dubai next Tuesday; requiring sea view and private berth"
              className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] placeholder:text-[#59554F]/50 outline-none focus:border-[#8C6A2F]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#735523] transition-colors border border-[#8C6A2F]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{isSubmitting ? "PROCESSING..." : buttonLabel}</span>
            </button>
            <div className="flex justify-between items-center mt-2 font-mono text-[10px] text-[#59554F] uppercase">
              <span>Encrypted Direct WhatsApp Channel</span>
              <span>Response: ~12 Minutes</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
