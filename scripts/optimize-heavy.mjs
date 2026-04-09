// scripts/optimize-heavy.mjs
// Second pass: re-compress images > 400KB with tighter settings (max 1200px, q70)

import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DIR = join(__dirname, "..", "public", "images");

async function main() {
  const files = await readdir(DIR);
  const webps = files.filter(f => extname(f) === ".webp");

  let recompressed = 0;
  let savedKB = 0;

  for (const file of webps) {
    const filePath = join(DIR, file);
    const st = await stat(filePath);
    if (st.size < 400 * 1024) continue; // skip small files

    const beforeKB = st.size / 1024;

    try {
      const buf = await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 70 })
        .toBuffer();

      const afterKB = buf.length / 1024;

      // Only write if we actually saved space
      if (afterKB < beforeKB * 0.9) {
        const { writeFile } = await import("fs/promises");
        await writeFile(filePath, buf);
        console.log(`  ✓ ${file}  ${beforeKB.toFixed(0)} KB → ${afterKB.toFixed(0)} KB  (-${((1 - afterKB / beforeKB) * 100).toFixed(0)}%)`);
        savedKB += beforeKB - afterKB;
        recompressed++;
      } else {
        console.log(`  · ${file}  ${beforeKB.toFixed(0)} KB — already optimal, skipped`);
      }
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\n✅ Re-optimized ${recompressed} files, saved ${(savedKB / 1024).toFixed(1)} MB total`);
}

main();
