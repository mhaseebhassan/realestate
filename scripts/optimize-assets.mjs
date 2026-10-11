import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = [
  'public/images/hero',
  'public/images/properties',
  'public/images/communities',
  'public/images/about'
];

async function optimize() {
  console.log('Optimizing images into WebP format...');
  for (const dir of directories) {
    const fullDir = path.resolve(dir);
    if (!fs.existsSync(fullDir)) continue;
    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const inputPath = path.join(fullDir, file);
        const outputPath = path.join(fullDir, file.replace(/\.(jpg|jpeg)$/, '.webp'));
        const isHero = dir.includes('hero');
        const isPortrait = dir.includes('about');

        let pipeline = sharp(inputPath);
        if (isHero) {
          pipeline = pipeline.resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 });
        } else if (isPortrait) {
          pipeline = pipeline.resize({ width: 800, withoutEnlargement: true }).webp({ quality: 80 });
        } else {
          pipeline = pipeline.resize({ width: 1100, withoutEnlargement: true }).webp({ quality: 75 });
        }

        await pipeline.toFile(outputPath);
        const stats = fs.statSync(outputPath);
        console.log(`Optimized ${outputPath}: ${(stats.size / 1024).toFixed(1)} KB`);
        // Remove the original jpg to keep directory clean
        fs.unlinkSync(inputPath);
      }
    }
  }
  console.log('Finished WebP optimization.');
}

optimize();
