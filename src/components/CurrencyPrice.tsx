"use client";

import React, { useEffect, useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";

interface CurrencyPriceProps {
  aedAmount: number;
  isSqft?: boolean;
  showOriginalAed?: boolean;
  className?: string;
  subClassName?: string;
}

export default function CurrencyPrice({
  aedAmount,
  isSqft = false,
  showOriginalAed = false,
  className = "",
  subClassName = "",
}: CurrencyPriceProps) {
  const { currency, formatPrice, formatSqftPrice } = useCurrency();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Before client mount, render AED format to guarantee zero hydration mismatch with SSR
  if (!mounted) {
    const fallbackText = isSqft
      ? `AED ${new Intl.NumberFormat("en-AE").format(aedAmount)} / sqft`
      : `AED ${new Intl.NumberFormat("en-AE").format(aedAmount)}`;

    return (
      <span className={className} suppressHydrationWarning>
        {fallbackText}
      </span>
    );
  }

  const formattedValue = isSqft ? formatSqftPrice(aedAmount) : formatPrice(aedAmount);

  return (
    <span className="inline-flex flex-col">
      <span className={className} suppressHydrationWarning>
        {formattedValue}
      </span>
      {showOriginalAed && currency !== "AED" && (
        <span
          className={subClassName || "text-[10px] text-[#59554F] font-mono font-normal mt-0.5 tracking-normal"}
          suppressHydrationWarning
        >
          (AED {new Intl.NumberFormat("en-AE").format(aedAmount)}
          {isSqft ? " / sqft" : ""} · DLD Contract Value)
        </span>
      )}
    </span>
  );
}
