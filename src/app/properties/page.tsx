import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertiesDirectory from "./PropertiesDirectory";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prime Properties & Penthouses Directory",
  description: "Direct verified luxury inventory in Dubai: Palm Jumeirah, Emirates Hills, Jumeirah Bay, and Downtown Dubai. Filter by beds, price, and handover status.",
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1EA]">
      <Header />
      <main className="flex-1">
        <Suspense fallback={
          <div className="min-h-[50vh] flex items-center justify-center font-mono text-xs uppercase text-[#59554F]">
            LOADING INVENTORY REPOSITORY...
          </div>
        }>
          <PropertiesDirectory />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
