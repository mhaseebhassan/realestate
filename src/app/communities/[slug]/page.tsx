import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { communities, getCommunityBySlug } from "@/data/communities";
import { properties } from "@/data/properties";
import { brandConfig } from "@/config/brand";
import LeadForm from "@/components/LeadForm";
import CurrencyPrice from "@/components/CurrencyPrice";
import { ArrowUpRightIcon, MapPinIcon } from "@/components/Icons";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return communities.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return { title: "District Not Found" };

  return {
    title: `${community.name} Prime Real Estate & Yields`,
    description: `${community.tagline} Average price AED ${community.avgPricePerSqftAed}/sqft. Gross yields ${community.grossRentalYield}. Detailed district analysis.`,
    openGraph: {
      title: `${community.name} | Dubai Luxury District Analysis`,
      description: community.overview,
      images: [{ url: community.heroImage }],
    },
  };
}

export default async function CommunityDetailPage({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);

  if (!community) {
    notFound();
  }

  // Find listings in this district
  const districtListings = properties.filter(
    (p) =>
      p.communitySlug === community.slug ||
      p.community.toLowerCase().includes(community.name.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-[#FFFFFF] border-b border-[#0E0E0E] px-4 md:px-8 py-3 font-mono text-xs uppercase flex items-center justify-between text-[#59554F]">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#0E0E0E]">HOME</Link>
            <span>/</span>
            <Link href="/communities" className="hover:text-[#0E0E0E]">DISTRICTS</Link>
            <span>/</span>
            <span className="text-[#0E0E0E] font-bold">{community.name}</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>DISTRICT {community.numeral}</span>
            <span>·</span>
            <span>{community.coordinates}</span>
          </div>
        </div>

        {/* Masthead */}
        <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase text-[#8C6A2F] mb-3">
                <span className="bg-[#0E0E0E] text-[#FFFFFF] px-2.5 py-0.5 font-bold">
                  ENCLAVE {community.numeral}
                </span>
                <span>COORDINATES: {community.coordinates}</span>
              </div>
              <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
                {community.name}
              </h1>
              <p className="font-sans text-base text-[#0E0E0E] max-w-2xl font-medium">
                {community.tagline}
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] shrink-0 font-mono text-xs space-y-3">
              <div className="flex justify-between gap-8 border-b border-[#0E0E0E]/20 pb-2 items-baseline">
                <span className="text-[#59554F] uppercase">AVERAGE CAPITAL:</span>
                <span className="font-bold text-[#0E0E0E]">
                  <CurrencyPrice aedAmount={community.avgPricePerSqftAed} isSqft />
                </span>
              </div>
              <div className="flex justify-between gap-8 border-b border-[#0E0E0E]/20 pb-2">
                <span className="text-[#59554F] uppercase">GROSS RENTAL YIELD:</span>
                <span className="font-bold text-[#8C6A2F]">{community.grossRentalYield}</span>
              </div>
              <div className="flex justify-between gap-8">
                <span className="text-[#59554F] uppercase">VERIFIED STATUS:</span>
                <span className="font-bold text-[#0E0E0E]">100% FREEHOLD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Bleed Image Plate */}
        <div className="relative aspect-[16/9] md:aspect-[21/8] w-full border-b-2 border-[#0E0E0E] bg-[#E8E3D8]">
          <Image
            src={community.heroImage}
            alt={community.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* District Analysis 12-Column Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
                  DISTRICT DISPATCH
                </span>
                <h2 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight mb-4">
                  CAPITAL PROFILE & URBAN CONTEXT
                </h2>
                <p className="font-sans text-base text-[#0E0E0E] leading-relaxed mb-6">
                  {community.overview}
                </p>
              </div>

              {/* Who it suits & Vibe */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono text-xs">
                  <span className="text-[#8C6A2F] uppercase font-bold block mb-2">
                    WHO IT SUITS:
                  </span>
                  <p className="text-[#0E0E0E] font-sans text-sm leading-relaxed">
                    {community.whoItSuits}
                  </p>
                </div>

                <div className="p-6 bg-[#FFFFFF] border-2 border-[#0E0E0E] font-mono text-xs">
                  <span className="text-[#8C6A2F] uppercase font-bold block mb-2">
                    LIFESTYLE & ATMOSPHERE:
                  </span>
                  <p className="text-[#0E0E0E] font-sans text-sm leading-relaxed">
                    {community.vibe}
                  </p>
                </div>
              </div>

              {/* Infrastructure pillars */}
              <div className="p-6 bg-[#E8E3D8] border-2 border-[#0E0E0E]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] block mb-3 border-b border-[#0E0E0E] pb-2">
                  STRATEGIC INFRASTRUCTURE & AMENITIES
                </span>
                <ul className="space-y-2.5 font-mono text-xs text-[#0E0E0E]">
                  {community.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#8C6A2F] mt-1.5 shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notable master developers */}
              <div className="font-mono text-xs">
                <span className="text-[#59554F] uppercase block mb-2">
                  NOTABLE MASTER DEVELOPERS:
                </span>
                <div className="flex flex-wrap gap-2">
                  {community.notableDevelopers.map((dev, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#FFFFFF] border border-[#0E0E0E] font-bold"
                    >
                      {dev}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Lead Form */}
            <div className="lg:col-span-5">
              <LeadForm
                heading={`ACQUIRE IN ${community.name.toUpperCase()}`}
                subheading={`Direct confidential advisory for ${community.name} residences.`}
                buttonLabel="TRANSMIT DISTRICT INQUIRY"
              />
            </div>
          </div>

          {/* Current District Listings */}
          <div className="mt-20 pt-12 border-t-2 border-[#0E0E0E]">
            <div className="flex justify-between items-end mb-8 border-b border-[#0E0E0E] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-1">
                  CURRENT VERIFIED INVENTORY
                </span>
                <h3 className="font-sans font-black text-2xl md:text-3xl text-[#0E0E0E] tracking-tight">
                  LISTINGS IN {community.name.toUpperCase()}
                </h3>
              </div>
              <Link href="/properties" className="font-mono text-xs uppercase underline hover:text-[#8C6A2F]">
                VIEW FULL DIRECTORY
              </Link>
            </div>

            {districtListings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {districtListings.map((prop) => (
                  <Link
                    key={prop.id}
                    href={`/properties/${prop.slug}`}
                    className="group bg-[#FFFFFF] border-2 border-[#0E0E0E] p-4 flex flex-col justify-between hover:bg-[#F4F1EA] transition-colors"
                  >
                    <div>
                      <div className="relative aspect-[16/10] w-full border border-[#0E0E0E] mb-3 overflow-hidden bg-[#E8E3D8]">
                        <Image
                          src={prop.heroImage}
                          alt={prop.title}
                          fill
                          sizes="350px"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[9px] px-1.5 py-0.5">
                          {prop.reference}
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-lg text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors line-clamp-1 mb-1">
                        {prop.title}
                      </h4>
                      <p className="font-mono text-[11px] text-[#59554F] mb-3">
                        {prop.bedrooms} BEDS · {new Intl.NumberFormat('en-US').format(prop.sqft)} SQFT
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#0E0E0E]/20 font-mono text-xs flex justify-between items-baseline">
                      <span className="font-black text-[#0E0E0E]">
                        AED {new Intl.NumberFormat('en-AE').format(prop.priceAed)}
                      </span>
                      <span className="text-[10px] text-[#8C6A2F] font-bold">{prop.status}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="p-8 border-2 border-[#0E0E0E] bg-[#FFFFFF] text-center font-mono text-xs text-[#59554F]">
                No public listings currently displayed for this enclave. Contact Tariq Al-Mansoor for confidential off-market inventory.
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
