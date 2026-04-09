// scripts/convert-to-webp.mjs
// One-off script: reads src/assets/images/*, converts to WebP, outputs to public/images/
// Original files are LEFT UNTOUCHED.

import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, extname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const SRC_DIR = join(__dirname, "..", "src", "assets", "images");
const OUT_DIR = join(__dirname, "..", "public", "images");

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);
const KEEP_AS_PNG = new Set(["logo.png"]); // preserve transparency

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const files = await readdir(SRC_DIR);
  const images = files.filter((f) => IMAGE_EXTS.has(extname(f)));

  console.log(`Found ${images.length} images to convert.\n`);

  let converted = 0;
  let copied = 0;
  let totalSrcKB = 0;
  let totalOutKB = 0;

  for (const file of images) {
    const srcPath = join(SRC_DIR, file);
    const ext = extname(file);
    const name = basename(file, ext);

    if (KEEP_AS_PNG.has(file)) {
      // Copy PNG as-is (logo with transparency)
      const outPath = join(OUT_DIR, file);
      const img = sharp(srcPath);
      const meta = await img.metadata();
      await img.toFile(outPath);
      const srcStat = (await import("fs")).statSync(srcPath);
      const outStat = (await import("fs")).statSync(outPath);
      console.log(`  COPY  ${file} (${(srcStat.size / 1024).toFixed(0)} KB)`);
      totalSrcKB += srcStat.size / 1024;
      totalOutKB += outStat.size / 1024;
      copied++;
      continue;
    }

    // Convert to WebP
    const outName = `${name}.webp`;
    const outPath = join(OUT_DIR, outName);

    try {
      const img = sharp(srcPath);
      const meta = await img.metadata();

      // Resize if wider than 1920px, otherwise keep original dimensions
      let pipeline = img;
      if (meta.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      await pipeline.webp({ quality: 80 }).toFile(outPath);

      const srcStat = (await import("fs")).statSync(srcPath);
      const outStat = (await import("fs")).statSync(outPath);
      const reduction = ((1 - outStat.size / srcStat.size) * 100).toFixed(0);
      totalSrcKB += srcStat.size / 1024;
      totalOutKB += outStat.size / 1024;

      console.log(
        `  WEBP  ${file} → ${outName}  (${(srcStat.size / 1024).toFixed(0)} KB → ${(outStat.size / 1024).toFixed(0)} KB, -${reduction}%)`
      );
      converted++;
    } catch (err) {
      console.error(`  FAIL  ${file}: ${err.message}`);
    }
  }

  console.log(`\n✅ Done! Converted: ${converted}, Copied: ${copied}`);
  console.log(
    `   Total: ${(totalSrcKB / 1024).toFixed(1)} MB → ${(totalOutKB / 1024).toFixed(1)} MB  (-${((1 - totalOutKB / totalSrcKB) * 100).toFixed(0)}%)`
  );
}

main();
