import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const requiredPages = [
  "index.html",
  "about.html",
  "privacy.html",
  "terms.html",
  "support.html",
  "404.html",
];

const mustContain = ["Humble Fern LLC", "hello@humblefern.com"];
const mustNotContain = [
  "grove.notes.app@gmail.com",
  "myamin0516@gmail.com",
];

let failed = false;

for (const page of requiredPages) {
  const path = join(root, page);
  let html;
  try {
    html = readFileSync(path, "utf8");
  } catch {
    console.error(`MISSING ${page}`);
    failed = true;
    continue;
  }

  for (const needle of mustContain) {
    if (!html.includes(needle)) {
      console.error(`FAIL ${page}: missing "${needle}"`);
      failed = true;
    }
  }

  for (const needle of mustNotContain) {
    if (html.includes(needle)) {
      console.error(`FAIL ${page}: still contains "${needle}"`);
      failed = true;
    }
  }

  if (!failed) {
    // keep going; collect all failures
  }
}

const htmlFiles = readdirSync(root).filter((name) => name.endsWith(".html"));
for (const page of htmlFiles) {
  if (requiredPages.includes(page)) continue;
  const html = readFileSync(join(root, page), "utf8");
  for (const needle of mustNotContain) {
    if (html.includes(needle)) {
      console.error(`FAIL ${page}: still contains "${needle}"`);
      failed = true;
    }
  }
}

if (failed) {
  console.error("check-pages failed");
  process.exit(1);
}

console.log(
  `check-pages ok: ${requiredPages.length} pages contain Humble Fern LLC and hello@humblefern.com`
);
