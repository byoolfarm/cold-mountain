// scripts/convert-to-webp.mjs
// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE image → WebP converter.
//
// Usage:
//   node scripts/convert-to-webp.mjs                        # batch: src/assets/images/*
//   node scripts/convert-to-webp.mjs /path/to/image.jpg     # single file → public/images/<name>.webp
//   node scripts/convert-to-webp.mjs /path/to/img.jpg residency_hero  # single file, custom output name
//
// Original source files are NEVER modified.
// ─────────────────────────────────────────────────────────────────────────────

import sharp from "sharp";
import { readdir, mkdir, copyFile } from "fs/promises";
import { statSync } from "fs";
import { join, extname, basename, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const DEFAULT_SRC_DIR = join(__dirname, "..", "src", "assets", "images");
const OUT_DIR = join(__dirname, "..", "public", "images");
const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG", ".HEIC", ".heic"]);
const KEEP_AS_PNG = new Set(["logo.png"]); // preserve transparency

async function convertOne(srcPath, outName) {
  await mkdir(OUT_DIR, { recursive: true });
  const file = basename(srcPath);

  if (KEEP_AS_PNG.has(file)) {
    const outPath = join(OUT_DIR, file);
    await sharp(srcPath).toFile(outPath);
    const s = statSync(srcPath), o = statSync(outPath);
    console.log(`  COPY  ${file} (${(s.size / 1024).toFixed(0)} KB)`);
    return;
  }

  const ext = extname(srcPath);
  const name = outName || basename(srcPath, ext);
  const finalName = `${name}.webp`;
  const outPath = join(OUT_DIR, finalName);

  const img = sharp(srcPath);
  const meta = await img.metadata();
  let pipeline = img;
  if (meta.width > 1920) pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });

  await pipeline.webp({ quality: 80 }).toFile(outPath);

  const s = statSync(srcPath), o = statSync(outPath);
  const pct = ((1 - o.size / s.size) * 100).toFixed(0);
  console.log(`  WEBP  ${file} → ${finalName}  (${(s.size/1024).toFixed(0)} KB → ${(o.size/1024).toFixed(0)} KB, -${pct}%)`);
}

async function batchConvert() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(DEFAULT_SRC_DIR)).filter((f) => IMAGE_EXTS.has(extname(f)));
  console.log(`Found ${files.length} images to convert in ${DEFAULT_SRC_DIR}\n`);

  let converted = 0, totalSrcKB = 0, totalOutKB = 0;
  for (const file of files) {
    const srcPath = join(DEFAULT_SRC_DIR, file);
    const ext = extname(file);
    const name = basename(file, ext);

    if (KEEP_AS_PNG.has(file)) {
      const outPath = join(OUT_DIR, file);
      await sharp(srcPath).toFile(outPath);
      const s = statSync(srcPath), o = statSync(outPath);
      console.log(`  COPY  ${file} (${(s.size / 1024).toFixed(0)} KB)`);
      totalSrcKB += s.size / 1024; totalOutKB += o.size / 1024;
      converted++;
      continue;
    }

    const outPath = join(OUT_DIR, `${name}.webp`);
    try {
      const img = sharp(srcPath);
      const meta = await img.metadata();
      let pipeline = img;
      if (meta.width > 1920) pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      await pipeline.webp({ quality: 80 }).toFile(outPath);
      const s = statSync(srcPath), o = statSync(outPath);
      const pct = ((1 - o.size / s.size) * 100).toFixed(0);
      console.log(`  WEBP  ${file} → ${name}.webp  (${(s.size/1024).toFixed(0)} KB → ${(o.size/1024).toFixed(0)} KB, -${pct}%)`);
      totalSrcKB += s.size / 1024; totalOutKB += o.size / 1024;
      converted++;
    } catch (err) {
      console.error(`  FAIL  ${file}: ${err.message}`);
    }
  }

  console.log(`\n✅ Done! Converted: ${converted}`);
  if (totalSrcKB > 0)
    console.log(`   Total: ${(totalSrcKB/1024).toFixed(1)} MB → ${(totalOutKB/1024).toFixed(1)} MB  (-${((1 - totalOutKB/totalSrcKB)*100).toFixed(0)}%)`);
}

// ── Entry point ───────────────────────────────────────────────────────────────
const [,, inputArg, outputNameArg] = process.argv;

if (inputArg) {
  const srcPath = resolve(inputArg);
  console.log(`Converting single file: ${srcPath}`);
  convertOne(srcPath, outputNameArg).then(() => console.log("✅ Done!")).catch(console.error);
} else {
  batchConvert().catch(console.error);
}
