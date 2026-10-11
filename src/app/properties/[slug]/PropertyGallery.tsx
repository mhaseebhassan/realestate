"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      // Swiped left -> next
      setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    } else if (diff < -50) {
      // Swiped right -> prev
      setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full bg-[#E8E3D8] border-b-2 border-[#0E0E0E] py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Viewport Image - Constrained & Perfectly Proportioned on PC & Mobile */}
        <div
          className="relative w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[480px] border-2 border-[#0E0E0E] bg-[#0E0E0E] overflow-hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={images[activeIdx] || images[0]}
            alt={`${title} - View ${activeIdx + 1}`}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition-opacity duration-300"
          />

          {/* Gallery Control HUD */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center pointer-events-none font-mono text-xs">
            <div className="bg-[#0E0E0E]/90 text-[#F4F1EA] px-2.5 py-1 text-[11px] font-bold border border-[#FFFFFF]/20">
              {reference} · PLATE {String(activeIdx + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
            <div className="hidden sm:block bg-[#0E0E0E]/90 text-[#A39E93] px-2.5 py-1 border border-[#FFFFFF]/20 text-[10px]">
              USE ← / → ARROWS OR SWIPE
            </div>
          </div>

          {/* Prev / Next Click Buttons */}
          <div className="absolute inset-y-0 left-3 flex items-center">
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0E0E0E]/85 hover:bg-[#8C6A2F] text-[#FFFFFF] border border-[#FFFFFF]/30 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Previous plate"
            >
              <ArrowLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-3 flex items-center">
            <button
              type="button"
              onClick={() => setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0E0E0E]/85 hover:bg-[#8C6A2F] text-[#FFFFFF] border border-[#FFFFFF]/30 flex items-center justify-center transition-colors shadow-lg"
              aria-label="Next plate"
            >
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Compact Thumbnails Strip */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIdx(idx)}
              className={`relative h-14 sm:h-18 md:h-20 border-2 transition-all overflow-hidden bg-[#0E0E0E] ${
                activeIdx === idx
                  ? "border-[#8C6A2F] ring-2 ring-[#8C6A2F]"
                  : "border-[#0E0E0E] opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`Plate thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 300px"
                className="object-cover"
              />
              <span className="absolute bottom-1 right-1 font-mono text-[9px] bg-[#0E0E0E] text-[#FFFFFF] px-1 font-bold">
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
