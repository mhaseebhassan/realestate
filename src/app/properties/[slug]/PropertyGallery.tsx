"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@/components/Icons";

interface PropertyGalleryProps {
  images: string[];
  title: string;
  reference: string;
}

export default function PropertyGallery({
  images,
  title,
  reference,
}: PropertyGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  return (
    <div className="w-full bg-[#0E0E0E] border-b-2 border-[#0E0E0E]">
      {/* Main Viewport Image */}
      <div className="relative aspect-[16/10] md:aspect-[21/9] w-full bg-[#1A1A1A] overflow-hidden select-none">
        <Image
          src={images[activeIdx] || images[0]}
          alt={`${title} - View ${activeIdx + 1}`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1600px"
          className="object-cover transition-opacity duration-300"
        />

        {/* Gallery Control HUD */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none font-mono text-xs">
          <div className="bg-[#0E0E0E]/90 text-[#F4F1EA] px-3 py-1.5 border border-[#FFFFFF]/20">
            {reference} · ARCHITECTURAL PLATE {String(activeIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </div>
          <div className="hidden sm:block bg-[#0E0E0E]/90 text-[#A39E93] px-3 py-1.5 border border-[#FFFFFF]/20 text-[10px]">
            KEYBOARD: USE ← / → ARROWS TO NAVIGATE
          </div>
        </div>

        {/* Prev / Next Click Overlays */}
        <div className="absolute inset-y-0 left-4 flex items-center">
          <button
            type="button"
            onClick={() => setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            className="w-12 h-12 bg-[#0E0E0E]/80 hover:bg-[#8C6A2F] text-[#FFFFFF] border border-[#FFFFFF]/30 flex items-center justify-center transition-colors"
            aria-label="Previous plate"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-4 flex items-center">
          <button
            type="button"
            onClick={() => setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            className="w-12 h-12 bg-[#0E0E0E]/80 hover:bg-[#8C6A2F] text-[#FFFFFF] border border-[#FFFFFF]/30 flex items-center justify-center transition-colors"
            aria-label="Next plate"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnails Strip */}
      <div className="grid grid-cols-4 border-t border-[#333333] divide-x divide-[#333333] bg-[#0E0E0E]">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveIdx(idx)}
            className={`relative aspect-[16/9] w-full transition-opacity overflow-hidden ${
              activeIdx === idx ? "opacity-100 ring-2 ring-[#8C6A2F]" : "opacity-40 hover:opacity-80"
            }`}
          >
            <Image
              src={img}
              alt={`Plate thumbnail ${idx + 1}`}
              fill
              sizes="300px"
              className="object-cover"
            />
            <span className="absolute bottom-1 right-1 font-mono text-[9px] bg-[#0E0E0E] text-[#FFFFFF] px-1">
              0{idx + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
