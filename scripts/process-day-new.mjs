import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const SRC_DIR = "/Users/kommawartarunsai/.gemini/antigravity/brain/d54c15da-dc04-473b-a631-503e9fde6a87";
const DEST_DIR = "/Users/kommawartarunsai/Downloads/cmsfinal/public/images";

async function main() {
  const files = await readdir(SRC_DIR);
  const mediaFiles = files.filter(f => f.startsWith('media_') && f.endsWith('.jpg')).sort();

  // Process only the last 5 files (the newly added ones)
  const newFiles = mediaFiles.slice(-5);

  for (let i = 0; i < newFiles.length; i++) {
    const file = newFiles[i];
    const filePath = join(SRC_DIR, file);
    // Continue numbering from 6
    const num = i + 6;
    const destPath = join(DEST_DIR, `day_at_farm_${num}.webp`);

    await sharp(filePath)
      .resize({ width: 1800, withoutEnlargement: true }) // wider for carousel, just in case
      .webp({ quality: 80 })
      .toFile(destPath);
    console.log(`Saved day_at_farm_${num}.webp`);
  }
}
main();
