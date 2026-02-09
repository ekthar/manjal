import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'public', 'gallery-src');
const outputDir = path.join(process.cwd(), 'public', 'gallery');

const sizes = [400, 800, 1200];
const lqipWidth = 48;

const validExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

const ensureDir = async (dir) => {
    await fs.mkdir(dir, { recursive: true });
};

const buildOutputs = async (inputPath, baseName) => {
    for (const size of sizes) {
        const pipeline = sharp(inputPath).resize({
            width: size,
            withoutEnlargement: true,
        });

        await pipeline
            .clone()
            .jpeg({ quality: 80, mozjpeg: true })
            .toFile(path.join(outputDir, `${baseName}-${size}.jpg`));

        await pipeline
            .clone()
            .webp({ quality: 78 })
            .toFile(path.join(outputDir, `${baseName}-${size}.webp`));

        await pipeline
            .clone()
            .avif({ quality: 50 })
            .toFile(path.join(outputDir, `${baseName}-${size}.avif`));
    }

    await sharp(inputPath)
        .resize({ width: lqipWidth, withoutEnlargement: true })
        .blur(12)
        .jpeg({ quality: 50 })
        .toFile(path.join(outputDir, `${baseName}-lqip.jpg`));
};

const run = async () => {
    await ensureDir(outputDir);

    const entries = await fs.readdir(inputDir, { withFileTypes: true });
    const files = entries
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .filter((name) => validExts.has(path.extname(name).toLowerCase()));

    if (files.length === 0) {
        console.log('No source images found in public/gallery-src');
        return;
    }

    for (const fileName of files) {
        const inputPath = path.join(inputDir, fileName);
        const baseName = path.parse(fileName).name;
        console.log(`Processing ${fileName}...`);
        await buildOutputs(inputPath, baseName);
    }

    console.log('Gallery images prepared in public/gallery');
};

run().catch((err) => {
    console.error('Image preparation failed:', err);
    process.exit(1);
});
