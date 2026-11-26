// The Dog Reviews the Mailman — a make.fun one-line entry.
// The program writes the dog's one-line review of the mailman to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Five stars. He arrives daily, knocks like he owns the place, then flees from a 4kg security professional. Would bark again.";

// One line, no newlines, comfortably inside a one-liner character limit.
const MAX_CHARS = 280;

if (LINE.length === 0 || LINE.trim().length === 0) {
  throw new Error("review line must not be empty");
}
if (LINE !== LINE.trim()) {
  throw new Error("review must not start or end with whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("review must be exactly one line");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `review is ${LINE.length} characters, over the ${MAX_CHARS} limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
