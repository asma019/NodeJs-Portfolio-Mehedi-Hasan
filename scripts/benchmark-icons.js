const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SOURCE_IMAGE = path.join(__dirname, '../public/images/socialshare.png');
const ICONS_OUTPUT_DIR = path.join(__dirname, '../public/icons-test');
const FAVICON_OUTPUT_DIR = path.join(__dirname, '../public-test');

if (!fs.existsSync(ICONS_OUTPUT_DIR)) {
  fs.mkdirSync(ICONS_OUTPUT_DIR, { recursive: true });
}
if (!fs.existsSync(FAVICON_OUTPUT_DIR)) {
  fs.mkdirSync(FAVICON_OUTPUT_DIR, { recursive: true });
}

const PWA_ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];
const FAVICON_SIZES = [16, 32, 48];

async function generateIcons() {
  const start = performance.now();
  try {
    const sourceBuffer = fs.readFileSync(SOURCE_IMAGE);

    for (const size of PWA_ICON_SIZES) {
      await sharp(sourceBuffer)
        .resize(size, size)
        .toFile(path.join(ICONS_OUTPUT_DIR, `icon-${size}x${size}.png`));
    }

    for (const size of FAVICON_SIZES) {
      await sharp(sourceBuffer)
        .resize(size, size)
        .toFile(path.join(FAVICON_OUTPUT_DIR, `favicon-${size}x${size}.png`));
    }

    const end = performance.now();
    console.log(`${(end - start).toFixed(2)}ms`);
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

generateIcons();
