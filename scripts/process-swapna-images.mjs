import sharp from "sharp";
import { join } from "path";
import { fileURLToPath } from "url";
import { existsSync, mkdirSync } from "fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ASSETS_DIR = join(__dirname, "..", "src", "assets", "swapna-work");
const OUTPUT_DIR = join(__dirname, "..", "public", "images");

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Portrait
const portrait = { input: "Swapna.jpg", output: "swapna_portrait.webp" };

// Portfolio (8 images)
const works = [
  "20221211_132708.jpg",
  "20221224_161951.jpg",
  "IMG_20220813_171028.jpg",
  "IMG_3856 - Edited.png",
  "IMG_7609.jpg",
  "Planter.jpeg",
  "WhatsApp Image 2026-03-22 at 18.06.12.jpeg",
  "WhatsApp Image 2026-03-22 at 18.23.29.jpeg"
].map((filename, index) => ({
  input: filename,
  output: `swapna_${index + 1}.webp`
}));

const images = [portrait, ...works];

async function processImages() {
  console.log("🚀 Processing Swapna's images...");
  
  for (const img of images) {
    const inputPath = join(ASSETS_DIR, img.input);
    const outputPath = join(OUTPUT_DIR, img.output);
    
    try {
      if (!existsSync(inputPath)) {
        console.error(`❌ Input file not found: ${inputPath}`);
        continue;
      }

      let transformer = sharp(inputPath)
        .resize({ width: 1200, height: 1200, fit: "inside", withoutEnlargement: true });

      if (img.output === "swapna_portrait.webp") {
        transformer = transformer.rotate(90);
      }

      await transformer.webp({ quality: 80 }).toFile(outputPath);
      
      console.log(`✅ Processed: ${img.input} -> ${img.output}`);
    } catch (error) {
      console.error(`❌ Error processing ${img.input}:`, error.message);
    }
  }
}

processImages();
