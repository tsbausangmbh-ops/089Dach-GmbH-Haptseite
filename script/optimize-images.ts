import sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

const inputDir = 'attached_assets/generated_images';
const outputDir = 'attached_assets/optimized';

async function optimizeImages() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));
  console.log(`Found ${files.length} PNG images to optimize`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace('.png', '.webp'));
    
    try {
      const originalStats = fs.statSync(inputPath);
      totalOriginal += originalStats.size;

      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize({ width: 1200, height: 800, fit: 'inside', withoutEnlargement: true })
        .toFile(outputPath);

      const optimizedStats = fs.statSync(outputPath);
      totalOptimized += optimizedStats.size;

      const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);
      console.log(`${file} -> ${reduction}% smaller`);
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }

  const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);
  console.log(`\nTotal: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB -> ${(totalOptimized / 1024 / 1024).toFixed(1)}MB (${totalReduction}% reduction)`);
}

optimizeImages().catch(console.error);
