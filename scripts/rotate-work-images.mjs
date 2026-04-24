import sharp from "sharp";
import { readdirSync, renameSync, existsSync } from "fs";
import { join } from "path";

const IMAGES_DIR = "/Users/kommawartarunsai/Downloads/cmsfinal/public/images";
const TARGETS = [
    "lakhan_work3.webp", "lakhan_work9.webp", "swapna_1.webp"
];
const ANGLE = 90; // Rotate 90 degrees clockwise

async function rotateImage(filename) {
    const filePath = join(IMAGES_DIR, filename);
    const tempPath = join(IMAGES_DIR, `temp-${filename}`);
    
    if (!existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        return;
    }

    try {
        console.log(`Rotating ${filename} by ${ANGLE} degrees...`);
        await sharp(filePath)
            .rotate(ANGLE)
            .toFile(tempPath);
        
        // Replace original with rotated version
        renameSync(tempPath, filePath);
        console.log(`✅ ${filename} rotated successfully.`);
    } catch (err) {
        console.error(`❌ Error rotating ${filename}:`, err);
    }
}

async function main() {
    for (const filename of TARGETS) {
        await rotateImage(filename);
    }
}

main();
