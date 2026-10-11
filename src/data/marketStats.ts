export interface TickerMetric {
  id: string;
  label: string;
  value: string;
  change?: string;
  indicator?: 'neutral' | 'up' | 'highlight';
}

export const tickerMetrics: TickerMetric[] = [
  {
    id: "m-1",
    label: "PALM JUMEIRAH READY AVG",
    value: "AED 4,680 / SQFT",
    change: "+14.2% YOY",
    indicator: "up"
  },
  {
    id: "m-2",
    label: "UAE GOLDEN VISA QUALIFICATION",
    value: "AED 2,000,000 PROPERTY EQUITY",
    indicator: "highlight"
  },
  {
    id: "m-3",
    label: "DOWNTOWN LUXURY BENCHMARK",
    value: "AED 3,250 / SQFT",
    change: "+8.9% YOY",
    indicator: "up"
  },
  {
    id: "m-4",
    label: "JUMEIRAH BAY PEAK MANSION",
    value: "AED 12,800 / SQFT",
    change: "RECORD HIGH",
    indicator: "highlight"
  },
  {
    id: "m-5",
    label: "OFF-PLAN Q3 ESCROW TRACKED",
    value: "28 ULTRA-PRIME LAUNCHES",
    indicator: "neutral"
  },
  {
    id: "m-6",
    label: "MORTGAGE DOWN PAYMENT (EXPATS)",
    value: "20% READY / 50% OFF-PLAN",
    indicator: "neutral"
  },
  {
    id: "m-7",
    label: "DLD TITLE TRANSFER STATUTORY FEE",
    value: "4.0% STANDARD ON ALL TRANSACTIONS",
    indicator: "neutral"
  }
];

export const sampleDataDisclaimer = "Market metrics and transaction averages displayed are sample data compiled for template demonstration purposes.";
