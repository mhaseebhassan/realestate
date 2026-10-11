"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/data/properties";
import { useCurrency } from "@/context/CurrencyContext";
import { ArrowUpRightIcon } from "./Icons";

interface PropertyIndexListProps {
  properties: Property[];
}

export default function PropertyIndexList({ properties }: PropertyIndexListProps) {
  const { formatPrice, formatSqftPrice } = useCurrency();
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative">
      {/* Floating Cursor Image Preview (Desktop Only) */}
      <div
        className={`pointer-events-none fixed z-30 transition-opacity duration-200 hidden lg:block ${
          activeProperty ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: `${mousePos.x + 24}px`,
          top: `${mousePos.y - 140}px`,
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {activeProperty && (
          <div className="w-[320px] h-[220px] bg-[#FFFFFF] border-2 border-[#0E0E0E] p-1.5 shadow-none overflow-hidden">
            <div className="relative w-full h-full bg-[#E8E3D8]">
              <Image
                src={activeProperty.heroImage}
                alt={activeProperty.title}
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0E0E0E]/90 p-2 font-mono text-[10px] text-[#F4F1EA] flex justify-between">
                <span>{activeProperty.reference}</span>
                <span>{activeProperty.community}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Property Rows List */}
      <div className="divide-y-2 divide-[#0E0E0E] border-y-2 border-[#0E0E0E]">
        {properties.map((prop, idx) => {
          const indexNum = String(idx + 1).padStart(2, "0");

          return (
            <div
              key={prop.id}
              onMouseEnter={() => setActiveProperty(prop)}
              onMouseLeave={() => setActiveProperty(null)}
              className="group bg-[#F4F1EA] hover:bg-[#FFFFFF] transition-colors duration-150"
            >
              {/* Desktop & Tablet Row */}
              <Link
                href={`/properties/${prop.slug}`}
                className="hidden md:grid grid-cols-12 items-center py-6 md:py-8 px-4 md:px-8 gap-4"
              >
                {/* Index numeral */}
                <div className="col-span-1 font-mono font-black text-2xl md:text-3xl text-[#0E0E0E] group-hover:text-[#8C6A2F] transition-colors">
                  {indexNum}
                </div>

                {/* Title & Ref */}
                <div className="col-span-5 pr-4">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#59554F] mb-1">
                    {prop.reference} · {prop.community}
                  </div>
                  <h3 className="font-sans font-black text-xl md:text-2xl text-[#0E0E0E] tracking-tight group-hover:text-[#8C6A2F] transition-colors line-clamp-1">
                    {prop.title}
                  </h3>
                </div>

                {/* Specs */}
                <div className="col-span-3 font-mono text-xs uppercase text-[#59554F] space-y-1">
                  <div>{prop.bedrooms} BEDS · {prop.type}</div>
                  <div>
                    {new Intl.NumberFormat("en-US").format(prop.sqft)} SQFT (
                    {formatSqftPrice(prop.pricePerSqft)})
                  </div>
                </div>

                {/* Price & Action */}
                <div className="col-span-3 flex items-center justify-between text-right">
                  <div>
                    <div className="font-mono font-black text-lg md:text-xl text-[#0E0E0E]">
                      {formatPrice(prop.priceAed)}
                    </div>
                    <div className="font-mono text-[10px] uppercase text-[#8C6A2F]">
                      {prop.status}
                    </div>
                  </div>

                  <div className="w-10 h-10 border border-[#0E0E0E] flex items-center justify-center bg-[#F4F1EA] group-hover:bg-[#0E0E0E] group-hover:text-[#FFFFFF] transition-colors shrink-0 ml-4">
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              {/* Mobile Stacked Row with Full-Width Image */}
              <div className="md:hidden p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-2xl text-[#8C6A2F]">
                    {indexNum}
                  </span>
                  <span className="font-mono text-xs uppercase px-2 py-0.5 border border-[#0E0E0E] bg-[#FFFFFF]">
                    {prop.status} · {prop.reference}
                  </span>
                </div>

                <div className="relative aspect-[16/10] w-full border border-[#0E0E0E] bg-[#E8E3D8]">
                  <Image
                    src={prop.heroImage}
                    alt={prop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <div className="font-mono text-[10px] uppercase text-[#59554F]">
                    {prop.community}
                  </div>
                  <h3 className="font-sans font-black text-xl text-[#0E0E0E] tracking-tight">
                    {prop.title}
                  </h3>
                </div>

                <div className="flex justify-between items-end border-t border-[#0E0E0E]/20 pt-2 font-mono">
                  <div>
                    <div className="text-xs text-[#59554F]">
                      {prop.bedrooms} BEDS · {new Intl.NumberFormat("en-US").format(prop.sqft)} SQFT
                    </div>
                    <div className="text-lg font-black text-[#0E0E0E]">
                      {formatPrice(prop.priceAed)}
                    </div>
                  </div>

                  <Link
                    href={`/properties/${prop.slug}`}
                    className="px-3 py-2 bg-[#0E0E0E] text-[#FFFFFF] text-xs uppercase flex items-center gap-1 font-bold"
                  >
                    <span>VIEW</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
