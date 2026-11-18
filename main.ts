// News Image — Tuesday 17 November 2026.
// Copies the finished front-page image into the grader's output directory.
// Standard library only; no network, no dependencies.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
copyFileSync(source, target);
// Verify the copy landed whole: a truncated write must fail loudly
// rather than submit a corrupt image.
if (statSync(source).size !== statSync(target).size) {
  throw new Error(`copy incomplete: ${source} -> ${target}`);
}
console.log(`wrote ${resolve(target)}`);
