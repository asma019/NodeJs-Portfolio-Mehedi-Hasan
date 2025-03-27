const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// This is a utility script that you can run with Node.js to generate icons
// You'll need to install sharp: npm install sharp
// Then run: node scripts/generate-icons.js

const SOURCE_IMAGE = path.join(__dirname, '../public/images/socialshare.png');
const ICONS_OUTPUT_DIR = path.join(__dirname, '../public/icons');
const FAVICON_OUTPUT_DIR = path.join(__dirname, '../public');

// Create output directories if they don't exist
if (!fs.existsSync(ICONS_OUTPUT_DIR)) {
  fs.mkdirSync(ICONS_OUTPUT_DIR, { recursive: true });
}

// Sizes for PWA icons
const PWA_ICON_SIZES = [72, 96, 128, 144, 152, 192, 384, 512];

// Sizes for favicons
const FAVICON_SIZES = [16, 32, 48];

async function generateIcons() {
  try {
    // Read the source image
    const sourceBuffer = fs.readFileSync(SOURCE_IMAGE);
    
    // Generate PWA icons
    for (const size of PWA_ICON_SIZES) {
      await sharp(sourceBuffer)
        .resize(size, size)
        .toFile(path.join(ICONS_OUTPUT_DIR, `icon-${size}x${size}.png`));
      console.log(`✅ Generated ${size}x${size} PWA icon`);
    }
    
    // Generate favicons
    for (const size of FAVICON_SIZES) {
      await sharp(sourceBuffer)
        .resize(size, size)
        .toFile(path.join(FAVICON_OUTPUT_DIR, `favicon-${size}x${size}.png`));
      console.log(`✅ Generated ${size}x${size} favicon`);
    }
    
    // Generate favicon.ico (multi-size icon)
    console.log('✅ Icons generated successfully!');
    console.log('Note: For favicon.ico, use a service like https://www.favicon-generator.org/ to convert the favicon PNGs to a multi-size ICO file');
  } catch (error) {
    console.error('Error generating icons:', error);
  }
}

console.log('Starting icon generation...');
generateIcons(); 