"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { properties, Property } from "@/data/properties";
import { communities } from "@/data/communities";
import { useCurrency } from "@/context/CurrencyContext";
import {
  GridIcon,
  ListIcon,
  FilterIcon,
  ArrowUpRightIcon,
  BedIcon,
  AreaIcon,
  CheckIcon,
} from "@/components/Icons";

export default function PropertiesDirectory() {
  const searchParams = useSearchParams();
  const { formatPrice, formatSqftPrice, currency } = useCurrency();

  // Filters state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCommunity, setSelectedCommunity] = useState<string>("All");
  const [selectedBeds, setSelectedBeds] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [maxPriceAed, setMaxPriceAed] = useState<number>(150000000);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sync initial state from URL query parameters
  useEffect(() => {
    const qParam = searchParams.get("q");
    const typeParam = searchParams.get("type");
    const commParam = searchParams.get("community");
    const bedsParam = searchParams.get("beds");
    const statusParam = searchParams.get("status");

    if (qParam) setSearchQuery(qParam);
    if (typeParam) setSelectedType(typeParam);
    if (commParam) setSelectedCommunity(commParam);
    if (bedsParam) setSelectedBeds(bedsParam);
    if (statusParam) setSelectedStatus(statusParam);
  }, [searchParams]);

  // Update URL query parameters on filter change
  const updateQuery = (key: string, value: string) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (value === "All" || !value) {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, value);
    }
    window.history.replaceState({}, "", url.toString());
  };

  // Filtered properties
  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const match =
          p.title.toLowerCase().includes(q) ||
          p.reference.toLowerCase().includes(q) ||
          p.developer.toLowerCase().includes(q) ||
          p.community.toLowerCase().includes(q) ||
          p.type.toLowerCase().includes(q) ||
          p.headline.toLowerCase().includes(q);
        if (!match) return false;
      }
      if (selectedType !== "All" && p.type !== selectedType) return false;
      if (
        selectedCommunity !== "All" &&
        p.communitySlug !== selectedCommunity &&
        p.community !== selectedCommunity
      )
        return false;
      if (selectedBeds !== "All" && p.bedrooms !== Number(selectedBeds))
        return false;
      if (selectedStatus !== "All" && p.status !== selectedStatus) return false;
      if (p.priceAed > maxPriceAed) return false;
      return true;
    });
  }, [searchQuery, selectedType, selectedCommunity, selectedBeds, selectedStatus, maxPriceAed]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedType("All");
    setSelectedCommunity("All");
    setSelectedBeds("All");
    setSelectedStatus("All");
    setMaxPriceAed(150000000);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.search = "";
      window.history.replaceState({}, "", url.toString());
    }
  };

  const propertyTypes = ["All", "Penthouse", "Villa", "Mansion", "Apartment", "Sky Villa"];
  const bedOptions = ["All", "3", "4", "5", "6", "7"];
  const statusOptions = ["All", "Ready", "Off-Plan"];

  return (
    <div className="w-full">
      {/* Directory Title Bar */}
      <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-10 md:py-14 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
            DIRECT INVENTORY PORTFOLIO
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-5xl text-[#0E0E0E] tracking-tight leading-none mb-3">
            SELECTED PROPERTIES
          </h1>
          <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
            VERIFIED PRIME RESIDENCES ACROSS PALM JUMEIRAH, EMIRATES HILLS, AND DOWNTOWN DUBAI. ZERO AGENT SOLICITATION.
          </p>
        </div>
      </div>

      {/* Compact Filter Control Console (Scrolls away naturally, not sticky) */}
      <div className="bg-[#FFFFFF] border-b-2 border-[#0E0E0E] p-3 sm:p-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-3">
          {/* Top Row: Search Input + View Mode & Reset */}
          <div className="flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  updateQuery("q", e.target.value);
                }}
                placeholder="Search by title, reference, developer, district..."
                className="w-full py-2 px-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] placeholder:text-[#59554F]/70 outline-none focus:border-[#8C6A2F]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    updateQuery("q", "");
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[#59554F] hover:text-[#0E0E0E]"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* Actions: Reset & View Mode */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
              <button
                type="button"
                onClick={resetFilters}
                className="py-1.5 px-3 border border-[#0E0E0E] text-[10px] font-mono uppercase hover:bg-[#F4F1EA] transition-colors"
              >
                RESET
              </button>

              <div className="flex border border-[#0E0E0E] bg-[#FFFFFF] divide-x divide-[#0E0E0E]">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#0E0E0E] text-[#FFFFFF]"
                      : "text-[#0E0E0E] hover:bg-[#F4F1EA]"
                  }`}
                  aria-label="Grid view"
                >
                  <GridIcon className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 transition-colors ${
                    viewMode === "list"
                      ? "bg-[#0E0E0E] text-[#FFFFFF]"
                      : "text-[#0E0E0E] hover:bg-[#F4F1EA]"
                  }`}
                  aria-label="List view"
                >
                  <ListIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Compact Filter Selectors */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-2 border-t border-[#0E0E0E]/10">
            {/* Type */}
            <div>
              <label className="block font-mono text-[9px] uppercase text-[#59554F] mb-0.5">
                TYPE
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  updateQuery("type", e.target.value);
                }}
                className="w-full py-1.5 px-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === "All" ? "All Types" : t}
                  </option>
                ))}
              </select>
            </div>

            {/* District */}
            <div>
              <label className="block font-mono text-[9px] uppercase text-[#59554F] mb-0.5">
                DISTRICT
              </label>
              <select
                value={selectedCommunity}
                onChange={(e) => {
                  setSelectedCommunity(e.target.value);
                  updateQuery("community", e.target.value);
                }}
                className="w-full py-1.5 px-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                <option value="All">All Districts</option>
                {communities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Beds */}
            <div>
              <label className="block font-mono text-[9px] uppercase text-[#59554F] mb-0.5">
                BEDROOMS
              </label>
              <select
                value={selectedBeds}
                onChange={(e) => {
                  setSelectedBeds(e.target.value);
                  updateQuery("beds", e.target.value);
                }}
                className="w-full py-1.5 px-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                {bedOptions.map((b) => (
                  <option key={b} value={b}>
                    {b === "All" ? "All Beds" : `${b} Beds`}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block font-mono text-[9px] uppercase text-[#59554F] mb-0.5">
                STATUS
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  updateQuery("status", e.target.value);
                }}
                className="w-full py-1.5 px-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s === "All" ? "All Status" : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Max Price */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block font-mono text-[9px] uppercase text-[#59554F] mb-0.5 truncate">
                MAX: {formatPrice(maxPriceAed)}
              </label>
              <input
                type="range"
                min="15000000"
                max="150000000"
                step="5000000"
                value={maxPriceAed}
                onChange={(e) => setMaxPriceAed(Number(e.target.value))}
                className="w-full h-1.5 bg-[#E8E3D8] accent-[#8C6A2F] cursor-pointer mt-2"
              />
            </div>
          </div>

          {/* Result Count Strip */}
          <div className="flex items-center justify-between pt-1 font-mono text-[11px] text-[#59554F]">
            <div>
              SHOWING <strong className="text-[#0E0E0E]">{filtered.length}</strong> OF{" "}
              {properties.length} VERIFIED LISTINGS
            </div>
            <div className="text-[10px] hidden sm:block">
              ALL TRANSFERS RECORDED IN AED VIA DLD
            </div>
          </div>
        </div>
      </div>

      {/* Main Results Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {filtered.length === 0 ? (
          <div className="p-16 border-2 border-[#0E0E0E] bg-[#FFFFFF] text-center font-mono">
            <h3 className="text-xl font-bold text-[#0E0E0E] mb-2 uppercase">
              No matching listings found
            </h3>
            <p className="text-xs text-[#59554F] max-w-md mx-auto mb-6">
              Adjust your filter parameters or contact Tariq Al-Mansoor directly for confidential off-market inventory matching your mandate.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="py-3 px-6 bg-[#0E0E0E] text-[#FFFFFF] text-xs font-bold uppercase"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View - Exactly matching Image 2 */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((prop) => (
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[9px] px-1.5 py-0.5 uppercase tracking-wider font-bold">
                      {prop.reference}
                    </span>
                  </div>
                  <h4 className="font-sans font-bold text-lg text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors line-clamp-1 mb-1">
                    {prop.title}
                  </h4>
                  <p className="font-mono text-[11px] text-[#59554F] mb-3 uppercase">
                    {prop.bedrooms} BEDS · {new Intl.NumberFormat("en-US").format(prop.sqft)} SQFT
                  </p>
                </div>

                <div className="pt-2 border-t border-[#0E0E0E]/20 font-mono text-xs flex justify-between items-baseline">
                  <div>
                    <span className="font-black text-[#0E0E0E]">
                      {formatPrice(prop.priceAed)}
                    </span>
                    {currency !== "AED" && (
                      <span className="text-[9px] text-[#59554F] block">
                        (AED {new Intl.NumberFormat("en-AE").format(prop.priceAed)})
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-[#8C6A2F] font-bold uppercase">{prop.status}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="border-2 border-[#0E0E0E] divide-y-2 divide-[#0E0E0E] bg-[#FFFFFF]">
            {filtered.map((prop, idx) => (
              <Link
                key={prop.id}
                href={`/properties/${prop.slug}`}
                className="group p-3.5 md:p-4 hover:bg-[#F4F1EA] transition-colors grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center block"
              >
                <div className="md:col-span-1 font-mono font-black text-lg md:text-xl text-[#8C6A2F]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-4">
                  <div className="font-mono text-[10px] text-[#59554F] uppercase">
                    {prop.reference} · {prop.community}
                  </div>
                  <h4 className="font-sans font-bold text-base md:text-lg text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors">
                    {prop.title}
                  </h4>
                </div>

                <div className="md:col-span-3 font-mono text-xs text-[#59554F] space-y-0.5">
                  <div>{prop.bedrooms} BEDS · {new Intl.NumberFormat("en-US").format(prop.sqft)} SQFT</div>
                </div>

                <div className="md:col-span-2 font-mono">
                  <div className="font-black text-base md:text-lg text-[#0E0E0E]">
                    {formatPrice(prop.priceAed)}
                  </div>
                  <div className="text-[10px] text-[#8C6A2F] uppercase font-bold">
                    {prop.status}
                  </div>
                </div>

                <div className="md:col-span-2 text-right">
                  <span className="inline-flex items-center gap-1 py-2 px-3.5 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-xs uppercase font-bold group-hover:bg-[#8C6A2F] transition-colors">
                    <span>VIEW</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
