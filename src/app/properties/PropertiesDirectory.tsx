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
  const { formatPrice, formatSqftPrice } = useCurrency();

  // Filters state
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedCommunity, setSelectedCommunity] = useState<string>("All");
  const [selectedBeds, setSelectedBeds] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [maxPriceAed, setMaxPriceAed] = useState<number>(150000000);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sync initial state from URL query parameters
  useEffect(() => {
    const typeParam = searchParams.get("type");
    const commParam = searchParams.get("community");
    const bedsParam = searchParams.get("beds");
    const statusParam = searchParams.get("status");

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
  }, [selectedType, selectedCommunity, selectedBeds, selectedStatus, maxPriceAed]);

  const resetFilters = () => {
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
      <div className="bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
            DIRECT INVENTORY PORTFOLIO
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-6xl text-[#0E0E0E] tracking-tight leading-none mb-4">
            SELECTED PROPERTIES
          </h1>
          <p className="font-mono text-xs md:text-sm text-[#59554F] max-w-2xl uppercase">
            VERIFIED PRIME RESIDENCES ACROSS PALM JUMEIRAH, EMIRATES HILLS, AND DOWNTOWN DUBAI. ZERO AGENT SOLICITATION.
          </p>
        </div>
      </div>

      {/* Filter Control Console */}
      <div className="bg-[#FFFFFF] border-b-2 border-[#0E0E0E] p-4 md:p-6 sticky top-14 z-30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
            {/* Type selector */}
            <div>
              <label className="block font-mono text-[10px] uppercase text-[#59554F] mb-1">
                PROPERTY TYPE
              </label>
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  updateQuery("type", e.target.value);
                }}
                className="w-full p-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t === "All" ? "All Types" : t}
                  </option>
                ))}
              </select>
            </div>

            {/* Community selector */}
            <div>
              <label className="block font-mono text-[10px] uppercase text-[#59554F] mb-1">
                DISTRICT / ENCLAVE
              </label>
              <select
                value={selectedCommunity}
                onChange={(e) => {
                  setSelectedCommunity(e.target.value);
                  updateQuery("community", e.target.value);
                }}
                className="w-full p-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                <option value="All">All Districts</option>
                {communities.map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms selector */}
            <div>
              <label className="block font-mono text-[10px] uppercase text-[#59554F] mb-1">
                BEDROOMS
              </label>
              <select
                value={selectedBeds}
                onChange={(e) => {
                  setSelectedBeds(e.target.value);
                  updateQuery("beds", e.target.value);
                }}
                className="w-full p-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                {bedOptions.map((b) => (
                  <option key={b} value={b}>
                    {b === "All" ? "All Beds" : `${b} Bedrooms`}
                  </option>
                ))}
              </select>
            </div>

            {/* Status selector */}
            <div>
              <label className="block font-mono text-[10px] uppercase text-[#59554F] mb-1">
                STATUS
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  updateQuery("status", e.target.value);
                }}
                className="w-full p-2 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-xs text-[#0E0E0E] outline-none"
              >
                {statusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s === "All" ? "All Statuses" : s}
                  </option>
                ))}
              </select>
            </div>

            {/* Max price filter */}
            <div className="col-span-2 sm:col-span-1">
              <label className="block font-mono text-[10px] uppercase text-[#59554F] mb-1">
                MAX: {formatPrice(maxPriceAed)}
              </label>
              <input
                type="range"
                min="15000000"
                max="150000000"
                step="5000000"
                value={maxPriceAed}
                onChange={(e) => setMaxPriceAed(Number(e.target.value))}
                className="w-full h-2 bg-[#E8E3D8] accent-[#8C6A2F] cursor-pointer mt-2"
              />
            </div>

            {/* Actions / View Mode */}
            <div className="flex items-end justify-between sm:justify-end gap-2 col-span-2 sm:col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={resetFilters}
                className="py-2 px-2.5 border border-[#0E0E0E] text-[10px] font-mono uppercase hover:bg-[#F4F1EA] transition-colors"
              >
                RESET
              </button>

              <div className="flex border border-[#0E0E0E] bg-[#FFFFFF] divide-x divide-[#0E0E0E]">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors ${
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
                  className={`p-2 transition-colors ${
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

          {/* Result Count Strip */}
          <div className="flex items-center justify-between pt-2 border-t border-[#0E0E0E]/10 font-mono text-xs text-[#59554F]">
            <div>
              SHOWING <strong className="text-[#0E0E0E]">{filtered.length}</strong> OF{" "}
              {properties.length} VERIFIED LISTINGS
            </div>
            <div className="text-[11px] hidden sm:block">
              CURRENCY: ALL TRANSFERS RECORDED IN AED VIA DLD
            </div>
          </div>
        </div>
      </div>

      {/* Main Results Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
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
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filtered.map((prop) => (
              <div
                key={prop.id}
                className="group bg-[#FFFFFF] border-2 border-[#0E0E0E] flex flex-col justify-between hover:bg-[#F4F1EA] transition-colors"
              >
                <div>
                  {/* Card Header Strip */}
                  <div className="p-3 border-b border-[#0E0E0E] flex justify-between items-center bg-[#F4F1EA] font-mono text-xs">
                    <span className="font-bold text-[#8C6A2F]">{prop.reference}</span>
                    <span className="uppercase text-[#59554F]">{prop.community}</span>
                  </div>

                  {/* Image */}
                  <Link href={`/properties/${prop.slug}`} className="block relative aspect-[16/10] w-full border-b border-[#0E0E0E] bg-[#E8E3D8] overflow-hidden">
                    <Image
                      src={prop.heroImage}
                      alt={prop.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-[10px] uppercase font-bold">
                      {prop.status}
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="font-mono text-[10px] uppercase text-[#59554F] mb-1">
                      {prop.type} · DEVELOPER: {prop.developer}
                    </div>
                    <Link href={`/properties/${prop.slug}`}>
                      <h3 className="font-sans font-black text-xl text-[#0E0E0E] tracking-tight group-hover:text-[#8C6A2F] transition-colors mb-2 line-clamp-1">
                        {prop.title}
                      </h3>
                    </Link>
                    <p className="font-sans text-xs text-[#59554F] leading-relaxed line-clamp-2 mb-4">
                      {prop.headline}
                    </p>

                    {/* Specs strip */}
                    <div className="grid grid-cols-2 gap-2 p-3 bg-[#F4F1EA] border border-[#0E0E0E] font-mono text-[11px] uppercase">
                      <div>
                        <span className="text-[#59554F] block text-[9px]">BEDROOMS</span>
                        <span className="font-bold text-[#0E0E0E]">{prop.bedrooms} BEDS ({prop.bathrooms} BATHS)</span>
                      </div>
                      <div>
                        <span className="text-[#59554F] block text-[9px]">BUILT-UP AREA</span>
                        <span className="font-bold text-[#0E0E0E]">{new Intl.NumberFormat("en-US").format(prop.sqft)} SQFT</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer with Price & Direct Link */}
                <div className="p-5 border-t border-[#0E0E0E] flex items-center justify-between bg-[#FFFFFF] group-hover:bg-[#F4F1EA] transition-colors">
                  <div>
                    <span className="font-mono text-[10px] text-[#59554F] uppercase block">
                      OFFER PRICE
                    </span>
                    <span className="font-mono font-black text-xl text-[#0E0E0E]">
                      {formatPrice(prop.priceAed)}
                    </span>
                    <span className="font-mono text-[10px] text-[#59554F] block">
                      {formatSqftPrice(prop.pricePerSqft)}
                    </span>
                  </div>

                  <Link
                    href={`/properties/${prop.slug}`}
                    className="p-3 bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#8C6A2F] transition-colors flex items-center gap-1 font-mono text-xs uppercase font-bold"
                  >
                    <span>DETAILS</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="border-2 border-[#0E0E0E] divide-y-2 divide-[#0E0E0E] bg-[#FFFFFF]">
            {filtered.map((prop, idx) => (
              <div
                key={prop.id}
                className="p-4 md:p-6 hover:bg-[#F4F1EA] transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                <div className="md:col-span-1 font-mono font-black text-xl text-[#8C6A2F]">
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <div className="md:col-span-4">
                  <div className="font-mono text-[10px] text-[#59554F] uppercase">
                    {prop.reference} · {prop.community}
                  </div>
                  <Link href={`/properties/${prop.slug}`}>
                    <h3 className="font-sans font-black text-lg md:text-xl text-[#0E0E0E] hover:text-[#8C6A2F] transition-colors">
                      {prop.title}
                    </h3>
                  </Link>
                </div>

                <div className="md:col-span-3 font-mono text-xs text-[#59554F] space-y-0.5">
                  <div>{prop.bedrooms} BEDS · {prop.bathrooms} BATHS · {prop.type}</div>
                  <div>
                    {new Intl.NumberFormat("en-US").format(prop.sqft)} SQFT ({formatSqftPrice(prop.pricePerSqft)})
                  </div>
                </div>

                <div className="md:col-span-2 font-mono">
                  <div className="font-black text-lg text-[#0E0E0E]">
                    {formatPrice(prop.priceAed)}
                  </div>
                  <div className="text-[10px] text-[#8C6A2F] uppercase font-bold">
                    {prop.status}
                  </div>
                </div>

                <div className="md:col-span-2 text-right">
                  <Link
                    href={`/properties/${prop.slug}`}
                    className="inline-flex items-center gap-1.5 py-2.5 px-4 bg-[#0E0E0E] text-[#FFFFFF] font-mono text-xs uppercase font-bold hover:bg-[#8C6A2F] transition-colors"
                  >
                    <span>VIEW</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
