import sharp from "sharp";
import { join } from "path";
import { fileURLToPath } from "url";
import { existsSync, mkdirSync } from "fs";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const INPUT = join(__dirname, "..", "src", "assets", "Lakhan1.jpg");
const OUTPUT_DIR = join(__dirname, "..", "public", "images");
const OUTPUT = join(OUTPUT_DIR, "lakhan_portrait.webp");

if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function process() {
  console.log("🚀 Processing Lakhan's portrait...");
  try {
    if (!existsSync(INPUT)) {
      console.error(`❌ Input file not found: ${INPUT}`);
      return;
    }

    const { size } = await (import("fs").then(m => m.statSync(INPUT)));
    console.log(`Original size: ${(size / 1024).toFixed(1)} KB`);

    await sharp(INPUT)
      .resize({ width: 1400, withoutEnlargement: true }) // Downscale a bit to ensure < 200kb
      .webp({ quality: 80 })
      .toFile(OUTPUT);
    
    const { size: outSize } = await (import("fs").then(m => m.statSync(OUTPUT)));
    console.log(`✅ Processed: Lakhan1.jpg -> lakhan_portrait.webp`);
    console.log(`Final size: ${(outSize / 1024).toFixed(1)} KB`);
  } catch (error) {
    console.error(`❌ Error:`, error.message);
  }
}

process();
