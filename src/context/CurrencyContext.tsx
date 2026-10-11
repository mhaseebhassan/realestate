"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { brandConfig, formatCurrency } from "@/config/brand";

export type CurrencyCode = "AED" | "USD" | "EUR" | "GBP";

export interface CurrencyRates {
  AED: number;
  USD: number;
  EUR: number;
  GBP: number;
}

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (c: CurrencyCode) => void;
  rates: CurrencyRates;
  isLiveRates: boolean;
  lastUpdated: string | null;
  formatPrice: (aedAmount: number, overrideCurrency?: CurrencyCode) => string;
  formatSqftPrice: (aedPerSqft: number, overrideCurrency?: CurrencyCode) => string;
  convertPrice: (aedAmount: number, targetCurrency?: CurrencyCode) => number;
  getCurrencySymbol: (c?: CurrencyCode) => string;
  transactionNote: string;
}

const DEFAULT_RATES: CurrencyRates = {
  AED: 1,
  USD: brandConfig.currencies.USD.rateAgainstAed,
  EUR: brandConfig.currencies.EUR.rateAgainstAed,
  GBP: brandConfig.currencies.GBP.rateAgainstAed,
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("AED");
  const [rates, setRates] = useState<CurrencyRates>(DEFAULT_RATES);
  const [isLiveRates, setIsLiveRates] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  // Restore preferred currency from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_currency") as CurrencyCode;
      if (saved && (saved === "AED" || saved === "USD" || saved === "EUR" || saved === "GBP")) {
        setCurrencyState(saved);
      }
    } catch {
      // Storage unavailable or blocked
    }
  }, []);

  // Fetch live exchange rates from public API with caching
  useEffect(() => {
    let isCancelled = false;

    async function loadRates() {
      // 1. Try local cache first (valid for 1 hour)
      try {
        const cachedRaw = sessionStorage.getItem("cached_aed_exchange_rates");
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          const cacheAgeMs = Date.now() - (cached.timestamp || 0);
          if (cacheAgeMs < 3600000 && cached.rates?.USD && cached.rates?.EUR && cached.rates?.GBP) {
            if (!isCancelled) {
              setRates(cached.rates);
              setIsLiveRates(true);
              setLastUpdated(cached.lastUpdated || null);
            }
            return;
          }
        }
      } catch {
        // Ignore cache read errors
      }

      // 2. Fetch fresh rates directly from public exchange rate APIs (CORS-enabled)
      try {
        let fetchedRates: CurrencyRates | null = null;
        let updateTimestamp: string | null = null;

        // Primary: Open Exchange Rates free API (base AED, no key required)
        try {
          const publicRes = await fetch("https://open.er-api.com/v6/latest/AED");
          if (publicRes.ok) {
            const data = await publicRes.json();
            if (data.rates?.USD && data.rates?.EUR && data.rates?.GBP) {
              fetchedRates = {
                AED: 1,
                USD: Number(data.rates.USD),
                EUR: Number(data.rates.EUR),
                GBP: Number(data.rates.GBP),
              };
              updateTimestamp = data.time_last_update_utc || new Date().toISOString();
            }
          }
        } catch (primaryErr) {
          console.warn("Primary open.er-api.com fetch failed, attempting fallback CDN:", primaryErr);
        }

        // Secondary fallback: Fawaz Ahmed Currency API on jsDelivr CDN
        if (!fetchedRates) {
          try {
            const fallbackRes = await fetch(
              "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/aed.json"
            );
            if (fallbackRes.ok) {
              const data = await fallbackRes.json();
              const aedRates = data.aed;
              if (aedRates?.usd && aedRates?.eur && aedRates?.gbp) {
                fetchedRates = {
                  AED: 1,
                  USD: Number(aedRates.usd),
                  EUR: Number(aedRates.eur),
                  GBP: Number(aedRates.gbp),
                };
                updateTimestamp = data.date || new Date().toISOString();
              }
            }
          } catch (secondaryErr) {
            console.warn("Secondary currency-api fetch failed:", secondaryErr);
          }
        }

        if (fetchedRates && !isCancelled) {
          setRates(fetchedRates);
          setIsLiveRates(true);
          setLastUpdated(updateTimestamp);

          try {
            sessionStorage.setItem(
              "cached_aed_exchange_rates",
              JSON.stringify({
                timestamp: Date.now(),
                rates: fetchedRates,
                lastUpdated: updateTimestamp,
              })
            );
          } catch {
            // Ignore storage quota errors
          }
        }
      } catch (err) {
        console.warn("Could not retrieve live exchange rates, keeping reliable defaults:", err);
      }
    }

    loadRates();

    return () => {
      isCancelled = true;
    };
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    try {
      localStorage.setItem("preferred_currency", c);
    } catch {
      // Ignore
    }
  };

  const getCurrencySymbol = useCallback(
    (c?: CurrencyCode): string => {
      const code = c || currency;
      return brandConfig.currencies[code]?.symbol || "AED";
    },
    [currency]
  );

  const convertPrice = useCallback(
    (aedAmount: number, targetCurrency?: CurrencyCode): number => {
      const code = targetCurrency || currency;
      if (code === "AED") return aedAmount;
      const rate = rates[code] ?? DEFAULT_RATES[code] ?? 1;
      return Math.round(aedAmount * rate);
    },
    [currency, rates]
  );

  const formatPrice = useCallback(
    (aedAmount: number, overrideCurrency?: CurrencyCode): string => {
      const code = overrideCurrency || currency;
      const config = brandConfig.currencies[code] || brandConfig.currencies.AED;

      if (code === "AED") {
        return `AED ${new Intl.NumberFormat("en-AE", { maximumFractionDigits: 0 }).format(aedAmount)}`;
      }

      const rate = rates[code] ?? DEFAULT_RATES[code] ?? config.rateAgainstAed;
      const converted = Math.round(aedAmount * rate);

      return `${config.symbol}${new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }).format(converted)}`;
    },
    [currency, rates]
  );

  const formatSqftPrice = useCallback(
    (aedPerSqft: number, overrideCurrency?: CurrencyCode): string => {
      const code = overrideCurrency || currency;
      const config = brandConfig.currencies[code] || brandConfig.currencies.AED;

      if (code === "AED") {
        return `AED ${new Intl.NumberFormat("en-AE", { maximumFractionDigits: 0 }).format(aedPerSqft)} / sqft`;
      }

      const rate = rates[code] ?? DEFAULT_RATES[code] ?? config.rateAgainstAed;
      const converted = Math.round(aedPerSqft * rate);

      return `${config.symbol}${new Intl.NumberFormat("en-US", {
        maximumFractionDigits: 0,
      }).format(converted)} / sqft`;
    },
    [currency, rates]
  );

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        rates,
        isLiveRates,
        lastUpdated,
        formatPrice,
        formatSqftPrice,
        convertPrice,
        getCurrencySymbol,
        transactionNote:
          "All contracts and official DLD registrations are legally transacted in United Arab Emirates Dirham (AED).",
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
