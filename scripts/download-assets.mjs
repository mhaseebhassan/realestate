import fs from 'fs';
import path from 'path';
import https from 'https';

const ASSETS = [
  // Hero
  {
    url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600&auto=format&fit=crop',
    dest: 'public/images/hero/dubai-hero.jpg',
    sourceId: 'photo-1512453979798-5ea266f8880c',
    author: 'David Rodrigo',
    title: 'Dubai Prime Skyline Daylight Architectural View'
  },
  // Properties
  {
    url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-1.jpg',
    sourceId: 'photo-1600596542815-ffad4c1539a9',
    author: 'R ARCHITECTURE',
    title: 'One Palm Beachfront Penthouse with Private Pool'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-2.jpg',
    sourceId: 'photo-1600607687939-ce8a6c25118c',
    author: 'R ARCHITECTURE',
    title: 'Amali Island Private Sea Estate'
  },
  {
    url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-3.jpg',
    sourceId: 'photo-1545324418-cc1a3fa10c00',
    author: 'Benjamin Voros',
    title: 'Il Primo Opera District Sky Villa'
  },
  {
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-4.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1600566753190-17f0baa2a6c3',
    title: 'Bulgari Lighthouse Sea View Mansion'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-5.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1600585154526-990dced4db0d',
    title: 'Lanai Islands Lagoon Mega Mansion'
  },
  {
    url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-6.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1600573472591-ee6b68d14c68',
    title: 'Emirates Hills Sector E Fairway Residence'
  },
  {
    url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-7.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1600585152220-90363fe7e115',
    title: 'Dubai Hills Fairway Vistas Contemporary Estate'
  },
  {
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-8.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1512917774080-9991f1c4c750',
    title: 'Bluewaters Bay Sky Residence'
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-9.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1600607687920-4e2a09cf159d',
    title: 'Creek Waters Ultra-Luxury Waterfront Apartment'
  },
  {
    url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-10.jpg',
    author: 'Spacejoy',
    sourceId: 'photo-1502672260266-1c1ef2d93688',
    title: 'The Crest Penthouse Dubai Marina'
  },
  {
    url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-11.jpg',
    author: 'Nick Fewings',
    title: 'The Lana Dorchester Collection Business Bay',
    sourceId: 'photo-1574362848149-11496d93a7c7'
  },
  {
    url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/properties/prop-12.jpg',
    author: 'R ARCHITECTURE',
    sourceId: 'photo-1613490493576-7fde63acd811',
    title: 'Palm Jumeirah Frond N Signature Villa'
  },
  // Communities
  {
    url: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/palm-jumeirah.jpg',
    author: 'Christoph Schulz',
    sourceId: 'photo-1580674285054-bed31e145f59',
    title: 'Palm Jumeirah Island Aerial Panorama'
  },
  {
    url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/downtown-dubai.jpg',
    author: 'Zhengqian Gao',
    sourceId: 'photo-1518684079-3c830dcef090',
    title: 'Downtown Dubai Opera District and Boulevard'
  },
  {
    url: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/emirates-hills.jpg',
    author: 'Florian Wehde',
    sourceId: 'photo-1582268611958-ebfd161ef9cf',
    title: 'Emirates Hills Gated Golf Course Enclave'
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/jumeirah-bay.jpg',
    author: 'Sean Oulashin',
    sourceId: 'photo-1507525428034-b723cf961d3e',
    title: 'Jumeirah Bay Island Deep Blue Coastline'
  },
  {
    url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/dubai-hills-estate.jpg',
    author: 'Webaliser',
    sourceId: 'photo-1590490360182-c33d57733427',
    title: 'Dubai Hills Estate Parkland and Championship Golf'
  },
  {
    url: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/dubai-marina.jpg',
    author: 'Cenon Manalo',
    sourceId: 'photo-1534430480872-3498386e7856',
    title: 'Dubai Marina Waterfront Promenade and Towers'
  },
  {
    url: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/business-bay.jpg',
    author: 'Nextvoyage',
    sourceId: 'photo-1526495124232-a04e1849168c',
    title: 'Business Bay Marasi Canal and Architectural Skyline'
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format&fit=crop',
    dest: 'public/images/communities/dubai-creek-harbour.jpg',
    author: 'Piet Zul',
    sourceId: 'photo-1486406146926-c627a92ad1ab',
    title: 'Dubai Creek Harbour Skyline Horizon'
  },
  // About / Broker
  {
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=75&w=800&auto=format&fit=crop',
    dest: 'public/images/about/broker-portrait.jpg',
    author: 'Joseph Gonzalez',
    sourceId: 'photo-1507003211169-0a1dd7228f2d',
    title: 'Private Broker Daylight Editorial Portrait'
  }
];

async function download(item) {
  const destPath = path.resolve(item.dest);
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    https.get(item.url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, (redirectRes) => {
          const fileStream = fs.createWriteStream(destPath);
          redirectRes.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            const stats = fs.statSync(destPath);
            console.log(`Downloaded ${item.dest}: ${(stats.size / 1024).toFixed(1)} KB`);
            resolve();
          });
        }).on('error', reject);
        return;
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const stats = fs.statSync(destPath);
        console.log(`Downloaded ${item.dest}: ${(stats.size / 1024).toFixed(1)} KB`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading curated architectural image assets...');
  for (const item of ASSETS) {
    try {
      await download(item);
    } catch (err) {
      console.error(`Failed ${item.dest}:`, err.message);
    }
  }
  console.log('Finished downloading all assets.');
}

run();
