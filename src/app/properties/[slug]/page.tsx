import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties, getPropertyBySlug, Property } from "@/data/properties";
import { brandConfig, formatCurrency } from "@/config/brand";
import PropertyGallery from "./PropertyGallery";
import PropertyStickyBar from "./PropertyStickyBar";
import LeadForm from "@/components/LeadForm";
import CurrencyPrice from "@/components/CurrencyPrice";
import { ArrowUpRightIcon, BedIcon, AreaIcon, ShieldVerifiedIcon, MapPinIcon } from "@/components/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found" };

  return {
    title: `${property.title} | Ref ${property.reference}`,
    description: `${property.headline} Listed at AED ${new Intl.NumberFormat('en-AE').format(property.priceAed)} in ${property.community}. Verified DLD title status.`,
    openGraph: {
      title: `${property.title} | Ref ${property.reference}`,
      description: property.headline,
      images: [{ url: property.heroImage }],
    },
  };
}

export default async function PropertyDetailPage({ params }: Props) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  // Similar properties from same community or general inventory
  const similar = properties
    .filter((p) => p.slug !== property.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    "name": property.title,
    "description": property.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": property.community,
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": property.coordinates.split(",")[0]?.trim() || "25.1972",
      "longitude": property.coordinates.split(",")[1]?.trim() || "55.2744"
    },
    "numberOfRooms": property.bedrooms,
    "floorSize": {
      "@type": "QuantitativeValue",
      "value": property.sqft,
      "unitCode": "FTK"
    },
    "offers": {
      "@type": "Offer",
      "price": property.priceAed,
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 pb-24">
        {/* Breadcrumb & Top Bar */}
        <div className="bg-[#FFFFFF] border-b border-[#0E0E0E] px-4 md:px-8 py-3 font-mono text-xs uppercase flex items-center justify-between text-[#59554F]">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#0E0E0E]">HOME</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-[#0E0E0E]">PROPERTIES</Link>
            <span>/</span>
            <span className="text-[#0E0E0E] font-bold">{property.reference}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[#8C6A2F] font-bold">● {property.status}</span>
            <span>·</span>
            <span>COORDINATES: {property.coordinates}</span>
          </div>
        </div>

        {/* Title & Valuation Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] px-4 md:px-8 py-5 md:py-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase mb-2">
                <span className="bg-[#0E0E0E] text-[#FFFFFF] px-2.5 py-0.5 font-bold">
                  {property.reference}
                </span>
                <span className="text-[#59554F]">{property.community}</span>
                <span>·</span>
                <span className="text-[#59554F]">DEVELOPER: {property.developer}</span>
              </div>
              <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0E0E0E] tracking-tight leading-tight break-words">
                {property.title}
              </h1>
              <p className="font-sans text-xs md:text-sm text-[#59554F] mt-2 max-w-2xl font-medium">
                {property.headline}
              </p>

              {/* Core Specs Bar right in the masthead */}
              <div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-[#0E0E0E]/15 font-mono text-xs text-[#0E0E0E]">
                <span className="font-bold">{property.bedrooms} BEDS</span>
                <span className="text-[#59554F]">·</span>
                <span className="font-bold">{property.bathrooms} BATHS</span>
                <span className="text-[#59554F]">·</span>
                <span className="font-bold">{new Intl.NumberFormat("en-US").format(property.sqft)} SQFT</span>
                <span className="text-[#59554F]">·</span>
                <span className="font-bold text-[#8C6A2F] uppercase">{property.type}</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-[#FFFFFF] border-2 border-[#0E0E0E] shrink-0 font-mono">
              <span className="text-[10px] uppercase text-[#59554F] block">
                OFFICIAL ASKING PRICE
              </span>
              <div className="font-black text-2xl md:text-3xl text-[#0E0E0E] my-1">
                <CurrencyPrice aedAmount={property.priceAed} showOriginalAed />
              </div>
              <div className="flex justify-between items-center text-xs text-[#59554F] pt-2 border-t border-[#0E0E0E]/20 gap-4">
                <CurrencyPrice aedAmount={property.pricePerSqft} isSqft />
                <span className="text-[#8C6A2F] font-bold uppercase">{property.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Plate */}
        <PropertyGallery
          images={property.gallery}
          title={property.title}
          reference={property.reference}
        />

        {/* Main 12-Column Content Layout */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Columns: Dossier */}
            <div className="lg:col-span-7 space-y-12">
              {/* Core Architectural Narrative */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-3">
                  ARCHITECTURAL SUMMARY
                </span>
                <h2 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight mb-4">
                  RESIDENCE SPECIFICATION
                </h2>
                <p className="font-sans text-base text-[#0E0E0E] leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] block mb-4 border-b border-[#0E0E0E] pb-2">
                  DISTINGUISHING AMENITIES & APPOINTMENTS
                </span>
                <ul className="space-y-3 font-mono text-xs text-[#0E0E0E]">
                  {property.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 bg-[#8C6A2F] mt-1.5 shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Facts Table (Hard-Ruled Brutalist Table) */}
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-3">
                  AUDITED CONVEYANCING FACTS
                </span>
                <h2 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight mb-4">
                  DLD PROPERTY RECORD
                </h2>
                <div className="border-2 border-[#0E0E0E] divide-y divide-[#0E0E0E] bg-[#FFFFFF] font-mono text-xs">
                  {property.keyFacts.map((fact, idx) => (
                    <div key={idx} className="grid grid-cols-2 p-3.5 hover:bg-[#F4F1EA] transition-colors">
                      <span className="text-[#59554F] uppercase">{fact.label}</span>
                      <span className="font-bold text-[#0E0E0E] text-right">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Financial Architecture & Payment Plan */}
              <div className="p-6 bg-[#E8E3D8] border-2 border-[#0E0E0E] font-mono">
                <span className="text-xs uppercase tracking-widest text-[#59554F] block mb-2">
                  FINANCIAL TERMS & CONVEYANCING
                </span>
                <h3 className="font-sans font-black text-xl text-[#0E0E0E] mb-4">
                  PAYMENT PLAN & OUTGOINGS
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between py-2 border-b border-[#0E0E0E]/20">
                    <span className="text-[#59554F]">PAYMENT SCHEDULE:</span>
                    <span className="font-bold">{property.paymentPlan}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#0E0E0E]/20">
                    <span className="text-[#59554F]">ANNUAL SERVICE CHARGE:</span>
                    <span className="font-bold">
                      <CurrencyPrice aedAmount={property.serviceChargeAedPerSqft} isSqft /> per annum
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-[#0E0E0E]/20">
                    <span className="text-[#59554F]">STATUTORY DLD TRANSFER:</span>
                    <span className="font-bold">4.0% Standard Land Registration</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-[#59554F]">ESTIMATED ANNUAL OUTGOINGS:</span>
                    <span className="font-bold text-[#8C6A2F]">
                      <CurrencyPrice aedAmount={property.sqft * property.serviceChargeAedPerSqft} /> / Year
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Lead Desk & Representation Form */}
            <div className="lg:col-span-5 space-y-8" id="inquire">
              <LeadForm
                propertyRef={property.reference}
                propertyTitle={property.title}
                heading="REQUEST PRIVATE INSPECTION"
                subheading={`Direct calendar booking with ${brandConfig.broker.fullName}.`}
                buttonLabel="DISPATCH VIEWING REQUEST"
              />

              {/* Broker Trust Dossier Box */}
              <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono text-xs">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#0E0E0E]">
                  <div className="relative w-16 h-20 border border-[#0E0E0E] bg-[#E8E3D8] shrink-0 overflow-hidden">
                    <Image
                      src={brandConfig.broker.portraitImage}
                      alt={brandConfig.broker.fullName}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#8C6A2F] uppercase block">
                      ASSIGNED MANAGING BROKER
                    </span>
                    <span className="font-sans font-bold text-base text-[#0E0E0E] block">
                      {brandConfig.broker.fullName}
                    </span>
                    <span className="text-[#59554F] text-[11px]">
                      {brandConfig.broker.license.brn} · DIFC Office
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-[#59554F]">
                  <div>DIRECT DESK: {brandConfig.contact.phoneDisplay}</div>
                  <div>WHATSAPP: {brandConfig.contact.whatsappDisplay}</div>
                  <div>OFFICE: {brandConfig.contact.officeAddress}</div>
                  <div className="pt-2 border-t border-[#0E0E0E]/20 text-[#8C6A2F] font-bold">
                    {brandConfig.contact.responsePromise}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties Section */}
          <div className="mt-20 pt-12 border-t-2 border-[#0E0E0E]">
            <div className="flex justify-between items-end mb-8 border-b border-[#0E0E0E] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-1">
                  PORTFOLIO COMPS
                </span>
                <h3 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight">
                  SIMILAR RESIDENCES
                </h3>
              </div>
              <Link href="/properties" className="font-mono text-xs uppercase underline hover:text-[#8C6A2F]">
                VIEW ALL LISTINGS
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map((sim) => (
                <Link
                  key={sim.id}
                  href={`/properties/${sim.slug}`}
                  className="group bg-[#FFFFFF] border-2 border-[#0E0E0E] p-4 flex flex-col justify-between hover:bg-[#F4F1EA] transition-colors"
                >
                  <div>
                    <div className="relative aspect-[16/10] w-full border border-[#0E0E0E] mb-3 overflow-hidden bg-[#E8E3D8]">
                      <Image
                        src={sim.heroImage}
                        alt={sim.title}
                        fill
                        sizes="350px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="font-mono text-[10px] uppercase text-[#59554F]">
                      {sim.reference} · {sim.community}
                    </span>
                    <h4 className="font-sans font-bold text-base text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors line-clamp-1 mb-2">
                      {sim.title}
                    </h4>
                  </div>
                  <div className="pt-2 border-t border-[#0E0E0E]/20 font-mono text-xs flex justify-between items-baseline">
                    <span className="font-black text-[#0E0E0E]">
                      <CurrencyPrice aedAmount={sim.priceAed} />
                    </span>
                    <span className="text-[10px] text-[#8C6A2F] font-bold">{sim.status}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Bar */}
      <PropertyStickyBar property={property} />

      <Footer />
    </div>
  );
}
