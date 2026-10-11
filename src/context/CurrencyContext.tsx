"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { brandConfig, formatCurrency } from "@/config/brand";

type CurrencyCode = 'AED' | 'USD' | 'EUR' | 'GBP';

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  formatPrice: (aedAmount: number) => string;
  formatSqftPrice: (aedPerSqft: number) => string;
  transactionNote: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>('AED');

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_currency") as CurrencyCode;
      if (saved && brandConfig.currencies[saved]) {
        setCurrencyState(saved);
      }
    } catch {
      // Local storage not available or blocked
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("preferred_currency", c);
    } catch {
      // Ignore
    }
  };

  const formatPrice = (aedAmount: number): string => {
    return formatCurrency(aedAmount, currency);
  };

  const formatSqftPrice = (aedPerSqft: number): string => {
    const rate = brandConfig.currencies[currency].rateAgainstAed;
    const converted = Math.round(aedPerSqft * rate);
    if (currency === 'AED') {
      return `AED ${new Intl.NumberFormat('en-AE').format(aedPerSqft)} / sqft`;
    }
    return `${brandConfig.currencies[currency].symbol}${new Intl.NumberFormat('en-US').format(converted)} / sqft`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        formatSqftPrice,
        transactionNote: "All contracts and official DLD registrations are legally transacted in United Arab Emirates Dirham (AED)."
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
