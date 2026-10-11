import React from "react";
import Link from "next/link";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { ArrowUpRightIcon, WhatsAppIcon, PhoneIcon, MailIcon, MapPinIcon } from "./Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#E8E3D8] border-t-2 border-[#0E0E0E] text-[#0E0E0E]">
      {/* Top Banner Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#0E0E0E]">
        {/* Left Brand Identity */}
        <div className="lg:col-span-5 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#0E0E0E] flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] block mb-2">
              LICENSED PRIVATE PRACTICE
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-[#0E0E0E]">
              {brandConfig.visuals.logoWordmark}
            </h2>
            <p className="font-mono text-xs uppercase tracking-wider text-[#59554F] mt-1 mb-6">
              {brandConfig.visuals.logoSubmark}
            </p>
            <p className="font-sans text-sm text-[#0E0E0E] leading-relaxed max-w-md">
              {brandConfig.broker.bioShort}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#0E0E0E]/20 space-y-2 text-xs font-mono text-[#59554F]">
            <div>{brandConfig.broker.license.orn} · {brandConfig.broker.license.brn}</div>
            <div>RERA ESCROW COMPLIANT · DUBAI LAND DEPARTMENT</div>
            <div>COORDINATES: {brandConfig.contact.coordinates}</div>
          </div>
        </div>

        {/* Middle Direct Links */}
        <div className="lg:col-span-4 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#0E0E0E] flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] block mb-4">
              PORTFOLIO DIRECTORY
            </span>
            <div className="grid grid-cols-2 gap-y-3 font-mono text-xs uppercase tracking-wider">
              <Link href="/properties" className="hover:text-[#8C6A2F] transition-colors flex items-center gap-1">
                Properties <ArrowUpRightIcon className="w-3 h-3 text-[#59554F]" />
              </Link>
              <Link href="/communities" className="hover:text-[#8C6A2F] transition-colors flex items-center gap-1">
                Districts <ArrowUpRightIcon className="w-3 h-3 text-[#59554F]" />
              </Link>
              <Link href="/off-plan" className="hover:text-[#8C6A2F] transition-colors flex items-center gap-1">
                Off-Plan Radar <ArrowUpRightIcon className="w-3 h-3 text-[#59554F]" />
              </Link>
              <Link href="/#calculator" className="hover:text-[#8C6A2F] transition-colors flex items-center gap-1">
                Mortgage Desk <ArrowUpRightIcon className="w-3 h-3 text-[#59554F]" />
              </Link>
              <Link href="/about" className="hover:text-[#8C6A2F] transition-colors flex items-center gap-1">
                The Broker <ArrowUpRightIcon className="w-3 h-3 text-[#59554F]" />
              </Link>
              <Link href="/contact" className="hover:text-[#8C6A2F] transition-colors flex items-center gap-1">
                Contact <ArrowUpRightIcon className="w-3 h-3 text-[#59554F]" />
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#0E0E0E]/20">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] block mb-2">
              DIRECT DISPATCH
            </span>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href={buildWhatsAppLink(`Hi ${brandConfig.broker.firstName}, I am contacting you via the portfolio website.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#8C6A2F] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#8C6A2F]" />
                <span>WhatsApp: {brandConfig.contact.whatsappDisplay}</span>
              </a>
              <a
                href={`tel:${brandConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#8C6A2F] transition-colors"
              >
                <PhoneIcon className="w-3.5 h-3.5" />
                <span>Phone: {brandConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${brandConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#8C6A2F] transition-colors"
              >
                <MailIcon className="w-3.5 h-3.5" />
                <span>Email: {brandConfig.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Office & Working Hours */}
        <div className="lg:col-span-3 p-6 md:p-10 flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] block mb-4">
              DIFC PRIVATE OFFICE
            </span>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start gap-2">
                <MapPinIcon className="w-3.5 h-3.5 text-[#8C6A2F] shrink-0 mt-0.5" />
                <span>{brandConfig.contact.officeAddress}</span>
              </div>
              <div className="pt-2 border-t border-[#0E0E0E]/10">
                <span className="text-[#59554F] block text-[10px] uppercase">OPERATING HOURS (GST)</span>
                <span>{brandConfig.contact.workingHoursGst}</span>
              </div>
              <div className="pt-2 border-t border-[#0E0E0E]/10">
                <span className="text-[#59554F] block text-[10px] uppercase">COMMUNICATION SLA</span>
                <span className="text-[#8C6A2F] font-bold">{brandConfig.contact.responsePromise}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#0E0E0E]/20 flex gap-4 font-mono text-xs">
            <a
              href={brandConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C6A2F] transition-colors underline"
            >
              LinkedIn
            </a>
            <a
              href={brandConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C6A2F] transition-colors underline"
            >
              Instagram
            </a>
            <a
              href={brandConfig.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C6A2F] transition-colors underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Legal & Regulatory Disclaimer Bar */}
      <div className="px-6 md:px-10 py-6 border-b border-[#0E0E0E] bg-[#E0DBD0] text-[11px] font-mono leading-relaxed text-[#59554F]">
        <p className="mb-2">
          <strong>REGULATORY DISCLOSURE & RERA COMPLIANCE:</strong> {brandConfig.broker.fullName} acts under authorized license {brandConfig.broker.license.orn} registered with the Real Estate Regulatory Agency (RERA) and the Dubai Land Department (DLD). Official broker accreditation: {brandConfig.broker.license.brn}. All property transactions, off-plan escrow accounts, and title deed transfers strictly conform to Law No. 8 of 2007 (Escrow Accounts for Real Estate Developments in Dubai) and Law No. 7 of 2006 (Land Registration in the Emirate of Dubai).
        </p>
        <p>
          <strong>DEMO NOTICE:</strong> Market metrics, historical averages, and sample transaction volumes are compiled sample data for demonstration of this luxury broker master template.
        </p>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-wider text-[#59554F]">
        <div>
          © {currentYear} {brandConfig.broker.fullName}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/legal#privacy" className="hover:text-[#0E0E0E] transition-colors">
            Privacy Policy
          </Link>
          <Link href="/legal#terms" className="hover:text-[#0E0E0E] transition-colors">
            Terms of Representation
          </Link>
          <Link href="/legal#rera" className="hover:text-[#0E0E0E] transition-colors">
            RERA Verification
          </Link>
        </div>
      </div>
    </footer>
  );
}
