# REBRAND.md - Dubai Broker 10-Minute Rapid Rebranding Protocol

This master template is engineered for principal creative developers and broker agencies to deploy bespoke, ultra-high-end Dubai real estate broker portfolios in **under 10 to 30 minutes** for cold outreach, client acquisition pitches, and live client demonstrations.

Every single broker datum, credential, phone number, WhatsApp link, color token, and property listing is completely decoupled from UI components. **Zero code or component edits are required to achieve a 100% bespoke rebrand.**

---

## 1. Quick-Start Rebrand in 5 Steps (Under 10 Minutes)

### Step 1: Configure the Broker Identity in `/src/config/brand.ts`
Open `/src/config/brand.ts` and update the `brandConfig` object:

```typescript
export const brandConfig: BrandConfig = {
  broker: {
    fullName: "Your Broker Name",          // e.g. "Alexander Vance"
    firstName: "Alexander",                 // Used in conversational CTAs
    title: "Managing Partner",             // e.g. "Private Client Advisory"
    brokerageName: "Vance Private Office",
    license: {
      orn: "ORN 12345",                    // Official DLD Brokerage ORN
      brn: "BRN 67890",                    // Personal RERA BRN Card
      reraPermit: "RERA-2026-9999"         // Official Advertising Permit
    },
    bioShort: "One-sentence high-conviction positioning statement.",
    bioLong: [
      "First paragraph describing specific postal code focus...",
      "Second paragraph highlighting private banking rigor...",
      "Third paragraph stating transaction milestones..."
    ],
    credentials: [
      "Licensed RERA Broker (BRN 67890)",
      "Registered Member, Dubai Land Department",
      "Prime Transactor Award 2024"
    ],
    languages: ["English", "Arabic", "German", "Russian"],
    portraitImage: "/images/about/broker-portrait.webp"
  },
  contact: {
    phoneDisplay: "+971 4 800 1234",
    phoneRaw: "+97148001234",              // Dial string with country code
    whatsappDisplay: "+971 50 123 4567",
    whatsappRaw: "971501234567",           // Digits only for wa.me routing
    email: "alexander@vance-office.com",
    officeAddress: "Al Fattan Currency House, Level 14, DIFC, Dubai, UAE",
    coordinates: "25.2081° N, 55.2789° E",
    workingHoursGst: "09:00 to 22:00 GST (Monday to Saturday)",
    responsePromise: "Replies within 15 minutes, 9am to 10pm GST"
  },
  visuals: {
    logoWordmark: "ALEXANDER VANCE",
    logoSubmark: "PRIVATE BROKERAGE · DIFC",
    accentColor: "#8C6A2F",                // Choose #8C6A2F (brass), #B4532A (burnt sienna), or #A63A24 (oxide red)
    accentColorHover: "#735523"
  },
  stats: {
    yearsInMarket: { value: 16, label: "Years in Dubai Prime" },
    aedTransacted: { value: "AED 4.2B+", raw: 4200000000, label: "Total Transacted Capital" },
    dealsClosed: { value: 380, label: "Private Acquisitions" },
    avgResponseMinutes: { value: 10, label: "Minutes Avg Response" },
    averageDealSize: { value: "AED 32M", label: "Average Transaction Size" }
  },
  integrations: {
    formEndpoint: "https://formspree.io/f/your_form_id", // Optional Formspree/Web3Forms webhook
    ga4MeasurementId: "G-XXXXXXXXXX",                    // GA4 Tag (loaded after cookie consent)
    metaPixelId: "XXXXXXXXXXXXXXX"                       // Meta Pixel (loaded after cookie consent)
  }
};
```

### Step 2: Swap the Broker Portrait Photo
Replace `public/images/about/broker-portrait.webp` with the new broker's portrait photo:
- **Aspect Ratio**: 2:3 or 3:4 vertical editorial portrait
- **Recommended dimensions**: 800 × 1200 px
- **Format**: WebP (keep file size under 150 KB for instant LCP)

### Step 3: Palette Swap in 5 Lines (Optional)
If the new broker requires an alternative accent color (e.g. Burnt Sienna `#B4532A` or Oxide Red `#A63A24`), edit the CSS variables in `src/app/globals.css`:

```css
:root {
  --bg-paper: #F4F1EA;       /* Warm unbleached paper */
  --bg-surface: #FFFFFF;     /* Pure architectural white */
  --bg-stone: #E8E3D8;       /* Sunlit desert stone */
  --text-ink: #0E0E0E;       /* Deep ink black */
  --accent: #B4532A;         /* Swap accent: Burnt Sienna */
  --accent-hover: #9E4720;   /* Swap hover state */
  --radius: 0px;             /* Zero border radius */
}
```

### Step 4: Custom Listings & Testimonials (Optional)
- **Properties**: Modify `src/data/properties.ts` with the broker's active exclusive inventory (unit reference, price in AED, community, sqft, photos).
- **Districts**: Modify `src/data/communities.ts` if specializing in alternate communities.
- **Off-Plan**: Modify `src/data/offplan.ts` with current developer projects.
- **Testimonials**: Modify `src/data/testimonials.ts` with authentic client feedback.

### Step 5: Build and Deploy
```bash
npm run build
```
Next.js outputs a pristine, fully pre-rendered static website into `/out`. Deploy to:
- **Vercel**: Import repository on vercel.com with default settings (zero config).
- **Cloudflare Pages**: Point to the `/out` directory.
- **GitHub Pages / AWS S3**: Upload the `/out` directory.

---

## 2. Conversion Architecture & WhatsApp Handshake

This template is **WhatsApp-first**:
1. **Context-Aware Pre-filled Messages**: Every button automatically composes a targeted message:
   - Detail pages: pre-fills property title, reference code, listed price, and asks for viewing times.
   - Calculator: pre-fills down payment percentage, loan tenure, monthly payment, and total DLD fees.
   - Off-plan radar: pre-fills project name, developer, and asks for the official price list.
2. **Dual-Dispatch Lead Form**: When a user submits the 3-field form:
   - Instantly opens a prefilled WhatsApp dialogue with the broker.
   - Silently POSTs the payload to Formspree / Web3Forms if configured in `brand.ts`.
   - Provides an immediate fallback email link.
3. **Mobile Concierge Bar**: Thumb-reachable action bar locked to the bottom on mobile devices (`< 768px`) with direct Call and WhatsApp triggers.

---

## 3. Compliance and Verification Rules

1. **Em Dashes Banned**: In accordance with editorial guidelines, em dashes (`—`) are strictly prohibited in copy and code comments.
2. **Regulatory Protection**: Placeholders for `ORN` and `BRN` are visibly displayed across header strips, footers, and legal pages, fully compliant with Dubai Law No. 7 of 2006 and RERA Law No. 8 of 2007.
3. **Static Pre-Rendering**: Every page uses `generateStaticParams()` ensuring `output: "export"` works without an active Node server.
