"use client";

import React, { useState, useMemo } from "react";
import { brandConfig, buildWhatsAppLink } from "@/config/brand";
import { useCurrency } from "@/context/CurrencyContext";
import { WhatsAppIcon, ArrowUpRightIcon } from "./Icons";

export default function MortgageCalculator() {
  const { formatPrice, currency } = useCurrency();

  // State defaults
  const [propertyPriceAed, setPropertyPriceAed] = useState<number>(35000000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(25);
  const [loanTermYears, setLoanTermYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(4.75);
  const [buyerType, setBuyerType] = useState<'expat' | 'national' | 'non_resident'>('expat');

  // Calculations
  const calculations = useMemo(() => {
    const price = Math.max(1000000, propertyPriceAed);
    const downPayment = (price * downPaymentPercent) / 100;
    const loanAmount = Math.max(0, price - downPayment);

    // Monthly mortgage formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = loanTermYears * 12;

    let monthlyPayment = 0;
    if (loanAmount > 0 && monthlyRate > 0) {
      monthlyPayment =
        (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    // Dubai Land Department (DLD) & Acquisition Fees
    const dldFee = price * 0.04; // 4% statutory DLD transfer fee
    const dldAdminFee = 4200; // Trustee registration fee
    const agencyFee = price * 0.02 * 1.05; // 2% agency fee + 5% VAT
    const mortgageRegFee = loanAmount > 0 ? loanAmount * 0.0025 + 290 : 0; // 0.25% + 290 AED
    const bankValuationFee = loanAmount > 0 ? 3150 : 0;

    const totalUpfrontFees =
      dldFee + dldAdminFee + agencyFee + mortgageRegFee + bankValuationFee;
    const totalCashRequired = downPayment + totalUpfrontFees;

    return {
      price,
      downPayment,
      loanAmount,
      monthlyPayment: Math.round(monthlyPayment),
      dldFee: Math.round(dldFee),
      dldAdminFee,
      agencyFee: Math.round(agencyFee),
      mortgageRegFee: Math.round(mortgageRegFee),
      bankValuationFee,
      totalUpfrontFees: Math.round(totalUpfrontFees),
      totalCashRequired: Math.round(totalCashRequired),
    };
  }, [propertyPriceAed, downPaymentPercent, loanTermYears, interestRate]);

  // Construct WhatsApp payload
  const whatsappMessage = `Hi ${brandConfig.broker.firstName}, I ran your Dubai Mortgage & DLD Acquisition Calculator for a property priced at ${formatPrice(calculations.price)}${currency !== 'AED' ? ` (AED ${new Intl.NumberFormat('en-AE').format(calculations.price)})` : ''}:
- Down Payment (${downPaymentPercent}%): ${formatPrice(calculations.downPayment)}
- Loan Amount: ${formatPrice(calculations.loanAmount)} (${loanTermYears} years @ ${interestRate}%)
- Estimated Monthly Installment: ${formatPrice(calculations.monthlyPayment)} / month
- Total Acquisition Fees (DLD, Agency, Trustee): ${formatPrice(calculations.totalUpfrontFees)}
- Total Initial Cash Required: ${formatPrice(calculations.totalCashRequired)}

Please send me your private banking mortgage advisory note and pre-approval roadmap.`;

  return (
    <section id="calculator" className="w-full bg-[#F4F1EA] py-16 md:py-24 border-b border-[#0E0E0E]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#0E0E0E] pb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C6A2F] block mb-2">
              FINANCIAL DESK · SECTION 08
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl tracking-tight text-[#0E0E0E]">
              MORTGAGE & DLD FEE CALCULATOR
            </h2>
          </div>
          <p className="font-mono text-xs uppercase text-[#59554F] max-w-sm mt-3 md:mt-0">
            UAE CENTRAL BANK & DUBAI LAND DEPARTMENT (DLD) REGULATORY ACQUISITION MODEL
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-[#0E0E0E] bg-[#FFFFFF]">
          {/* Controls Panel (Left 7 Cols) */}
          <div className="lg:col-span-7 p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-[#0E0E0E]">
            {/* Buyer Residency Selector */}
            <div className="mb-8">
              <label className="font-mono text-xs uppercase text-[#59554F] block mb-3">
                BUYER RESIDENCY PROFILE
              </label>
              <div className="grid grid-cols-3 border border-[#0E0E0E] divide-x divide-[#0E0E0E] text-center font-mono text-xs uppercase">
                <button
                  type="button"
                  onClick={() => {
                    setBuyerType('expat');
                    if (downPaymentPercent < 20) setDownPaymentPercent(20);
                  }}
                  className={`py-3 px-2 transition-colors ${
                    buyerType === 'expat'
                      ? "bg-[#0E0E0E] text-[#FFFFFF] font-bold"
                      : "bg-[#FFFFFF] text-[#0E0E0E] hover:bg-[#E8E3D8]"
                  }`}
                >
                  UAE Expat (20%+)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBuyerType('national');
                    if (downPaymentPercent < 15) setDownPaymentPercent(15);
                  }}
                  className={`py-3 px-2 transition-colors ${
                    buyerType === 'national'
                      ? "bg-[#0E0E0E] text-[#FFFFFF] font-bold"
                      : "bg-[#FFFFFF] text-[#0E0E0E] hover:bg-[#E8E3D8]"
                  }`}
                >
                  UAE National (15%+)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setBuyerType('non_resident');
                    if (downPaymentPercent < 35) setDownPaymentPercent(35);
                  }}
                  className={`py-3 px-2 transition-colors ${
                    buyerType === 'non_resident'
                      ? "bg-[#0E0E0E] text-[#FFFFFF] font-bold"
                      : "bg-[#FFFFFF] text-[#0E0E0E] hover:bg-[#E8E3D8]"
                  }`}
                >
                  Non-Resident (35%+)
                </button>
              </div>
            </div>

            {/* Property Value Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-2">
                <label className="font-mono text-xs uppercase text-[#59554F]">
                  PROPERTY VALUATION {currency !== "AED" ? `(${currency})` : "(AED)"}
                </label>
                <span className="font-mono font-bold text-lg md:text-xl text-[#0E0E0E]">
                  {formatPrice(propertyPriceAed)}
                </span>
              </div>
              <input
                type="range"
                min="5000000"
                max="120000000"
                step="1000000"
                value={propertyPriceAed}
                onChange={(e) => setPropertyPriceAed(Number(e.target.value))}
                className="w-full h-2 bg-[#E8E3D8] accent-[#8C6A2F] cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#59554F] mt-1">
                <span>{formatPrice(5000000)}</span>
                <span>{formatPrice(50000000)}</span>
                <span>{formatPrice(120000000)}</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-2">
                <label className="font-mono text-xs uppercase text-[#59554F]">
                  EQUITY DOWN PAYMENT ({downPaymentPercent}%)
                </label>
                <span className="font-mono font-bold text-base md:text-lg text-[#0E0E0E]">
                  {formatPrice(calculations.downPayment)}
                </span>
              </div>
              <input
                type="range"
                min={buyerType === 'national' ? "15" : buyerType === 'non_resident' ? "35" : "20"}
                max="75"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#E8E3D8] accent-[#8C6A2F] cursor-pointer"
              />
              <div className="flex justify-between font-mono text-[10px] text-[#59554F] mt-1">
                <span>Min Required</span>
                <span>50% Equity</span>
                <span>75% Equity</span>
              </div>
            </div>

            {/* Term & Interest Rate Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs uppercase text-[#59554F] block mb-2">
                  LOAN TENURE (YEARS)
                </label>
                <select
                  value={loanTermYears}
                  onChange={(e) => setLoanTermYears(Number(e.target.value))}
                  className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] outline-none"
                >
                  <option value={5}>5 Years (Fast Amortization)</option>
                  <option value={10}>10 Years</option>
                  <option value={15}>15 Years</option>
                  <option value={20}>20 Years (Standard)</option>
                  <option value={25}>25 Years (Max UAE Cap)</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs uppercase text-[#59554F] block mb-2">
                  ANNUAL INTEREST RATE (% EIBOR + MARGIN)
                </label>
                <select
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-3 border border-[#0E0E0E] bg-[#F4F1EA] font-mono text-sm text-[#0E0E0E] outline-none"
                >
                  <option value={4.25}>4.25% (Private Banking Fixed)</option>
                  <option value={4.75}>4.75% (Prime Benchmark)</option>
                  <option value={5.25}>5.25% (Variable Tier 1)</option>
                  <option value={5.75}>5.75% (Non-Resident Tier)</option>
                </select>
              </div>
            </div>

            <p className="mt-8 pt-4 border-t border-[#0E0E0E]/10 font-mono text-[11px] text-[#59554F] leading-relaxed">
              *UAE Central Bank limits expat borrowing to maximum 80% on first ready home under AED 5M, and 75% above AED 5M. Off-plan acquisitions are capped at 50% mortgage financing during construction.
            </p>
          </div>

          {/* Results & WhatsApp Handshake (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-[#F4F1EA] p-6 md:p-10 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#59554F] block mb-4 border-b border-[#0E0E0E] pb-2">
                FINANCIAL OUTCOME SUMMARY
              </span>

              {/* Monthly Repayment Big Block */}
              <div className="bg-[#FFFFFF] border-2 border-[#0E0E0E] p-6 mb-6">
                <span className="font-mono text-xs uppercase text-[#59554F] block">
                  ESTIMATED MONTHLY INSTALLMENT
                </span>
                <div className="font-mono font-black text-3xl md:text-4xl text-[#0E0E0E] mt-2 mb-1">
                  {formatPrice(calculations.monthlyPayment)}
                  <span className="text-sm font-normal text-[#59554F]"> / mo</span>
                </div>
                <span className="font-mono text-[11px] text-[#8C6A2F]">
                  Principal: {formatPrice(calculations.loanAmount)} over {loanTermYears} years
                </span>
              </div>

              {/* Acquisition Fee Breakdown Table */}
              <div className="space-y-2.5 font-mono text-xs mb-6">
                <div className="flex justify-between py-1 border-b border-[#0E0E0E]/20">
                  <span className="text-[#59554F]">Down Payment ({downPaymentPercent}%):</span>
                  <span className="font-bold">{formatPrice(calculations.downPayment)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0E0E0E]/20">
                  <span className="text-[#59554F]">DLD Transfer Fee (4.0%):</span>
                  <span className="font-bold">{formatPrice(calculations.dldFee)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0E0E0E]/20">
                  <span className="text-[#59554F]">DLD Trustee Registration:</span>
                  <span className="font-bold">{formatPrice(calculations.dldAdminFee)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0E0E0E]/20">
                  <span className="text-[#59554F]">Agency Brokerage Fee (2% + VAT):</span>
                  <span className="font-bold">{formatPrice(calculations.agencyFee)}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#0E0E0E]/20">
                  <span className="text-[#59554F]">Mortgage Registration (0.25%):</span>
                  <span className="font-bold">{formatPrice(calculations.mortgageRegFee)}</span>
                </div>
                <div className="flex justify-between py-2 border-b-2 border-[#0E0E0E] font-bold text-sm bg-[#E8E3D8] px-2">
                  <span>TOTAL UPFRONT CASH REQUIRED:</span>
                  <span className="text-[#8C6A2F]">{formatPrice(calculations.totalCashRequired)}</span>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="pt-4">
              <a
                href={buildWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#8C6A2F] text-[#FFFFFF] font-mono text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#735523] transition-colors border border-[#8C6A2F]"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>SEND ME THIS ANALYSIS VIA WHATSAPP</span>
              </a>
              <p className="font-mono text-[10px] text-center text-[#59554F] mt-2 uppercase">
                Opens prefilled WhatsApp direct with Tariq Al-Mansoor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
