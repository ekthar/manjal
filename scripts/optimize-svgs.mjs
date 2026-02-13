import fs from 'node:fs/promises';
import path from 'node:path';
import { optimize } from 'svgo';

const inputDir = path.join(process.cwd(), 'public', 'assets', 'treatments');
const validExt = '.svg';

const run = async () => {
    const entries = await fs.readdir(inputDir, { withFileTypes: true });
    const files = entries
        .filter((entry) => entry.isFile())
        .map((entry) => entry.name)
        .filter((name) => path.extname(name).toLowerCase() === validExt);

    if (files.length === 0) {
        console.log('No SVG files found in public/assets/treatments');
        return;
    }

    for (const fileName of files) {
        const filePath = path.join(inputDir, fileName);
        const raw = await fs.readFile(filePath, 'utf8');
        const result = optimize(raw, {
            multipass: true,
            plugins: ['preset-default'],
        });

        if (result.error) {
            console.warn(`Skipping ${fileName}: ${result.error}`);
            continue;
        }

        await fs.writeFile(filePath, result.data, 'utf8');
        console.log(`Optimized ${fileName}`);
    }

    console.log('SVG optimization complete.');
};

run().catch((err) => {
    console.error('SVG optimization failed:', err);
    process.exit(1);
});
