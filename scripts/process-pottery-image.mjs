import sharp from "sharp";

const SRC = "/Users/kommawartarunsai/.gemini/antigravity/brain/654d242e-a30f-41ba-bc2f-c8df211deac9/media__1776848972721.jpg";
const DEST = "/Users/kommawartarunsai/Downloads/cmsfinal/public/images/day_at_farm_11.webp";

async function main() {
  const img = sharp(SRC);
  const meta = await img.metadata();
  console.log(`Source: ${meta.width}x${meta.height} (${meta.format})`);

  await img
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(DEST);

  const { statSync } = await import("fs");
  const srcKB = (statSync(SRC).size / 1024).toFixed(0);
  const outKB = (statSync(DEST).size / 1024).toFixed(0);
  console.log(`✅ Saved day_at_farm_11.webp  (${srcKB} KB → ${outKB} KB)`);
}

main();
