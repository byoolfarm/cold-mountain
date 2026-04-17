import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const SRC_DIR = "/Users/kommawartarunsai/.gemini/antigravity/brain/d54c15da-dc04-473b-a631-503e9fde6a87";
const DEST_DIR = "/Users/kommawartarunsai/Downloads/cmsfinal/public/images";

async function main() {
  const files = await readdir(SRC_DIR);
  const mediaFiles = files.filter(f => f.startsWith('media_') && f.endsWith('.jpg')).sort();

  for (let i = 0; i < mediaFiles.length; i++) {
    const file = mediaFiles[i];
    const filePath = join(SRC_DIR, file);
    const destPath = join(DEST_DIR, `day_at_farm_${i + 1}.webp`);

    await sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(destPath);
    console.log(`Saved day_at_farm_${i + 1}.webp`);
  }
}
main();
