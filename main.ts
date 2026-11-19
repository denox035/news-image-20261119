// news-image-20261119 — make.fun entry.
// Copies the bundled front-page image (entry.png) to the output directory.
// Node.js standard library only; no network access, no dependencies.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const SOURCE = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const TARGET = join(OUTPUT_DIR, "entry.png");

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);
console.log(`Wrote entry.png to ${TARGET}`);
