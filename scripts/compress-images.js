const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '../public/images/gal3');
const outputDir = path.join(__dirname, '../public/gallery/gal3');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png','JPG','PNG','JPEG'].includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const baseName = path.basename(file, ext);
  const outputPath = path.join(outputDir, `${baseName}.webp`);

  sharp(inputPath)
    .toFormat('webp')
    .webp({ quality: 75 }) // You can change quality as needed
    .toFile(outputPath)
    .then(() => console.log(`✅ Compressed: ${file}`))
    .catch(err => console.error(`❌ Error with ${file}:`, err));
});
