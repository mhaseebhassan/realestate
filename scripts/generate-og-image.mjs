import sharp from 'sharp';
import fs from 'fs';

async function generateOg() {
  const width = 1200;
  const height = 630;

  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <!-- Dark contrast container overlay -->
      <rect x="0" y="0" width="${width}" height="${height}" fill="#0E0E0E" fill-opacity="0.65" />
      
      <!-- Outer Hairline Border -->
      <rect x="40" y="40" width="${width - 80}" height="${height - 80}" fill="none" stroke="#F4F1EA" stroke-width="2" />
      <rect x="48" y="48" width="${width - 96}" height="${height - 96}" fill="none" stroke="#8C6A2F" stroke-width="1" />

      <!-- Top Label Strip -->
      <text x="80" y="110" font-family="monospace" font-size="16" font-weight="bold" fill="#8C6A2F" letter-spacing="4">
        TARIQ AL-MANSOOR · PRIVATE CLIENT ADVISORY · DIFC
      </text>
      <text x="${width - 80}" y="110" text-anchor="end" font-family="monospace" font-size="14" fill="#F4F1EA" letter-spacing="2">
        ORN 00000 · BRN 00000
      </text>

      <!-- Main Colossal Title -->
      <text x="80" y="240" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
        DUBAI'S BEST ADDRESSES.
      </text>
      <text x="80" y="325" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
        NEGOTIATED <tspan fill="#8C6A2F" font-style="italic">PROPERLY.</tspan>
      </text>

      <!-- Proof Line -->
      <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="500" fill="#DDD7CB">
        Over AED 3.8B in verified private transactions across Palm Jumeirah &amp; Emirates Hills.
      </text>

      <!-- Bottom Pillar Metrics Strip -->
      <line x1="80" y1="460" x2="${width - 80}" y2="460" stroke="#F4F1EA" stroke-opacity="0.3" stroke-width="1" />

      <text x="80" y="515" font-family="monospace" font-size="14" fill="#A39E93" letter-spacing="2">
        TRANSACTED CAPITAL: <tspan fill="#FFFFFF" font-weight="bold">AED 3.8B+</tspan>
      </text>
      <text x="450" y="515" font-family="monospace" font-size="14" fill="#A39E93" letter-spacing="2">
        RESPONSE TIME: <tspan fill="#8C6A2F" font-weight="bold">UNDER 15 MINS</tspan>
      </text>
      <text x="${width - 80}" y="515" text-anchor="end" font-family="monospace" font-size="14" fill="#F4F1EA" letter-spacing="2">
        WHATSAPP CONCIERGE DIRECT
      </text>
    </svg>
  `);

  await sharp('public/images/hero/dubai-hero.webp')
    .resize(width, height, { fit: 'cover' })
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .webp({ quality: 80 })
    .toFile('public/images/og-share.webp');

  console.log('Generated og-share.webp successfully. Size:', (fs.statSync('public/images/og-share.webp').size / 1024).toFixed(1), 'KB');
}

generateOg();
