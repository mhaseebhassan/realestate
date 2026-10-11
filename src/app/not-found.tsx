import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-xl w-full border-2 border-[#0E0E0E] bg-[#FFFFFF] p-8 md:p-12 text-center font-mono">
          <span className="text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
            ERROR 404 · DLD REGISTRY NOTICE
          </span>
          <h1 className="font-sans font-black text-4xl md:text-5xl text-[#0E0E0E] tracking-tight mb-4">
            ADDRESS NOT FOUND
          </h1>
          <p className="text-xs text-[#59554F] leading-relaxed mb-8">
            The requested property dossier or district record has either been transacted off-market or relocated within the portfolio directory.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="py-3 px-6 bg-[#0E0E0E] text-[#FFFFFF] text-xs uppercase font-bold hover:bg-[#8C6A2F] transition-colors"
            >
              RETURN TO OVERVIEW
            </Link>
            <Link
              href="/properties"
              className="py-3 px-6 border border-[#0E0E0E] bg-[#F4F1EA] text-[#0E0E0E] text-xs uppercase font-bold hover:bg-[#E8E3D8] transition-colors"
            >
              VIEW ALL LISTINGS
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
