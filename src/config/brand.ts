export interface CurrencyRate {
  code: 'AED' | 'USD' | 'EUR' | 'GBP';
  symbol: string;
  rateAgainstAed: number; // 1 AED = X currency
  label: string;
}

export interface BrandConfig {
  broker: {
    fullName: string;
    firstName: string;
    title: string;
    brokerageName: string;
    license: {
      orn: string;
      brn: string;
      reraPermit: string;
    };
    bioShort: string;
    bioLong: string[];
    credentials: string[];
    languages: string[];
    portraitImage: string;
  };
  contact: {
    phoneDisplay: string;
    phoneRaw: string;
    whatsappDisplay: string;
    whatsappRaw: string; // international digits only, e.g. 971501234567
    email: string;
    officeAddress: string;
    coordinates: string; // e.g. 25.2048° N, 55.2708° E
    workingHoursGst: string;
    responsePromise: string;
  };
  visuals: {
    logoWordmark: string;
    logoSubmark: string;
    accentColor: string; // e.g. #8C6A2F
    accentColorHover: string; // e.g. #735523
  };
  stats: {
    yearsInMarket: { value: number; label: string };
    aedTransacted: { value: string; raw: number; label: string };
    dealsClosed: { value: number; label: string };
    avgResponseMinutes: { value: number; label: string };
    averageDealSize: { value: string; label: string };
  };
  socials: {
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
  integrations: {
    formEndpoint: string; // Optional Formspree or Web3Forms endpoint
    ga4MeasurementId: string; // e.g. G-XXXXXXXXXX
    metaPixelId: string; // e.g. XXXXXXXXXXXXXXX
  };
  currencies: Record<'AED' | 'USD' | 'EUR' | 'GBP', CurrencyRate>;
}

export const brandConfig: BrandConfig = {
  broker: {
    fullName: "Tariq Al-Mansoor",
    firstName: "Tariq",
    title: "Senior Private Broker",
    brokerageName: "Al-Mansoor Private Client Advisory",
    license: {
      orn: "ORN 00000",
      brn: "BRN 00000",
      reraPermit: "RERA-2026-00000"
    },
    bioShort: "Direct advisory for family offices, founders, and sovereign capital acquiring prime Dubai residential real estate.",
    bioLong: [
      "Over fourteen years operating exclusively across Dubai's top six postal codes: Palm Jumeirah, Jumeirah Bay, Emirates Hills, Downtown Dubai, Dubai Hills, and Business Bay.",
      "No mass listings. No junior handoffs. Every transaction is handled personally from capital structuring and DLD verification to contract execution and post-handover property asset management.",
      "Trusted advisor to ultra-high-net-worth principals across London, Zurich, Singapore, Riyadh, and Dubai."
    ],
    credentials: [
      "Licensed RERA Broker (BRN 00000)",
      "Registered Corporate Member, Dubai Land Department (ORN 00000)",
      "Top Private Client Transactor 2023, 2024, 2025 (Sample distinction)",
      "Member of Chartered Institute of Arbitrators (CIArb)"
    ],
    languages: ["English", "Arabic", "French", "Russian"],
    portraitImage: "/images/about/broker-portrait.webp"
  },
  contact: {
    phoneDisplay: "+971 4 812 4000",
    phoneRaw: "+97148124000",
    whatsappDisplay: "+971 50 882 1900",
    whatsappRaw: "971508821900",
    email: "tariq@almansoor-private.com",
    officeAddress: "Gate Precinct 4, Level 7, DIFC, Dubai, United Arab Emirates",
    coordinates: "25.2048° N, 55.2708° E",
    workingHoursGst: "09:00 to 22:00 GST (Monday to Saturday)",
    responsePromise: "Replies within 15 minutes, 9am to 10pm GST"
  },
  visuals: {
    logoWordmark: "TARIQ AL-MANSOOR",
    logoSubmark: "PRIVATE CLIENT ADVISORY · DIFC",
    accentColor: "#8C6A2F",
    accentColorHover: "#735523"
  },
  stats: {
    yearsInMarket: { value: 14, label: "Years in Dubai Prime" },
    aedTransacted: { value: "AED 3.8B+", raw: 3800000000, label: "Total Transacted Capital" },
    dealsClosed: { value: 420, label: "Private Acquisitions" },
    avgResponseMinutes: { value: 12, label: "Minutes Avg Response" },
    averageDealSize: { value: "AED 28.5M", label: "Average Transaction Size" }
  },
  socials: {
    linkedin: "https://linkedin.com/in/[broker-name-placeholder]",
    instagram: "https://instagram.com/[broker-handle-placeholder]",
    whatsapp: "https://wa.me/971508821900"
  },
  integrations: {
    formEndpoint: "", // Insert https://formspree.io/f/xyz or https://api.web3forms.com/submit
    ga4MeasurementId: "G-XXXXXXXXXX",
    metaPixelId: "XXXXXXXXXXXXXXX"
  },
  currencies: {
    AED: { code: 'AED', symbol: 'AED', rateAgainstAed: 1.0, label: 'Dirham (Base)' },
    USD: { code: 'USD', symbol: '$', rateAgainstAed: 0.2723, label: 'US Dollar' },
    EUR: { code: 'EUR', symbol: '€', rateAgainstAed: 0.2514, label: 'Euro' },
    GBP: { code: 'GBP', symbol: '£', rateAgainstAed: 0.2155, label: 'British Pound' }
  }
};

/**
 * Helper to construct WhatsApp redirect links with prefilled text
 */
export function buildWhatsAppLink(message: string, overridePhone?: string): string {
  const phone = overridePhone || brandConfig.contact.whatsappRaw;
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Format currency based on selected currency code
 */
export function formatCurrency(
  aedAmount: number,
  currencyCode: 'AED' | 'USD' | 'EUR' | 'GBP' = 'AED'
): string {
  const currency = brandConfig.currencies[currencyCode] || brandConfig.currencies.AED;
  const converted = aedAmount * currency.rateAgainstAed;

  if (currencyCode === 'AED') {
    return `AED ${new Intl.NumberFormat('en-AE', { maximumFractionDigits: 0 }).format(aedAmount)}`;
  }

  return `${currency.symbol}${new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(converted)}`;
}
